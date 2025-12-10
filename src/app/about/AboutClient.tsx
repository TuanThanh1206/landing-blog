"use client";

import {
    Layers,
    Cpu,
    ShieldCheck,
    Server,
    ArrowRight,
    CheckCircle2,
    Terminal,
    Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Data Configuration ---

const PHILOSOPHY_POINTS = [
    {
        id: "01",
        title: "Full-stack approach, not isolated fixes",
        icon: Layers,
        content: (
            <>
                Instead of only touching frontend, backend, or servers, we look at the entire system in one flow. We trace how users interact, how APIs behave under load, and how infrastructure scales. <span className="text-emerald-300">We solve real problems, not symptoms.</span>
            </>
        ),
    },
    {
        id: "02",
        title: "Clear architecture before optimization",
        icon: Cpu,
        content: (
            <>
                We don't randomly "tweak settings". We redesign your system into a model that is predictable, easier to scale, and safer to deploy. <span className="text-emerald-300">Fast systems always start with a clean architecture.</span>
            </>
        ),
    },
    {
        id: "03",
        title: "We take ownership — like internal DevOps",
        icon: ShieldCheck,
        content: (
            <>
                You don't need a 10-person DevOps team; you need someone who understands the stack deeply and monitors it 24/7. We don't just consult — <span className="text-emerald-300">we own the system's stability with you.</span>
            </>
        ),
    },
    {
        id: "04",
        title: "Infrastructure that actually fits",
        icon: Server,
        content: (
            <>
                Not everyone needs AWS or a cheap VPS. We design based on real traffic, user locations, and cost vs. reliability. We build what fits your product, <span className="text-emerald-300">not just what is currently popular.</span>
            </>
        ),
    },
];

const SKILLS = [
    "System Architecture",
    "Performance Engineering",
    "High-performance VPS Clusters",
    "OpenStack Orchestration",
    "Observability & Reliability",
    "Frontend Optimization",
    "Database Tuning (SQL/NoSQL)",
    "DevOps Automation",
];

const TARGET_PROFILES = [
    "E-commerce platforms needing stable checkout",
    "SaaS products scaling predictably",
    "Internal CRM & Admin tools",
    "High-traffic campaign sites",
    "Legacy infrastructure migrations",
];

export default function AboutClient() {
    return (
        <main className="min-h-screen bg-[#020307] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-50 font-sans">
            {/* --- Ambient Background --- */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <div className="absolute top-[10%] right-[0%] h-[600px] w-[600px] rounded-full bg-emerald-900/10 blur-[120px]" />
                <div className="absolute bottom-[0%] left-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-900/10 blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            <Navbar />

            {/* --- Hero Section --- */}
            <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </span>
                            About OptyxStack
                        </div>

                        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                            We help teams <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">fix slow systems</span> and build infrastructure they can trust.
                        </h1>

                        <div className="mt-8 border-l-2 border-white/10 pl-6">
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Most companies don't suffer because of a single "bug". They suffer because their website, API, database, and infrastructure have grown in fragments over years.
                            </p>
                            <p className="mt-4 text-base text-slate-400">
                                Things get slow. Deployments get risky. No one is sure who "owns" what. OptyxStack exists to be the external team that turns this into a fast, stable, and predictable system.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Mission Banner --- */}
            <section className="relative z-10 border-y border-white/5 bg-white/[0.02]">
                <div className="mx-auto max-w-7xl px-6 py-16 text-center">
                    <div className="mx-auto max-w-2xl">
                        <div className="mb-4 text-[10px] uppercase tracking-[0.22em] text-slate-500">
                            Our Core Mission
                        </div>
                        <h2 className="text-2xl font-medium text-white md:text-3xl">
                            "Make your entire stack — from frontend to infrastructure — feel calm, fast, and scalable."
                        </h2>
                    </div>
                </div>
            </section>

            {/* --- Philosophy Grid --- */}
            <section className="relative z-10 py-24 bg-[#05060A]">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl font-semibold text-white">Our Work Philosophy</h2>
                        <p className="mt-3 text-sm text-slate-400 max-w-xl">
                            We don't do band-aid fixes. We apply a structured engineering mindset to performance and operations.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {PHILOSOPHY_POINTS.map((point) => (
                            <div
                                key={point.id}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] hover:border-white/20"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl font-bold font-mono text-slate-500 group-hover:text-emerald-500/20 transition-colors">
                                    {point.id}
                                </div>

                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
                                    <point.icon className="h-6 w-6" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-4">
                                    {point.title}
                                </h3>
                                <p className="text-sm leading-7 text-slate-300">
                                    {point.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Process Timeline --- */}
            <section className="relative z-10 py-24 border-t border-white/5 bg-[#030408]">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-[1fr,2fr] gap-16">
                        <div>
                            <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-400 mb-2 font-semibold">
                                How We Engage
                            </div>
                            <h2 className="text-3xl font-semibold text-white mb-6">
                                A process built on clarity, not guesswork.
                            </h2>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                We move from understanding the risks to rebuilding the core, and finally taking over the operations so you can focus on product features.
                            </p>
                        </div>

                        <div className="space-y-12 border-l border-white/10 pl-8 md:pl-12 relative">
                            {[
                                {
                                    phase: "Phase 1",
                                    title: "Discovery & Full-Stack Audit",
                                    desc: "We understand your product, map bottlenecks, and measure what matters: speed, stability, cost, and risk. You get a clear 30–60 day plan, not generic advice."
                                },
                                {
                                    phase: "Phase 2",
                                    title: "Architecture & Rebuild",
                                    desc: "We clean up the architecture, fix critical paths, and rebuild parts holding you back. Your product becomes faster, safer, and easier to evolve."
                                },
                                {
                                    phase: "Phase 3",
                                    title: "Optimize, Operate & Host",
                                    desc: "We run your stack day-to-day: monitoring, backups, incident response, and tuning. It's like having a full DevOps/SRE team without hiring one."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="relative">
                                    <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-2 border-[#030408] bg-emerald-500" />
                                    <div className="font-mono text-xs text-emerald-400 mb-1">{item.phase}</div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-400 max-w-xl leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Team & Expertise --- */}
            <section className="relative z-10 py-24 bg-[#05060A]">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 overflow-hidden relative">
                        {/* Decorative Blur */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

                        <div className="grid lg:grid-cols-2 gap-12">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Terminal className="h-5 w-5 text-slate-400" />
                                    <h2 className="text-2xl font-semibold text-white">The Team Behind OptyxStack</h2>
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                                    We don't outsource, template, or mass-produce solutions. Every system we touch is treated as mission-critical.
                                </p>
                                <div className="space-y-4">
                                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                                        We work typically with
                                    </div>
                                    <ul className="space-y-2">
                                        {TARGET_PROFILES.map((profile, i) => (
                                            <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                                                <span className="mt-1 h-1 w-1 rounded-full bg-emerald-400" />
                                                {profile}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div className="bg-[#020305] border border-white/10 rounded-xl p-6 font-mono text-[11px] md:text-xs leading-6 text-slate-400 shadow-2xl">
                                    <div className="flex gap-1.5 mb-4 border-b border-white/5 pb-4">
                                        <div className="h-2.5 w-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                                        <span className="ml-2 text-slate-600">optyx-core-skills</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                        {SKILLS.map((skill, i) => (
                                            <div key={i} className="flex items-center gap-2 hover:text-emerald-300 transition-colors cursor-default">
                                                <span className="text-slate-600">{">"}</span>
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-white/5 text-emerald-400 animate-pulse">
                                        _ready_to_deploy
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Why Choose Us (Checklist) --- */}
            <section className="relative z-10 py-24 border-t border-white/5 bg-[#020307]">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-semibold text-white mb-6">
                                Why companies choose OptyxStack
                            </h2>
                            <p className="text-sm text-slate-400 mb-8">
                                If your system feels slow, fragile, or expensive to maintain, we fix that. We combine deep engineering with business sense to give you a platform you can trust.
                            </p>
                            <a href="/services/system-audit" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 hover:text-emerald-300 transition-colors">
                                Start with an audit <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                        <div className="grid gap-4">
                            {[
                                "We solve problems fast — without excuses",
                                "Deep engineering combined with business sense",
                                "We take full responsibility for the system",
                                "One partner instead of 4–6 different agencies",
                                "Long-term partnership & continuous improvement",
                                "Handling both software and infrastructure"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 rounded-lg border border-white/5 bg-white/[0.01] p-4">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                    <span className="text-sm text-slate-200">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="relative z-10 py-28 border-t border-white/5 bg-[#05060A]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05),_transparent_70%)]" />
                <div className="mx-auto max-w-3xl px-6 text-center relative">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                        <Zap className="h-8 w-8 text-emerald-400" fill="currentColor" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                        Let's make your stack <br />
                        <span className="text-emerald-400">fast, stable, and scalable.</span>
                    </h2>
                    <p className="text-sm text-slate-400 mb-10 max-w-xl mx-auto">
                        Tell us where it hurts — and we'll bring a clear plan. No black boxes, just good engineering.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="h-12 w-full sm:w-auto rounded-full bg-emerald-400 px-8 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_18px_40px_rgba(16,185,129,0.35)] transition-all hover:bg-emerald-300 hover:scale-105">
                            Book a Discovery Call
                        </button>
                        <button className="h-12 w-full sm:w-auto rounded-full border border-white/10 bg-white/5 px-8 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-white/10">
                            View Case Studies
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

