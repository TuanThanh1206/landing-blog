"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link"; // Added for internal navigation
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
            "Starting full-stack health check across web, API and infra...",
            "Mapping how your website, APIs and internal tools behave under real traffic...",
            "Measuring bottlenecks in frontend, backend, database and infrastructure...",
            "Designing a cleaner, high-performance architecture around your business flows...",
            "Selecting dedicated servers, VPS clusters and regions close to your key markets...",
            "Rolling out changes safely, with canary deployments and rollback paths...",
            "Shifting production traffic to the new optimized stack and watching live impact...",
            "Locking in gains with monitoring, alerting and runbooks your team can rely on...",
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
                        How much traffic your stack can safely absorb
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
                        How quickly users see results and pages respond
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
                        How calm the system stays when traffic spikes
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
                        className={`truncate ${i === 0 ? "text-emerald-400/90" : "opacity-60"}`}
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
        title: "High-performance website & frontend",
        href: "/services/full-stack-optimization", // Added link
        description:
            "We make your website, landing pages and dashboards feel instant on real devices. Part of our Full-Stack Optimization service.",
        techNote:
            "Core Web Vitals, TTFB reduction, CDN caching, image optimization, frontend profiling (Next.js/React).",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
        title: "Clean, scalable system & architecture",
        href: "/services/system-audit", // Added link
        description:
            "Turn a fragile setup into a system that is easy to reason about and scale. We handle System Audits & Architecture redesigns.",
        techNote:
            "Service boundaries, APIs, background jobs, scale-out patterns, reliability design & capacity planning.",
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    },
    {
        title: "DevOps & reliability team as a service",
        href: "/services/managed-vps", // Added link
        description:
            "Your dedicated team to plan, operate and watch over your infrastructure. We provide Managed VPS & Ongoing DevOps support.",
        techNote:
            "CI/CD pipelines, staging strategies, observability, alerting, on-call, backup drills & incident response.",
        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    },
    {
        title: "Dedicated infrastructure for your product",
        href: "/infra/high-performance-vps", // Added link
        description:
            "We design and operate the right mix of High-Performance VPS and clusters in regions that match your users.",
        techNote:
            "OpenStack/Cloud VPS clusters, regional placement, load balancing, caching layers & database topology.",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    },
] as const;

const PACKAGES = [
    {
        name: "Discovery & Full-Stack Audit",
        price: "Phase 1",
        description: "Understand, measure and map the risks",
        serviceLink: "/services/full-stack-optimization", // Context link
        features: [
            "Short call to understand your product, revenue model and where it currently hurts.",
            "Deep review of your website, APIs, databases and infrastructure layout.",
            "Plain-language report on speed, stability, cost and key technical risks.",
            "A 30–60 day roadmap as part of our Full-Stack Optimization service.",
        ],
        highlight: false,
    },
    {
        name: "Architecture & Rebuild",
        price: "Phase 2",
        description: "Redesign on a clean, high-performance model",
        serviceLink: "/services/system-audit",
        features: [
            "Design of a clearer, more resilient architecture around your core business flows.",
            "Targeted rebuild of critical paths: checkout, dashboards, internal tools, APIs.",
            "End-to-end optimization from frontend and API to database and caching layers.",
            "Before/after metrics so you see real improvements, not just new diagrams.",
        ],
        highlight: false,
    },
    {
        name: "Optimize, Operate & Host",
        price: "Phase 3",
        description: "Ongoing operations & managed infrastructure",
        serviceLink: "/services/managed-vps",
        features: [
            "We run and monitor your infrastructure for you on tuned VPS or dedicated clusters.",
            "Regular performance reviews as traffic and features evolve over time.",
            "Backups, monitoring and incident response so you don’t live on standby at 3 AM.",
            "Acting as your Managed VPS & DevOps partner instead of hiring a full department.",
        ],
        highlight: true,
    },
] as const;

const TECH_STACK = [
    "Next.js",
    "Node.js",
    "Python / FastAPI",
    "Nginx",
    "Postgres / MySQL",
    "Redis",
    "OpenStack & VPS clusters",
    "Docker",
    "Kubernetes",
    "Terraform / Ansible",
    "Prometheus / Grafana",
    "CDN & Edge",
] as const;

// --- Main Page Component ---

export default function HomeClient() {
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
                                OptyxStack — full-stack performance & infrastructure partner
                            </div>

                            <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
                                One team to{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
                                    fix what’s slow
                                </span>{" "}
                                and run the stack behind your product.
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
                                We help teams whose websites, APIs or internal tools feel slow,
                                fragile or expensive to run. OptyxStack{" "}
                                <Link href="/services/full-stack-optimization" className="text-emerald-400/90 hover:text-emerald-300 hover:underline decoration-emerald-500/30 underline-offset-4 transition-all">
                                    designs, rebuilds and operates your stack
                                </Link>{" "}
                                — from frontend to databases — so you don’t have to glue together freelancers and{" "}
                                <Link href="/infra/high-performance-vps" className="text-emerald-400/90 hover:text-emerald-300 hover:underline decoration-emerald-500/30 underline-offset-4 transition-all">
                                    generic hosting
                                </Link>.
                            </p>

                            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
                                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                                    <div className="text-xs font-semibold text-emerald-300">
                                        Faster for users
                                    </div>
                                    <p className="mt-1 text-[11px] text-slate-300">
                                        Pages, APIs and dashboards stay quick when traffic grows.
                                    </p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                                    <div className="text-xs font-semibold text-emerald-300">
                                        Less production stress
                                    </div>
                                    <p className="mt-1 text-[11px] text-slate-300">
                                        Fewer incidents, fewer unknowns and clearer ownership.
                                    </p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                                    <div className="text-xs font-semibold text-emerald-300">
                                        One accountable partner
                                    </div>
                                    <p className="mt-1 text-[11px] text-slate-300">
                                        One team responsible for performance, reliability and infra.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <a
                                    href="#contact"
                                    className="h-11 flex items-center justify-center rounded-full bg-emerald-400 px-8 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_18px_40px_rgba(16,185,129,0.45)] transition-all hover:bg-emerald-300 hover:shadow-[0_22px_50px_rgba(16,185,129,0.65)]"
                                >
                                    Book a 30-min discovery call
                                </a>
                                <a
                                    href="#process"
                                    className="h-11 rounded-full border border-white/18 bg-white/5 px-8 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-white/10 flex items-center"
                                >
                                    See the three-phase approach
                                </a>
                            </div>

                            <div className="mt-10 space-y-3">
                                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                                    Typical systems we look after
                                </div>
                                <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
                                    {/* Mapped chips to case studies or relevant pages */}
                                    <Link href="/case-studies/ecommerce-performance-boost" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors">
                                        E-commerce & booking
                                    </Link>
                                    <Link href="/case-studies/saas-platform-scaling" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors">
                                        SaaS products
                                    </Link>
                                    <Link href="/case-studies" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors">
                                        Internal tools & CRM
                                    </Link>
                                    <Link href="/case-studies" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors">
                                        Content & API platforms
                                    </Link>
                                    <Link href="/infra" className="px-3 py-1 text-slate-500 hover:text-slate-300 transition-colors">
                                        + the infrastructure behind them
                                    </Link>
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
                                    {["Web", "App", "Infra"].map((label) => (
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
                                        One team, all layers covered
                                    </span>
                                    <span className="text-slate-500">
                                        From <Link href="/services/system-audit" className="hover:text-emerald-400 underline decoration-slate-600 underline-offset-2">audit</Link> to <Link href="/services/managed-vps" className="hover:text-emerald-400 underline decoration-slate-600 underline-offset-2">hosting</Link>
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
                            From “something is wrong” to a stack you can trust every day.
                        </h2>
                        <p className="mt-4 text-sm text-slate-300">
                            OptyxStack looks at your product as a whole — the website or app, the
                            internal tools your team lives in, the data and the infrastructure
                            underneath. Then we reshape it into a fast, stable and understandable
                            system that can support the next years of growth.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {SERVICES.map((service) => (
                            <Link
                                href={service.href}
                                key={service.title}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-emerald-500/30"
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
                                    <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/25 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-transform">
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
                                    <h3 className="text-base font-semibold text-slate-50 group-hover:text-emerald-300 transition-colors">
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
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:text-right">
                        <Link href="/services" className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400 hover:text-emerald-300 hover:underline underline-offset-4">
                            View all services <span className="ml-2">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- Process Section --- */}
            <section
                id="process"
                className="relative z-10 border-t border-white/5 bg-[#040509] py-24"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 max-w-3xl">
                        <h2 className="text-3xl font-semibold text-white">
                            How working with OptyxStack feels — in three clear phases.
                        </h2>
                        <p className="mt-4 text-sm text-slate-300">
                            You don’t have to manage ten different vendors or keep every technical
                            detail in your head. Your job is to explain how the business works and
                            where it hurts; our job is to turn that into a fast and stable stack,
                            then keep it healthy.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            {
                                step: "01",
                                title: "Understand & measure",
                                text: "We listen, review your current stack and turn vague issues (\"it’s slow\", \"it breaks during campaigns\") into a clear list with numbers attached.",
                                linkText: "See Phase 1: Audit",
                                linkHref: "/services/full-stack-optimization"
                            },
                            {
                                step: "02",
                                title: "Redesign & rebuild",
                                text: "We agree on a realistic plan that fits your team and budget. Then we rebuild the key flows and infrastructure so they are faster and more predictable.",
                                linkText: "See Phase 2: Architecture",
                                linkHref: "/services/system-audit"
                            },
                            {
                                step: "03",
                                title: "Operate & improve",
                                text: "We stay as the team that runs, watches and tunes your system over time, so you can ship features without constantly worrying about stability.",
                                linkText: "See Phase 3: Managed VPS",
                                linkHref: "/services/managed-vps"
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                className="flex flex-col justify-between rounded-2xl border border-white/8 bg-white/[0.02] p-6"
                            >
                                <div>
                                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                                        {item.step}
                                    </div>
                                    <div className="mt-3 text-base font-semibold text-white">
                                        {item.title}
                                    </div>
                                    <p className="mt-3 text-sm text-slate-300">{item.text}</p>
                                </div>
                                <div className="mt-6 border-t border-white/5 pt-4">
                                    <Link href={item.linkHref} className="text-[11px] font-medium text-emerald-400 hover:text-emerald-300 hover:underline">
                                        {item.linkText} →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-sm text-slate-400">
                            Want to see exactly what you get?{" "}
                            <Link href="/services" className="text-emerald-400 hover:underline">
                                See how this process looks in our service packages.
                            </Link>
                        </p>
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
                            Infrastructure designed around your product, not just the cloud bill.
                        </h2>
                        <p className="mt-4 text-sm text-slate-300">
                            Many teams end up with slow or fragile systems because infrastructure
                            grew ad-hoc on top of the wrong servers or services. We start from your
                            product and traffic patterns, then design the right mix of{" "}
                            <Link href="/infra/high-performance-vps" className="text-emerald-400 hover:underline">tuned VPS</Link>,{" "}
                            <Link href="/infra/dedicated-server" className="text-emerald-400 hover:underline">clusters</Link>{" "}
                            and managed services behind it.
                        </p>
                        <ul className="mt-6 space-y-3 text-sm text-slate-200">
                            <li>• Capacity planning based on real traffic and growth, not guesswork.</li>
                            <li>• Regions and nodes chosen to be close to your main user markets.</li>
                            <li>• Backup, restore and disaster scenarios that are actually tested.</li>
                            <li>• Monitoring and alerts so issues are caught before users feel them.</li>
                        </ul>

                        <div className="mt-8">
                            <Link href="/infra/high-performance-vps" className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400 hover:text-emerald-300 hover:underline">
                                Explore our infrastructure options →
                            </Link>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-white/12 bg-[#090B11] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.9)]">
                        <h3 className="mb-4 text-sm font-semibold text-white">
                            Example stack OptyxStack can own for you
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-[11px] text-slate-300">
                            <div className="space-y-1">
                                <div className="font-mono text-slate-200">Customer-facing</div>
                                <p>
                                    <Link href="/services/full-stack-optimization" className="hover:text-emerald-300 border-b border-dotted border-slate-600">Optimized website or app</Link>, stable checkout and onboarding flows.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <div className="font-mono text-slate-200">Business logic</div>
                                <p>
                                    <Link href="/services/system-audit" className="hover:text-emerald-300 border-b border-dotted border-slate-600">APIs, background jobs and queues</Link> that stay responsive during spikes.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <div className="font-mono text-slate-200">Data layer</div>
                                <p>
                                    Healthy databases, indexes and caching so you don’t trade speed
                                    for correctness.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <div className="font-mono text-slate-200">Ops & observability</div>
                                <p>
                                    Metrics, logs, alerts and runbooks so incidents are handled
                                    quickly and calmly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Technical Details Section --- */}
            <section className="relative z-10 border-t border-white/5 bg-[#03040A] py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                        <div className="mb-4 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-sm font-semibold text-white">
                                    For technical founders & in-house teams
                                </h3>
                                <p className="mt-1 text-[12px] text-slate-400">
                                    If you or your engineers want to see what’s under the hood, we’re
                                    happy to go deep.
                                </p>
                            </div>
                            <span className="hidden rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300 md:inline-block">
                                Optional technical layer
                            </span>
                        </div>

                        <div className="grid gap-6 md:grid-cols-[2fr,3fr]">
                            <div className="space-y-3 text-[12px] text-slate-300">
                                <p>
                                    OptyxStack is comfortable working across modern web stacks and
                                    infrastructure: from Next.js frontends and Python/Node APIs to
                                    OpenStack-backed VPS clusters and managed cloud services.
                                </p>
                                <p>
                                    We prefer typed APIs, structured logging, centralized metrics and
                                    infrastructure-as-code.
                                </p>
                                <div className="mt-2 flex flex-col gap-1.5 pt-2">
                                    <Link href="/case-studies" className="text-emerald-400 hover:text-emerald-300 inline-flex items-center">
                                        Read how we apply this stack in real systems →
                                    </Link>
                                    <Link href="/blog" className="text-slate-400 hover:text-slate-300 inline-flex items-center">
                                        See our technical deep-dive articles →
                                    </Link>
                                </div>
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
                                <div className="mt-4 text-right">
                                    <Link href="/about" className="text-[10px] uppercase tracking-wider text-slate-500 hover:text-white transition-colors">
                                        More about our team & tech strategy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- NEW SECTION: Results & Insights (Bridge to Content) --- */}
            <section className="relative z-10 border-t border-white/5 bg-[#020205] py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Case Studies Column */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold text-white">From theory to real results</h3>
                                <Link href="/case-studies" className="text-xs text-emerald-400 hover:text-emerald-300 uppercase tracking-widest">See all →</Link>
                            </div>
                            <div className="space-y-4">
                                <Link href="/case-studies/ecommerce-performance-boost" className="block group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all">
                                    <div className="text-xs text-emerald-300 mb-1">E-commerce</div>
                                    <div className="font-semibold text-slate-200 group-hover:text-white">Boosting conversion by 15% via Core Web Vitals optimization</div>
                                </Link>
                                <Link href="/case-studies/saas-platform-scaling" className="block group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all">
                                    <div className="text-xs text-emerald-300 mb-1">SaaS Scale-up</div>
                                    <div className="font-semibold text-slate-200 group-hover:text-white">Migrating a monolithic dashboard to High-Performance VPS Clusters</div>
                                </Link>
                            </div>
                        </div>

                        {/* Blog/Insights Column */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold text-white">Engineering Insights</h3>
                                <Link href="/blog" className="text-xs text-slate-500 hover:text-white uppercase tracking-widest">View Blog →</Link>
                            </div>
                            <div className="space-y-4">
                                <Link href="/blog/optimizing-website-performance" className="flex gap-4 items-start group">
                                    <div className="h-16 w-24 flex-shrink-0 bg-white/5 rounded-lg border border-white/10 group-hover:border-emerald-500/20"></div>
                                    <div>
                                        <div className="text-sm font-semibold text-slate-300 group-hover:text-emerald-300 transition-colors">Why "Generic Cloud Hosting" is slowing down your API</div>
                                        <div className="text-xs text-slate-500 mt-1">Read article →</div>
                                    </div>
                                </Link>
                                <Link href="/blog/devops-best-practices" className="flex gap-4 items-start group">
                                    <div className="h-16 w-24 flex-shrink-0 bg-white/5 rounded-lg border border-white/10 group-hover:border-emerald-500/20"></div>
                                    <div>
                                        <div className="text-sm font-semibold text-slate-300 group-hover:text-emerald-300 transition-colors">5 DevOps patterns we apply to every client stack</div>
                                        <div className="text-xs text-slate-500 mt-1">Read article →</div>
                                    </div>
                                </Link>
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
                                A structured, full-stack engagement — not random “tuning hours”.
                            </h2>
                            <p className="mt-3 text-sm text-slate-300">
                                We move through three phases: discovery & audit, architecture &
                                rebuild, then ongoing optimization, operation and hosting. You can
                                stop after a phase or keep OptyxStack as the external team that owns
                                your stack long term.
                            </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <div className="flex items-center gap-2 rounded-full bg-white/5 p-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                                <span className="rounded-full bg-white/15 px-4 py-1 text-white">
                                    Project phases
                                </span>
                                <span className="px-4 py-1 text-slate-500">
                                    Ongoing managed infra
                                </span>
                            </div>
                            <Link href="/services" className="text-[10px] text-emerald-400 hover:underline mt-1">
                                View as service packages →
                            </Link>
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
                                {/* Added link to detailed service page */}
                                <div className="mt-3 text-center">
                                    <Link href={pkg.serviceLink} className="text-[10px] text-slate-500 hover:text-emerald-400 transition-colors">
                                        Read phase details →
                                    </Link>
                                </div>
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
                            Tell us where the stack hurts — we’ll map the path forward.
                        </h2>
                        <p className="mx-auto mb-9 max-w-xl text-sm text-slate-300">
                            Share a short description of your product, where it is slow or unstable,
                            and whether you already have an internal tech team. We’ll answer with a
                            simple, phased plan for architecture and performance, not a generic
                            checklist.
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
                                    placeholder="For example: slow checkout, timeouts during campaigns, internal tools your team avoids using, unclear ownership of the infrastructure..."
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

                        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 border-t border-white/5 pt-6">
                            <Link href="/case-studies" className="text-xs text-slate-400 hover:text-white transition-colors">
                                Want to see examples first? <span className="text-emerald-400">View case studies</span>
                            </Link>
                            <Link href="/about" className="text-xs text-slate-400 hover:text-white transition-colors">
                                Prefer reading how we work? <span className="text-emerald-400">About OptyxStack</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <Footer />
        </main>
    );
}