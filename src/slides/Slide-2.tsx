import { Slide } from "@/components/Slide";
import { Clock, ServerCrash, Users } from "lucide-react";

export const Slide2 = () => (
  <Slide id="slide-2" number={2} eyebrow="The Problem">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <span className="eyebrow text-[hsl(var(--accent-warm))] border-[hsl(var(--accent-warm)/0.3)] bg-[hsl(var(--accent-warm)/0.08)]">🏦 What's Happening Today</span>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Your app is a <span className="text-[hsl(var(--accent-danger))]">busy bank branch</span>.
        </h2>
        <p className="text-lg text-foreground/70 leading-relaxed">
          Every customer asks for their balance. The teller walks all the way to the central vault — your database — every single time. During peak hours, it breaks down.
        </p>
      </div>
      <div className="glass p-8 space-y-4">
        <div className="text-xs font-mono uppercase tracking-widest text-foreground/50 mb-4">Peak hour symptoms</div>
        {[
          { icon: Clock, label: "Long queues", desc: "Requests pile up waiting" },
          { icon: Users, label: "Frustrated customers", desc: "Users abandon sessions" },
          { icon: ServerCrash, label: "Vault overloaded", desc: "Database eventually crashes" },
        ].map((s) => (
          <div key={s.label} className="flex items-start gap-4 p-4 rounded-xl bg-[hsl(var(--accent-danger)/0.06)] border border-[hsl(var(--accent-danger)/0.15)]">
            <s.icon className="w-6 h-6 text-[hsl(var(--accent-danger))] shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold">{s.label}</div>
              <div className="text-sm text-foreground/60">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Slide>
);
