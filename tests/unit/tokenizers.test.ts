import { encodeText, decodeTokens, getTokenDetails, getTokenCount } from "@/lib/tokenizers";

describe("Tokenizer Utilities", () => {
  describe("encodeText()", () => {
    it("returns correct token array for simple text", () => {
      const tokens = encodeText("Hello, world!");
      expect(tokens.length).toBeGreaterThan(0);
      expect(Array.isArray(tokens)).toBe(true);
    });

    it("returns correct token count for text with emojis", () => {
      const tokens = encodeText("Hello 🌍!");
      expect(tokens.length).toBeGreaterThan(0);
    });

    it("returns correct token count for code snippets", () => {
      const code = `function add(a, b) { return a + b; }`;
      const tokens = encodeText(code);
      expect(tokens.length).toBeGreaterThan(0);
    });

    it("returns empty array for empty string", () => {
      const tokens = encodeText("");
      expect(tokens).toEqual([]);
    });
  });

  describe("decodeTokens()", () => {
    it("properly decodes token IDs back to strings", () => {
      const text = "Hello world";
      const encoded = encodeText(text);
      const decoded = decodeTokens(encoded);
      expect(decoded).toBe(text);
    });

    it("returns empty string for empty array", () => {
      expect(decodeTokens([])).toBe("");
    });
  });

  describe("getTokenDetails()", () => {
    it("returns token info objects with required fields", () => {
      const details = getTokenDetails("Hi");
      expect(details.length).toBeGreaterThan(0);
      expect(details[0]).toHaveProperty("id");
      expect(details[0]).toHaveProperty("text");
      expect(details[0]).toHaveProperty("isSpecial");
      expect(details[0]).toHaveProperty("isWhitespace");
    });

    it("returns empty array for empty string", () => {
      expect(getTokenDetails("")).toEqual([]);
    });
  });

  describe("getTokenCount()", () => {
    it("returns a number", () => {
      expect(typeof getTokenCount("test")).toBe("number");
    });

    it("returns 0 for empty string", () => {
      expect(getTokenCount("")).toBe(0);
    });

    it("returns greater than 0 for non-empty text", () => {
      expect(getTokenCount("Hello")).toBeGreaterThan(0);
    });
  });
});
