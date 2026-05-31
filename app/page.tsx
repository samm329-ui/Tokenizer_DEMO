"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { getTokenDetails } from "@/lib/tokenizers";
import { calculateStats } from "@/lib/stats";
import { examples, type CategoryFilter } from "@/lib/examples";
import type { ModelType, TokenStats, TokenInfo } from "@/types";

import TokenizerSelector from "@/components/TokenizerSelector";
import StatsPanel from "@/components/StatsPanel";
import TokenDisplay from "@/components/TokenDisplay";
import ExampleCard from "@/components/ExampleCard";
import ExampleFilters from "@/components/ExampleFilters";
import { Zap, Keyboard } from "lucide-react";

const DEBOUNCE_MS = 300;

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [selectedModel, setSelectedModel] = useState<ModelType>("gpt-4o");
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("Normal");
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [mounted, setMounted] = useState(false);

  const debouncedText = useDebounce(inputText, DEBOUNCE_MS);

  const tokens: TokenInfo[] = useMemo(
    () => getTokenDetails(debouncedText),
    [debouncedText]
  );

  const stats: TokenStats = useMemo(
    () => calculateStats(debouncedText),
    [debouncedText]
  );

  const filteredExamples = useMemo(() => {
    return examples.filter((ex) => ex.category === selectedCategory);
  }, [selectedCategory]);

  const handleExampleSelect = useCallback((text: string) => {
    setInputText(text);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleClear = useCallback(() => {
    setInputText("");
  }, []);

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClear();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClear]);

  return (
    <div className="min-h-screen bg-surface-primary">
      {/* Header - outside the container */}
      <header className="sticky top-0 z-50 bg-surface-primary/90 backdrop-blur-xl border-b border-sand/40">
        <div className="max-w-[1200px] mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-terracotta rounded-lg flex items-center justify-center shadow-sm">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold text-espresso tracking-tight">Tokenizer</span>
          </div>
          <button
            onClick={() => setShowShortcuts(!showShortcuts)}
            className="p-1.5 text-espresso-muted hover:text-espresso hover:bg-sand/30 rounded-lg transition-all duration-200"
            title="Keyboard shortcuts"
          >
            <Keyboard className="w-4 h-4" />
          </button>
        </div>
        {showShortcuts && (
          <div className="max-w-[1200px] mx-auto px-6 pb-2 animate-fade-in">
            <span className="text-xs text-espresso-muted">
              <kbd className="px-1.5 py-0.5 bg-sand/30 rounded text-[11px] font-mono mr-1">Esc</kbd> Clear input
            </span>
          </div>
        )}
      </header>

      {/* Main container with thick terracotta border */}
      <div className="max-w-[1240px] mx-auto px-4 pt-4 pb-4">
        <div className="border-[3px] border-terracotta/30 rounded-xl overflow-hidden bg-surface-card/30">

          <main className="max-w-[1200px] mx-auto px-6 pt-6 pb-8">
            {/* Hero - centered */}
            <div className={`text-center mb-5 ${mounted ? "animate-slide-up" : "opacity-0"}`}>
              <h2 className="text-hero text-espresso leading-[1.05]">
                Tokenizer
              </h2>
              <p className="text-subtitle text-espresso-secondary mt-1.5 max-w-xl mx-auto">
                Understand exactly how modern language models split text into tokens.
              </p>
            </div>

            {/* Two-column layout */}
            <div className={`flex gap-5 ${mounted ? "animate-slide-up-delay-1" : "opacity-0"}`}>
              {/* Left Column - Input + Stats + Tokens */}
              <div className="flex-1 min-w-0 flex flex-col gap-4">
                {/* Controls */}
                <TokenizerSelector value={selectedModel} onChange={setSelectedModel} />

                {/* Input */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-base font-semibold text-espresso">Input Text</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-espresso-muted font-mono tabular-nums">
                        {inputText.length.toLocaleString()} chars
                      </span>
                      {inputText && (
                        <button
                          onClick={handleClear}
                          className="text-xs text-terracotta hover:text-terracotta-hover font-medium transition-colors"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type or paste text here to see how it gets tokenized..."
                    className="w-full min-h-[140px] p-4 bg-white/60 backdrop-blur-sm border border-sand/60 rounded-2xl text-espresso text-base font-sans
                               placeholder:text-espresso-muted/50 resize-y leading-[1.6]
                               hover:border-terracotta/30 focus:outline-none focus:ring-0 focus:border-terracotta/40 focus:bg-white/70
                               transition-all duration-200 ease-premium"
                    spellCheck={false}
                  />
                </div>

                {/* Stats */}
                <StatsPanel stats={stats} />

                {/* Token Display */}
                <TokenDisplay tokens={tokens} />
              </div>

              {/* Right Column - Examples */}
              <div className="w-[380px] shrink-0">
                <div className="bg-white/80 backdrop-blur-sm border-2 border-terracotta/25 rounded-2xl p-4 shadow-lg shadow-terracotta/5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-espresso">Try an Example</h3>
                      <span className="text-[10px] text-terracotta/70 font-medium bg-terracotta/5 px-1.5 py-0.5 rounded-full">
                        Click to try
                      </span>
                    </div>
                    <span className="text-xs text-espresso-muted font-medium tabular-nums bg-sand/30 px-2 py-0.5 rounded-md">
                      {filteredExamples.length}
                    </span>
                  </div>

                  <div className="mb-3 pb-3 border-b border-sand/40">
                    <ExampleFilters
                      selected={selectedCategory}
                      onChange={setSelectedCategory}
                    />
                  </div>

                  <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto pr-1 scrollbar-thin">
                    {filteredExamples.map((example) => (
                      <ExampleCard
                        key={example.id}
                        example={example}
                        onSelect={handleExampleSelect}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t border-sand/40 bg-surface-primary">
            <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-terracotta/10 rounded-md flex items-center justify-center">
                  <Zap className="w-2.5 h-2.5 text-terracotta" />
                </div>
                <span className="text-[11px] text-espresso-muted">100% client-side</span>
              </div>
              <p className="text-[11px] text-espresso-muted/60">Next.js + TypeScript + Tailwind</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
