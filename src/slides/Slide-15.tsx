import { Slide } from "@/components/Slide";
import { Globe, Linkedin, Mail, Phone } from "lucide-react";

export const Slide15 = () => (
  <Slide id="slide-15" number={15} eyebrow="Next Steps">
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <span className="eyebrow">🚀 Ready to get started?</span>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">Let's build what's next.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 relative">
        {[
          { step: "01", title: "Schedule a Live Demo", body: "See EdgeFabric in action with your specific use case." },
          { step: "02", title: "Pilot Program", body: "Run a proof-of-concept with your real data and traffic." },
          { step: "03", title: "Go Live with Confidence", body: "Full deployment with our team supporting every step." },
        ].map((s) => (
          <div key={s.step} className="glass p-6 space-y-3 relative">
            <div className="text-5xl font-bold text-gradient">{s.step}</div>
            <div className="font-semibold text-lg">{s.title}</div>
            <p className="text-sm text-foreground/65">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="glass p-8 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-brand">📬 Contact us</div>
          <div className="space-y-3 text-sm">
            {[
              { i: Mail, label: "hello@edgefabric.io" },
              { i: Phone, label: "+1 (555) 010-1234" },
              { i: Globe, label: "edgefabric.io" },
              { i: Linkedin, label: "linkedin.com/company/edgefabric" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-3 text-foreground/80">
                <c.i className="w-4 h-4 text-brand" />{c.label}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <a href="#" className="px-6 py-4 rounded-xl bg-gradient-to-r from-brand to-brand-glow text-brand-foreground font-semibold text-center hover:opacity-90 transition glow">
            Schedule a Demo →
          </a>
          <a href="#slide-1" className="px-6 py-4 rounded-xl border border-white/10 hover:border-brand/40 text-center text-sm transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>

      <p className="text-center text-foreground/50 text-sm font-mono">❓ Questions? Let's discuss.</p>
    </div>
  </Slide>
);
