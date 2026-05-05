import { Slide } from "@/components/Slide";
import { TrendingUp } from "lucide-react";

export const Slide7 = () => (
  <Slide id="slide-7" number={7} eyebrow="Feature 3">
    <div className="space-y-10">
      <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
        <div className="space-y-6">
          <span className="eyebrow"><TrendingUp className="w-3 h-3" /> Feature #3</span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">Scales with your business.</h2>
          <p className="text-lg text-foreground/70 max-w-2xl">From 100 users to 10 million — add servers and the platform auto-rebalances data live, with zero downtime.</p>
        </div>
        <div className="glass p-6 text-center">
          <div className="text-xs font-mono uppercase tracking-widest text-brand mb-1">Scaling cost</div>
          <div className="text-4xl font-bold">$0</div>
          <div className="text-xs text-foreground/60 mt-1">re-architecture</div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { stage: "Startup", users: "100", servers: 2 },
          { stage: "Growth", users: "10K", servers: 4 },
          { stage: "Enterprise", users: "10M", servers: 8 },
        ].map((s) => (
          <div key={s.stage} className="glass p-6 space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="font-semibold">{s.stage}</span>
              <span className="text-brand font-mono text-sm">{s.users} users</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {Array.from({ length: s.servers }).map((_, i) => (
                <div key={i} className="w-7 h-9 rounded bg-gradient-to-b from-brand/30 to-brand/10 border border-brand/30 grid place-items-center">
                  <div className="w-3 h-1 bg-brand rounded-full" />
                </div>
              ))}
            </div>
            <div className="text-xs text-foreground/50 font-mono">{s.servers} nodes</div>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-foreground/50 font-mono">→ Auto-rebalance · Zero downtime throughout ←</p>
    </div>
  </Slide>
);
