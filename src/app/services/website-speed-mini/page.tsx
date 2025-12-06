"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Icons ---
const LightningIcon = () => (
    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

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

const TrendUpIcon = () => (
    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

export default function SpeedOptimizationPage() {
    return (
        <main className="min-h-screen bg-[#020307] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-50 font-sans">
            {/* --- Ambient Background --- */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-20%] left-[20%] h-[500px] w-[500px] rounded-full bg-cyan-700/20 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-700/20 blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            <Navbar />

            {/* ✅ 1. HERO SECTION */}
            <section className="relative z-10 pt-32 pb-20 lg:pt-44 lg:pb-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        {/* Badge */}
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
                            </span>
                            Website Speed Optimization
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.6rem] mb-6">
                            Website Speed Optimization That Drives{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300">
                                Real Business Results
                            </span>
                        </h1>

                        <p className="text-xl sm:text-2xl font-medium text-slate-300 mb-6">
                            Fix what’s slowing your website down. Boost load speed, SEO rankings, and conversions in just a few days.
                        </p>

                        <p className="text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            We optimize the real performance bottlenecks that make your website slow — from images and caching to server configuration — with measurable before-and-after results.
                        </p>

                        {/* Common Problems Grid */}
                        <div className="grid gap-3 sm:grid-cols-2 max-w-3xl mx-auto mb-10 text-left">
                            {[
                                "Website loads slower than 3 seconds",
                                "Low Google PageSpeed scores",
                                "High bounce rate from ads",
                                "Expensive hosting but poor performance",
                                "Mobile users experiencing lag",
                            ].map((prob, idx) => (
                                <div key={idx} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-red-500/15 bg-red-500/5">
                                    <div className="flex-shrink-0 text-red-400">⚠️</div>
                                    <span className="text-sm text-slate-300">{prob}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#pricing"
                                className="h-12 rounded-full bg-cyan-400 px-8 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.55)] flex items-center justify-center"
                            >
                                Start Speed Optimization
                            </a>
                            <span className="text-sm text-slate-500 font-medium">From $199 · Results in 3–7 days</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 2. BUSINESS VALUE */}
            <section className="relative z-10 border-t border-white/5 bg-[#05060A] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-semibold text-white mb-6">
                                A Faster Website is Not Just UX—It's Revenue.
                            </h2>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                A slow website silently kills your growth. We eliminate the most common performance killers that are holding your business back. With our optimization service, you will:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Increase organic search rankings (Google favors fast sites)",
                                    "Improve conversion rates on landing pages and checkout",
                                    "Reduce bounce rates from slow mobile performance",
                                    "Lower server and advertising costs",
                                    "Deliver a better user experience on all devices",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1"><TrendUpIcon /></div>
                                        <span className="text-slate-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative p-1 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-white/10">
                            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl" />
                            <div className="relative bg-[#0A0A0F] rounded-xl p-8 border border-white/5">
                                <h3 className="text-lg font-semibold text-white mb-6">What You Will Get</h3>
                                <div className="space-y-4">
                                    {[
                                        "40–80% faster page load time",
                                        "Significantly improved Google PageSpeed & Core Web Vitals",
                                        "Lower TTFB (server response time)",
                                        "More stable performance during traffic spikes",
                                        "A detailed before/after performance report",
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="text-slate-300 text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 3. SCOPE OF OPTIMIZATION */}
            <section className="relative z-10 border-t border-white/5 bg-[#03040A] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white mb-4">
                            Scope of Optimization
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            This service focuses on quick wins with high impact, without touching deep system architecture.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Frontend Performance",
                                items: ["Image compression & WebP/AVIF", "Lazy loading for media", "Minification (CSS/JS)", "Critical CSS delivery", "Font optimization"],
                            },
                            {
                                title: "Caching & CDN",
                                items: ["Browser cache config", "Server-side cache setup", "CDN integration (Cloudflare/Bunny)", "Cache rules by content type"],
                            },
                            {
                                title: "Server & Cleanup",
                                items: ["Nginx / Apache tuning", "PHP-FPM optimization", "HTTP/2, Gzip, Brotli", "Removal of heavy scripts", "Plugin overload detection"],
                            },
                        ].map((card, idx) => (
                            <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                                <h3 className="text-lg font-semibold text-cyan-100 mb-4">{card.title}</h3>
                                <ul className="space-y-2">
                                    {card.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                                            <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan-400"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Disclaimer Box */}
                    <div className="mt-8 max-w-3xl mx-auto rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6 text-center">
                        <p className="text-sm text-yellow-200/90 font-medium mb-2 uppercase tracking-wide">⚠️ Not included in this service</p>
                        <p className="text-sm text-slate-400">
                            Deep backend refactoring, Advanced database tuning, Infrastructure scaling. <br/>
                            <span className="opacity-70">For these needs, check our </span> <span className="text-white underline decoration-yellow-500/50 underline-offset-4 cursor-pointer">Full-Stack System Optimization</span> <span className="opacity-70">service.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* ✅ 4. PROCESS */}
            <section className="relative z-10 border-t border-white/5 bg-[#05060A] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-semibold text-white">Our 4-Step Process</h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

                        {[
                            { step: "01", title: "Scan & Baseline", desc: "Measure PageSpeed, Core Web Vitals, and TTFB." },
                            { step: "02", title: "Quick Optimize", desc: "Frontend, caching, CDN, and basic server tuning." },
                            { step: "03", title: "Test & Tune", desc: "Cross-device validation and final performance adjustments." },
                            { step: "04", title: "Report", desc: "Visual comparison and key performance metrics." },
                        ].map((item, idx) => (
                            <div key={idx} className="relative flex flex-col items-center text-center">
                                <div className="z-10 mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-[#0A0A0F] shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                    <span className="text-xl font-bold text-cyan-400">{item.step}</span>
                                </div>
                                <h3 className="mb-2 text-lg font-medium text-white">{item.title}</h3>
                                <p className="text-sm text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ 5. SAMPLE RESULTS & COMPARISON */}
            <section className="relative z-10 border-t border-white/5 bg-[#020307] py-24">
                <div className="mx-auto max-w-7xl px-6">

                    {/* Results Table */}
                    <div className="mb-24">
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-semibold text-white mb-2">Sample Performance Results</h2>
                            <p className="text-sm text-slate-500">Actual results depend on your website’s current condition.</p>
                        </div>
                        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0F]">
                            <table className="w-full">
                                <thead>
                                <tr className="border-b border-white/10 bg-white/[0.02]">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Metric</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-red-400">Before</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-emerald-400">After</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                {[
                                    { metric: "Page Load Time", before: "6.1s", after: "1.9s" },
                                    { metric: "TTFB", before: "1.3s", after: "310ms" },
                                    { metric: "PageSpeed Mobile", before: "41", after: "89" },
                                    { metric: "Bounce Rate", before: "67%", after: "42%" },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-white/[0.02]">
                                        <td className="px-6 py-4 text-sm font-medium text-white">{row.metric}</td>
                                        <td className="px-6 py-4 text-center text-sm text-slate-400 font-mono">{row.before}</td>
                                        <td className="px-6 py-4 text-center text-sm text-emerald-300 font-mono font-bold">{row.after}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="mx-auto max-w-5xl">
                        <div className="mb-8 text-center">
                            <h2 className="text-2xl font-semibold text-white mb-2">Speed Optimization vs. Full System Optimization</h2>
                        </div>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0A0A0F]">
                            <table className="w-full min-w-[600px]">
                                <thead>
                                <tr className="border-b border-white/10 bg-white/[0.02]">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">Feature</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-cyan-400">Speed Optimization</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-white">Full System Optimization</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                {[
                                    { feat: "Frontend Optimization", speed: true, full: true },
                                    { feat: "Cache & CDN", speed: true, full: true },
                                    { feat: "Basic Server Tuning", speed: true, full: true },
                                    { feat: "Deep Backend Tuning", speed: false, full: true },
                                    { feat: "Database Optimization", speed: false, full: true },
                                    { feat: "Scaling & HA", speed: false, full: true },
                                    { feat: "Architecture Redesign", speed: false, full: true },
                                ].map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="px-6 py-4 text-sm font-medium text-slate-200">{row.feat}</td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex justify-center">{row.speed ? <CheckIcon/> : <span className="opacity-20"><XIcon/></span>}</div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex justify-center"><CheckIcon/></div>
                                        </td>
                                    </tr>
                                ))}
                                <tr className="bg-white/[0.02]">
                                    <td className="px-6 py-4 text-sm font-semibold text-white">Typical Price</td>
                                    <td className="px-6 py-4 text-center text-sm font-bold text-cyan-400">$199 – $399</td>
                                    <td className="px-6 py-4 text-center text-sm font-bold text-white">$800 – $2,000+</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 text-center">
                            <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 underline underline-offset-4">
                                Need deeper, long-term performance gains? Upgrade to Full-Stack System Optimization &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 6. WHO THIS IS FOR */}
            <section className="relative z-10 border-t border-white/5 bg-[#040509] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                        {/* Suitable */}
                        <div className="p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
                            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2"><CheckIcon/> Best for:</h3>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li>• Landing pages</li>
                                <li>• WordPress & Shopify stores</li>
                                <li>• Content websites & blogs</li>
                                <li>• Small to mid-size business websites</li>
                            </ul>
                        </div>

                        {/* Not Suitable */}
                        <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
                            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2"><XIcon/> Not suitable for:</h3>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li>• High-scale SaaS platforms</li>
                                <li>• Microservice-based systems</li>
                                <li>• Enterprise-grade distributed architectures</li>
                            </ul>
                            <p className="mt-6 text-xs text-red-300/70 italic">
                                * For these cases, we recommend our System Audit service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 7. PRICING */}
            <section id="pricing" className="relative z-10 border-t border-white/5 bg-[#030308] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-semibold text-white mb-4">Pricing Packages</h2>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3 max-w-6xl mx-auto">
                        {[
                            {
                                name: "Speed Basic",
                                price: "$199",
                                days: "3–5 days",
                                features: ["Frontend optimization", "Caching setup", "1 Website", "Basic Report"],
                                highlight: false,
                            },
                            {
                                name: "Speed Pro",
                                price: "$299",
                                days: "3–7 days",
                                features: ["Frontend + Caching", "Basic Server Tuning", "CDN Integration", "1 Website", "Standard Report"],
                                highlight: true,
                            },
                            {
                                name: "Speed Plus",
                                price: "$399",
                                days: "5–7 days",
                                features: ["Advanced Tuning", "Priority Processing", "Detailed Technical Report", "Post-optimization review"],
                                highlight: false,
                            },
                        ].map((pkg, idx) => (
                            <div
                                key={idx}
                                className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                                    pkg.highlight
                                        ? "bg-gradient-to-b from-cyan-900/20 via-[#0A0A0F] to-transparent border border-cyan-500/40 ring-1 ring-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)]"
                                        : "bg-white/[0.02] border border-white/8 hover:bg-white/[0.04]"
                                }`}
                            >
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">{pkg.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-4xl font-bold text-white">{pkg.price}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest">{pkg.days} Delivery</p>
                                </div>

                                <ul className="mb-8 flex-1 space-y-4 border-t border-white/10 pt-6">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                            <div className={`h-1.5 w-1.5 rounded-full ${pkg.highlight ? "bg-cyan-400" : "bg-slate-500"}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full rounded-xl py-3 text-xs font-bold uppercase tracking-widest transition-all ${
                                    pkg.highlight
                                        ? "bg-cyan-400 text-black hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/25"
                                        : "bg-white/10 text-white hover:bg-white/20"
                                }`}>
                                    Select Package
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ 8. COMMITMENT */}
            <section className="relative z-10 border-t border-white/5 bg-[#05060A] py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-2xl font-semibold text-white mb-8">Our Commitment</h2>
                    <div className="grid sm:grid-cols-2 gap-4 text-left">
                        {[
                            "Manual optimization — no one-click tools",
                            "Real performance improvements, not cosmetic scores",
                            "No SEO damage or visual breakage",
                            "Full transparency with before/after benchmarks",
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                <div className="text-cyan-400"><CheckIcon/></div>
                                <span className="text-sm text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ 9. FAQ */}
            <section className="relative z-10 border-t border-white/5 bg-[#040509] py-24">
                <div className="mx-auto max-w-3xl px-6">
                    <h2 className="text-3xl font-semibold text-white mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Do you need root access to my server?", a: "Not always. Many optimizations can be done without full root access." },
                            { q: "Will my website experience downtime?", a: "No. All changes are applied with zero or near-zero downtime." },
                            { q: "How soon will I see results?", a: "Most websites show visible improvements immediately after delivery." },
                            { q: "Is this service safe for production websites?", a: "Yes. We follow strict testing and rollback procedures." },
                            { q: "Do you offer refunds?", a: "Refunds are available only before implementation begins. Once optimization starts, results are deliverable and non-refundable." },
                        ].map((item, idx) => (
                            <details key={idx} className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.04]">
                                <summary className="cursor-pointer text-base font-medium text-white flex items-center justify-between">
                                    <span>{item.q}</span>
                                    <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-sm text-slate-400 leading-relaxed">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ 10. FINAL CTA */}
            <section className="relative z-10 border-t border-white/5 bg-[#020308] py-28">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#0A0A0F] to-[#05050A] p-12">
                        <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

                        <h2 className="text-3xl font-semibold text-white mb-4">Start Your Website Speed Optimization Today</h2>
                        <p className="text-slate-400 mb-8">Fix your website speed in days — not months.</p>

                        <div className="flex flex-col items-center gap-4">
                            <button className="h-14 rounded-lg bg-cyan-400 px-10 text-sm font-bold uppercase tracking-widest text-black shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all hover:scale-105 hover:bg-cyan-300">
                                Start Speed Optimization
                            </button>
                            <p className="text-xs text-slate-500 uppercase tracking-widest">From $199 · 3–7 Days Delivery · No Long-Term Contract</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}