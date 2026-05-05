import { Slide } from "@/components/Slide";
import { Activity, Building2, Clock, Database } from "lucide-react";

export const Slide8 = () => (
  <Slide id="slide-8" number={8} eyebrow="And There's More">
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <span className="eyebrow">🌟 Four additional capabilities</span>
        <h2 className="text-4xl md:text-5xl font-bold">Built into one platform.</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { icon: Building2, color: "175 85% 50%", title: "Multi-Tenant", sub: "One platform, many clients", body: "Complete isolation per tenant — each lives in its own secure namespace.", impact: "One deployment serves all." },
          { icon: Clock, color: "28 100% 62%", title: "Smart Data Expiry (TTL)", sub: "Always-fresh data", body: "Set rules: 'cache session 30 min', 'refresh price every 5 min'. Stale data disappears on its own.", impact: "Automatic compliance with retention policies." },
          { icon: Database, color: "152 68% 50%", title: "Data Durability", sub: "Nothing gets lost", body: "Every write is recorded in a safety log backed by cloud storage before it's confirmed.", impact: "Recovers from catastrophic failure." },
          { icon: Activity, color: "265 80% 65%", title: "Real-Time Visibility", sub: "Live dashboard", body: "See healthy servers, cache hit rates, request speeds, and alerts in one place.", impact: "Proactive issue detection." },
        ].map((f) => (
          <div key={f.title} className="glass p-7 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl grid place-items-center" style={{ background: `hsl(${f.color} / 0.12)`, border: `1px solid hsl(${f.color} / 0.3)` }}>
                <f.icon className="w-6 h-6" style={{ color: `hsl(${f.color})` }} />
              </div>
              <div>
                <div className="font-bold text-lg">{f.title}</div>
                <div className="text-xs text-foreground/50 uppercase tracking-wider">{f.sub}</div>
              </div>
            </div>
            <p className="text-foreground/75 text-sm leading-relaxed">{f.body}</p>
            <div className="text-xs pt-2 border-t border-white/5 text-foreground/60">
              <span className="text-brand font-medium">Impact · </span>{f.impact}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Slide>
);
