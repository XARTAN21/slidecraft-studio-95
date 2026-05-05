import { Slide } from "@/components/Slide";

export const Slide3 = () => (
  <Slide id="slide-3" number={3} eyebrow="The Solution">
    <div className="text-center space-y-10">
      <span className="eyebrow">💡 Enter EdgeFabric</span>
      <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
        The <span className="text-gradient">smart teller desk</span> at the front of the branch.
      </h2>
      <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
        EdgeFabric remembers the most frequently asked information and serves it instantly — without going to the vault every single time.
      </p>
      <div className="glass p-8 md:p-12 max-w-4xl mx-auto glow">
        <div className="text-xs font-mono uppercase tracking-widest text-brand mb-4">In one line</div>
        <p className="text-2xl md:text-3xl font-semibold leading-snug">
          "EdgeFabric is a high-speed, intelligent data platform that makes your applications <span className="text-gradient">faster, more reliable, and capable of handling millions</span> — without breaking a sweat."
        </p>
      </div>
    </div>
  </Slide>
);
