<div align="center">

<img src="landing_page.png" alt="Moon AI Banner" width="100%"/>

<br/>

# 🌙 Moon AI — Celestial Intelligence

**Where artificial intelligence meets cosmic wonder.**  
*Ask anything. Explore everything.*

<br/>

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-moonaichatbot.vercel.app-6d28d9?style=for-the-badge)](https://moonaichatbot.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Groq AI](https://img.shields.io/badge/Groq_AI-FF6B35?style=for-the-badge)](https://groq.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com/)

<br/>

> *"A production-deployed, full-stack AI chatbot with persistent memory, cosmic UI, and real-time streaming — built entirely in TypeScript by [Gulsum Begam](https://gulsumbegam.github.io/portfolioGuls/)."*

</div>

---

## 🎬 Demo

<div align="center">
<img src="demo.gif" alt="Moon AI Demo" width="100%"/>
</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 **Real-time AI** | Powered by Groq AI (Llama 3.3 70B) — blazing fast responses |
| 💾 **Persistent Memory** | Full conversation history saved via PostgreSQL (Neon) |
| 🌌 **Cosmic UI** | Animated glassmorphism interface with starfield background |
| 📋 **Markdown Rendering** | Beautifully formatted AI responses with syntax support |
| 📋 **Copy to Clipboard** | One-click copy for any AI response |
| 🗂️ **Multi-conversation** | Create, switch, and delete multiple chat sessions |
| 🔗 **REST API** | 5 fully designed endpoints for complete CRUD on conversations |
| 📱 **Responsive** | Works seamlessly across desktop and mobile |

---

## 📸 Screenshots

### 🏠 Landing Page
<img src="landing_page.png" alt="Landing Page" width="100%"/>

---

### 💬 Chat Interface — Begin Your Journey
<img src="chat_interface.png" alt="Chat Interface" width="100%"/>

---

### 🧠 AI in Action — Real-time Response
<img src="screenshot_ai_response.png" alt="AI Response" width="100%"/>

---

### 🗂️ Conversation History & Sidebar
<img src="screenshot_sidebar.png" alt="Sidebar with History" width="100%"/>

---

### 🌟 Side panel
<img src="screenshot_creator.png" alt="Creator" width="100%"/>

---

### 🔁 Multi-turn Conversation
<img src="screenshot_conversation.png" alt="Conversation" width="100%"/>

---

## 🛠️ Tech Stack

```
Frontend      →  Next.js 15, TypeScript, Tailwind CSS, Framer Motion
AI            →  Groq AI API (Llama 3.3 70B)
Database      →  PostgreSQL via Neon + Prisma ORM
Deployment    →  Vercel
UI            →  shadcn/ui, custom glassmorphism components
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/chat` | Send a message, receive AI response |
| `GET` | `/api/history` | Fetch all conversation sessions |
| `GET` | `/api/history/:id` | Get messages in a specific conversation |
| `DELETE` | `/api/history/:id` | Delete a conversation |
| `PATCH` | `/api/history/:id` | Update conversation metadata |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A [Groq API Key](https://console.groq.com/)
- A [Neon PostgreSQL](https://neon.tech/) database URL

### Installation

```bash
# Clone the repository
git clone https://github.com/GulsumBegam/moonaichatbot.git
cd moonaichatbot

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file:

```env
GROQ_API_KEY=your_groq_api_key_here
DATABASE_URL=your_neon_postgresql_url_here
```

### Run the App

```bash
# Push database schema
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see Moon AI in action 🌙

---

## 🗄️ Database Schema

```prisma
model Conversation {
  id        String    @id @default(cuid())
  title     String
  createdAt DateTime  @default(now())
  messages  Message[]
}

model Message {
  id             String       @id @default(cuid())
  role           String       // "user" | "assistant"
  content        String
  createdAt      DateTime     @default(now())
  conversationId String
  conversation   Conversation @relation(fields: [conversationId], references: [id])
}
```

---

## 📁 Project Structure

```
moonaichatbot/
├── app/
│   ├── api/
│   │   ├── chat/route.ts          # AI chat endpoint
│   │   └── history/
│   │       ├── route.ts           # GET all / POST new
│   │       └── [id]/route.ts      # GET / DELETE / PATCH by id
│   ├── page.tsx                   # Landing page
│   └── chat/page.tsx              # Chat interface
├── components/
│   ├── ChatInterface.tsx
│   ├── Sidebar.tsx
│   └── MessageBubble.tsx
├── lib/
│   └── prisma.ts                  # Prisma client
├── prisma/
│   └── schema.prisma
└── public/
```

---

## 🌟 Key Highlights

- **Production-deployed** — live at [moonaichatbot.vercel.app](https://moonaichatbot.vercel.app)
- **End-to-end TypeScript** — frontend, backend, and DB in one codebase
- **Real AI integration** — not a mock; actual Groq Llama 3.3 70B responses
- **Persistent conversations** — history survives page reloads via PostgreSQL
- **Glassmorphism UI** — custom starfield animation with Framer Motion

---

## 👩‍💻 Built By

<div align="center">

**Gulsum Begam**  
Full Stack Developer · UI/UX Developer · AI & ML Enthusiast  
Sattur, Virudhunagar, Tamil Nadu, India

[![Portfolio](https://img.shields.io/badge/Portfolio-gulsumportfolio.github.io-6d28d9?style=flat-square)](https://gulsumbegam.github.io/portfolioGuls/)
[![GitHub](https://img.shields.io/badge/GitHub-GulsumBegam-181717?style=flat-square&logo=github)](https://github.com/GulsumBegam)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-gulsumbegam-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/gulsumbegam)
[![Email](https://img.shields.io/badge/Email-gulsumbegamofficial@gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:gulsumbegamofficial@gmail.com)

*"I am Moon's creator — and Moon is my proudest creation."* 🌙

</div>

---

<div align="center">

⭐ **If this project inspired you, drop a star!** ⭐

*Moon AI v1.0 ★*

</div>
