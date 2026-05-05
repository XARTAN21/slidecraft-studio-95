import { Slide } from "@/components/Slide";
import { Check, Zap } from "lucide-react";

export const Slide5 = () => (
  <Slide id="slide-5" number={5} eyebrow="Feature 1">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <span className="eyebrow"><Zap className="w-3 h-3" /> Feature #1</span>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">Lightning-fast data delivery</h2>
        <p className="text-lg text-foreground/70">
          Responses in under <span className="text-brand font-semibold">5 milliseconds</span>. Compare that to a typical database query at 50–500ms.
        </p>
        <div className="glass p-6">
          <div className="text-xs font-mono uppercase tracking-widest text-brand mb-3">💼 Business Impact</div>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-2"><Check className="w-5 h-5 text-brand shrink-0" /> Higher user retention</li>
            <li className="flex gap-2"><Check className="w-5 h-5 text-brand shrink-0" /> Better conversion rates</li>
            <li className="flex gap-2"><Check className="w-5 h-5 text-brand shrink-0" /> Improved CSAT scores</li>
          </ul>
        </div>
      </div>
      <div className="glass p-8 space-y-6">
        <div className="text-xs font-mono uppercase tracking-widest text-foreground/50">Speed comparison</div>
        <div className="space-y-5">
          <div>
            <div className="flex justify-between text-sm mb-2"><span>Traditional Database</span><span className="text-[hsl(var(--accent-danger))]">~500ms</span></div>
            <div className="h-3 rounded-full bg-foreground/5 overflow-hidden">
              <div className="h-full w-full bg-[hsl(var(--accent-danger))]" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2"><span>EdgeFabric</span><span className="text-brand">&lt; 5ms</span></div>
            <div className="h-3 rounded-full bg-foreground/5 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-brand to-brand-glow" style={{ width: "1%" }} />
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-white/5 text-center">
          <div className="text-6xl font-bold text-gradient">100×</div>
          <div className="text-sm text-foreground/60 mt-1">faster than a typical DB query</div>
        </div>
      </div>
    </div>
  </Slide>
);
