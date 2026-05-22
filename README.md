<div align="center">

# 🌙 Moon AI Chatbot

### Full Stack Conversational AI Web App


[![★ Best Project](https://img.shields.io/badge/★-Best%20Project-FFD700?style=for-the-badge&labelColor=1a1a2e)](https://moonaichatbot.vercel.app)
[![Live Demo](https://img.shields.io/badge/🌐-Live%20Demo-6B4EFF?style=for-the-badge&labelColor=1a1a2e)](https://moonaichatbot.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

**A space-themed full-stack AI chatbot with glassmorphism UI, real-time AI responses, and persistent chat history.**

[🚀 Live Demo](https://moonaichatbot.vercel.app) · [🐛 Report Bug](https://github.com/GulsumBegam/moon-ai-chatbot/issues) · [💡 Request Feature](https://github.com/GulsumBegam/moon-ai-chatbot/issues)

</div>

---

## 📸 Preview

> Space-themed glassmorphism UI with animated nebulae, star field, floating moon orb, and real-time AI responses.

---

## ✨ Features

- 🤖 **Real-time AI responses** powered by Groq AI (Llama 3.3 70B) — completely free!
- 💾 **Persistent chat history** — all conversations saved to PostgreSQL database
- 🌌 **Space glassmorphism UI** — animated nebulae, star field, shooting stars & moon orb
- 💬 **Multiple conversations** — create, switch, rename, and delete conversations
- 📝 **Markdown rendering** — AI responses with code blocks, lists, and formatting
- ⚡ **Framer Motion animations** — smooth transitions, typing indicators, hover effects
- 📋 **Copy messages** — one-click copy to clipboard
- 🎯 **Suggestion prompts** — quick-start prompts for new users
- 📱 **Responsive design** — works on desktop and mobile
- 🌠 **Canvas animations** — shooting stars and twinkling star field

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **AI Provider** | Groq AI — Llama 3.3 70B Versatile |
| **Database ORM** | Prisma ORM |
| **Database** | Neon Serverless PostgreSQL |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Components** | shadcn/ui + Radix UI |
| **Icons** | Lucide React |
| **Markdown** | React Markdown |
| **Deployment** | Vercel |
| **Version Control** | GitHub |

---

## 📁 Project Structure

```
moon-ai-chatbot/
├── app/
│   ├── api/
│   │   ├── chat/route.ts           # POST — AI chat endpoint
│   │   └── history/
│   │       ├── route.ts            # GET — all conversations
│   │       └── [id]/route.ts       # GET/DELETE/PATCH — single conversation
│   ├── layout.tsx                  # Root layout + fonts + metadata
│   └── page.tsx                    # Main page
├── components/
│   ├── CosmicBackground.tsx        # Canvas stars, nebulae, moon orb
│   ├── LandingHero.tsx             # Welcome screen with CTA
│   ├── Sidebar.tsx                 # Conversation history panel
│   └── ChatInterface.tsx           # Chat UI + input
├── lib/
│   ├── prisma.ts                   # Prisma client singleton
│   └── utils.ts                    # Helper functions
├── prisma/
│   └── schema.prisma               # Database schema
├── types/
│   └── index.ts                    # TypeScript interfaces
├── styles/
│   └── globals.css                 # Global styles + glassmorphism
└── tailwind.config.ts              # Custom cosmic design tokens
```

---

## 🌐 API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/chat` | Send message → get AI response → save to DB |
| `GET` | `/api/history` | Fetch all conversations |
| `GET` | `/api/history/:id` | Get conversation + messages |
| `DELETE` | `/api/history/:id` | Delete conversation |
| `PATCH` | `/api/history/:id` | Update conversation title |

---

## 🗄️ Database Schema

```prisma
model Conversation {
  id        String    @id @default(cuid())
  title     String    @default("New Conversation")
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  messages  Message[]
}

model Message {
  id             String       @id @default(cuid())
  conversationId String
  role           String       // "user" | "assistant"
  content        String
  createdAt      DateTime     @default(now())
  conversation   Conversation @relation(...)
}
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Groq API key (free at [console.groq.com](https://console.groq.com))
- Neon PostgreSQL database (free at [neon.tech](https://neon.tech))

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/GulsumBegam/moon-ai-chatbot.git
cd moon-ai-chatbot

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Add your GROQ_API_KEY and DATABASE_URL

# 4. Set up database
npx prisma generate
npx prisma db push

# 5. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🚀

---

## ⚙️ Environment Variables

```env
# Neon PostgreSQL connection string
DATABASE_URL="postgresql://user:password@host/neondb?sslmode=require"

# Groq AI API key (free at console.groq.com)
GROQ_API_KEY="gsk_xxxxxxxxxxxxxxxx"
```

---

## 🎨 Design System

Custom cosmic design system built with Tailwind CSS:

- **Colors** — Deep void blacks `#02010a`, lunar purples `#6b4eff`, nebula pink/cyan/gold
- **Typography** — Cormorant Garamond (display) + DM Sans (body) + JetBrains Mono (code)
- **Effects** — Glassmorphism with `backdrop-filter: blur()`, animated canvas nebulae
- **Animations** — Float, twinkle, orbit, shimmer, pulse-glow via Framer Motion

---

## 📦 GitHub Languages

| Language | Files | Usage |
|----------|-------|-------|
| TypeScript | `.ts`, `.tsx` | ~65% — Main application code |
| CSS | `.css` | ~18% — Global styles |
| Prisma | `.prisma` | ~8% — Database schema |
| JavaScript | `.js` | ~6% — Config files |
| JSON | `.json` | ~3% — Package config |

---

## 🚀 Deployment

Deployed on **Vercel** with **Neon PostgreSQL**:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
# DATABASE_URL + GROQ_API_KEY
```

---

## 🏆 Project Highlights

- ✅ Built **end-to-end** — frontend, backend, AI, and database
- ✅ **Production deployed** at moonaichatbot.vercel.app
- ✅ **Free stack** — Groq AI + Neon + Vercel all on free tier
- ✅ **Real-time AI** with conversation context memory
- ✅ **Persistent storage** — chat history never lost
- ✅ **Type-safe** throughout with TypeScript

---

## 🤝 Connect

**Gulsum Begam** — Full Stack Developer

[![GitHub](https://img.shields.io/badge/GitHub-GulsumBegam-181717?style=flat&logo=github)](https://github.com/GulsumBegam)

---

<div align="center">

**🌙 Moon AI — Where Intelligence Meets the Stars**

*Built with Next.js 15 · TypeScript · Prisma · Groq AI · Vercel*

⭐ Star this repo if you found it helpful!

</div>
