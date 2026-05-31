import type { Example } from "@/types";

export const examples: Example[] = [
  // ── Normal Text ──
  {
    id: 1,
    name: "Simple Sentence",
    text: "The quick brown fox jumps over the lazy dog.",
    category: "Normal",
    description: "Classic pangram - uses every letter",
  },
  {
    id: 2,
    name: "Short Greeting",
    text: "Hello, how are you today?",
    category: "Normal",
    description: "Basic conversational text",
  },
  {
    id: 3,
    name: "Paragraph",
    text: "Artificial intelligence is transforming how we interact with technology. From virtual assistants to self-driving cars, AI is becoming an integral part of our daily lives.",
    category: "Normal",
    description: "A typical paragraph about AI",
  },
  {
    id: 4,
    name: "Numbers and Dates",
    text: "On January 15, 2025, the price was $1,234.56. There were 42 items sold at 99.9% efficiency.",
    category: "Normal",
    description: "Text with numbers, dates, and currencies",
  },
  {
    id: 5,
    name: "Quoted Text",
    text: 'She said, "I\'ll be there at 3 o\'clock." He replied, \'Don\'t forget your keys!\'',
    category: "Normal",
    description: "Text with various quote styles",
  },

  // ── Code ──
  {
    id: 6,
    name: "JavaScript Function",
    text: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`,
    category: "Code",
    description: "Simple recursive JS function",
  },
  {
    id: 7,
    name: "Python Class",
    text: `class Animal:
    def __init__(self, name: str, sound: str):
        self.name = name
        self.sound = sound

    def speak(self) -> str:
        return f"{self.name} says {self.sound}"`,
    category: "Code",
    description: "Python class with type hints",
  },
  {
    id: 8,
    name: "React Component",
    text: `export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Clicked {count} times
    </button>
  );
}`,
    category: "Code",
    description: "A basic React counter component",
  },
  {
    id: 9,
    name: "SQL Query",
    text: `SELECT u.name, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.created_at >= '2025-01-01'
GROUP BY u.name
HAVING COUNT(o.id) > 5
ORDER BY order_count DESC;`,
    category: "Code",
    description: "SQL query with joins and aggregation",
  },
  {
    id: 10,
    name: "CSS Styles",
    text: `.card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}`,
    category: "Code",
    description: "CSS with gradients and shadows",
  },
  {
    id: 11,
    name: "TypeScript Interface",
    text: `interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  settings: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}`,
    category: "Code",
    description: "TypeScript interface with nested types",
  },
  {
    id: 12,
    name: "Rust Code",
    text: `fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    let sum: i32 = numbers.iter().filter(|&&x| x % 2 == 0).sum();
    println!("Sum of even numbers: {}", sum);
}`,
    category: "Code",
    description: "Rust with iterators and closures",
  },

  // ── Emoji ──
  {
    id: 13,
    name: "Emoji Sentence",
    text: "I love coding! 🎉🚀💻 It's so much fun! 😊",
    category: "Emoji",
    description: "Text mixed with common emojis",
  },
  {
    id: 14,
    name: "Emoji Only",
    text: "😀😃😄😁😆😅🤣😂🙂🙃😉😊😇",
    category: "Emoji",
    description: "Pure emoji string",
  },
  {
    id: 15,
    name: "Flags and Symbols",
    text: "🇺🇸🇬🇧🇫🇷🇩🇪🇯🇵🇰🇷🇨🇳🇮🇳🇧🇷🇨🇦 Flags and symbols: ✅❌⭐🔥💡🎯",
    category: "Emoji",
    description: "Flag emojis and common symbols",
  },
  {
    id: 16,
    name: "Complex Emojis",
    text: "👨‍👩‍👧‍👦 👨‍💻 🏳️‍🌈 🇺🇸 🧑‍🎨 Skin tones: 👋👋🏻👋🏼👋🏽👋🏾👋🏿",
    category: "Emoji",
    description: "Multi-codepoint emojis with ZWJ sequences",
  },
  {
    id: 17,
    name: "Emoji Story",
    text: "🌅 Wake up ☕ Coffee 💼 Work 🍕 Lunch 😴 Nap 🎮 Games 🌙 Sleep",
    category: "Emoji",
    description: "A day told in emojis",
  },

  // ── Multilingual ──
  {
    id: 18,
    name: "Chinese Text",
    text: "人工智能正在改变世界。机器学习和深度学习是其中最重要的技术。",
    category: "Multilingual",
    description: "Simplified Chinese characters",
  },
  {
    id: 19,
    name: "Japanese Text",
    text: "こんにちは世界！日本語のテストです。東京は美しい街です。",
    category: "Multilingual",
    description: "Japanese with hiragana, katakana, and kanji",
  },
  {
    id: 20,
    name: "Hindi Text",
    text: "नमस्ते दुनिया! यह एक हिंदी पाठ है। कृत्रिम बुद्धिमत्ता भविष्य है।",
    category: "Multilingual",
    description: "Hindi (Devanagari script)",
  },
  {
    id: 21,
    name: "Arabic Text",
    text: "مرحبا بالعالم! هذا نص باللغة العربية. الذكاء الاصطناعي هو المستقبل.",
    category: "Multilingual",
    description: "Arabic text (RTL)",
  },
  {
    id: 22,
    name: "Korean Text",
    text: "안녕하세요 세계! 한국어 테스트입니다. 서울은 아름다운 도시입니다.",
    category: "Multilingual",
    description: "Korean Hangul characters",
  },
  {
    id: 23,
    name: "Mixed Scripts",
    text: "Hello 你好 Bonjour Hola مرحبا こんにちは 안녕하세요",
    category: "Multilingual",
    description: "Multiple languages in one line",
  },

  // ── Long Prompts ──
  {
    id: 24,
    name: "System Prompt",
    text: `You are a helpful AI assistant. You should:
1. Answer questions accurately and concisely
2. Provide code examples when relevant
3. Use markdown formatting for clarity
4. Admit when you don't know something
5. Ask for clarification if the question is ambiguous

Your knowledge cutoff is April 2024. You cannot browse the internet or access real-time information.`,
    category: "Long",
    description: "A typical system prompt",
  },
  {
    id: 25,
    name: "Essay Paragraph",
    text: `The history of artificial intelligence dates back to the 1950s, when Alan Turing proposed the Turing Test as a way to determine if a machine could exhibit intelligent behavior indistinguishable from a human. Since then, the field has gone through several winters and summers of funding and interest. The recent explosion in large language models has brought AI into the mainstream consciousness, with models like GPT-4 demonstrating remarkable capabilities in reasoning, coding, and creative writing. However, challenges remain in areas such as hallucination, bias, and alignment with human values.`,
    category: "Long",
    description: "A multi-sentence essay paragraph",
  },
  {
    id: 26,
    name: "API Documentation",
    text: `POST /api/v1/chat/completions
Content-Type: application/json
Authorization: Bearer sk-xxxx

{
  "model": "gpt-4o",
  "messages": [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Hello!"}
  ],
  "temperature": 0.7,
  "max_tokens": 1000
}`,
    category: "Long",
    description: "API request example with headers",
  },

  // ── Edge Cases ──
  {
    id: 27,
    name: "Empty String",
    text: "",
    category: "Edge Case",
    description: "Empty input - should return 0 tokens",
  },
  {
    id: 28,
    name: "Only Whitespace",
    text: "   \t\n   \t\t\n   ",
    category: "Edge Case",
    description: "Tabs, spaces, and newlines only",
  },
  {
    id: 29,
    name: "Single Character",
    text: "A",
    category: "Edge Case",
    description: "Just one character",
  },
  {
    id: 30,
    name: "Repeated Text",
    text: "hello hello hello hello hello hello hello hello hello hello",
    category: "Edge Case",
    description: "Same word repeated many times",
  },
  {
    id: 31,
    name: "Special Characters",
    text: "!@#$%^&*()_+-=[]{}|;':\",./<>?",
    category: "Edge Case",
    description: "All special keyboard characters",
  },
  {
    id: 32,
    name: "Newlines and Tabs",
    text: "Line1\nLine2\n\nLine4\t\tTabbed\r\nWindows line ending",
    category: "Edge Case",
    description: "Various line ending types",
  },
  {
    id: 33,
    name: "Very Long Text",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ".repeat(5),
    category: "Edge Case",
    description: "Long repeated Lorem Ipsum",
  },
  {
    id: 34,
    name: "URLs and Emails",
    text: "Visit https://www.example.com/path?q=test&lang=en or email user@domain.co.uk for more info.",
    category: "Edge Case",
    description: "URLs and email addresses",
  },
  {
    id: 35,
    name: "Markdown Formatting",
    text: `# Heading 1
## Heading 2

**Bold text** and *italic text*

- List item 1
- List item 2

> Blockquote

\`\`\`python
print("Hello, World!")
\`\`\``,
    category: "Edge Case",
    description: "Markdown with various formatting",
  },
  {
    id: 36,
    name: "JSON Data",
    text: `{"users":[{"id":1,"name":"Alice","email":"alice@example.com","roles":["admin","user"]},{"id":2,"name":"Bob","email":"bob@example.com","roles":["user"]}]}`,
    category: "Edge Case",
    description: "Compact JSON data structure",
  },
];

export const categories = [
  "Normal",
  "Code",
  "Emoji",
  "Long",
  "Multilingual",
  "Edge Case",
] as const;

export type CategoryFilter = (typeof categories)[number];
