import { Slide } from "@/components/Slide";
import { Check, Server, ShieldCheck, X } from "lucide-react";

export const Slide6 = () => (
  <Slide id="slide-6" number={6} eyebrow="Feature 2">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <span className="eyebrow"><ShieldCheck className="w-3 h-3" /> Feature #2</span>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">Always-on availability. Self-healing.</h2>
        <p className="text-lg text-foreground/70">
          Every piece of data lives on <span className="text-brand font-semibold">3 servers</span> at once. Failures are detected in under 5 seconds and traffic reroutes automatically.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {["Detected < 5s", "Auto rerouted", "No human action", "No 3AM alert"].map((b) => (
            <div key={b} className="glass px-4 py-3 text-sm flex items-center gap-2">
              <Check className="w-4 h-4 text-brand" /> {b}
            </div>
          ))}
        </div>
      </div>
      <div className="glass p-8">
        <div className="text-xs font-mono uppercase tracking-widest text-foreground/50 mb-6">3-way replication</div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[true, true, false].map((ok, i) => (
            <div key={i} className={`relative aspect-square rounded-xl border flex flex-col items-center justify-center gap-2 ${ok ? "border-brand/40 bg-brand/5" : "border-[hsl(var(--accent-danger)/0.4)] bg-[hsl(var(--accent-danger)/0.06)]"}`}>
              <Server className={`w-8 h-8 ${ok ? "text-brand" : "text-[hsl(var(--accent-danger))]"}`} />
              <span className="text-xs font-mono">Server {i + 1}</span>
              {ok ? <Check className="w-4 h-4 text-brand" /> : <X className="w-4 h-4 text-[hsl(var(--accent-danger))]" />}
            </div>
          ))}
        </div>
        <div className="text-center text-sm text-foreground/70">
          Traffic auto-shifts to healthy nodes · <span className="text-brand">Zero downtime</span>
        </div>
      </div>
    </div>
  </Slide>
);
