# 🧩 Tokenizer Demo

> **Understand how AI reads text.** A beautiful, fast, and 100% client-side web application to visualize tokenization for OpenAI models (GPT-4o, o1, GPT-3.5 Turbo).

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](YOUR_LIVE_DEMO_LINK_HERE)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

## 🚀 Overview

Neural networks don't read words; they read numbers. **Tokenizer Demo** is an interactive educational tool designed for AI engineers, prompt engineers, and students to visualize exactly how text is broken down into tokens, mapped to IDs, and calculated for cost.

Built with **Next.js 14** and **TypeScript**, it runs entirely in your browser—no data is ever sent to a server.

## ✨ Key Features

- **⚡ Real-Time Tokenization**: Instantly see how your text splits into tokens as you type (powered by `gpt-tokenizer`).
- **🤖 Multi-Model Support**: Switch between `GPT-4o`, `o1`, `o3`, `cl100k_base`, and `GPT-3.5 Turbo` to compare behaviors.
- **🎨 Visual Token Display**: 
  - Color-coded token bubbles.
  - Hover to reveal **Token IDs**.
  - Click to copy all IDs to clipboard.
  - Special handling for whitespace and invisible tokens.
- **📚 30+ Pre-built Examples**: One-click loading for diverse scenarios:
  - **Code**: JavaScript, Python, React, SQL.
  - **Edge Cases**: Emojis, multilingual text, long prompts, special characters.
  - **Normal Text**: Sentences, paragraphs, and conversations.
- **📊 Live Statistics**: Real-time counters for **Characters**, **Tokens**, **Tokens/Char ratio**, and estimated **API Cost**.
- **🌙 Modern Dark UI**: Built with Tailwind CSS for a clean, responsive, and accessible experience.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Tokenization Engine**: [`gpt-tokenizer`](https://www.npmjs.com/package/gpt-tokenizer)
- **Deployment**: [Vercel](https://vercel.com/)
- **Architecture**: 100% Client-Side (No Backend, No Database)

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/tokenizer-demo.git
   cd tokenizer-demo   

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
