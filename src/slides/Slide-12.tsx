import { Slide } from "@/components/Slide";

export const Slide12 = () => (
  <Slide id="slide-12" number={12} eyebrow="Competitive Landscape">
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <span className="eyebrow">⚔️ How EdgeFabric stacks up</span>
        <h2 className="text-3xl md:text-5xl font-bold">vs. Redis · Memcached · Hazelcast</h2>
      </div>

      <div className="glass overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 font-medium text-foreground/60 font-mono text-xs uppercase tracking-wider">Capability</th>
                <th className="p-4 font-semibold text-brand bg-brand/5">EdgeFabric</th>
                <th className="p-4 font-medium text-foreground/70">Redis</th>
                <th className="p-4 font-medium text-foreground/70">Memcached</th>
                <th className="p-4 font-medium text-foreground/70">Hazelcast</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              {[
                ["Speed", "✅ Sub-5ms", "✅ Sub-ms", "✅ Sub-ms", "✅ Fast"],
                ["Built-in Load Balancer", "✅ Included", "❌ Separate tool", "❌ Separate tool", "⚠️ Complex setup"],
                ["Auto Failure Recovery", "✅ < 5 sec", "⚠️ Sentinel needed", "❌ None", "✅ Expensive"],
                ["Strong Data Consistency", "✅ Quorum-based", "⚠️ Eventually", "❌", "⚠️ Config-heavy"],
                ["Multi-Tenant Isolation", "✅ Native", "⚠️ Workarounds", "❌", "⚠️ Manual"],
                ["Auto Data Rebalancing", "✅ Live, zero down", "⚠️ Manual reshard", "❌", "✅"],
                ["Write-Ahead Log", "✅ S3-backed", "⚠️ Local only", "❌", "⚠️"],
                ["Cloud-Native (AWS)", "✅ Built-in", "⚠️ ElastiCache", "❌", "⚠️ Separate"],
                ["Live Monitoring Dashboard", "✅ Built-in", "⚠️ 3rd party", "❌", "⚠️ Extra cost"],
                ["AI-Assisted Development", "🏆 Full SDLC agents", "❌", "❌", "❌"],
                ["Licensing Cost", "💚 Open Source", "🔴 Enterprise $$", "💚 Free (limited)", "🔴 Enterprise $$"],
              ].map((row, i) => (
                <tr key={i} className={`border-b border-white/5 ${row[0] === "AI-Assisted Development" ? "bg-brand/5" : ""}`}>
                  <td className="p-4 font-medium text-foreground/90">{row[0]}</td>
                  <td className="p-4 text-center bg-brand/5 font-medium">{row[1]}</td>
                  <td className="p-4 text-center text-foreground/60">{row[2]}</td>
                  <td className="p-4 text-center text-foreground/60">{row[3]}</td>
                  <td className="p-4 text-center text-foreground/60">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-center text-sm text-foreground/60">
        <span className="text-brand">AI-Assisted Development</span> — the knockout. No competitor offers it.
      </p>
    </div>
  </Slide>
);
