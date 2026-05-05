import { Slide } from "@/components/Slide";
import { Check } from "lucide-react";

export const Slide10 = () => (
  <Slide id="slide-10" number={10} eyebrow="The Orchestrator">
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <span className="eyebrow">🎯 The Orchestrator's Playbook</span>
        <h2 className="text-3xl md:text-5xl font-bold">From requirement to live feature — automatically.</h2>
      </div>

      <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
        <div className="space-y-2">
          {[
            { icon: "📄", title: "Requirement arrives", note: "Plain English input" },
            { icon: "🎯", title: "Orchestrator kicks off the chain", note: "Coordinates everything" },
            { icon: "🏗️", title: "Architect Agent", note: "Design approved by human ✅", human: true },
            { icon: "👨‍💻", title: "Developer Agent", note: "Code written" },
            { icon: "🧪", title: "Tester Agent", note: "Tests pass" },
            { icon: "🔍", title: "Reviewer Agent", note: "No bugs or security issues" },
            { icon: "🔄", title: "Pipeline Monitor", note: "Auto-heals on failure" },
            { icon: "☁️", title: "Deployer Agent", note: "Live on cloud, health verified" },
            { icon: "📊", title: "Performance Agent", note: "Load-tested, report generated" },
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex flex-col items-center pt-2">
                <div className="w-9 h-9 rounded-full grid place-items-center text-base bg-surface-elevated border border-white/10">
                  {step.icon}
                </div>
                {i < 8 && <div className="w-px h-4 bg-gradient-to-b from-brand/40 to-transparent" />}
              </div>
              <div className="glass px-4 py-2.5 flex-1 flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">{step.title}</div>
                  <div className="text-xs text-foreground/55">{step.note}</div>
                </div>
                {step.human && <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[hsl(var(--accent-warm)/0.15)] text-[hsl(var(--accent-warm))] border border-[hsl(var(--accent-warm)/0.3)]">HUMAN GATE</span>}
              </div>
            </div>
          ))}
          <div className="ml-12 mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand to-brand-glow text-brand-foreground font-semibold glow">
            <Check className="w-5 h-5" /> Feature is LIVE
          </div>
        </div>

        <div className="glass p-6 max-w-xs space-y-3 md:sticky md:top-24">
          <div className="text-xs font-mono uppercase tracking-widest text-brand">ℹ Important</div>
          <p className="text-sm text-foreground/75 leading-relaxed">
            The Orchestrator monitors each agent's output, decides if it's acceptable, and either advances or retries.
          </p>
          <p className="text-sm text-foreground/75 leading-relaxed">
            If a human decision is needed, it pauses — then resumes automatically once approved.
          </p>
        </div>
      </div>
    </div>
  </Slide>
);
