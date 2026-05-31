require("@testing-library/jest-dom");

// Polyfill TextDecoder/TextEncoder for gpt-tokenizer (uses WASM)
const { TextDecoder, TextEncoder } = require("util");
if (typeof globalThis.TextDecoder === "undefined") {
  globalThis.TextDecoder = TextDecoder;
}
if (typeof globalThis.TextEncoder === "undefined") {
  globalThis.TextEncoder = TextEncoder;
}
