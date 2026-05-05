import { Slide } from "@/components/Slide";
import { ArrowRight } from "lucide-react";

export const Slide4 = () => (
  <Slide id="slide-4" number={4} eyebrow="Real Problems Solved">
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <span className="eyebrow">🎯 What Real Problems Does It Solve?</span>
        <h2 className="text-4xl md:text-5xl font-bold">Six pains. Six fixes.</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { icon: "🐌", problem: "App is slow during peak traffic", solution: "Serves data from memory — up to 100× faster than a database" },
          { icon: "💀", problem: "One server crashes, app goes down", solution: "Auto-spreads data across servers — others take over instantly" },
          { icon: "🔥", problem: "Database gets overloaded", solution: "Shields your DB by answering up to 90% of requests from cache" },
          { icon: "📈", problem: "You scale up, data gets misrouted", solution: "Intelligently redistributes data as servers join or leave" },
          { icon: "⏰", problem: "Stale data shown to users", solution: "Auto-expires and refreshes data on configurable rules" },
          { icon: "🏢", problem: "Multiple clients on one platform", solution: "Fully isolates each tenant — no mixing, no leakage" },
        ].map((row) => (
          <div key={row.problem} className="glass p-6 grid grid-cols-[auto_1fr] gap-4 items-start">
            <div className="text-2xl">{row.icon}</div>
            <div className="space-y-2">
              <div className="text-sm text-[hsl(var(--accent-danger))] font-medium">{row.problem}</div>
              <div className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-brand shrink-0 mt-1" />
                <div className="text-foreground/90 text-sm leading-relaxed">{row.solution}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Slide>
);
