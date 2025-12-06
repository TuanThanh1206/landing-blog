"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Components: System Monitor (Simulation) ---

const SystemMonitor = () => {
    const [metrics, setMetrics] = useState({
        rps: 2450,
        latency: 45,
        cpu: 42,
    });
    const [logs, setLogs] = useState<string[]>([
        "[init] System health check initialized...",
    ]);

    // Simulation Loop
    useEffect(() => {
        const interval = setInterval(() => {
            setMetrics((prev) => ({
                rps: Math.max(
                    2000,
                    Math.min(3000, prev.rps + (Math.random() * 200 - 100))
                ),
                latency: Math.max(
                    20,
                    Math.min(80, prev.latency + (Math.random() * 10 - 5))
                ),
                cpu: Math.max(
                    30,
                    Math.min(60, prev.cpu + (Math.random() * 5 - 2.5))
                ),
            }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Log Simulation
    useEffect(() => {
        const logMessages = [
            "Starting full system health check...",
            "Reviewing how your website and systems work today...",
            "Measuring load times, errors and real user impact...",
            "Designing a simpler, faster and more stable setup...",
            "Choosing the right servers close to your customers...",
            "Applying changes from backend to database to frontend...",
            "Moving traffic to the new high-performance setup...",
            "Locking in gains with 24/7 monitoring & care...",
        ];

        let index = 0;
        const interval = setInterval(() => {
            const msg = logMessages[index % logMessages.length];
            const timestamp = new Date().toLocaleTimeString("en-US", {
                hour12: false,
            });
            setLogs((prev) => [`[${timestamp}] ${msg}`, ...prev].slice(0, 5));
            index++;
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#050506]/90 shadow-[0_24px_80px_rgba(0,0,0,0.9)] backdrop-blur-md">
            {/* Header Bar */}
            <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.03] px-4 py-3">
                <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/25 border border-red-500/50" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/25 border border-yellow-500/50" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/25 border border-emerald-500/50" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Live Performance Preview
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 divide-x divide-white/5 border-b border-white/5">
                <div className="p-4 text-center">
                    <div className="text-[10px] uppercase text-slate-500 tracking-[0.18em]">
                        Requests / Sec
                    </div>
                    <div className="mt-1 text-xl font-mono font-semibold text-white transition-all duration-500">
                        {metrics.rps.toFixed(0)}
                    </div>
                    <p className="mt-1 text-[10px] text-slate-500">
                        How much traffic your system can handle
                    </p>
                </div>
                <div className="p-4 text-center">
                    <div className="text-[10px] uppercase text-slate-500 tracking-[0.18em]">
                        Speed
                    </div>
                    <div
                        className={`mt-1 text-xl font-mono font-semibold transition-all duration-500 ${
                            metrics.latency < 50 ? "text-emerald-400" : "text-yellow-400"
                        }`}
                    >
                        {metrics.latency.toFixed(1)}ms
                    </div>
                    <p className="mt-1 text-[10px] text-slate-500">
                        How fast your users see results
                    </p>
                </div>
                <div className="p-4 text-center">
                    <div className="text-[10px] uppercase text-slate-500 tracking-[0.18em]">
                        Stability
                    </div>
                    <div className="mt-1 text-xl font-mono font-semibold text-cyan-400 transition-all duration-500">
                        {metrics.cpu.toFixed(1)}%
                    </div>
                    <p className="mt-1 text-[10px] text-slate-500">
                        How calm the system stays under load
                    </p>
                </div>
            </div>

            {/* Visualization Graph (Fake Bars) */}
            <div className="flex h-24 items-end gap-1 border-b border-white/5 p-4 opacity-80">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-emerald-900/40 to-emerald-400/60 transition-all duration-1000 ease-in-out"
                        style={{
                            height: `${30 + Math.random() * 60}%`,
                            opacity: 0.45 + i / 40,
                        }}
                    />
                ))}
            </div>

            {/* Terminal Logs */}
            <div className="p-4 font-mono text-[10px] leading-5 text-slate-400">
                {logs.map((log, i) => (
                    <div
                        key={i}
                        className={`truncate ${
                            i === 0 ? "text-emerald-400/90" : "opacity-60"
                        }`}
                    >
                        <span className="mr-2 text-slate-600">{">"}</span>
                        {log}
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Data Configuration ---

const SERVICES = [
    {
        title: "Faster Website & Better Experience",
        description:
            "We make your website open quickly and feel smooth on all devices. Visitors stay longer, buy more, and support work goes down.",
        techNote:
            "For your tech team: Core Web Vitals, CDN and caching strategy, image & asset optimization, frontend architecture review.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
        title: "Clear System & Architecture Design",
        description:
            "We turn a messy, hard-to-change system into something simple, clear, and easy to grow. New features become safer and faster to ship.",
        techNote:
            "For your tech team: layered architecture, separation of concerns, scale-out patterns, redundancy, and defined SLOs.",
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    },
    {
        title: "IT & DevOps Team as a Service",
        description:
            "Instead of hiring a full internal IT/DevOps team, you have one trusted partner to plan, run and watch over the whole system 24/7.",
        techNote:
            "For your tech team: CI/CD pipelines, observability, alerting, on-call, backup strategy, disaster recovery and incident handling.",
        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    },
    {
        title: "Dedicated Infrastructure That Fits You",
        description:
            "We design and operate fast, reliable servers and cloud for your business, in regions close to your users. You get speed and peace of mind.",
        techNote:
            "For your tech team: choosing between dedicated servers, VMs or cloud; regional placement; network layout; cost vs reliability trade-offs.",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    },
] as const;

const PACKAGES = [
    {
        name: "Discovery & Audit",
        price: "Phase 1",
        description: "Understand, measure & plan",
        features: [
            "Short call to understand your business and where it hurts today",
            "Full review of how your website and system are currently built",
            "Simple report on speed, stability and main pain points in plain language",
            "30–60 day action plan with concrete steps and expected impact",
        ],
        highlight: false,
    },
    {
        name: "Architecture & Rebuild",
        price: "Phase 2",
        description: "Design & rebuild on a clean model",
        features: [
            "Design of a clearer, faster and more reliable system blueprint",
            "Improvements from database and backend to frontend experience",
            "Fixing slow or risky flows: checkout, dashboards, internal tools, APIs",
            "Before/after comparison so you can see the real change, not just theory",
        ],
        highlight: false,
    },
    {
        name: "Optimize & Operate",
        price: "Phase 3",
        description: "Ongoing care & IT team replacement",
        features: [
            "We run and watch the servers and infrastructure for you, 24/7",
            "Regular checks and fine-tuning as your traffic and product change",
            "Backups, monitoring and incident response so you don’t wake up at 3 AM",
            "We act as your outsourced IT/DevOps team instead of hiring a full department",
        ],
        highlight: true,
    },
] as const;

const TECH_STACK = [
    "Next.js",
    "Node.js",
    "Python",
    "Nginx",
    "Postgres/MySQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS/GCP",
    "CDN & Edge",
] as const;

// --- Main Page Component ---

export default function HomePage() {
    return (
        <main className="min-h-screen bg-[#020307] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-50 font-sans">
            {/* --- Subtle Ambient Background --- */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-20%] left-[10%] h-[520px] w-[520px] rounded-full bg-emerald-700/20 blur-[120px]" />
                <div className="absolute bottom-[-15%] right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-700/20 blur-[110px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_60%)] opacity-60" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            {/* --- Navbar --- */}
            <Navbar />

            {/* --- Hero Section with Simulation --- */}
            <section className="relative z-10 pt-28 pb-20 lg:pt-44 lg:pb-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        {/* Hero Text */}
                        <div className="max-w-2xl">
                            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                </span>
                                We build the fast, stable version of your system
                            </div>

                            <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
                                One partner to{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
                                    speed up, clean up
                                </span>{" "}
                                and run your whole stack.
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
                                We turn slow, fragile websites and systems into fast, reliable ones.
                                From the page your customers see to the servers behind it, we design,
                                rebuild and operate everything — so you don’t need a full in-house IT
                                department.
                            </p>

                            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
                                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                                    <div className="text-xs font-semibold text-emerald-300">
                                        Faster for users
                                    </div>
                                    <p className="mt-1 text-[11px] text-slate-300">
                                        Pages open quickly, even when traffic spikes.
                                    </p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                                    <div className="text-xs font-semibold text-emerald-300">
                                        Fewer headaches
                                    </div>
                                    <p className="mt-1 text-[11px] text-slate-300">
                                        Less “firefighting” and weekend emergencies.
                                    </p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                                    <div className="text-xs font-semibold text-emerald-300">
                                        One clear owner
                                    </div>
                                    <p className="mt-1 text-[11px] text-slate-300">
                                        One team responsible for the whole picture.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <button className="h-11 rounded-full bg-emerald-400 px-8 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_18px_40px_rgba(16,185,129,0.45)] transition-all hover:bg-emerald-300 hover:shadow-[0_22px_50px_rgba(16,185,129,0.65)]">
                                    Book a 30-min call
                                </button>
                                <button className="h-11 rounded-full border border-white/18 bg-white/5 px-8 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-white/10">
                                    See how we work
                                </button>
                            </div>

                            <div className="mt-10 space-y-3">
                                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                                    What we cover
                                </div>
                                <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
                                    {["Website", "Backend", "Database", "DevOps", "Infrastructure"].map(
                                        (item) => (
                                            <span
                                                key={item}
                                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                                            >
                                                {item}
                                            </span>
                                        )
                                    )}
                                    <span className="px-3 py-1 text-slate-500">
                                        + ongoing support
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Hero Simulation Component */}
                        <div className="relative hidden lg:block">
                            <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-400/40 via-teal-300/20 to-cyan-400/40 opacity-40 blur-xl" />
                            <SystemMonitor />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-7 -right-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#050609]/95 p-3.5 shadow-[0_22px_60px_rgba(0,0,0,0.9)] backdrop-blur-md">
                                <div className="flex -space-x-2">
                                    {["Website", "System", "Infra"].map((label) => (
                                        <div
                                            key={label}
                                            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-900 bg-slate-800 text-[9px] font-medium text-slate-50"
                                        >
                                            {label}
                                        </div>
                                    ))}
                                </div>
                                <div className="text-[11px] font-medium">
                                    <span className="block text-white">
                                        One team for everything
                                    </span>
                                    <span className="text-slate-500">
                                        From audit to day-to-day operation
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Services Bento Grid --- */}
            <section
                id="services"
                className="relative z-10 border-t border-white/5 bg-[#05060A] py-28"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-14 md:w-2/3">
                        <h2 className="text-3xl font-semibold text-white">
                            From “something is wrong” to a calm, fast and predictable system.
                        </h2>
                        <p className="mt-4 text-sm text-slate-300">
                            We don’t just “tweak a setting on the server”. We look at your whole
                            product — the website, internal tools, data, and infrastructure — and
                            rebuild it on a clean, high-performance model that your team can live
                            with for years.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {SERVICES.map((service) => (
                            <div
                                key={service.title}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/16"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                                    <svg
                                        className="h-5 w-5 -rotate-45 text-emerald-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/25">
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d={service.icon}
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-semibold text-slate-50">
                                        {service.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-4 border-t border-white/5 pt-3">
                                    <p className="text-[11px] leading-relaxed text-slate-500">
                                        <span className="font-semibold text-slate-400">
                                            For technical teams:
                                        </span>{" "}
                                        {service.techNote}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Simple Process Section (Very Non-Tech) --- */}
            <section
                id="process"
                className="relative z-10 border-t border-white/5 bg-[#040509] py-24"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 max-w-3xl">
                        <h2 className="text-3xl font-semibold text-white">
                            How working together feels — in three clear steps.
                        </h2>
                        <p className="mt-4 text-sm text-slate-300">
                            You don’t need to understand every technical detail. Your job is to explain
                            the business; our job is to turn that into a fast and stable system, and
                            keep it that way.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            {
                                step: "01",
                                title: "Understand & measure",
                                text: "We listen, review your current setup and turn vague problems (“it’s slow”, “it crashes”) into a clear list we can act on.",
                            },
                            {
                                step: "02",
                                title: "Design & rebuild",
                                text: "We agree on a simple, realistic plan. Then we rebuild the key parts of your system so it runs faster and more reliably.",
                            },
                            {
                                step: "03",
                                title: "Run & improve",
                                text: "We stay to run, watch and improve the system over time, so it keeps up with your growth without constant stress.",
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"
                            >
                                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                                    {item.step}
                                </div>
                                <div className="mt-3 text-base font-semibold text-white">
                                    {item.title}
                                </div>
                                <p className="mt-3 text-sm text-slate-300">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Infrastructure Highlight --- */}
            <section
                id="infra"
                className="relative z-10 border-t border-white/5 bg-[#040508] py-26"
            >
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-semibold text-white">
                            Infrastructure designed around your product, not the other way round.
                        </h2>
                        <p className="mt-4 text-sm text-slate-300">
                            Many systems grow on top of the wrong servers and services, and later
                            become expensive and fragile. We start from your business needs and design
                            the right mix of servers, cloud and services to support that — not the
                            other way around.
                        </p>
                        <ul className="mt-6 space-y-3 text-sm text-slate-200">
                            <li>• Capacity planning based on real traffic, not guesses.</li>
                            <li>• Servers and locations chosen to be close to your main markets.</li>
                            <li>• Backup and recovery plans that actually get tested.</li>
                            <li>• Monitoring and alerts so issues are caught before users complain.</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-white/12 bg-[#090B11] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.9)]">
                        <h3 className="mb-4 text-sm font-semibold text-white">
                            Example setup we can own for you
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-[11px] text-slate-300">
                            <div className="space-y-1">
                                <div className="font-mono text-slate-200">Customer-facing</div>
                                <p>
                                    Fast website and app, optimized images and routes, clear UX for key
                                    actions.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <div className="font-mono text-slate-200">Business logic</div>
                                <p>
                                    APIs and background jobs that stay responsive during campaigns and
                                    spikes.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <div className="font-mono text-slate-200">Data</div>
                                <p>
                                    Reliable databases, healthy indexes and safe caching to avoid both
                                    slowness and data loss.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <div className="font-mono text-slate-200">Care & monitoring</div>
                                <p>
                                    Regular checks, alerting, backups and documented recovery steps for
                                    your team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Technical Details Section (clearly secondary) --- */}
            <section
                className="relative z-10 border-t border-white/5 bg-[#03040A] py-20"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                        <div className="mb-4 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-sm font-semibold text-white">
                                    For technical founders & in-house teams
                                </h3>
                                <p className="mt-1 text-[12px] text-slate-400">
                                    If you or someone on your team wants to look deeper under the hood.
                                </p>
                            </div>
                            <span className="hidden rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300 md:inline-block">
                                Optional technical details
                            </span>
                        </div>

                        <div className="grid gap-6 md:grid-cols-[2fr,3fr]">
                            <div className="space-y-3 text-[12px] text-slate-300">
                                <p>
                                    We are comfortable working across modern web stacks and
                                    infrastructure, and can integrate with your existing tools instead
                                    of forcing a full rewrite.
                                </p>
                                <p>
                                    Typical stack ingredients include typed APIs, structured logging,
                                    centralized metrics, infrastructure-as-code and safety nets around
                                    deployments.
                                </p>
                            </div>
                            <div>
                                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Typical stack elements
                                </div>
                                <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
                                    {TECH_STACK.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Pricing Section --- */}
            <section
                id="pricing"
                className="relative z-10 border-t border-white/5 bg-[#030308] py-30"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-semibold text-white">
                                A structured process — not random “tuning”.
                            </h2>
                            <p className="mt-3 text-sm text-slate-300">
                                We move through three phases: discovery & audit, architecture &
                                rebuild, then ongoing optimization & operation. You can stop after a
                                phase or keep us as a long-term partner instead of building a full IT
                                department internally.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-white/5 p-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                            <span className="rounded-full bg-white/15 px-4 py-1 text-white">
                                Project phases
                            </span>
                            <span className="px-4 py-1 text-slate-500">
                                Full IT replacement option
                            </span>
                        </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {PACKAGES.map((pkg) => (
                            <div
                                key={pkg.name}
                                className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                                    pkg.highlight
                                        ? "bg-gradient-to-b from-white/[0.09] via-white/[0.03] to-transparent border border-emerald-400/40 ring-1 ring-emerald-400/30 shadow-[0_24px_80px_rgba(16,185,129,0.35)]"
                                        : "bg-white/[0.02] border border-white/8 hover:border-white/16 hover:bg-white/[0.04]"
                                }`}
                            >
                                {pkg.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-black">
                                        Most chosen
                                    </div>
                                )}

                                <div className="mb-8">
                                    <div className="text-xs font-semibold text-emerald-300">
                                        {pkg.price}
                                    </div>
                                    <h3 className="mt-1 text-2xl font-semibold text-white">
                                        {pkg.name}
                                    </h3>
                                    <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
                                        {pkg.description}
                                    </p>
                                </div>

                                <ul className="mb-8 flex-1 space-y-4 border-t border-white/8 pt-7">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
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
                                    href="#contact"
                                    className={`flex w-full items-center justify-center rounded-xl py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all ${
                                        pkg.highlight
                                            ? "bg-emerald-400 text-black hover:bg-emerald-300 hover:shadow-[0_18px_45px_rgba(16,185,129,0.55)]"
                                            : "bg-white/10 text-white hover:bg-white/18"
                                    }`}
                                >
                                    Talk about this phase
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Contact / CTA --- */}
            <section
                id="contact"
                className="relative z-10 border-t border-white/5 bg-[#020308] py-28"
            >
                <div className="mx-auto max-w-4xl px-6">
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#05050A] p-8 text-center md:p-14">
                        <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

                        <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
                            Tell us where it hurts — we’ll bring a clear plan.
                        </h2>
                        <p className="mx-auto mb-9 max-w-xl text-sm text-slate-300">
                            Share a short description of your product, where it feels slow or unstable,
                            and whether you already have an internal tech team. We’ll respond with a
                            simple, step-by-step optimization and architecture plan.
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
                                    What is happening today?
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="For example: slow checkout, timeouts when traffic spikes, internal tools are painful to use, unclear who owns the system..."
                                    className="w-full rounded-lg border border-white/12 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-emerald-400"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Do you have an internal tech team? (Optional)
                                </label>
                                <input
                                    type="text"
                                    placeholder="No team yet / small in-house team / full product & IT team..."
                                    className="w-full rounded-lg border border-white/12 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-emerald-400"
                                />
                            </div>
                            <button className="mt-2 w-full rounded-lg bg-white py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-slate-200">
                                Request a full-stack audit
                            </button>
                        </form>

                        <p className="mt-6 text-[11px] text-slate-500">
                            Typical response time: within 24 hours, including a rough impact estimate
                            for each proposed phase.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <Footer />
        </main>
    );
}
