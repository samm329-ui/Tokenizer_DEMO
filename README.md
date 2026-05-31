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