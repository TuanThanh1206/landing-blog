"use client";

import React from "react";
import Navbar from "@/components/Navbar"; // Assumes existing component
import Footer from "@/components/Footer"; // Assumes existing component
import {
    MoveRight,
    Server,
    ShieldCheck,
    Database,
    RefreshCw,
    Layers,
    Clock,
    CheckCircle2,
    ArrowRight,
    Activity,
    Zap
} from "lucide-react";

// --- Data Configuration ---

const USE_CASES = [
    {
        title: "Upgrade Infrastructure",
        desc: "Move from shared hosting or legacy cloud to high-performance VPS, Dedicated Servers, or OpenStack.",
        icon: Server
    },
    {
        title: "Standardize Chaos",
        desc: "Consolidate systems built by multiple freelancers into a standardized, clean, and documented architecture.",
        icon: Layers
    },
    {
        title: "Database Engine Switch",
        desc: "Migrate data safely between engines (MySQL → Postgres, Mongo → SQL) with schema validation.",
        icon: Database
    },
    {
        title: "Vendor Transition",
        desc: "Escape vendor lock-in. Move from AWS to GCP, Cloud to On-premise, or expensive PaaS to self-hosted.",
        icon: MoveRight
    },
    {
        title: "Scale & Decouple",
        desc: "Split a monolith into modular services or microservices. Expand to multi-region nodes closer to users.",
        icon: RefreshCw
    }
];

const COMMITMENTS = [
    {
        title: "Zero-Downtime Approach",
        desc: "We use replication, shadow deployment, and safe traffic switching to ensure users never notice the move."
    },
    {
        title: "No Data Loss",
        desc: "Snapshots, warm-standby replicas, and integrity checks ensure every byte is preserved."
    },
    {
        title: "100% Risk Control",
        desc: "We operate with strict checklists and instant rollback plans for every stage of the migration."
    },
    {
        title: "Managed A–Z",
        desc: "You don't touch the terminal. We handle the planning, execution, verification, and cleanup."
    }
];

const PROCESS_STEPS = [
    {
        step: "01",
        title: "System Analysis & Risk Map",
        details: [
            "Map current architecture & dependencies",
            "Identify bottlenecks & resource usage",
            "Establish performance latency baselines",
            "Create a detailed Risk Map"
        ]
    },
    {
        step: "02",
        title: "Infrastructure Planning",
        details: [
            "Design new topology (VPS/Cluster/Cloud)",
            "Select optimal regions/nodes",
            "Resource capacity planning",
            "Security & Access Control setup"
        ]
    },
    {
        step: "03",
        title: "Data & App Migration",
        details: [
            "Database replication (Master-Slave setup)",
            "Storage/Asset sync (S3/Local)",
            "Environment & Secret configuration",
            "Codebase compatibility checks"
        ]
    },
    {
        step: "04",
        title: "Safe Traffic Switch",
        details: [
            "Canary Rollout or Blue-Green Deployment",
            "Real-time load & error monitoring",
            "Full DNS propagation",
            "Legacy system decomissioning"
        ]
    },
    {
        step: "05",
        title: "After-Care Monitoring",
        details: [
            "24-48h intensive monitoring period",
            "Fine-tuning (Cache, Indexes, Nginx)",
            "Final Before/After Performance Report"
        ]
    }
];

const PRICING_TIERS = [
    {
        name: "Small System",
        price: "10,000,000 VND",
        sub: "(~ $400 USD)",
        features: [
            "Small Website + API",
            "Database < 20GB",
            "Single Server / VPS scope",
            "Basic Architecture Map",
            "7 Days Support"
        ]
    },
    {
        name: "Medium System",
        price: "15m – 25m VND",
        sub: "(~ $600 – $1,000 USD)",
        features: [
            "SaaS / CRM / E-commerce",
            "Database 20GB – 100GB",
            "2–4 Servers / VPS Nodes",
            "CDN + Caching Setup",
            "14 Days Support"
        ],
        highlight: true
    },
    {
        name: "Enterprise",
        price: "Custom Quote",
        sub: "Contact Us",
        features: [
            "Multi-region Infrastructure",
            "Complex Microservices",
            "High-Availability Clusters",
            "Auto-scaling & Load Balancing",
            "30 Days Support"
        ]
    }
];

export default function MigrationService() {
    return (
        <main className="min-h-screen bg-[#020307] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-50 font-sans">
            {/* --- Ambient Background --- */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <div className="absolute top-[10%] left-[20%] h-[500px] w-[500px] rounded-full bg-emerald-900/10 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-cyan-900/10 blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            <Navbar />

            {/* --- Hero Section --- */}
            <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                            <RefreshCw className="h-3 w-3 animate-spin-slow" />
                            Add-on Service
                        </div>

                        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
                            Migrate your stack. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
                                Safe. Fast. Zero Downtime.
                            </span>
                        </h1>

                        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                            Moving environments, upgrading infrastructure, or switching cloud vendors shouldn't be a nightmare. We treat migration as a precision engineering task—ensuring risk control and no impact on your users.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <button className="h-12 rounded-full bg-emerald-400 px-8 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:bg-emerald-300 hover:scale-105">
                                Plan Your Migration
                            </button>
                            <button className="h-12 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-white/10">
                                View Pricing
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- When to use this (Grid) --- */}
            <section className="relative z-10 py-24 border-y border-white/5 bg-white/[0.02]">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 md:text-center max-w-2xl md:mx-auto">
                        <h2 className="text-2xl font-semibold text-white mb-4">When do you need this service?</h2>
                        <p className="text-sm text-slate-400">
                            Available as a standalone project or an add-on to our Audit & Optimization packages.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {USE_CASES.map((item, idx) => (
                            <div key={idx} className="group relative rounded-xl border border-white/10 bg-[#05060A] p-6 hover:border-emerald-500/30 transition-all">
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Our Commitments --- */}
            <section className="relative z-10 py-24 bg-[#020307]">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-400 mb-2 font-semibold">
                                Safety First
                            </div>
                            <h2 className="text-3xl font-semibold text-white mb-6">
                                We don't "hope" it works. <br />
                                We engineer it to work.
                            </h2>
                            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                                Migrations fail when they are treated as simple "copy-paste" jobs. We treat them as critical infrastructure changes with strict rollback protocols.
                            </p>

                            <div className="space-y-6">
                                {COMMITMENTS.map((c, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">
                                            <ShieldCheck className="h-5 w-5 text-emerald-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm">{c.title}</h4>
                                            <p className="text-xs text-slate-400 mt-1">{c.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual Representation of Zero Downtime */}
                        <div className="relative rounded-2xl border border-white/10 bg-[#0A0B10] p-8">
                            <div className="absolute top-0 right-0 p-4">
                                <span className="inline-flex items-center gap-1.5 rounded bg-emerald-500/10 px-2 py-1 text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                                    <Activity className="h-3 w-3" /> Live Migration
                                </span>
                            </div>
                            <div className="space-y-6 font-mono text-xs mt-4">
                                <div className="flex justify-between text-slate-500 border-b border-white/5 pb-2">
                                    <span>Step</span>
                                    <span>Status</span>
                                </div>
                                <div className="flex justify-between items-center text-slate-300">
                                    <span>1. Replica Sync</span>
                                    <span className="text-emerald-400">Complete</span>
                                </div>
                                <div className="flex justify-between items-center text-slate-300">
                                    <span>2. Warm Standby</span>
                                    <span className="text-emerald-400">Ready</span>
                                </div>
                                <div className="flex justify-between items-center text-white">
                                    <span>3. Traffic Switch (Blue/Green)</span>
                                    <div className="flex gap-1">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-emerald-400">In Progress</span>
                                    </div>
                                </div>
                                <div className="mt-4 rounded bg-black/50 p-3 text-slate-500">
                                    <span className="text-emerald-500">$</span> traffic_route --weight=100 --target=new_cluster
                                    <br />
                                    <span className="text-emerald-500">{">"}</span> 0 errors detected.
                                    <br />
                                    <span className="text-emerald-500">{">"}</span> Latency: 45ms (Improved by 30%)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- The Process Timeline --- */}
            <section className="relative z-10 py-24 border-t border-white/5 bg-[#030408]">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-semibold text-white">The Migration Workflow</h2>
                        <p className="mt-3 text-sm text-slate-400">Structured execution to prevent surprises.</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 md:left-1/2" />

                        <div className="space-y-12">
                            {PROCESS_STEPS.map((item, index) => (
                                <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-[#030408] bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold font-mono z-10">
                                        {index + 1}
                                    </div>

                                    {/* Content Card */}
                                    <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                                        <div className={`rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                            <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">{item.step}</div>
                                            <h3 className="text-lg font-semibold text-white mb-4">{item.title}</h3>
                                            <ul className={`space-y-2 text-sm text-slate-400 ${index % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                                                {item.details.map((detail, dIdx) => (
                                                    <li key={dIdx} className="flex items-center gap-2">
                                                        {index % 2 !== 0 && <span className="hidden md:inline-block h-1 w-1 rounded-full bg-emerald-500/50" />}
                                                        {detail}
                                                        {(index % 2 === 0 || typeof window === 'undefined') && <span className="md:hidden inline-block h-1 w-1 rounded-full bg-emerald-500/50" />} {/* Logic simplification for demo */}
                                                        {index % 2 === 0 && <span className="hidden md:inline-block h-1 w-1 rounded-full bg-emerald-500/50" />}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Pricing --- */}
            <section className="relative z-10 py-24 bg-[#05060A]">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 md:flex md:items-end md:justify-between">
                        <div>
                            <h2 className="text-3xl font-semibold text-white">Transparent Pricing</h2>
                            <p className="mt-3 text-sm text-slate-400">
                                One-time fees for the complete migration project.
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-xs text-emerald-400 font-medium">
                            Bundle Discount: 10-20% off if paired with Rebuild/Optimize plans
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {PRICING_TIERS.map((tier, i) => (
                            <div key={i} className={`relative flex flex-col rounded-2xl border p-8 ${tier.highlight ? 'border-emerald-500/40 bg-emerald-900/5' : 'border-white/10 bg-white/[0.02]'}`}>
                                {tier.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                                        Most Common
                                    </div>
                                )}
                                <h3 className="text-lg font-medium text-white">{tier.name}</h3>
                                <div className="mt-4 mb-1 text-2xl font-semibold text-white">{tier.price}</div>
                                <div className="text-xs text-slate-500 font-mono mb-6">{tier.sub}</div>

                                <ul className="mb-8 space-y-3 flex-1">
                                    {tier.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-300">
                                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full rounded-lg py-3 text-xs font-semibold uppercase tracking-wider transition-all ${
                                    tier.highlight
                                        ? 'bg-emerald-500 text-black hover:bg-emerald-400'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Deliverables & Compatibility --- */}
            <section className="relative z-10 py-24 border-t border-white/5 bg-[#020307]">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* What you get */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                <Clock className="h-5 w-5 text-slate-500" /> What You Get (Deliverables)
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "New Architecture Design",
                                    "Pre-Migration Audit Report",
                                    "Rollback Strategy Plan",
                                    "Clean & Optimized Environment",
                                    "Before/After Performance Report",
                                    "7-30 Days Technical Support"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 rounded border border-white/5 bg-white/[0.02] p-3 text-sm text-slate-300">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Compatibility */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                <Layers className="h-5 w-5 text-slate-500" /> Compatible Add-ons
                            </h3>
                            <p className="text-sm text-slate-400 mb-6">
                                This service works best when combined with:
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Full-Stack Audit",
                                    "Architecture & Rebuild",
                                    "Managed VPS / Infra",
                                    "Database Optimization"
                                ].map((tag, i) => (
                                    <span key={i} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-emerald-300">
                                        + {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-6 text-xs text-slate-500 italic">
                                * Combining services ensures you don't just migrate, but improve performance simultaneously.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section className="relative z-10 py-20 border-t border-white/5 bg-[#05060A]">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                        <Zap className="h-8 w-8 text-emerald-400" fill="currentColor" />
                    </div>
                    <h2 className="text-3xl font-semibold text-white mb-4">
                        Afraid of downtime? <br />
                        <span className="text-emerald-400">Let us make it safe.</span>
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                        Whether it's a simple server move or a complex cloud transformation, we have the plan ready.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="h-12 w-full sm:w-auto rounded-full bg-emerald-400 px-8 text-sm font-semibold uppercase tracking-wide text-black transition-all hover:bg-emerald-300 hover:scale-105">
                            Book a 30-min Discovery Call
                        </button>
                        <button className="flex items-center gap-2 h-12 w-full sm:w-auto rounded-full border border-white/10 bg-white/5 px-8 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-white/10">
                            Get a Quote <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}