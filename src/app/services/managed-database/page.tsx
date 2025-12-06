"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Icons ---
const DatabaseIcon = () => (
    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
);

const ShieldIcon = () => (
    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const RefreshIcon = () => (
    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
);

const AlertIcon = () => (
    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

const CheckIcon = () => (
    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

export default function ManagedDatabasePage() {
    return (
        <main className="min-h-screen bg-[#050402] text-slate-200 selection:bg-amber-500/30 selection:text-amber-50 font-sans">
            {/* --- Warm Glow Background --- */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-20%] left-[10%] h-[500px] w-[500px] rounded-full bg-amber-700/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-orange-800/10 blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            <Navbar />

            {/* ✅ 1. HERO SECTION */}
            <section className="relative z-10 pt-32 pb-20 lg:pt-44 lg:pb-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        {/* Badge */}
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-400">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" />
                            </span>
                            Mission Critical Storage
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.6rem] mb-6">
                            Managed Database <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200">
                                High Performance, Zero Headache
                            </span>
                        </h1>

                        <p className="text-xl sm:text-2xl font-medium text-slate-300 mb-6">
                            We design, operate, secure, and optimize your database infrastructure — so your application stays fast, stable, and always available.
                        </p>

                        <p className="text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            From single-node production databases to replicated, fault-tolerant, multi-layer database clusters, we manage everything: backups, performance tuning, monitoring, and disaster recovery.
                        </p>

                        {/* Problem Grid */}
                        <div className="grid gap-3 sm:grid-cols-2 max-w-3xl mx-auto mb-10 text-left">
                            {[
                                "Slow queries and random timeouts",
                                "High CPU & I/O usage on DB server",
                                "Connection pool exhaustion spikes",
                                "Risk of data loss (poor backups)",
                                "No real failover or recovery plan",
                            ].map((prob, idx) => (
                                <div key={idx} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-red-500/15 bg-red-500/5 hover:bg-red-500/10 transition-colors">
                                    <div className="flex-shrink-0 text-red-400"><AlertIcon /></div>
                                    <span className="text-sm text-slate-300">{prob}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#pricing"
                                className="h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 text-sm font-bold uppercase tracking-wide text-black shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.55)] hover:scale-105 flex items-center justify-center"
                            >
                                Get a Managed Database Plan
                            </a>
                            <span className="text-sm text-slate-500 font-medium">From $50/month · Production-ready operations</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 2. WHAT IS MANAGED DATABASE */}
            <section className="relative z-10 border-t border-white/5 bg-[#0A0907] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-semibold text-white mb-6">
                                What Managed Database Really Means
                            </h2>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                Managed Database is not just “hosting a database server”. It is a <strong className="text-amber-400">full operational responsibility</strong> for your data layer.
                            </p>
                            <p className="text-slate-300 mb-6 italic border-l-2 border-amber-500 pl-4">
                                You focus on building your product. We take full responsibility for keeping your data fast, safe, and online.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Database performance",
                                    "Availability & replication",
                                    "Security & access control",
                                    "Backup & recovery",
                                    "Monitoring & incident response",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                                        <span className="text-sm text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual Card */}
                        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <DatabaseIcon />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-6">What You Will Get</h3>
                            <ul className="space-y-4">
                                {[
                                    "Fully managed MySQL / PostgreSQL / MariaDB",
                                    "Continuous monitoring (24/7)",
                                    "Automated daily backups & snapshots",
                                    "Performance tuning & query optimization",
                                    "Replication & HA setup (if required)",
                                    "Security hardening & access control",
                                    "On-call database engineers for critical incidents",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                        <div className="mt-0.5"><CheckIcon/></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 3. ENGINE SUPPORT */}
            <section className="relative z-10 border-t border-white/5 bg-[#050402] py-20">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <h2 className="text-2xl font-semibold text-white mb-10">Supported Database Engines</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {["MySQL / Percona", "PostgreSQL", "MariaDB", "Redis (Cache/Store)"].map((engine, idx) => (
                            <div key={idx} className="px-8 py-4 rounded-xl border border-white/10 bg-white/[0.02] text-slate-300 font-medium hover:border-amber-500/50 hover:text-amber-400 transition-colors cursor-default">
                                {engine}
                            </div>
                        ))}
                        <div className="px-8 py-4 rounded-xl border border-dashed border-white/20 text-slate-500 font-medium">
                            Custom Engines Available
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 4. DETAILED SCOPE */}
            <section className="relative z-10 border-t border-white/5 bg-[#0A0907] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-semibold text-white mb-4">Full Scope of Management (A–Z)</h2>
                        <p className="text-slate-400">We handle the entire lifecycle of your database infrastructure.</p>
                    </div>

                    <div className="space-y-6 max-w-5xl mx-auto">
                        {/* 1. Audit - Full Width */}
                        <div className="p-8 rounded-2xl border border-amber-500/30 bg-amber-900/10">
                            <div className="flex items-start md:items-center gap-4 mb-4">
                                <span className="flex h-8 w-8 items-center justify-center rounded bg-amber-500 text-black font-bold text-sm">01</span>
                                <h3 className="text-xl font-bold text-white">Database Audit & Baseline (Initial Phase)</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 mt-6">
                                <div>
                                    <p className="text-sm text-amber-200/80 uppercase tracking-wider mb-2 font-semibold">We Analyze:</p>
                                    <ul className="space-y-1 text-sm text-slate-300">
                                        <li>• Query execution & index quality</li>
                                        <li>• Locking, contention & connection pool</li>
                                        <li>• Storage performance (IOPS, latency)</li>
                                        <li>• Backup integrity & restore testing</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-sm text-amber-200/80 uppercase tracking-wider mb-2 font-semibold">You Receive:</p>
                                    <ul className="space-y-1 text-sm text-slate-300">
                                        <li>• Full health report</li>
                                        <li>• Priority risk ranking</li>
                                        <li>• Optimization roadmap</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* 2. Performance */}
                            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-amber-500 font-mono text-xs">02</span>
                                    <h3 className="text-lg font-semibold text-white">Performance Tuning</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-slate-400">
                                    <li>• Query refactoring & execution plan optimization</li>
                                    <li>• Index restructuring & Buffer/cache tuning</li>
                                    <li>• Connection pool optimization</li>
                                    <li>• Slow query elimination</li>
                                </ul>
                            </div>

                            {/* 3. Replication */}
                            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-amber-500 font-mono text-xs">03</span>
                                    <h3 className="text-lg font-semibold text-white">Replication & HA</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-slate-400">
                                    <li>• Primary–Replica replication setup</li>
                                    <li>• Automatic or manual failover strategy</li>
                                    <li>• Read replica routing configuration</li>
                                    <li>• Zero-data-loss design (where feasible)</li>
                                </ul>
                            </div>

                            {/* 4. Security */}
                            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-amber-500 font-mono text-xs">04</span>
                                    <h3 className="text-lg font-semibold text-white">Security & Access</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-slate-400">
                                    <li>• Role-based access control & IP whitelisting</li>
                                    <li>• Encryption at rest & in transit</li>
                                    <li>• Audit logs & intrusion detection</li>
                                    <li>• Protection against injection attacks</li>
                                </ul>
                            </div>

                            {/* 5. Backup */}
                            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-amber-500 font-mono text-xs">05</span>
                                    <h3 className="text-lg font-semibold text-white">Backup & Disaster Recovery</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-slate-400">
                                    <li>• Automated daily backups & On-demand snapshots</li>
                                    <li>• Offsite backup storage</li>
                                    <li>• Periodic restore testing</li>
                                    <li>• Disaster recovery planning</li>
                                </ul>
                            </div>
                        </div>

                        {/* 6. Monitoring & Updates (Combined) */}
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                            <h3 className="text-lg font-semibold text-white mb-4">Monitoring, Response & Maintenance</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <ul className="space-y-2 text-sm text-slate-400">
                                    <li>• 24/7 uptime & performance monitoring</li>
                                    <li>• Threshold-based alerts</li>
                                    <li>• On-call response for critical failures</li>
                                </ul>
                                <ul className="space-y-2 text-sm text-slate-400">
                                    <li>• Minor version updates & Security patches</li>
                                    <li>• Planned maintenance windows</li>
                                    <li>• Zero-downtime upgrade strategies</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 5. IMPACT TABLE */}
            <section className="relative z-10 border-t border-white/5 bg-[#050402] py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-semibold text-white mb-10 text-center">Sample Business Impact</h2>
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0F0E0B]">
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
                                { metric: "Avg Query Time", before: "420ms", after: "68ms" },
                                { metric: "Peak DB CPU", before: "91%", after: "47%" },
                                { metric: "Timeout Rate", before: "3.4%", after: "< 0.2%" },
                                { metric: "Restore Time (RTO)", before: "4 hours", after: "20 mins" },
                                { metric: "Monthly Outage", before: "Frequent", after: "Near-zero" },
                            ].map((row, idx) => (
                                <tr key={idx} className="hover:bg-white/[0.02]">
                                    <td className="px-6 py-5 text-sm font-medium text-white">{row.metric}</td>
                                    <td className="px-6 py-5 text-center text-sm text-slate-400 font-mono">{row.before}</td>
                                    <td className="px-6 py-5 text-center text-sm text-amber-400 font-mono font-bold">{row.after}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ✅ 6. PRICING */}
            <section id="pricing" className="relative z-10 border-t border-white/5 bg-[#0A0907] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-semibold text-white mb-4">Pricing (Monthly Retainer)</h2>
                        <p className="text-slate-400">Pricing depends on data size, traffic volume, and complexity.</p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3 max-w-6xl mx-auto">
                        {/* Basic */}
                        <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all">
                            <h3 className="text-xl font-semibold text-white mb-2">Managed Basic</h3>
                            <div className="text-3xl font-bold text-amber-400 mb-4">$50<span className="text-sm font-normal text-slate-400">/mo</span></div>
                            <ul className="mb-8 space-y-3 flex-1">
                                {["Single-node database", "Daily backups", "Basic monitoring", "Monthly health check"].map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                        <div className="h-1 w-1 rounded-full bg-slate-500"></div>{f}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full rounded-lg bg-white/10 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/20 transition-colors">Select Plan</button>
                        </div>

                        {/* Pro */}
                        <div className="relative flex flex-col rounded-2xl border border-amber-500/40 bg-gradient-to-b from-amber-900/20 to-transparent p-8 shadow-xl shadow-amber-900/10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Recommended</div>
                            <h3 className="text-xl font-semibold text-white mb-2">Managed Pro</h3>
                            <div className="text-3xl font-bold text-amber-400 mb-4">$120<span className="text-sm font-normal text-slate-400">/mo</span></div>
                            <ul className="mb-8 space-y-3 flex-1">
                                {["Everything in Basic", "Performance tuning", "Advanced monitoring", "On-demand backups", "Priority support"].map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-white">
                                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>{f}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full rounded-lg bg-amber-500 py-3 text-sm font-bold uppercase tracking-wide text-black hover:bg-amber-400 transition-colors">Select Plan</button>
                        </div>

                        {/* HA */}
                        <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all">
                            <h3 className="text-xl font-semibold text-white mb-2">High Availability</h3>
                            <div className="text-3xl font-bold text-amber-400 mb-4">$200+<span className="text-sm font-normal text-slate-400">/mo</span></div>
                            <ul className="mb-8 space-y-3 flex-1">
                                {["Replication & failover", "Multi-node topology", "Disaster recovery planning", "24/7 on-call support", "Custom SLA"].map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                        <div className="h-1 w-1 rounded-full bg-slate-500"></div>{f}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full rounded-lg bg-white/10 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/20 transition-colors">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 7. WHY DIFFERENT */}
            <section className="relative z-10 border-t border-white/5 bg-[#050402] py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-2xl font-semibold text-white mb-8">Why Our Managed Database is Different</h2>
                    <div className="grid sm:grid-cols-2 gap-4 text-left">
                        {[
                            "Operated by real database engineers",
                            "Performance-driven, not just “uptime-driven”",
                            "Production-safe procedures",
                            "Zero generic templates",
                            "Designed for real business workloads",
                            "Supports complex custom queries",
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                <div className="text-amber-400"><CheckIcon/></div>
                                <span className="text-sm text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ 8. FAQ */}
            <section className="relative z-10 border-t border-white/5 bg-[#0A0907] py-24">
                <div className="mx-auto max-w-3xl px-6">
                    <h2 className="text-3xl font-semibold text-white mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Do you take full responsibility for production databases?", a: "Yes. Under a managed agreement and SLA, we operate your database as a mission-critical system." },
                            { q: "Do you support database migration?", a: "Yes. Migration is available as an add-on or part of a full optimization project." },
                            { q: "Will you optimize queries and application usage?", a: "Yes. We work closely with backend teams to optimize real workloads, suggesting index changes or query rewrites." },
                            { q: "Do you offer data retention and compliance support?", a: "Yes, we can configure retention policies and encryptions to meet specific regulatory requirements." },
                            { q: "Can I combine this with Managed VPS?", a: "Yes. Most clients run Managed Database together with Managed VPS for full-stack reliability." },
                        ].map((item, idx) => (
                            <details key={idx} className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.04]">
                                <summary className="cursor-pointer text-base font-medium text-white flex items-center justify-between">
                                    <span>{item.q}</span>
                                    <span className="text-amber-400 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-sm text-slate-400 leading-relaxed">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ 9. FINAL CTA */}
            <section className="relative z-10 border-t border-white/5 bg-[#050402] py-28">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#0F0E0B] to-[#050402] p-12">
                        <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

                        <h2 className="text-3xl font-semibold text-white mb-4">Let Your Database Run at Peak Performance</h2>
                        <p className="text-slate-400 mb-8">Without the operational risk.</p>

                        <div className="flex flex-col items-center gap-4">
                            <button className="h-14 rounded-lg bg-amber-500 px-10 text-sm font-bold uppercase tracking-widest text-black shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all hover:scale-105 hover:bg-amber-400">
                                Get Your Managed Database Plan
                            </button>
                            <p className="text-xs text-slate-500 uppercase tracking-widest">From $50/month · 24/7 Monitoring</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 10. CROSS-SELL */}
            <section className="relative z-10 bg-[#050402] pb-20 pt-10">
                <div className="mx-auto max-w-7xl px-6 border-t border-white/5 pt-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-white/[0.03] p-8 border border-white/5">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-1">Need full infrastructure management?</h3>
                            <p className="text-sm text-slate-400">Run your entire platform on a fully managed, performance-optimized infrastructure.</p>
                        </div>
                        <div>
                            <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-sm text-white font-medium hover:bg-white/20 transition-colors">
                                Explore Managed VPS <span className="text-amber-400">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}