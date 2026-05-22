import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, conversationId } = body as {
      message: string;
      conversationId?: string;
    };

    if (!message?.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    let conversation;
    if (conversationId) {
      conversation = await prisma.conversation.findUnique({
        where: { id: conversationId },
        include: { messages: { orderBy: { createdAt: "asc" }, take: 20 } },
      });
    }

    if (!conversation) {
      const title = message.length > 40 ? message.slice(0, 40) + "…" : message;
      conversation = await prisma.conversation.create({
        data: { title },
        include: { messages: true },
      });
    }

    await prisma.message.create({
      data: {
        conversationId: conversation.id,
        role: "user",
        content: message,
      },
    });

    const history = (conversation.messages || []).map((m) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    }));

    history.push({ role: "user", content: message });

    const completion = await groq.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [
        {
          role: "system",
          content:
            "You are Moon, a celestial AI assistant with vast cosmic knowledge. You are poetic, wise, and helpful. You speak with elegance and insight, drawing metaphors from the cosmos when appropriate, but remain genuinely useful and accurate.",
        },
        ...history,
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const aiContent =
      completion.choices[0]?.message?.content ||
      "The cosmos is silent for now...";

    const aiMessage = await prisma.message.create({
      data: {
        conversationId: conversation.id,
        role: "assistant",
        content: aiContent,
      },
    });

    if (!conversationId) {
      const title = message.length > 50 ? message.slice(0, 50) + "…" : message;
      await prisma.conversation.update({
        where: { id: conversation.id },
        data: { title },
      });
    }

    return NextResponse.json({
      conversationId: conversation.id,
      messageId: aiMessage.id,
      content: aiContent,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}