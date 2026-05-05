import { Slide } from "@/components/Slide";
import { Bot } from "lucide-react";

export const Slide9 = () => (
  <Slide id="slide-9" number={9} eyebrow="The Secret Weapon">
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <span className="eyebrow"><Bot className="w-3 h-3" /> AI Agents</span>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">Built smart — built <span className="text-gradient">by</span> smart agents.</h2>
        <p className="text-lg text-foreground/70 italic max-w-3xl mx-auto">EdgeFabric isn't just intelligent. It's orchestrated by specialized AI agents that own each role of software delivery.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass p-7 border-[hsl(var(--accent-danger)/0.2)]">
          <div className="text-xs font-mono uppercase tracking-widest text-[hsl(var(--accent-danger))] mb-4">Traditional team</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            {["📋 PM reads requirements", "🏗️ Architect designs", "💻 Developer codes", "🧪 Tester checks", "👀 Reviewer approves", "🚀 DevOps deploys"].map((s) => (
              <li key={s} className="flex items-center gap-2"><span className="opacity-60">{s}</span></li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-white/5 text-xs text-[hsl(var(--accent-danger))]">Each handoff = delay + risk of mistakes</div>
        </div>
        <div className="glass p-7 glow border-brand/20">
          <div className="text-xs font-mono uppercase tracking-widest text-brand mb-4">EdgeFabric way</div>
          <p className="text-foreground/80 leading-relaxed">
            Specialized AI agents own each role and pass results down the chain — completing entire workflows automatically, consistently, at any hour.
          </p>
          <div className="mt-6 p-4 rounded-xl bg-brand/5 border border-brand/20 text-sm">
            <span className="text-brand font-medium">In one line: </span>
            Plain-English requirement → running, tested, deployed software — with minimal human involvement.
          </div>
        </div>
      </div>
    </div>
  </Slide>
);
