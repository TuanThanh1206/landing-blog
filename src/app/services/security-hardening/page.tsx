"use client";

import React from "react";
import Navbar from "@/components/Navbar"; // Assumes existing component
import Footer from "@/components/Footer"; // Assumes existing component
import {
    ShieldAlert,
    Siren,
    Search,
    Lock,
    FileSearch,
    Activity,
    Server,
    Terminal,
    CheckCircle2,
    ArrowRight,
    Eye,
    Zap,
    AlertTriangle
} from "lucide-react";

// --- Data Configuration ---

const SCENARIOS = [
    {
        title: "Active Attack (DDoS / Exploits)",
        desc: "Your API or website is under heavy load, facing brute-force attempts, or being exploited by bots.",
        icon: Siren,
        color: "text-red-500"
    },
    {
        title: "Unauthorized Access",
        desc: "Suspicious logins to your admin panel, server (SSH), or cloud console from unknown locations.",
        icon: Lock,
        color: "text-amber-500"
    },
    {
        title: "Data Integrity Issues",
        desc: "Database returning errors, data disappearing, or unauthorized modification of records.",
        icon: DatabaseIcon, // Defined below as local fallback or import
        color: "text-rose-500"
    },
    {
        title: "Malware & Web Shells",
        desc: "Strange files appearing in your codebase, outgoing spam traffic, or high CPU usage from unknown processes.",
        icon: FileSearch,
        color: "text-orange-500"
    }
];

// Helper for icon
function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    );
}

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Triaging & Containment",
        desc: "Stop the bleeding immediately.",
        details: [
            "Block malicious IPs & traffic patterns",
            "Isolate compromised services/containers",
            "Revoke dangerous access tokens",
            "Prevent lateral movement to other nodes"
        ]
    },
    {
        step: "02",
        title: "Forensics & Investigation",
        desc: "Understand the 'Who, How, and When'.",
        details: [
            "Deep log analysis (Nginx, App, DB, System)",
            "Trace entry points & exploit paths",
            "Identify IOCs (Indicators of Compromise)",
            "Scan for backdoors or web shells"
        ]
    },
    {
        step: "03",
        title: "Remediation & Cleanup",
        desc: "Return to a clean state.",
        details: [
            "Patch vulnerabilities (Code/Server)",
            "Remove malware & rogue scripts",
            "Restore data from safe snapshots",
            "Verify system integrity post-cleanup"
        ]
    },
    {
        step: "04",
        title: "System Hardening",
        desc: "Prevent recurrence.",
        details: [
            "Strict Firewall & Fail2ban rules",
            "Zero-trust Access (SSH Keys, VPN)",
            "Security Headers & HTTPS enforcement",
            "Database & Redis protection"
        ]
    },
    {
        step: "05",
        title: "Monitoring & Reporting",
        desc: "Visibility and documentation.",
        details: [
            "Setup Real-time Alerting (Prometheus/Grafana)",
            "Deliver full Incident Report (Root Cause)",
            "Recommendations for long-term security"
        ]
    }
];

const PRICING_TIERS = [
    {
        name: "Small System",
        price: "5,000,000 VND",
        sub: "(~ $200 USD)",
        features: [
            "Single Website / API",
            "1 Server / VPS",
            "24-Hour Handling Turnaround",
            "Malware Removal & Patching",
            "Basic Incident Report"
        ]
    },
    {
        name: "Medium System",
        price: "15,000,000 VND",
        sub: "(~ $600 USD)",
        features: [
            "Web + API + Database Cluster",
            "2–4 VPS / Servers",
            "Deep Forensics Investigation",
            "Full System Hardening",
            "Detailed Root Cause Analysis"
        ],
        highlight: true
    },
    {
        name: "Enterprise / Critical",
        price: "Custom Quote",
        sub: "Contact Us",
        features: [
            "Multi-region / Microservices",
            "Critical Severity Incidents",
            "24/7 Emergency Response",
            "Legal/Compliance Data Recovery",
            "Ongoing Security Retainer"
        ]
    }
];

export default function SecurityService() {
    return (
        <main className="min-h-screen bg-[#020307] text-slate-200 selection:bg-red-500/30 selection:text-red-50 font-sans">
            {/* --- Ambient Background (Red/Emerald mix for Security theme) --- */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <div className="absolute top-[0%] right-[0%] h-[600px] w-[600px] rounded-full bg-red-900/10 blur-[120px]" />
                <div className="absolute bottom-[0%] left-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-900/05 blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            <Navbar />

            {/* --- Hero Section --- */}
            <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-red-400">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                            </span>
                            Incident Response Team
                        </div>

                        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
                            Detect, Neutralize, and <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                                Secure Your System.
                            </span>
                        </h1>

                        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                            Security incidents happen unexpectedly. When they do, you don't need panic—you need precision. We act as your first line of defense to stop attacks, clean up data, and harden infrastructure without disrupting your business.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <button className="flex items-center gap-2 h-12 rounded-full bg-red-500 px-8 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all hover:bg-red-600 hover:scale-105">
                                <Siren className="h-4 w-4" /> Book Emergency Call
                            </button>
                            <button className="h-12 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-white/10">
                                View Pricing
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Scenarios Grid --- */}
            <section className="relative z-10 py-24 border-y border-white/5 bg-white/[0.02]">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-4">When to activate this service?</h2>
                        <p className="text-sm text-slate-400 max-w-2xl">
                            If you are experiencing any of these symptoms, immediate action is required to prevent data loss or reputation damage.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SCENARIOS.map((item, idx) => (
                            <div key={idx} className="group relative rounded-xl border border-white/10 bg-[#05060A] p-6 hover:border-red-500/30 transition-all">
                                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ${item.color}`}>
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Detailed Process & Terminal Visual --- */}
            <section className="relative z-10 py-24 bg-[#020307]">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">

                        {/* Left: Steps */}
                        <div>
                            <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-400 mb-2 font-semibold">
                                The Response Protocol
                            </div>
                            <h2 className="text-3xl font-semibold text-white mb-8">
                                How we handle a live incident
                            </h2>

                            <div className="space-y-10 border-l border-white/10 pl-8 relative">
                                {PROCESS_STEPS.map((step, i) => (
                                    <div key={i} className="relative group">
                                        <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-[#020307] bg-white/10 group-hover:bg-emerald-500 transition-colors" />
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="font-mono text-xs text-emerald-500">{step.step}</span>
                                            <h3 className="text-lg font-medium text-white">{step.title}</h3>
                                        </div>
                                        <p className="text-xs text-slate-500 italic mb-3">{step.desc}</p>
                                        <ul className="space-y-2">
                                            {step.details.map((d, dIdx) => (
                                                <li key={dIdx} className="flex items-center gap-2 text-sm text-slate-300">
                                                    <span className="h-1 w-1 rounded-full bg-slate-600" />
                                                    {d}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Hardening / Terminal Visual */}
                        <div className="sticky top-32">
                            <div className="rounded-xl border border-white/10 bg-[#0A0B10] overflow-hidden shadow-2xl">
                                <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <Terminal className="h-4 w-4 text-slate-500" />
                                        <span className="text-xs font-mono text-slate-400">root@optyx-secure-node:~</span>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <div className="h-2.5 w-2.5 rounded-full bg-red-500/20" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/20" />
                                    </div>
                                </div>
                                <div className="p-6 font-mono text-xs leading-relaxed text-slate-300">
                                    <div className="mb-4">
                                        <span className="text-emerald-400">➜</span> <span className="text-slate-400">Scanning access logs for patterns...</span>
                                        <br />
                                        <span className="text-red-400">[ALERT]</span> High volume requests from IP 192.168.x.x (User-Agent: bot/1.0)
                                        <br />
                                        <span className="text-red-400">[ALERT]</span> SQL Injection attempt detected in /api/v1/auth
                                    </div>

                                    <div className="mb-4">
                                        <span className="text-emerald-400">➜</span> <span className="text-slate-400">Applying containment rules...</span>
                                        <br />
                                        <span className="text-emerald-500">[OK]</span> Added IP 192.168.x.x to blackhole list.
                                        <br />
                                        <span className="text-emerald-500">[OK]</span> Rate-limiting enabled (Threshold: 50 req/s).
                                        <br />
                                        <span className="text-emerald-500">[OK]</span> Service 'payment-api' isolated.
                                    </div>

                                    <div className="mb-4 animate-pulse">
                                        <span className="text-emerald-400">➜</span> <span className="text-slate-400">Verifying system integrity...</span>
                                        <br />
                                        <span className="text-emerald-500">[OK]</span> No modified core files found.
                                        <br />
                                        <span className="text-emerald-500">[OK]</span> Database snapshots verified.
                                    </div>

                                    <div className="border-t border-white/10 pt-4 mt-4 text-emerald-400">
                                        Status: THREAT NEUTRALIZED.
                                        <br />
                                        Monitoring Active...
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badge */}
                            <div className="mt-6 rounded-lg border border-emerald-500/20 bg-emerald-900/10 p-4">
                                <h4 className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                                    <ShieldAlert className="h-4 w-4 text-emerald-400" /> Security Commitment
                                </h4>
                                <ul className="text-xs text-slate-400 space-y-1">
                                    <li>• Strict NDA Compliance & Confidentiality</li>
                                    <li>• OWASP / CIS Standard Practices</li>
                                    <li>• Zero Data Leakage to 3rd Parties</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- Pricing --- */}
            <section className="relative z-10 py-24 bg-[#05060A] border-t border-white/5">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 md:flex md:items-end md:justify-between">
                        <div>
                            <h2 className="text-3xl font-semibold text-white">Transparent Response Fees</h2>
                            <p className="mt-3 text-sm text-slate-400">
                                Flat fees for incident handling. No hidden hourly rates for basic recovery.
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-xs text-emerald-400 font-medium">
                            Existing Managed Clients: 20–30% Off
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {PRICING_TIERS.map((tier, i) => (
                            <div key={i} className={`relative flex flex-col rounded-2xl border p-8 ${tier.highlight ? 'border-red-500/40 bg-red-900/5' : 'border-white/10 bg-white/[0.02]'}`}>
                                {tier.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-red-500 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                                        Recommended for SaaS
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
                                        ? 'bg-red-500 text-white hover:bg-red-600'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}>
                                    Request Handling
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section className="relative z-10 py-20 border-t border-white/5 bg-[#020307]">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-white/10 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                        <Zap className="h-8 w-8 text-red-400" fill="currentColor" />
                    </div>
                    <h2 className="text-3xl font-semibold text-white mb-4">
                        Under attack right now? <br />
                        <span className="text-red-400">We are ready to intervene.</span>
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                        Don't wait for the damage to spread. Let our team secure your infrastructure immediately.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="h-12 w-full sm:w-auto rounded-full bg-red-500 px-8 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-red-600 hover:scale-105 shadow-lg shadow-red-500/20">
                            Book Emergency Call (30-min)
                        </button>
                        <button className="flex items-center justify-center gap-2 h-12 w-full sm:w-auto rounded-full border border-white/10 bg-white/5 px-8 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-white/10">
                            Submit Incident Details <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}