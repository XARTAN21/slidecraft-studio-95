import { Slide } from "@/components/Slide";

export const Slide13 = () => (
  <Slide id="slide-13" number={13} eyebrow="In Plain English">
    <div className="space-y-10">
      <div className="text-center space-y-3">
        <span className="eyebrow">🥊 What this comparison really means</span>
        <h2 className="text-3xl md:text-5xl font-bold">Three matchups. One winner.</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { vs: "Redis", emoji: "🥇", body: "Redis is fast and popular — but it's a raw tool. Hammer in hand, build the house yourself. You bolt on load balancing, monitoring, cluster management.", clincher: "EdgeFabric ships the whole house — ready to move in." },
          { vs: "Memcached", emoji: "🥇", body: "Memcached is simple but primitive — no replication, no persistence, no failover. If it crashes, your cache is gone and your DB takes the full hit.", clincher: "EdgeFabric replicates 3× and recovers automatically." },
          { vs: "Hazelcast", emoji: "🥇", body: "Hazelcast is feature-rich but configuration-heavy and expensive. You pay for capabilities you'll never use.", clincher: "EdgeFabric is purpose-built — leaner, cheaper, faster to operate." },
        ].map((c) => (
          <div key={c.vs} className="glass p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-foreground/50 uppercase tracking-wider">EdgeFabric vs</span>
              <span className="text-2xl">{c.emoji}</span>
            </div>
            <h3 className="text-2xl font-bold">{c.vs}</h3>
            <p className="text-sm text-foreground/70 leading-relaxed flex-1">{c.body}</p>
            <div className="pt-4 border-t border-white/5 text-sm font-medium text-brand">
              {c.clincher}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Slide>
);
