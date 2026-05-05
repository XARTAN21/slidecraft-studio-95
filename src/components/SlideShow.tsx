import { Children, ReactNode, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideShowProps {
  children: ReactNode;
}

export const SlideShow = ({ children }: SlideShowProps) => {
  const slides = Children.toArray(children);
  const total = slides.length;
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => Math.max(0, i - 1));
  const next = () => setCurrent((i) => Math.min(total - 1, i + 1));

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") setCurrent((i) => Math.min(total - 1, i + 1));
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") setCurrent((i) => Math.max(0, i - 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [total]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides — only active one is visible */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-300"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
        >
          {slide}
        </div>
      ))}

      {/* Left arrow */}
      {current > 0 && (
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-foreground/60 hover:text-brand hover:border-brand/40 transition-all group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      )}

      {/* Right arrow */}
      {current < total - 1 && (
        <button
          onClick={next}
          aria-label="Next slide"
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-foreground/60 hover:text-brand hover:border-brand/40 transition-all group"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      )}

      {/* Slide counter bottom-center */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <span className="font-mono text-xs text-foreground/40 tracking-widest">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        {/* Dot indicators */}
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === current
                  ? "w-5 h-1.5 bg-brand"
                  : "w-1.5 h-1.5 bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
