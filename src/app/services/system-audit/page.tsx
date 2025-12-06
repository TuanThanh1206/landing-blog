"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Icons
const CheckIcon = () => (
    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const XIcon = () => (
    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function SystemAuditPage() {
    return (
        <main className="min-h-screen bg-[#020307] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-50 font-sans">
            {/* --- Ambient Background --- */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-20%] left-[10%] h-[520px] w-[520px] rounded-full bg-emerald-700/20 blur-[120px]" />
                <div className="absolute bottom-[-15%] right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-700/20 blur-[110px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_60%)] opacity-60" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            <Navbar />

            {/* ✅ 1. HERO SECTION – HIT THE PAIN POINTS HARD */}
            <section className="relative z-10 pt-32 pb-20 lg:pt-44 lg:pb-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </span>
                            System & Performance Audit
                        </div>

                        <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.6rem] mb-6">
                            System & Performance Audit for{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
                                High-Impact Websites
                            </span>
                        </h1>

                        <p className="text-xl sm:text-2xl font-medium text-slate-300 mb-4">
                            Identify bottlenecks. Reduce costs. Unlock real performance.
                        </p>

                        <p className="text-base text-slate-400 max-w-2xl mx-auto mb-10">
                            We analyze your entire system — frontend, backend, database, and infrastructure — to find what's truly slowing you down and how to fix it.
                        </p>

                        {/* Pain Points */}
                        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto mb-10 text-left">
                            {[
                                "Website loads slowly despite using CDN",
                                "CPU & RAM usage frequently spikes unexpectedly",
                                "Database timeouts, deadlocks, and slow queries",
                                "High server costs with disproportionate performance",
                            ].map((point, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                                    <div className="mt-0.5 text-red-400">⚠️</div>
                                    <span className="text-sm text-slate-300">{point}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#request-audit"
                                className="h-12 rounded-full bg-emerald-400 px-8 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_18px_40px_rgba(16,185,129,0.45)] transition-all hover:bg-emerald-300 hover:shadow-[0_22px_50px_rgba(16,185,129,0.65)] flex items-center justify-center"
                            >
                                Request Audit / Start Audit from $49
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 2. WHAT IS AN AUDIT – BUSINESS LANGUAGE */}
            <section className="relative z-10 border-t border-white/5 bg-[#05060A] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-3xl font-semibold text-white mb-6">
                            What is a System & Performance Audit?
                        </h2>
                        <div className="space-y-4 text-base leading-relaxed text-slate-300">
                            <p>
                                A <strong className="text-white">System & Performance Audit</strong> is a deep technical assessment of how your application, database, and infrastructure actually behave under real workloads.
                            </p>
                            <p>
                                We don't just "check settings". We measure real performance, trace bottlenecks, and quantify how much performance and cost you're currently losing.
                            </p>
                            <p className="text-slate-400 italic">
                                Think of it as a comprehensive health check for your entire tech stack — not just a quick scan, but a thorough analysis that reveals what's really happening under the hood.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 3. WHAT YOU RECEIVE */}
            <section className="relative z-10 border-t border-white/5 bg-[#040509] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white mb-4">
                            What You'll Receive After the Audit
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Actionable insights, not just technical jargon. Here's what you'll get:
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Full-system bottleneck map",
                                desc: "Visual map showing exactly where performance issues occur across your stack",
                            },
                            {
                                title: "Prioritized issue list by severity",
                                desc: "Prioritized list of issues with impact assessment and urgency ratings",
                            },
                            {
                                title: "Estimated performance improvement %",
                                desc: "Estimated performance improvement percentages for each optimization",
                            },
                            {
                                title: "Estimated infrastructure cost reduction %",
                                desc: "Projected cost savings from infrastructure optimization opportunities",
                            },
                            {
                                title: "Step-by-step optimization roadmap",
                                desc: "Step-by-step optimization roadmap with clear milestones and timelines",
                            },
                            {
                                title: "Data-driven basis for investment decisions",
                                desc: "Data-driven foundation for making informed investment decisions",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                            >
                                <div className="mb-3 flex items-center gap-3">
                                    <CheckIcon />
                                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                                </div>
                                <p className="text-sm text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ 4. DETAILED SCOPE (TECHNICAL) */}
            <section className="relative z-10 border-t border-white/5 bg-[#03040A] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white mb-4">
                            Detailed Audit Scope
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            For technical teams: Here's what we analyze in depth
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
                        {[
                            {
                                title: "🔹 Frontend Performance",
                                items: [
                                    "Core Web Vitals (LCP, CLS, INP)",
                                    "Bundle size & asset loading",
                                    "Rendering strategy",
                                    "CDN effectiveness",
                                ],
                            },
                            {
                                title: "🔹 Backend & API",
                                items: [
                                    "Request latency",
                                    "CPU/RAM usage pattern",
                                    "Concurrency & thread handling",
                                    "Cache hit ratio",
                                ],
                            },
                            {
                                title: "🔹 Database",
                                items: [
                                    "Slow queries",
                                    "Index usage",
                                    "Lock contention",
                                    "Connection pool",
                                ],
                            },
                            {
                                title: "🔹 Infrastructure & Network",
                                items: [
                                    "Disk I/O",
                                    "Network RTT",
                                    "Load balancer behavior",
                                    "Scaling limitation",
                                ],
                            },
                        ].map((category, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border border-white/10 bg-[#0A0A0F]"
                            >
                                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="flex items-start gap-2 text-sm text-slate-300">
                                            <span className="mt-1 text-emerald-400">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ 5. 4-STEP PROCESS */}
            <section className="relative z-10 border-t border-white/5 bg-[#05060A] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white mb-4">
                            Our 4-Step Audit Process
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            A structured approach that builds trust and delivers results
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                        {[
                            {
                                step: "01",
                                title: "Data Collection",
                                desc: "Access read-only logs, metrics, and traffic patterns. No disruption to your live system.",
                            },
                            {
                                step: "02",
                                title: "Deep Analysis",
                                desc: "Trace request lifecycle end-to-end. Detect bottlenecks with precision and context.",
                            },
                            {
                                step: "03",
                                title: "Impact Estimation",
                                desc: "Project performance gains and cost optimization potential with realistic numbers.",
                            },
                            {
                                step: "04",
                                title: "Audit Report & Consultation",
                                desc: "Receive comprehensive PDF report plus 1:1 technical review call to discuss findings.",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="relative p-6 rounded-2xl border border-white/8 bg-white/[0.02]"
                            >
                                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-3">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                                <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ 6. WHY AI/AUTOMATION IS NOT ENOUGH */}
            <section className="relative z-10 border-t border-white/5 bg-[#040509] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-3xl font-semibold text-white mb-6">
                            Why Automated Tools Are Not Enough
                        </h2>
                        <div className="space-y-6 text-base leading-relaxed text-slate-300">
                            <p>
                                Automated tools like Lighthouse, monitoring dashboards, and performance scanners are useful, but they have limitations:
                            </p>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
                                    <p className="font-semibold text-yellow-300 mb-2">Lighthouse only measures frontend</p>
                                    <p className="text-sm text-slate-400">It doesn't understand your backend architecture, database patterns, or infrastructure constraints.</p>
                                </div>
                                <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
                                    <p className="font-semibold text-yellow-300 mb-2">Monitoring only shows symptoms</p>
                                    <p className="text-sm text-slate-400">Metrics show what's happening, not why it's happening or how to fix it in your specific context.</p>
                                </div>
                                <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
                                    <p className="font-semibold text-yellow-300 mb-2">No tool understands actual architecture</p>
                                    <p className="text-sm text-slate-400">No automated tool can understand your unique workload patterns, business logic, or SaaS/eCommerce-specific requirements.</p>
                                </div>
                            </div>
                            <div className="mt-8 p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10">
                                <p className="font-semibold text-emerald-300 mb-2">Our Audit = Human Expertise + Real Data + Production Experience</p>
                                <p className="text-sm text-slate-300">
                                    We combine automated analysis with human insight, real-world deployment experience, and deep understanding of how systems actually behave under production loads.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 7. SAMPLE CASE "BEFORE / AFTER" */}
            <section className="relative z-10 border-t border-white/5 bg-[#05060A] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white mb-4">
                            Real Impact: Before & After
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Example results from a typical audit and optimization cycle
                        </p>
                    </div>

                    <div className="mx-auto max-w-4xl">
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0F]">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="border-b border-white/10 bg-white/[0.02]">
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Metric</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-red-400">Before Audit</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-emerald-400">After Optimization</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold text-cyan-400">Improvement</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                    {[
                                        { metric: "TTFB", before: "1.2s", after: "240ms", improvement: "80%" },
                                        { metric: "Page Load", before: "5.6s", after: "1.9s", improvement: "66%" },
                                        { metric: "CPU Avg", before: "85%", after: "42%", improvement: "51%" },
                                        { metric: "Server Cost", before: "$320/mo", after: "$180/mo", improvement: "44%" },
                                    ].map((row, idx) => (
                                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-white">{row.metric}</td>
                                            <td className="px-6 py-4 text-center text-sm text-slate-400 font-mono">{row.before}</td>
                                            <td className="px-6 py-4 text-center text-sm text-emerald-300 font-mono font-semibold">{row.after}</td>
                                            <td className="px-6 py-4 text-center text-sm text-cyan-300 font-semibold">{row.improvement}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="mt-6 text-center text-sm text-slate-500 italic">
                            * Results vary based on system complexity and current state. Actual improvements depend on specific bottlenecks identified.
                        </p>
                    </div>
                </div>
            </section>

            {/* ✅ 8. WHO IS THIS FOR? */}
            <section className="relative z-10 border-t border-white/5 bg-[#040509] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white mb-4">
                            Is This Service Right for You?
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                        {/* Suitable */}
                        <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10">
                            <div className="mb-6 flex items-center gap-3">
                                <CheckIcon />
                                <h3 className="text-xl font-semibold text-white">✅ Ideal For</h3>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "E-commerce platforms",
                                    "SaaS applications",
                                    "Websites with > 50,000 visits/month",
                                    "Startups preparing to scale",
                                    "Systems experiencing performance issues",
                                    "Teams planning infrastructure investments",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                                        <span className="mt-1 text-emerald-400">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Not Suitable */}
                        <div className="p-8 rounded-2xl border border-red-500/30 bg-red-500/10">
                            <div className="mb-6 flex items-center gap-3">
                                <XIcon />
                                <h3 className="text-xl font-semibold text-white">❌ Not Recommended For</h3>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Personal blogs",
                                    "Static landing pages",
                                    "New websites without traffic yet",
                                    "Simple brochure sites",
                                    "Projects in early development phase",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                                        <span className="mt-1 text-red-400">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 9. PRICING & PACKAGES */}
            <section id="pricing" className="relative z-10 border-t border-white/5 bg-[#030308] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-semibold text-white mb-4">
                            Audit Packages & Pricing
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Clear pricing with no hidden fees. Choose the depth of analysis that fits your needs.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3 max-w-6xl mx-auto">
                        {[
                            {
                                name: "Basic Audit",
                                price: "$49",
                                desc: "Frontend + Server overview",
                                turnaround: "48h turnaround",
                                features: [
                                    "Frontend performance analysis",
                                    "Server resource overview",
                                    "Basic bottleneck identification",
                                    "Summary report",
                                ],
                                highlight: false,
                            },
                            {
                                name: "Standard Audit",
                                price: "$99",
                                desc: "Full Frontend + Backend + DB",
                                turnaround: "72h turnaround",
                                features: [
                                    "Complete frontend analysis",
                                    "Backend & API deep dive",
                                    "Database performance review",
                                    "Bottleneck ranking by severity",
                                    "Detailed optimization roadmap",
                                ],
                                highlight: true,
                            },
                            {
                                name: "Advanced Audit",
                                price: "$199",
                                desc: "Full stack & infra deep dive",
                                turnaround: "5-7 days turnaround",
                                features: [
                                    "Complete full-stack analysis",
                                    "Infrastructure deep dive",
                                    "Impact estimation with projections",
                                    "1:1 technical consultation call",
                                    "Comprehensive PDF report",
                                    "Priority support",
                                ],
                                highlight: false,
                            },
                        ].map((pkg, idx) => (
                            <div
                                key={idx}
                                className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                                    pkg.highlight
                                        ? "bg-gradient-to-b from-white/[0.09] via-white/[0.03] to-transparent border border-emerald-400/40 ring-1 ring-emerald-400/30 shadow-[0_24px_80px_rgba(16,185,129,0.35)]"
                                        : "bg-white/[0.02] border border-white/8 hover:border-white/16 hover:bg-white/[0.04]"
                                }`}
                            >
                                {pkg.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-black">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-semibold text-white mb-2">{pkg.name}</h3>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-4xl font-bold text-white">{pkg.price}</span>
                                    </div>
                                    <p className="text-sm text-slate-400 mb-1">{pkg.desc}</p>
                                    <p className="text-xs text-slate-500">{pkg.turnaround}</p>
                                </div>

                                <ul className="mb-8 flex-1 space-y-4 border-t border-white/8 pt-7">
                                    {pkg.features.map((feature, featIdx) => (
                                        <li key={featIdx} className="flex items-start gap-3">
                                            <div
                                                className={`mt-1 h-1.5 w-1.5 rounded-full ${
                                                    pkg.highlight
                                                        ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"
                                                        : "bg-slate-500"
                                                }`}
                                            />
                                            <span className="text-sm text-slate-200">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#request-audit"
                                    className={`flex w-full items-center justify-center rounded-xl py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all ${
                                        pkg.highlight
                                            ? "bg-emerald-400 text-black hover:bg-emerald-300 hover:shadow-[0_18px_45px_rgba(16,185,129,0.55)]"
                                            : "bg-white/10 text-white hover:bg-white/18"
                                    }`}
                                >
                                    Request {pkg.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ 10. NO TOOL SELLING */}
            <section className="relative z-10 border-t border-white/5 bg-[#05060A] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-3xl font-semibold text-white mb-6 text-center">
                            Our Commitment: Real Analysis, Not Automated Scans
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5">
                                <h3 className="text-lg font-semibold text-red-300 mb-4 flex items-center gap-2">
                                    <XIcon />
                                    What We Don't Do
                                </h3>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li>❌ No automated scanning tools used</li>
                                    <li>❌ No generic checklists</li>
                                    <li>❌ We don't sell tools or software</li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10">
                                <h3 className="text-lg font-semibold text-emerald-300 mb-4 flex items-center gap-2">
                                    <CheckIcon />
                                    What We Do
                                </h3>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li>✅ Analysis based on real workloads</li>
                                    <li>✅ Based on actual production data</li>
                                    <li>✅ Real-world production experience</li>
                                    <li>✅ Deep understanding of architecture & business logic</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 11. F.A.Q */}
            <section className="relative z-10 border-t border-white/5 bg-[#040509] py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-slate-400">
                            Common concerns addressed before you commit
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Do you need root access?",
                                a: "No. We only need read-only access to logs, metrics, and monitoring dashboards. We never require root access or the ability to make changes to your system.",
                            },
                            {
                                q: "Will this affect my live system?",
                                a: "No impact whatsoever. Our audit is completely non-invasive. We analyze existing data, logs, and metrics without running any tests that could affect your live system.",
                            },
                            {
                                q: "How long until I get the report?",
                                a: "Basic Audit: 48 hours. Standard Audit: 72 hours. Advanced Audit: 5-7 days. We'll keep you updated throughout the process.",
                            },
                            {
                                q: "Is there a refund policy?",
                                a: "Yes. If you're not satisfied with the audit quality or if we fail to deliver within the promised timeframe, we offer a full refund.",
                            },
                            {
                                q: "Am I required to optimize with you after the audit?",
                                a: "Absolutely not. The audit is a standalone service. You receive the report and can choose to implement optimizations yourself, hire us, or work with any other team. No obligations.",
                            },
                            {
                                q: "What if I need clarification on the report?",
                                a: "Standard and Advanced packages include consultation calls. Basic package customers can request a follow-up call for an additional fee, or upgrade to Standard.",
                            },
                        ].map((faq, idx) => (
                            <details
                                key={idx}
                                className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.04]"
                            >
                                <summary className="cursor-pointer text-base font-semibold text-white flex items-center justify-between">
                                    <span>{faq.q}</span>
                                    <span className="text-emerald-400 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ 12. CTA FINAL */}
            <section id="request-audit" className="relative z-10 border-t border-white/5 bg-[#020308] py-28">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#05050A] p-8 text-center md:p-14">
                        <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

                        <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
                            Request Your Audit
                        </h2>
                        <p className="mx-auto mb-9 max-w-xl text-sm text-slate-300">
                            Takes less than 2 minutes. No obligation.
                        </p>

                        <form className="mx-auto max-w-md space-y-4 text-left">
                            <div>
                                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Work email
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@company.com"
                                    className="w-full rounded-lg border border-white/12 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-emerald-400"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Website URL
                                </label>
                                <input
                                    type="url"
                                    placeholder="https://yourwebsite.com"
                                    className="w-full rounded-lg border border-white/12 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-emerald-400"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Which package interests you?
                                </label>
                                <select className="w-full rounded-lg border border-white/12 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-emerald-400">
                                    <option value="basic">Basic Audit - $49</option>
                                    <option value="standard">Standard Audit - $99 (Most Popular)</option>
                                    <option value="advanced">Advanced Audit - $199</option>
                                </select>
                            </div>
                            <div>
                                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Brief description of current issues (Optional)
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="e.g., slow checkout, high CPU usage, database timeouts..."
                                    className="w-full rounded-lg border border-white/12 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-emerald-400"
                                />
                            </div>
                            <button
                                type="submit"
                                className="mt-2 w-full rounded-lg bg-emerald-400 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-emerald-300 hover:shadow-[0_18px_45px_rgba(16,185,129,0.55)]"
                            >
                                Request Audit
                            </button>
                        </form>

                        <p className="mt-6 text-[11px] text-slate-500">
                            Typical response time: within 24 hours. We'll confirm your package and next steps.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}