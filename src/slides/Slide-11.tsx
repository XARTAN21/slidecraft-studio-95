import { Slide } from "@/components/Slide";
import { Check, X } from "lucide-react";

export const Slide11 = () => (
  <Slide id="slide-11" number={11} eyebrow="Business Impact">
    <div className="space-y-10">
      <div className="text-center space-y-3">
        <span className="eyebrow">🏆 What AI Agents Mean For Your Business</span>
        <h2 className="text-4xl md:text-5xl font-bold">Before vs. After.</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass p-6 bg-[hsl(var(--accent-danger)/0.04)] border-[hsl(var(--accent-danger)/0.15)]">
          <div className="flex items-center gap-2 mb-5 text-[hsl(var(--accent-danger))]"><X className="w-5 h-5" /><span className="font-semibold">Without AI agents</span></div>
          <ul className="space-y-3 text-foreground/70 text-sm">
            {["Features take weeks", "Manual, inconsistent reviews", "Deployments need dedicated engineers", "Performance issues found in production", "Build failures wait hours", "Coordination overhead between people"].map((t) => (
              <li key={t} className="line-through opacity-80">{t}</li>
            ))}
          </ul>
        </div>
        <div className="glass p-6 border-brand/20 bg-brand/[0.04]">
          <div className="flex items-center gap-2 mb-5 text-brand"><Check className="w-5 h-5" /><span className="font-semibold">With EdgeFabric AI agents</span></div>
          <ul className="space-y-3 text-foreground/90 text-sm">
            {["Delivered in days", "Every change reviewed the same way, every time", "Fully automated & verified", "Caught before go-live", "Auto-fixed within minutes", "One Orchestrator manages the entire chain"].map((t) => (
              <li key={t} className="flex gap-2"><Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />{t}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="glass p-6 md:p-8 text-center max-w-3xl mx-auto glow">
        <div className="text-xs font-mono uppercase tracking-widest text-brand mb-2">🎯 The Result</div>
        <p className="text-xl md:text-2xl font-semibold leading-snug">
          Faster delivery, fewer bugs, lower cost — and a team that focuses on <span className="text-gradient">innovation</span>, not coordination.
        </p>
      </div>
    </div>
  </Slide>
);
