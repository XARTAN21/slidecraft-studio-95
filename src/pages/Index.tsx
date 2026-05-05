import { Slide } from "@/components/Slide";
import { SlideNav } from "@/components/SlideNav";
import {
  Zap, ShieldCheck, TrendingUp, Building2, Clock, Database, Activity,
  Bot, ArrowRight, Check, X, AlertTriangle, Crown, Sparkles, Mail,
  Phone, Globe, Linkedin, ChevronDown, ServerCrash, Server, Users
} from "lucide-react";

const Index = () => {
  return (
    <main className="relative">
      <SlideNav />

      {/* Top brand bar */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-brand to-brand-glow grid place-items-center">
              <Sparkles className="w-4 h-4 text-brand-foreground" />
            </div>
            <span className="font-semibold tracking-tight">EdgeFabric</span>
          </div>
          <a href="#slide-15" className="text-xs font-medium px-4 py-2 rounded-full bg-brand text-brand-foreground hover:bg-brand-glow transition-colors">
            Get Started
          </a>
        </div>
      </header>

      {/* SLIDE 1 — TITLE */}
      <Slide id="slide-1" number={1} className="grid-bg">
        <div className="text-center space-y-8">
          <span className="eyebrow"><Sparkles className="w-3 h-3" /> Client Presentation · 2026</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95]">
            <span className="text-gradient">Edge</span>Fabric
          </h1>
          <p className="text-xl md:text-3xl text-foreground/70 italic font-light max-w-3xl mx-auto">
            "The intelligent data platform <br className="hidden md:block" />that never sleeps."
          </p>
          <div className="pt-12 flex flex-col items-center gap-2 text-foreground/40">
            <span className="text-xs font-mono uppercase tracking-widest">Scroll to begin</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </Slide>

      {/* SLIDE 2 — THE PROBLEM */}
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

      {/* SLIDE 3 — SOLUTION */}
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

      {/* SLIDE 4 — REAL PROBLEMS SOLVED */}
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

      {/* SLIDE 5 — LIGHTNING FAST */}
      <Slide id="slide-5" number={5} eyebrow="Feature 1">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="eyebrow"><Zap className="w-3 h-3" /> Feature #1</span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">Lightning-fast data delivery</h2>
            <p className="text-lg text-foreground/70">
              Responses in under <span className="text-brand font-semibold">5 milliseconds</span>. Compare that to a typical database query at 50–500ms.
            </p>
            <div className="glass p-6">
              <div className="text-xs font-mono uppercase tracking-widest text-brand mb-3">💼 Business Impact</div>
              <ul className="space-y-2 text-foreground/85">
                <li className="flex gap-2"><Check className="w-5 h-5 text-brand shrink-0" /> Higher user retention</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-brand shrink-0" /> Better conversion rates</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-brand shrink-0" /> Improved CSAT scores</li>
              </ul>
            </div>
          </div>
          <div className="glass p-8 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-foreground/50">Speed comparison</div>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-2"><span>Traditional Database</span><span className="text-[hsl(var(--accent-danger))]">~500ms</span></div>
                <div className="h-3 rounded-full bg-foreground/5 overflow-hidden">
                  <div className="h-full w-full bg-[hsl(var(--accent-danger))]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2"><span>EdgeFabric</span><span className="text-brand">&lt; 5ms</span></div>
                <div className="h-3 rounded-full bg-foreground/5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand to-brand-glow" style={{ width: "1%" }} />
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-white/5 text-center">
              <div className="text-6xl font-bold text-gradient">100×</div>
              <div className="text-sm text-foreground/60 mt-1">faster than a typical DB query</div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 6 — ALWAYS ON */}
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

      {/* SLIDE 7 — SCALES */}
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

      {/* SLIDE 8 — 4 EXTRA FEATURES */}
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

      {/* SLIDE 9 — AI AGENTS INTRO */}
      <Slide id="slide-9" number={9} eyebrow="The Secret Weapon">
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="eyebrow"><Bot className="w-3 h-3" /> AI Agents</span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">Built smart — built <span className="text-gradient">by</span> smart agents.</h2>
            <p className="text-lg text-foreground/70 italic max-w-3xl mx-auto">EdgeFabric isn't just intelligent. It's orchestrated by specialized AI agents that own each role of software delivery.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-7 border-[hsl(var(--accent-danger)/0.2)]">
              <div className="text-xs font-mono uppercase tracking-widest text-[hsl(var(--accent-danger))] mb-4">Traditional team</div>
              <ul className="space-y-2 text-sm text-foreground/70">
                {["📋 PM reads requirements", "🏗️ Architect designs", "💻 Developer codes", "🧪 Tester checks", "👀 Reviewer approves", "🚀 DevOps deploys"].map((s) => (
                  <li key={s} className="flex items-center gap-2"><span className="opacity-60">{s}</span></li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-white/5 text-xs text-[hsl(var(--accent-danger))]">Each handoff = delay + risk of mistakes</div>
            </div>
            <div className="glass p-7 glow border-brand/20">
              <div className="text-xs font-mono uppercase tracking-widest text-brand mb-4">EdgeFabric way</div>
              <p className="text-foreground/80 leading-relaxed">
                Specialized AI agents own each role and pass results down the chain — completing entire workflows automatically, consistently, at any hour.
              </p>
              <div className="mt-6 p-4 rounded-xl bg-brand/5 border border-brand/20 text-sm">
                <span className="text-brand font-medium">In one line: </span>
                Plain-English requirement → running, tested, deployed software — with minimal human involvement.
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 10 — ORCHESTRATOR */}
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

      {/* SLIDE 11 — WHAT AI AGENTS MEAN FOR YOU */}
      <Slide id="slide-11" number={11} eyebrow="Business Impact">
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <span className="eyebrow">🏆 What AI Agents Mean For Your Business</span>
            <h2 className="text-4xl md:text-5xl font-bold">Before vs. After.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-6 bg-[hsl(var(--accent-danger)/0.04)] border-[hsl(var(--accent-danger)/0.15)]">
              <div className="flex items-center gap-2 mb-5 text-[hsl(var(--accent-danger))]"><X className="w-5 h-5" /><span className="font-semibold">Without AI agents</span></div>
              <ul className="space-y-3 text-foreground/70 text-sm">
                {["Features take weeks", "Manual, inconsistent reviews", "Deployments need dedicated engineers", "Performance issues found in production", "Build failures wait hours", "Coordination overhead between people"].map((t) => (
                  <li key={t} className="line-through opacity-80">{t}</li>
                ))}
              </ul>
            </div>
            <div className="glass p-6 border-brand/20 bg-brand/[0.04]">
              <div className="flex items-center gap-2 mb-5 text-brand"><Check className="w-5 h-5" /><span className="font-semibold">With EdgeFabric AI agents</span></div>
              <ul className="space-y-3 text-foreground/90 text-sm">
                {["Delivered in days", "Every change reviewed the same way, every time", "Fully automated & verified", "Caught before go-live", "Auto-fixed within minutes", "One Orchestrator manages the entire chain"].map((t) => (
                  <li key={t} className="flex gap-2"><Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />{t}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass p-6 md:p-8 text-center max-w-3xl mx-auto glow">
            <div className="text-xs font-mono uppercase tracking-widest text-brand mb-2">🎯 The Result</div>
            <p className="text-xl md:text-2xl font-semibold leading-snug">
              Faster delivery, fewer bugs, lower cost — and a team that focuses on <span className="text-gradient">innovation</span>, not coordination.
            </p>
          </div>
        </div>
      </Slide>

      {/* SLIDE 12 — VS COMPETITION */}
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

      {/* SLIDE 13 — DIFFERENTIATORS PLAIN ENGLISH */}
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

      {/* SLIDE 14 — TRULY UNIQUE */}
      <Slide id="slide-14" number={14} eyebrow="Truly Unique">
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <span className="eyebrow"><Crown className="w-3 h-3" /> Exclusive advantages</span>
            <h2 className="text-3xl md:text-5xl font-bold">What makes EdgeFabric truly unique.</h2>
          </div>
          <div className="space-y-3 max-w-4xl mx-auto">
            {[
              { icon: "🤖", title: "AI Agents running the full development lifecycle", note: "No competitor has this." },
              { icon: "🔗", title: "Load balancer + cache nodes as a single integrated system", note: "Not bolted together like others." },
              { icon: "☁️", title: "Zero-SSH, cloud-native deployment", note: "Security-first from day one." },
              { icon: "🔄", title: "Live key migration during scaling", note: "Truly zero-downtime scaling." },
              { icon: "📝", title: "Every architectural decision documented automatically", note: "By the Architect Agent — full traceability." },
            ].map((u) => (
              <div key={u.title} className="glass p-5 flex items-center gap-5 group hover:border-brand/30 transition-colors">
                <div className="text-3xl shrink-0">{u.icon}</div>
                <div className="flex-1">
                  <div className="font-semibold">{u.title}</div>
                  <div className="text-sm text-foreground/60 mt-0.5 flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand" />{u.note}</div>
                </div>
                <span className="text-[10px] font-mono px-2 py-1 rounded bg-brand/10 text-brand border border-brand/30 hidden md:inline">EXCLUSIVE</span>
              </div>
            ))}
          </div>
          <div className="glass p-8 max-w-3xl mx-auto text-center glow">
            <p className="text-xl md:text-2xl italic font-light leading-snug">
              "EdgeFabric doesn't just compete with existing tools.<br />
              It <span className="text-gradient not-italic font-semibold">redefines</span> what a data platform should be."
            </p>
          </div>
        </div>
      </Slide>

      {/* SLIDE 15 — NEXT STEPS */}
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

      <footer className="border-t border-white/5 py-8 text-center text-xs text-foreground/40 font-mono">
        © 2026 EdgeFabric · The intelligent data platform that never sleeps
      </footer>
    </main>
  );
};

export default Index;
