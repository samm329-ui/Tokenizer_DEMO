import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tokenizer Demo — Visualize How LLMs Tokenize Text",
  description:
    "A beautiful, real-time tokenizer demo for OpenAI models. See how GPT-4o, GPT-3.5, and other models break text into tokens. Try examples with code, emojis, multilingual text, and more.",
  keywords: [
    "tokenizer",
    "GPT",
    "OpenAI",
    "tokens",
    "AI",
    "LLM",
    "demo",
    "visualization",
  ],
  openGraph: {
    title: "Tokenizer Demo — Visualize How LLMs Tokenize Text",
    description:
      "Real-time tokenization visualization for OpenAI models. Explore 34+ examples.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
