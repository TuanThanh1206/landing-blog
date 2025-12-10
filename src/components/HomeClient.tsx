"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { CaseStudy } from "@/lib/case-studies";
import type { BlogPost } from "@/lib/blog";
import { socialProofLogos, testimonials } from "@/lib/home-content";

// --- CONFIG: System Monitor Profiles ---
const MONITOR_PROFILES = {
    before: {
        label: "BEFORE OPTYX",
        theme: "red",
        rpsRange: [800, 1200],
        latencyRange: [400, 2500], // Spiky latency
        cpuRange: [75, 98], // High load
        logs: [
            "[error] Connection timeout from redis-primary...",
            "[warn] CPU usage critical (92%) on worker-04",
            "[error] 502 Bad Gateway - upstream unresponsive",
            "[info] Retrying transaction... attempt 3 failed",
            "[slow] query_users took 3400ms",
        ],
    },
    after: {
        label: "AFTER OPTYX",
        theme: "emerald",
        rpsRange: [2500, 3200],
        latencyRange: [25, 60], // Fast & Stable
        cpuRange: [30, 45], // Efficient
        logs: [
            "[info] Auto-scaling group scaled down (cost saving)",
            "[ok] Cache hit rate stabilized at 98.5%",
            "[ok] P99 Latency: 42ms",
            "[info] Database load balanced successfully",
            "[audit] Daily backup completed in 4s",
        ],
    },
};

// --- COMPONENT: System Monitor (Interactive) ---
const SystemMonitor = () => {
    const [mode, setMode] = useState<"before" | "after">("after");
    const [metrics, setMetrics] = useState({ rps: 0, latency: 0, cpu: 0 });
    const [logHistory, setLogHistory] = useState<string[]>([]);

    // Simulation Logic
    useEffect(() => {
        const profile = MONITOR_PROFILES[mode];

        // Initial reset
        setMetrics({
            rps: profile.rpsRange[0],
            latency: profile.latencyRange[0],
            cpu: profile.cpuRange[0]
        });

        const interval = setInterval(() => {
            setMetrics((prev) => {
                // Add randomness based on range
                const rps = Math.floor(Math.random() * (profile.rpsRange[1] - profile.rpsRange[0]) + profile.rpsRange[0]);
                // Before mode has chaotic latency spikes
                const latencyBase = Math.random() * (profile.latencyRange[1] - profile.latencyRange[0]) + profile.latencyRange[0];
                const latency = mode === 'before' && Math.random() > 0.7 ? latencyBase * 1.5 : latencyBase;
                const cpu = Math.random() * (profile.cpuRange[1] - profile.cpuRange[0]) + profile.cpuRange[0];

                return { rps, latency, cpu };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [mode]);

    // Log Injection
    useEffect(() => {
        const profile = MONITOR_PROFILES[mode];
        let logIndex = 0;

        const logInterval = setInterval(() => {
            const msg = profile.logs[logIndex % profile.logs.length];
            const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit' });
            setLogHistory(prev => [`[${time}] ${msg}`, ...prev].slice(0, 5));
            logIndex++;
        }, mode === 'before' ? 1500 : 3000); // Errors spam faster in 'before'

        return () => clearInterval(logInterval);
    }, [mode]);

    const isHealthy = mode === "after";

    return (
        <div className={`relative w-full max-w-lg overflow-hidden rounded-xl border shadow-2xl transition-all duration-500 ${isHealthy
            ? "border-emerald-500/20 shadow-emerald-900/10 bg-[#050814]"
            : "border-red-500/15 shadow-red-900/10 bg-[#140708]"}`}>

            {/* Header & Toggle */}
            <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-3 backdrop-blur-sm">
                <div className="flex gap-2">
                    {/* Fake Window Controls */}
                    <div className={`h-3 w-3 rounded-full ${isHealthy ? 'bg-slate-700' : 'bg-red-500/50'}`} />
                    <div className="h-3 w-3 rounded-full bg-slate-700" />
                    <div className="h-3 w-3 rounded-full bg-slate-700" />
                </div>

                {/* THE TOGGLE */}
                <div className="flex items-center gap-1 rounded-full bg-black/40 p-1 border border-white/10">
                    <button
                        onClick={() => setMode("before")}
                        className={`px-3 py-1 text-[9px] font-bold uppercase tracking-wider rounded-full transition-all ${mode === 'before' ? 'bg-red-500/20 text-red-400 shadow-sm border border-red-500/30' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        Before
                    </button>
                    <button
                        onClick={() => setMode("after")}
                        className={`px-3 py-1 text-[9px] font-bold uppercase tracking-wider rounded-full transition-all ${mode === 'after' ? 'bg-emerald-500/20 text-emerald-400 shadow-sm border border-emerald-500/30' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        After
                    </button>
                </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 divide-x divide-white/5 border-b border-white/5">
                <MetricBox label="RPS" value={metrics.rps.toFixed(0)} unit="" status={isHealthy ? 'neutral' : 'warn'} />
                <MetricBox label="Latency" value={metrics.latency.toFixed(0)} unit="ms" status={isHealthy ? 'good' : 'bad'} />
                <MetricBox label="CPU Load" value={metrics.cpu.toFixed(1)} unit="%" status={isHealthy ? 'good' : 'critical'} />
            </div>

            {/* Visualizer */}
            <div className="flex h-28 items-end gap-[2px] border-b border-white/5 px-4 py-2 bg-gradient-to-t from-black/20 to-transparent">
                {Array.from({ length: 30 }).map((_, i) => {
                    const height = Math.random() * 100;
                    return (
                        <div
                            key={i}
                            className={`flex-1 rounded-sm transition-all duration-700 ${
                                isHealthy
                                    ? 'bg-emerald-500/30'
                                    : height > 80 ? 'bg-red-500' : 'bg-orange-500/40' // Red bars for spikes
                            }`}
                            style={{
                                height: `${mode === 'before' && Math.random() > 0.8 ? 100 : Math.random() * 60}%`, // Random spikes in before mode
                                opacity: 0.3 + (i / 30) * 0.7,
                            }}
                        />
                    )
                })}
            </div>

            {/* Logs */}
            <div className="relative h-32 overflow-hidden p-4 font-mono text-[10px] leading-5">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent" />
                {logHistory.map((log, i) => (
                    <div
                        key={i}
                        className={`truncate transition-all ${
                            i === 0
                                ? isHealthy
                                    ? "text-emerald-400 font-bold"
                                    : "text-red-400 font-bold"
                                : "text-slate-500 opacity-60"
                        }`}
                    >
                        <span className="mr-2 opacity-50">{">"}</span>
                        {log}
                    </div>
                ))}

                <div className="mt-2 text-[9px] text-slate-500/80">
                    Simulated preview — production setups use Prometheus, Grafana and alerting tuned to your stack.
                </div>
            </div>

        </div>
    );
};

const MetricBox = ({ label, value, unit, status }: any) => {
    const color = {
        good: "text-emerald-400",
        neutral: "text-white",
        warn: "text-yellow-400",
        bad: "text-orange-400",
        critical: "text-red-500 animate-pulse"
    }[status as string] || "text-white";

    return (
        <div className="p-4 text-center">
            <div className="text-[9px] uppercase text-slate-500 tracking-widest mb-1">{label}</div>
            <div className={`text-xl font-mono font-medium ${color}`}>
                {value}<span className="text-xs ml-0.5 opacity-60">{unit}</span>
            </div>
        </div>
    );
}

// --- MAIN PAGE COMPONENT ---

interface HomeClientProps {
    caseStudies: CaseStudy[];
    blogPosts: BlogPost[];
}

export default function HomeClient({ caseStudies, blogPosts }: HomeClientProps) {
    // Debug: Log case studies data
    if (typeof window !== 'undefined') {
        console.log('Case Studies on Home:', caseStudies.map(s => ({ 
            title: s.title, 
            thumbnail: s.thumbnail,
            slug: s.slug 
        })));
    }

    return (
        <main className="min-h-screen bg-white text-gray-900 selection:bg-emerald-500/20 selection:text-gray-900 font-sans">
            {/* --- Navbar --- */}
            <Navbar />

            {/* --- 1. HERO SECTION --- */}
            <section className="relative z-10 overflow-hidden bg-white pt-28 pb-16 lg:pt-40 lg:pb-28">
                {/* Subtle background grid */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#e5f9f3_0,_transparent_55%)] opacity-70" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(148,163,184,0.08)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(148,163,184,0.06)_1px,_transparent_1px)] bg-[size:56px_56px]" />
                </div>

                <div className="mx-auto max-w-7xl px-6 relative">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        {/* Left: Text */}
                        <div className="max-w-2xl">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                </span>
                                OptyxStack • Performance & Infrastructure Partner
                            </div>

                            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-[3.4rem]">
                                Accelerate your systems & websites to{" "}
                                <span className="relative inline-block">
                                    <span className="absolute inset-x-0 bottom-1 h-2 rounded-full bg-emerald-100" />
                                    <span className="relative text-emerald-700">
                                        enterprise grade
                                    </span>
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 font-medium">
                                Full-stack optimization from server → backend → database → frontend.
                            </p>

                            {/* CTAs */}
                            <div className="mt-9 flex flex-wrap items-center gap-4">
                                <a
                                    href="#contact"
                                    className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white shadow-sm shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/30"
                                >
                                    Free Audit
                                </a>
                                <a
                                    href="#case-studies"
                                    className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-200 bg-white px-8 text-sm font-semibold text-gray-800 transition-all hover:bg-gray-50 hover:border-gray-300"
                                >
                                    View Case Studies
                                </a>
                            </div>
                        </div>

                        {/* Right: System Monitor */}
                        <div className="relative hidden lg:block">
                            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />

                            <div className="relative transform-gpu rotate-[-3deg] transition-transform duration-500 hover:rotate-0">
                                <SystemMonitor />
                                <div className="mt-4 text-center">
                                    <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gray-500">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                        Toggle "Before" vs "After"
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 2. SOCIAL PROOF SECTION --- */}
            <section className="relative z-10 border-t border-gray-200 bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8">
                            Trusted by developers & founders worldwide
                        </p>
                        {/* Client Logos */}
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                            {socialProofLogos.map((logo, i) => (
                                <a
                                    key={i}
                                    href={logo.url || "#"}
                                    className="relative h-12 w-32 md:h-16 md:w-40 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                                >
                                    <Image
                                        src={logo.logo}
                                        alt={logo.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 128px, 160px"
                                        onError={(e) => {
                                            // Fallback to text if image not found
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                                parent.innerHTML = `<div class="text-sm font-bold text-gray-400">${logo.name}</div>`;
                                            }
                                        }}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-emerald-600 mb-2">87%</div>
                            <div className="text-sm text-gray-600">system speed increase &gt;2× post-optimization</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-emerald-600 mb-2">200+</div>
                            <div className="text-sm text-gray-600">projects audited & scaled</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-emerald-600 mb-2">99.99%</div>
                            <div className="text-sm text-gray-600">SLA uptime</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. PAIN POINTS SECTION --- */}
            <section className="relative z-10 border-t border-gray-200 bg-white py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            What challenges are you facing?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Common pain points of unoptimized systems
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                                title: "Website loading >3s",
                                desc: "Lost conversions, high bounce rate"
                            },
                            {
                                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                                title: "Server CPU spike",
                                desc: "Frequent overloads, downtime"
                            },
                            {
                                icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
                                title: "Slow Database",
                                desc: "Queries stuck, high response time"
                            },
                            {
                                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                title: "Traffic spikes → no scale",
                                desc: "Poor observability and scalability"
                            }
                        ].map((pain, i) => (
                            <div
                                key={i}
                                className="rounded-xl border border-red-100 bg-red-50/50 p-6 hover:border-red-200 hover:shadow-md transition-all"
                            >
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600 mb-4">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pain.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{pain.title}</h3>
                                <p className="text-sm text-gray-600">{pain.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. SOLUTION / CORE VALUE SECTION --- */}
            <section className="relative z-10 border-t border-gray-200 bg-gray-50 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            The OptyxStack Solution
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Capabilities unique to OptyxStack - End-to-end full-stack optimization
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
                                title: "Full-stack Audit",
                                desc: "Comprehensive analysis of web + backend + DB + infra + CDN"
                            },
                            {
                                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                                title: "Code & Server Optimization",
                                desc: "Root cause optimization, not just surface-level fixes"
                            },
                            {
                                icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
                                title: "System Re-architecture",
                                desc: "Microservices, caching layer, High Availability"
                            },
                            {
                                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                title: "Observability Stack",
                                desc: "Prometheus + Grafana + Loki - professional monitoring"
                            },
                            {
                                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                                title: "Managed High-Performance VPS",
                                desc: "Optimized VPS, 24/7 DevOps support"
                            },
                            {
                                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                                title: "DevOps as a Service",
                                desc: "CI/CD, monitoring, alerting, on-call support"
                            }
                        ].map((solution, i) => (
                            <div
                                key={i}
                                className="rounded-xl border border-emerald-100 bg-white p-6 hover:border-emerald-200 hover:shadow-lg transition-all"
                            >
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 mb-4">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={solution.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
                                <p className="text-sm text-gray-600">{solution.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 5. PRODUCT SECTIONS / PRICING --- */}
            <section id="pricing" className="relative z-10 border-t border-gray-200 bg-white py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Service Packages
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Choose the plan that fits your needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Package 1: Audit */}
                        <div className="rounded-xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all">
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full">
                                    Plan 1
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Audit & Performance Report</h3>
                            <div className="text-3xl font-bold text-gray-900 mb-1">$49-199</div>
                            <p className="text-sm text-gray-500 mb-6">Affordable → Lead Gen</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-emerald-500 mt-1">✓</span>
                                    <span>Speed test analysis</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-emerald-500 mt-1">✓</span>
                                    <span>Bottlenecks identification</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-emerald-500 mt-1">✓</span>
                                    <span>Enterprise-grade report</span>
                                </li>
                            </ul>
                            <Link
                                href="/services/system-audit"
                                className="block w-full text-center rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all hover:bg-gray-50"
                            >
                                View Details
                            </Link>
                        </div>

                        {/* Package 2: Full-Stack Optimization */}
                        <div className="rounded-xl border-2 border-emerald-500 bg-emerald-50/30 p-8 hover:shadow-lg transition-all relative">
                            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                                POPULAR
                            </div>
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                                    Plan 2
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Optimization</h3>
                            <div className="text-3xl font-bold text-gray-900 mb-1">$800-4000</div>
                            <p className="text-sm text-gray-500 mb-6">Complete system optimization</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-emerald-500 mt-1">✓</span>
                                    <span>Full stack optimization</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-emerald-500 mt-1">✓</span>
                                    <span>Fix bottlenecks</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-emerald-500 mt-1">✓</span>
                                    <span>Speed up 2-4×</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-emerald-500 mt-1">✓</span>
                                    <span>Before/After metrics</span>
                                </li>
                            </ul>
                            <Link
                                href="/services/full-stack-optimization"
                                className="block w-full text-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-700"
                            >
                                View Details
                            </Link>
                        </div>

                        {/* Package 3: Managed Infrastructure */}
                        <div className="rounded-xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all">
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full">
                                    Plan 3
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Managed Infrastructure</h3>
                            <div className="text-3xl font-bold text-gray-900 mb-1">Custom</div>
                            <p className="text-sm text-gray-500 mb-6">Monthly retainer</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-emerald-500 mt-1">✓</span>
                                    <span>Optimized VPS/Server</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-emerald-500 mt-1">✓</span>
                                    <span>DevOps support 24/7</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-emerald-500 mt-1">✓</span>
                                    <span>Monitoring & alerting</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-emerald-500 mt-1">✓</span>
                                    <span>Backups & disaster recovery</span>
                                </li>
                            </ul>
                            <Link
                                href="/services/managed-vps"
                                className="block w-full text-center rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all hover:bg-gray-50"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">Features</th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-700">Audit</th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-700">Optimization</th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-700">Managed</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {[
                                    { feature: "Performance Audit", audit: "✓", optimization: "✓", managed: "✓" },
                                    { feature: "Full-Stack Optimization", audit: "✗", optimization: "✓", managed: "✓" },
                                    { feature: "24/7 Monitoring", audit: "✗", optimization: "✗", managed: "✓" },
                                    { feature: "DevOps Support", audit: "✗", optimization: "✗", managed: "✓" },
                                    { feature: "Infrastructure Management", audit: "✗", optimization: "✗", managed: "✓" },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm text-gray-900">{row.feature}</td>
                                        <td className="px-6 py-4 text-center text-sm">{row.audit === "✓" ? <span className="text-emerald-500">✓</span> : <span className="text-gray-300">✗</span>}</td>
                                        <td className="px-6 py-4 text-center text-sm">{row.optimization === "✓" ? <span className="text-emerald-500">✓</span> : <span className="text-gray-300">✗</span>}</td>
                                        <td className="px-6 py-4 text-center text-sm">{row.managed === "✓" ? <span className="text-emerald-500">✓</span> : <span className="text-gray-300">✗</span>}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 6. LIVE DEMO / TELEMETRY SIMULATION --- */}
            <section className="relative z-10 border-t border-gray-200 bg-gray-50 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            See the difference: Before vs After
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            System simulation dashboard: Before vs After OptyxStack
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <SystemMonitor />
                    </div>

                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-600 mb-2">RPS Increased</div>
                            <div className="text-sm text-gray-600">From 800-1200 to 2500-3200 requests/sec</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-600 mb-2">Latency Reduced</div>
                            <div className="text-sm text-gray-600">From 400-2500ms down to 25-60ms</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-600 mb-2">CPU Stabilized</div>
                            <div className="text-sm text-gray-600">From 75-98% down to 30-45%</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 7. CASE STUDIES SECTION --- */}
            <section id="case-studies" className="relative z-10 border-t border-gray-200 bg-white py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Case Studies
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our success stories
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {caseStudies.length > 0 ? (
                            caseStudies.map((study) => (
                                <Link
                                    key={study.slug}
                                    href={`/case-studies/${study.slug}`}
                                    className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-emerald-200 hover:shadow-lg transition-all"
                                >
                                    {/* Thumbnail Image */}
                                    {study.thumbnail ? (
                                        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                            <Image
                                                src={study.thumbnail}
                                                alt={study.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                unoptimized={false}
                                                onError={(e) => {
                                                    console.error('Failed to load case study thumbnail:', study.thumbnail);
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    const parent = target.parentElement;
                                                    if (parent) {
                                                        parent.innerHTML = '<div class="h-full w-full bg-gradient-to-br from-emerald-50 to-cyan-50 flex items-center justify-center"><div class="text-4xl opacity-20">📊</div></div>';
                                                    }
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <div className="h-48 w-full bg-gradient-to-br from-emerald-50 to-cyan-50 flex items-center justify-center">
                                            <div className="text-4xl opacity-20">📊</div>
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full">
                                                {study.industry || "Case Study"}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                            {study.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                            {study.excerpt || study.challenge}
                                        </p>
                                        {study.metrics && study.metrics.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {study.metrics.slice(0, 2).map((metric, i) => (
                                                    <div key={i} className="text-xs font-semibold text-emerald-600">
                                                        {metric.label}: {metric.value} {metric.improvement && `(${metric.improvement})`}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        <div className="text-sm font-semibold text-emerald-600 group-hover:underline">
                                            View full report →
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            // Mock case studies if none available
                            [
                                {
                                    title: "E-commerce System Optimization",
                                    desc: "TTFB reduced from 1200ms to 120ms",
                                    industry: "E-commerce"
                                },
                                {
                                    title: "News site with 5M monthly users",
                                    desc: "Reduced server load by 40%",
                                    industry: "Media"
                                },
                                {
                                    title: "SaaS Platform Scaling",
                                    desc: "Increased API response time 3×",
                                    industry: "SaaS"
                                }
                            ].map((mock, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl border border-gray-200 bg-white p-6"
                                >
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full">
                                            {mock.industry}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {mock.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {mock.desc}
                                    </p>
                                    <div className="text-sm font-semibold text-emerald-600">
                                        View full report →
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all hover:bg-gray-50"
                        >
                            View all case studies
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- 8. TESTIMONIALS SECTION --- */}
            <section className="relative z-10 border-t border-gray-200 bg-gray-50 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            What our clients say about us
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, i) => (
                            <div
                                key={i}
                                className="rounded-xl border border-gray-200 bg-white p-6"
                            >
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                                        <span key={j} className="text-yellow-400">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                                <div className="flex items-center gap-3">
                                    {/* Avatar */}
                                    <div className="relative h-12 w-12 flex-shrink-0 rounded-full overflow-hidden bg-gray-200">
                                        {testimonial.avatar ? (
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                                sizes="48px"
                                                onError={(e) => {
                                                    // Fallback to initials if image not found
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    const parent = target.parentElement;
                                                    if (parent) {
                                                        const initials = testimonial.name
                                                            .split(' ')
                                                            .map(n => n[0])
                                                            .join('')
                                                            .toUpperCase()
                                                            .slice(0, 2);
                                                        parent.innerHTML = `<div class="flex items-center justify-center h-full w-full bg-emerald-100 text-emerald-600 font-semibold text-sm">${initials}</div>`;
                                                    }
                                                }}
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full w-full bg-emerald-100 text-emerald-600 font-semibold text-sm">
                                                {testimonial.name
                                                    .split(' ')
                                                    .map(n => n[0])
                                                    .join('')
                                                    .toUpperCase()
                                                    .slice(0, 2)}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-500">
                                            {testimonial.role}
                                            {testimonial.company && `, ${testimonial.company}`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 9. SEO / BLOG SECTION --- */}
            <section className="relative z-10 border-t border-gray-200 bg-white py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Technical Resources from OptyxStack
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Blog posts, guides, and performance tips
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {blogPosts.length > 0 ? (
                            blogPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-emerald-200 hover:shadow-lg transition-all"
                                >
                                    {/* Thumbnail Image */}
                                    {post.thumbnail ? (
                                        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                            <Image
                                                src={post.thumbnail}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                    ) : (
                                        <div className="h-48 w-full bg-gradient-to-br from-emerald-50 to-cyan-50 flex items-center justify-center">
                                            <div className="text-4xl opacity-20">📝</div>
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                            {post.excerpt || post.content.substring(0, 150)}
                                        </p>
                                        <div className="text-sm font-semibold text-emerald-600 group-hover:underline">
                                            Read more →
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            [
                                { title: "DevOps Best Practices", desc: "Best practices for modern DevOps" },
                                { title: "Optimizing Website Performance", desc: "How to optimize website performance" },
                                { title: "Scalable Architecture Patterns", desc: "Patterns for scalable architecture" }
                            ].map((mock, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl border border-gray-200 bg-white p-6"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {mock.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {mock.desc}
                                    </p>
                                    <div className="text-sm font-semibold text-emerald-600">
                                        Read more →
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all hover:bg-gray-50"
                        >
                            View all blog posts
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- 10. FAQ SECTION --- */}
            <section className="relative z-10 border-t border-gray-200 bg-gray-50 py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "How long does optimization take?",
                                a: "Time depends on system complexity. Typically: Audit (1-2 weeks), Optimization (4-8 weeks), Managed Infrastructure (ongoing)."
                            },
                            {
                                q: "Is there downtime?",
                                a: "We always aim to minimize downtime. Most optimizations are zero-downtime deployments. If downtime is needed, we notify you and schedule for off-peak hours."
                            },
                            {
                                q: "Do you guarantee results?",
                                a: "We commit to specific performance metrics (TTFB, latency, throughput) based on the initial baseline. If goals aren't met, we continue optimizing until they are."
                            },
                            {
                                q: "Security Policy?",
                                a: "All client info and credentials are strictly confidential. We use encryption, secure channels, and least-privilege access control."
                            },
                            {
                                q: "What do you need from us?",
                                a: "We need: System access (SSH, database, monitoring tools), Architecture documentation, and a primary point of contact. The more info the better, but we can audit even without docs."
                            }
                        ].map((faq, i) => (
                            <div
                                key={i}
                                className="rounded-xl border border-gray-200 bg-white p-6"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    {faq.q}
                                </h3>
                                <p className="text-gray-600">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 11. CONTACT / CTA SECTION --- */}
            <section
                id="contact"
                className="relative z-10 bg-[#0B0F19] py-28"
            >
                <div className="mx-auto max-w-4xl px-6">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111318] p-8 text-center md:p-14 shadow-2xl">
                        <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
                            Ready to accelerate your system to enterprise grade?
                        </h2>
                        <p className="mx-auto mb-9 max-w-xl text-base text-gray-400">
                            Contact us for a free consultation. We usually respond within 24 hours.
                        </p>

                        <form className="mx-auto max-w-md space-y-4 text-left">
                            <div>
                                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                                    Work email
                                </label>
                                <input
                                    type="email"
                                    placeholder="tech-lead@company.com"
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-emerald-500 focus:bg-white/10"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                                    Your main challenge?
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="e.g. Slow website, API timeout, need better infrastructure..."
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-emerald-500 focus:bg-white/10"
                                />
                            </div>
                            <button className="mt-4 w-full rounded-lg bg-emerald-600 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-900/20">
                                Send Request
                            </button>
                        </form>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                            <a href="mailto:contact@optyxstack.com" className="hover:text-emerald-400 transition-colors">
                                Email: contact@optyxstack.com
                            </a>
                            <span className="text-gray-600">|</span>
                            <a href="#" className="hover:text-emerald-400 transition-colors">
                                Telegram: @optyxstack
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 12. FOOTER --- */}
            <Footer />
        </main>
    );
}