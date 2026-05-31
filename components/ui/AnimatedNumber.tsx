"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedNumberProps {
  value: number;
  decimals?: number;
}

export default function AnimatedNumber({ value, decimals = 0 }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const animationRef = useRef<number | null>(null);
  const startRef = useRef(value);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const startValue = startRef.current;
    const endValue = value;
    const duration = 300;

    if (startValue === endValue) {
      setDisplayValue(value);
      return;
    }

    startTimeRef.current = performance.now();

    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) return;
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (endValue - startValue) * eased;
      setDisplayValue(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        startRef.current = endValue;
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value]);

  const rounded = decimals === 0 ? Math.round(displayValue) : displayValue;
  return <span>{rounded.toFixed(decimals)}</span>;
}
