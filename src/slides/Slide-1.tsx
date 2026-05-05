import { Slide } from "@/components/Slide";
import { ChevronDown, Sparkles } from "lucide-react";

export const Slide1 = () => (
  <Slide id="slide-1" number={1} className="grid-bg">
    <div className="text-center space-y-8">
      <span className="eyebrow"><Sparkles className="w-3 h-3" /> Client Presentation · 2026</span>
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95]">
        <span className="text-gradient">Edge</span>Fabric
      </h1>
      <p className="text-xl md:text-3xl text-foreground/70 italic font-light max-w-3xl mx-auto">
        "The intelligent data platform <br className="hidden md:block" />that never sleeps."
      </p>
      <div className="pt-12 flex flex-col items-center gap-2 text-foreground/40">
        <span className="text-xs font-mono uppercase tracking-widest">Scroll to begin</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </div>
  </Slide>
);
