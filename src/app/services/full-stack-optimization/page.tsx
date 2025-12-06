"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Icons ---
const LayersIcon = () => (
    <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
);

const ServerIcon = () => (
    <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
);

const CheckIcon = () => (
    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const AlertIcon = () => (
    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

const DatabaseIcon = () => (
    <svg className="w-5 h-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
);

export default function FullStackOptimizationPage() {
    return (
        <main className="min-h-screen bg-[#030014] text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-50 font-sans">
            {/* --- Deep Space Background --- */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-25%] left-[25%] h-[600px] w-[600px] rounded-full bg-indigo-800/20 blur-[130px]" />
                <div className="absolute bottom-[-20%] right-[10%] h-[500px] w-[500px] rounded-full bg-violet-900/20 blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]" />
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <Navbar />

            {/* ✅ 1. HERO SECTION */}
            <section className="relative z-10 pt-32 pb-20 lg:pt-44 lg:pb-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-5xl text-center">
                        {/* Badge */}
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-300">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
                            </span>
                            Enterprise Grade
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-[4rem] mb-8">
                            Full-Stack System Optimization <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-violet-300">
                                From Audit to Scalable Production
                            </span>
                        </h1>

                        <p className="text-xl sm:text-2xl font-medium text-slate-300 mb-8 max-w-3xl mx-auto">
                            End-to-end performance optimization across frontend, backend, database, and multi-layer infrastructure — built for real traffic and real growth.
                        </p>

                        <div className="relative mb-12 p-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-violet-500/20 max-w-4xl mx-auto">
                            <div className="bg-[#050314]/90 backdrop-blur-sm rounded-xl p-6 md:p-8">
                                <p className="text-base text-slate-400 leading-relaxed italic">
                                    "We don’t just speed up your website. We audit everything, optimize everything, and rebuild your system to operate reliably at scale — from application code to multi-node backend and database infrastructure."
                                </p>
                            </div>
                        </div>

                        {/* Common Problems */}
                        <div className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto mb-12 text-left">
                            {[
                                "Website is fast on low traffic but collapses under load",
                                "CPU, RAM, or database spikes during campaigns",
                                "Expensive servers but poor real-world performance",
                                "Random slowdowns with no clear root cause",
                                "Scaling increases cost but not stability",
                            ].map((prob, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl border border-red-500/10 bg-red-500/5 hover:bg-red-500/10 transition-colors">
                                    <div className="mt-0.5"><AlertIcon /></div>
                                    <span className="text-sm text-slate-300 font-medium">{prob}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                            <a
                                href="#contact"
                                className="h-14 rounded-full bg-indigo-500 px-10 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all hover:bg-indigo-400 hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] flex items-center justify-center"
                            >
                                Start with a Full System Audit
                            </a>
                            <span className="text-sm text-slate-500 font-medium">Projects from $800 · Enterprise-grade approach</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 2. WHAT "FULL-STACK" MEANS */}
            <section className="relative z-10 border-t border-white/5 bg-[#050314] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">
                                What “Full-Stack Optimization” Really Means
                            </h2>
                            <p className="text-slate-400 mb-6 text-lg leading-relaxed">
                                Unlike basic website tuning, Full-Stack System Optimization is a complete <strong className="text-indigo-300">performance and infrastructure transformation</strong>.
                            </p>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                We don’t optimize “features”. We optimize how your entire system behaves under real production load.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Deep technical audit (A–Z)",
                                    "Real optimization across all layers",
                                    "Infrastructure redesign for scalability",
                                    "Multi-instance backend & database deployment",
                                    "Verified results with measurable benchmarks",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]" />
                                        <span className="text-slate-200 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual Card */}
                        <div className="grid gap-5">
                            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <LayersIcon />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-4">What You Will Get</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Complete technical audit across all layers",
                                        "Fully optimized application stack",
                                        "Scalable multi-node backend architecture",
                                        "Hardened, high-performance database system",
                                        "Significantly improved speed & uptime",
                                        "Production-ready infrastructure layout",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                            <div className="mt-0.5 text-emerald-400"><CheckIcon/></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 3. DETAILED SCOPE (A-Z) */}
            <section className="relative z-10 border-t border-white/5 bg-[#030014] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Full Scope — From A to Z</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            This is not a partial service. We cover every performance-critical layer of your system.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1. Audit */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 p-8 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 mb-4">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                                    <span className="text-xl font-bold">1</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Full System Audit (Mandatory First Step)</h3>
                                    <p className="text-sm text-indigo-200">We analyze your system in real production conditions.</p>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { title: "Frontend Audit", items: ["Core Web Vitals", "Rendering strategy", "Asset pipeline", "CDN behavior"] },
                                    { title: "Backend Audit", items: ["Request lifecycle tracing", "CPU/RAM usage", "Concurrency handling", "Cache effectiveness"] },
                                    { title: "Database Audit", items: ["Slow queries", "Index inefficiencies", "Lock contention", "Connection pooling"] },
                                    { title: "Infrastructure Audit", items: ["Disk I/O performance", "Network latency", "Load balancing", "Single-point-of-failure"] },
                                ].map((cat, idx) => (
                                    <div key={idx}>
                                        <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">{cat.title}</h4>
                                        <ul className="space-y-1.5">
                                            {cat.items.map((it, i) => (
                                                <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                                                    <span className="mt-1 h-1 w-1 rounded-full bg-indigo-500"></span> {it}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. Frontend */}
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                            <div className="text-indigo-400 mb-4 font-mono text-xs">02</div>
                            <h3 className="text-lg font-bold text-white mb-4">Full Frontend Optimization</h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>• Rendering & hydration optimization</li>
                                <li>• Asset loading strategy</li>
                                <li>• Advanced caching rules</li>
                                <li>• Security-safe CDN tuning</li>
                                <li>• Mobile & low-bandwidth optimization</li>
                            </ul>
                        </div>

                        {/* 3. Backend */}
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                            <div className="text-indigo-400 mb-4 font-mono text-xs">03</div>
                            <h3 className="text-lg font-bold text-white mb-4">Backend & API Optimization</h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>• Request processing pipeline tuning</li>
                                <li>• Thread & worker model optimization</li>
                                <li>• Cache layer integration (Redis)</li>
                                <li>• Background jobs optimization</li>
                                <li>• High-concurrency stability</li>
                            </ul>
                        </div>

                        {/* 4. Database */}
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                            <div className="text-indigo-400 mb-4 font-mono text-xs">04</div>
                            <h3 className="text-lg font-bold text-white mb-4">Database Performance</h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>• Query refactoring & Index restructuring</li>
                                <li>• Connection pool optimization</li>
                                <li>• Read/write workload separation</li>
                                <li>• Lock & contention mitigation</li>
                                <li>• Replication setup (when required)</li>
                            </ul>
                        </div>

                        {/* 5. Infra (Highlight) */}
                        <div className="md:col-span-2 lg:col-span-2 p-8 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-transparent">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-violet-400 font-mono text-xs">05</div>
                                <span className="px-2 py-0.5 rounded text-[10px] bg-violet-500 text-white font-bold uppercase">Enterprise Grade</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Multi-Layer Infrastructure Deployment</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-sm font-semibold text-violet-200 mb-2">Backend Infrastructure</h4>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        <li>• Multi-instance backend nodes</li>
                                        <li>• Load balancer integration</li>
                                        <li>• Horizontal scaling strategy</li>
                                        <li>• Zero-downtime deployment flow</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-violet-200 mb-2">Database & Security</h4>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        <li>• Primary–Replica topology & Failover</li>
                                        <li>• Automated backup & DR planning</li>
                                        <li>• Private networking for internal services</li>
                                        <li>• Firewall hardening & DDoS mitigation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 6. Scalability */}
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                            <div className="text-indigo-400 mb-4 font-mono text-xs">06</div>
                            <h3 className="text-lg font-bold text-white mb-4">Scalability & HA Design</h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>• Traffic distribution modeling</li>
                                <li>• Peak-load simulation</li>
                                <li>• Auto-scaling strategy design</li>
                                <li>• Fault-tolerant architecture review</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 4. PROCESS */}
            <section className="relative z-10 border-t border-white/5 bg-[#050314] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">End-to-End Delivery Process</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-4 max-w-6xl mx-auto">
                        {[
                            { step: "01", title: "Deep Audit", desc: "Logs, metrics, traffic patterns, and production behavior analysis." },
                            { step: "02", title: "Architecture Design", desc: "Technical blueprint for frontend, backend, DB, and infrastructure." },
                            { step: "03", title: "Implementation", desc: "Safe, staged deployment with rollback strategy and migration." },
                            { step: "04", title: "Load Test & Handover", desc: "Stress testing under real traffic, final documentation & operational guide." },
                        ].map((item, idx) => (
                            <div key={idx} className="relative group">
                                <div className="mb-4 h-0.5 w-full bg-white/10 group-hover:bg-indigo-500 transition-colors" />
                                <div className="text-3xl font-bold text-white/10 group-hover:text-indigo-500 transition-colors mb-2">{item.step}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ 5. IMPACT TABLE */}
            <section className="relative z-10 border-t border-white/5 bg-[#030014] py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Sample Business Impact</h2>
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#060418]">
                        <table className="w-full">
                            <thead>
                            <tr className="border-b border-white/10 bg-white/[0.02]">
                                <th className="px-6 py-5 text-left text-sm font-semibold text-slate-300">Metric</th>
                                <th className="px-6 py-5 text-center text-sm font-semibold text-red-400">Before</th>
                                <th className="px-6 py-5 text-center text-sm font-semibold text-emerald-400">After</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                            {[
                                { metric: "TTFB", before: "1.4s", after: "220ms" },
                                { metric: "Page Load", before: "6.8s", after: "1.7s" },
                                { metric: "API Throughput", before: "420 req/s", after: "2,800 req/s" },
                                { metric: "Database CPU", before: "92%", after: "48%" },
                                { metric: "Monthly Infra Cost", before: "$620", after: "$360" },
                            ].map((row, idx) => (
                                <tr key={idx} className="hover:bg-white/[0.02]">
                                    <td className="px-6 py-5 text-sm font-medium text-white">{row.metric}</td>
                                    <td className="px-6 py-5 text-center text-sm text-slate-400 font-mono">{row.before}</td>
                                    <td className="px-6 py-5 text-center text-sm text-emerald-400 font-mono font-bold">{row.after}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ✅ 6. AUDIENCE & PRICING */}
            <section className="relative z-10 border-t border-white/5 bg-[#050314] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Who this is for */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Who This Service Is For</h2>
                            <div className="space-y-6">
                                <div className="p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                                    <h3 className="font-semibold text-emerald-400 mb-3">✅ Ideal For:</h3>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        <li>• SaaS platforms</li>
                                        <li>• High-traffic e-commerce</li>
                                        <li>• Startup systems preparing to scale</li>
                                        <li>• Data-driven web platforms</li>
                                        <li>• Enterprise internal systems</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5">
                                    <h3 className="font-semibold text-red-400 mb-3">❌ Not Recommended For:</h3>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        <li>• Static websites</li>
                                        <li>• Small blogs with low traffic</li>
                                        <li>• Shared hosting environments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Pricing Model (Project-Based)</h2>
                            <div className="p-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-900/20 to-[#0A0A0F]">
                                <p className="text-slate-400 mb-6">
                                    We do not apply fixed pricing due to system complexity.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                        <span className="text-white">Small system</span>
                                        <span className="font-mono text-indigo-300">$800 – $1,200</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                        <span className="text-white">Mid-scale system</span>
                                        <span className="font-mono text-indigo-300">$1,500 – $2,500</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-3">
                                        <span className="text-white">Large infrastructure</span>
                                        <span className="font-mono text-indigo-300">Custom Quote</span>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-lg p-4 mb-6">
                                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Price depends on:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["System size", "Traffic volume", "DB complexity", "Infra topology"].map(tag =>(
                                            <span key={tag} className="px-2 py-1 rounded bg-white/10 text-xs text-white">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full py-4 rounded-xl bg-white text-black font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors">
                                    Get a Custom Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 7. FAQ */}
            <section className="relative z-10 border-t border-white/5 bg-[#030014] py-24">
                <div className="mx-auto max-w-3xl px-6">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Do you require full server access?", a: "Yes, for full-stack optimization, root or equivalent access is required to analyze and configure the OS, database, and web server layers." },
                            { q: "Will this affect my live system?", a: "We prioritize uptime. All changes follow a staging → validation → production deployment flow. Critical changes are performed during low-traffic windows." },
                            { q: "How long does a full project take?", a: "Typically 2–4 weeks, depending on the scope of the audit and the complexity of the necessary re-architecture." },
                            { q: "Do you provide ongoing support?", a: "Yes. We offer Managed VPS, Managed Database, and Maintenance Retainer services to ensure long-term stability." },
                            { q: "Is there any performance guarantee?", a: "We guarantee measurable improvement based on the initial benchmarks established during the Audit phase." },
                        ].map((item, idx) => (
                            <details key={idx} className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.04]">
                                <summary className="cursor-pointer text-base font-medium text-white flex items-center justify-between">
                                    <span>{item.q}</span>
                                    <span className="text-indigo-400 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-sm text-slate-400 leading-relaxed">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ 8. FINAL CTA */}
            <section id="contact" className="relative z-10 border-t border-white/5 bg-[#02010a] py-28">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#0A0A0F] to-[#05050A] p-12">
                        <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

                        <h2 className="text-3xl font-bold text-white mb-4">Transform Your System from A to Z</h2>
                        <p className="text-slate-400 mb-8">Audit everything. Optimize everything. Scale with confidence.</p>

                        <div className="flex flex-col items-center gap-4">
                            <button className="h-14 rounded-lg bg-indigo-500 px-10 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all hover:scale-105 hover:bg-indigo-400">
                                Request Full System Audit
                            </button>
                            <p className="text-xs text-slate-500 uppercase tracking-widest">Projects from $800 · Enterprise-grade delivery</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 9. CROSS-SELL */}
            <section className="relative z-10 bg-[#02010a] pb-20 pt-10">
                <div className="mx-auto max-w-7xl px-6 border-t border-white/5 pt-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-white/[0.03] p-8 border border-white/5">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-1">Already optimized your system?</h3>
                            <p className="text-sm text-slate-400">Ensure long-term stability with our managed services.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {["Managed VPS", "Managed Database", "Monthly Retainer"].map((srv, i) => (
                                <a key={i} href="#" className="px-4 py-2 rounded-lg border border-white/10 bg-black/50 text-sm text-slate-300 hover:text-white hover:border-indigo-500/50 transition-colors">
                                    {srv}
                                </a>
                            ))}
                            <a href="#" className="px-4 py-2 rounded-lg bg-white/10 text-sm text-white font-medium hover:bg-white/20 transition-colors">
                                View Managed Services &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}