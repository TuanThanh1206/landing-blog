"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Icons ---
const ServerIcon = () => (
    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
);

const ChipIcon = () => (
    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
);

const ShieldIcon = () => (
    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const CheckIcon = () => (
    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const WarningIcon = () => (
    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

export default function ManagedVPSPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 selection:text-blue-50 font-sans">
            {/* --- Tech Grid Background --- */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-20%] right-[10%] h-[600px] w-[600px] rounded-full bg-blue-900/20 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-slate-800/20 blur-[100px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            <Navbar />

            {/* ✅ 1. HERO SECTION */}
            <section className="relative z-10 pt-32 pb-20 lg:pt-44 lg:pb-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        {/* Badge */}
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500" />
                            </span>
                            Premium Infrastructure
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.8rem] mb-6">
                            Managed VPS <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-300 to-slate-200">
                                Premium Servers. Full Management.
                            </span>
                        </h1>

                        <p className="text-xl sm:text-2xl font-medium text-slate-300 mb-6">
                            High-quality VPS infrastructure combined with end-to-end system setup, security, optimization, and 24/7 monitoring.
                        </p>

                        <p className="text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            We deliver enterprise-grade servers with full A–Z management: from initial system setup and WordPress optimization to security hardening, backups, and ongoing performance operations.
                        </p>

                        {/* Problem Grid */}
                        <div className="grid gap-3 sm:grid-cols-2 max-w-3xl mx-auto mb-10 text-left">
                            {[
                                "You bought a VPS but don’t know how to configure it",
                                "WordPress is slow even on a “powerful” server",
                                "Security risks, malware, brute-force attacks",
                                "No real backups or monitoring in place",
                            ].map((prob, idx) => (
                                <div key={idx} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-red-500/15 bg-red-500/5">
                                    <div className="flex-shrink-0 text-red-400"><WarningIcon /></div>
                                    <span className="text-sm text-slate-300">{prob}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#pricing"
                                className="h-12 rounded-full bg-blue-600 px-8 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center"
                            >
                                Get Your Managed VPS
                            </a>
                            <span className="text-sm text-slate-500 font-medium">From $80/month · Production ready</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 2. WHAT IS MANAGED VPS */}
            <section className="relative z-10 border-t border-white/5 bg-[#0B1121] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">
                                What “Managed VPS” Really Means
                            </h2>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                Managed VPS is not just a server rental. It is a <strong className="text-blue-300">complete technical operation service</strong> where we take full responsibility for your environment.
                            </p>
                            <p className="text-slate-300 mb-8 border-l-2 border-blue-500 pl-4 italic">
                                You focus on your website and your business. We run and protect your entire server environment.
                            </p>

                            <div className="space-y-3">
                                {[
                                    "Server setup & configuration",
                                    "Security & hardening",
                                    "Performance optimization",
                                    "Monitoring & incident response",
                                    "Backups & disaster recovery",
                                    "Ongoing maintenance & updates",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]" />
                                        <span className="text-sm text-slate-200 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Infrastructure Specs */}
                        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] relative overflow-hidden group hover:border-blue-500/30 transition-all">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <ServerIcon />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <ChipIcon /> Premium Infrastructure
                            </h3>
                            <p className="text-sm text-slate-400 mb-6">
                                Your website is not placed on crowded shared servers. Every Managed VPS runs on dedicated virtual resources built for stability.
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Enterprise NVMe SSD storage",
                                    "High-performance CPUs",
                                    "Dedicated resources (No overselling)",
                                    "Private networking support",
                                    "Multiple global locations",
                                    "Production-grade uptime",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                        <div className="mt-0.5"><CheckIcon/></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 3. FULL MANAGEMENT SCOPE */}
            <section className="relative z-10 border-t border-white/5 bg-[#020617] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Full A–Z Management Scope</h2>
                        <p className="text-slate-400">True end-to-end management — from the OS layer up to your application.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* 1. Setup */}
                        <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-900/10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 text-xs font-bold text-white">01</span>
                                <h3 className="text-lg font-bold text-white">Server Setup (A–Z)</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li>• OS installation & hardening</li>
                                <li>• Nginx / Apache / OpenLiteSpeed setup</li>
                                <li>• PHP / Node.js / Python environment</li>
                                <li>• Database setup (MySQL, Redis)</li>
                                <li>• SSL/TLS & Firewall configuration</li>
                            </ul>
                        </div>

                        {/* 2. Security */}
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-blue-500 font-mono text-xs">02</span>
                                <h3 className="text-lg font-bold text-white">Security & Hardening</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>• System firewall & network protection</li>
                                <li>• Brute-force & intrusion protection</li>
                                <li>• Malware scanning & isolation</li>
                                <li>• Secure SSH & access control</li>
                            </ul>
                        </div>

                        {/* 3. Backups */}
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-blue-500 font-mono text-xs">03</span>
                                <h3 className="text-lg font-bold text-white">Automated Backups</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>• Daily automated backups</li>
                                <li>• On-demand manual snapshots</li>
                                <li>• Off-server backup storage</li>
                                <li>• Disaster recovery restore workflow</li>
                            </ul>
                        </div>

                        {/* 4. Monitoring */}
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-blue-500 font-mono text-xs">04</span>
                                <h3 className="text-lg font-bold text-white">24/7 Monitoring</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>• CPU, RAM, Disk, Network health</li>
                                <li>• Service uptime checks (1 min interval)</li>
                                <li>• Real-time alerts & Issue detection</li>
                                <li>• Incident response before downtime</li>
                            </ul>
                        </div>

                        {/* 5. Performance */}
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-blue-500 font-mono text-xs">05</span>
                                <h3 className="text-lg font-bold text-white">Performance Tuning</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>• Nginx / PHP-FPM / DB tuning</li>
                                <li>• Redis / Server-side caching</li>
                                <li>• CDN & asset delivery optimization</li>
                                <li>• Continuous tuning for workloads</li>
                            </ul>
                        </div>

                        {/* 6. Updates & Support */}
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-blue-500 font-mono text-xs">06</span>
                                <h3 className="text-lg font-bold text-white">Updates & Support</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>• OS updates & security patches</li>
                                <li>• Planned maintenance windows</li>
                                <li>• Professional sysadmin support</li>
                                <li>• Root-cause analysis after incidents</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 4. WORDPRESS SPECIAL */}
            <section className="relative z-10 border-t border-white/5 bg-[#0B1121] py-20">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-transparent p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

                        <div className="relative z-10">
                            <div className="inline-block rounded-md bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white mb-4">Specialty</div>
                            <h2 className="text-3xl font-bold text-white mb-4">WordPress-Ready Managed VPS</h2>
                            <p className="text-slate-300 mb-8 max-w-2xl">
                                We provide fully optimized WordPress environments. Pre-tuned Nginx, PHP-FPM, Object Cache (Redis), and security hardening specifically designed for WP & WooCommerce.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    "WooCommerce-ready configuration",
                                    "OPcache & Object Cache optimization",
                                    "Image optimization & CDN integration",
                                    "Security hardening for WP core & plugins"
                                ].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-white/5">
                                        <div className="text-blue-400"><CheckIcon/></div>
                                        <span className="text-sm text-slate-200">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 text-xs text-slate-400 font-mono uppercase tracking-wide">
                                <span>Ideal for:</span>
                                <span className="text-blue-300">High-traffic Blogs</span>
                                <span className="text-slate-600">/</span>
                                <span className="text-blue-300">WooCommerce</span>
                                <span className="text-slate-600">/</span>
                                <span className="text-blue-300">Agencies</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 5. IMPACT TABLE */}
            <section className="relative z-10 border-t border-white/5 bg-[#020617] py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Sample Business Impact</h2>
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A]">
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
                                { metric: "Avg Page Load", before: "5.9s", after: "1.8s" },
                                { metric: "Server CPU Peak", before: "92%", after: "48%" },
                                { metric: "Downtime / Month", before: "Frequent", after: "Near-zero" },
                                { metric: "Security Incidents", before: "Repeated", after: "Eliminated" },
                                { metric: "Backup Reliability", before: "Uncertain", after: "Automated" },
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

            {/* ✅ 6. PRICING */}
            <section id="pricing" className="relative z-10 border-t border-white/5 bg-[#0B1121] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Pricing (Monthly Retainer)</h2>
                        <p className="text-slate-400">Transparent pricing for full management. Server infrastructure costs may be billed separately depending on provider.</p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3 max-w-6xl mx-auto">
                        {/* Basic */}
                        <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all">
                            <h3 className="text-xl font-bold text-white mb-2">Managed Basic</h3>
                            <div className="text-3xl font-bold text-blue-400 mb-4">$80<span className="text-sm font-normal text-slate-400">/mo</span></div>
                            <ul className="mb-8 space-y-3 flex-1">
                                {["Single VPS", "Full setup & security", "Daily backups", "Basic monitoring", "Office-hours support"].map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                        <div className="h-1 w-1 rounded-full bg-slate-500"></div>{f}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full rounded-lg bg-white/10 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/20 transition-colors">Select Plan</button>
                        </div>

                        {/* Pro */}
                        <div className="relative flex flex-col rounded-2xl border border-blue-500/40 bg-gradient-to-b from-blue-900/20 to-transparent p-8 shadow-xl shadow-blue-900/10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Most Popular</div>
                            <h3 className="text-xl font-bold text-white mb-2">Managed Pro</h3>
                            <div className="text-3xl font-bold text-blue-400 mb-4">$150<span className="text-sm font-normal text-slate-400">/mo</span></div>
                            <ul className="mb-8 space-y-3 flex-1">
                                {["Everything in Basic", "Performance optimization", "Advanced monitoring", "Priority support", "WordPress optimization", "On-demand backups"].map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-white">
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>{f}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full rounded-lg bg-blue-600 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-blue-500 transition-colors">Select Plan</button>
                        </div>

                        {/* Business */}
                        <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all">
                            <h3 className="text-xl font-bold text-white mb-2">Business</h3>
                            <div className="text-3xl font-bold text-blue-400 mb-4">$300<span className="text-sm font-normal text-slate-400">/mo</span></div>
                            <ul className="mb-8 space-y-3 flex-1">
                                {["High-availability design", "Multi-service environments", "24/7 monitoring & on-call", "Advanced security policies", "Disaster recovery plan"].map((f, i) => (
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
            <section className="relative z-10 border-t border-white/5 bg-[#020617] py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-2xl font-bold text-white mb-8">Why Our Managed VPS is Different</h2>
                    <div className="grid sm:grid-cols-2 gap-4 text-left">
                        {[
                            "High-quality enterprise infrastructure",
                            "No overselling or shared resource abuse",
                            "Real production optimization (no presets)",
                            "Full A–Z responsibility",
                            "Operated by real DevOps engineers",
                            "Strict security & backup policies",
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                <div className="text-blue-400"><CheckIcon/></div>
                                <span className="text-sm text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ 8. FAQ */}
            <section className="relative z-10 border-t border-white/5 bg-[#0B1121] py-24">
                <div className="mx-auto max-w-3xl px-6">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Do you provide the VPS server itself?", a: "Yes. We can provide servers on our own premium infrastructure, or manage servers you purchase from trusted providers (AWS, DigitalOcean, Hetzner, etc.)." },
                            { q: "Can you migrate my existing website?", a: "Yes. Migration is available as an add-on or part of a full optimization project." },
                            { q: "Is Managed VPS compatible with Full-Stack Optimization?", a: "Yes. Most clients combine both for maximum performance and stability." },
                            { q: "Can I upgrade or scale later?", a: "Yes. Vertical (more CPU/RAM) and horizontal (more servers) scaling plans are available anytime." },
                            { q: "Do you offer an SLA?", a: "Yes. SLAs regarding response time and uptime are available for Pro and Business plans." },
                        ].map((item, idx) => (
                            <details key={idx} className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.04]">
                                <summary className="cursor-pointer text-base font-medium text-white flex items-center justify-between">
                                    <span>{item.q}</span>
                                    <span className="text-blue-400 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-sm text-slate-400 leading-relaxed">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ 9. FINAL CTA */}
            <section className="relative z-10 border-t border-white/5 bg-[#020617] py-28">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#0F172A] to-[#020617] p-12">
                        <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

                        <h2 className="text-3xl font-bold text-white mb-4">Run Your Website on a Fully Managed VPS</h2>
                        <p className="text-slate-400 mb-8">Performance. Security. Zero Stress.</p>

                        <div className="flex flex-col items-center gap-4">
                            <button className="h-14 rounded-lg bg-blue-600 px-10 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all hover:scale-105 hover:bg-blue-500">
                                Get Your Managed VPS Today
                            </button>
                            <p className="text-xs text-slate-500 uppercase tracking-widest">From $80/month · Full A–Z Setup</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ 10. CROSS-SELL */}
            <section className="relative z-10 bg-[#020617] pb-20 pt-10">
                <div className="mx-auto max-w-7xl px-6 border-t border-white/5 pt-12">
                    <div className="grid md:grid-cols-2 gap-6">
                        <a href="#" className="flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-colors group">
                            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">Need deeper optimization?</h3>
                            <p className="text-sm text-slate-400 mb-4">Explore Full-Stack System Optimization</p>
                            <span className="text-xs font-bold uppercase tracking-wider text-white underline underline-offset-4 decoration-white/20">View Service &rarr;</span>
                        </a>
                        <a href="#" className="flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-colors group">
                            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors">Need database reliability?</h3>
                            <p className="text-sm text-slate-400 mb-4">Explore Managed Database Services</p>
                            <span className="text-xs font-bold uppercase tracking-wider text-white underline underline-offset-4 decoration-white/20">View Service &rarr;</span>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}