import { Slide } from "@/components/Slide";
import { ArrowRight, Crown } from "lucide-react";

export const Slide14 = () => (
  <Slide id="slide-14" number={14} eyebrow="Truly Unique">
    <div className="space-y-10">
      <div className="text-center space-y-3">
        <span className="eyebrow"><Crown className="w-3 h-3" /> Exclusive advantages</span>
        <h2 className="text-3xl md:text-5xl font-bold">What makes EdgeFabric truly unique.</h2>
      </div>
      <div className="space-y-3 max-w-4xl mx-auto">
        {[
          { icon: "🤖", title: "AI Agents running the full development lifecycle", note: "No competitor has this." },
          { icon: "🔗", title: "Load balancer + cache nodes as a single integrated system", note: "Not bolted together like others." },
          { icon: "☁️", title: "Zero-SSH, cloud-native deployment", note: "Security-first from day one." },
          { icon: "🔄", title: "Live key migration during scaling", note: "Truly zero-downtime scaling." },
          { icon: "📝", title: "Every architectural decision documented automatically", note: "By the Architect Agent — full traceability." },
        ].map((u) => (
          <div key={u.title} className="glass p-5 flex items-center gap-5 group hover:border-brand/30 transition-colors">
            <div className="text-3xl shrink-0">{u.icon}</div>
            <div className="flex-1">
              <div className="font-semibold">{u.title}</div>
              <div className="text-sm text-foreground/60 mt-0.5 flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand" />{u.note}</div>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-brand/10 text-brand border border-brand/30 hidden md:inline">EXCLUSIVE</span>
          </div>
        ))}
      </div>
      <div className="glass p-8 max-w-3xl mx-auto text-center glow">
        <p className="text-xl md:text-2xl italic font-light leading-snug">
          "EdgeFabric doesn't just compete with existing tools.<br />
          It <span className="text-gradient not-italic font-semibold">redefines</span> what a data platform should be."
        </p>
      </div>
    </div>
  </Slide>
);
