"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar"; // Assumes existing component
import Footer from "@/components/Footer"; // Assumes existing component
import {
    ShieldCheck,
    FileText,
    AlertCircle,
    CheckCircle2,
    Mail,
    ArrowRight,
    Lock
} from "lucide-react";

// --- Navigation Links for Sticky Sidebar ---
const SECTIONS = [
    { id: "intro", label: "1. Introduction" },
    { id: "scope", label: "2. Scope of Services" },
    { id: "engagement", label: "3. Engagement Requirements" },
    { id: "infrastructure", label: "4. Infrastructure & Hosting" },
    { id: "payment", label: "5. Payment & Billing" },
    { id: "changes", label: "6. Project Scope & Changes" },
    { id: "responsibilities", label: "7. Client Responsibilities" },
    { id: "confidentiality", label: "8. Confidentiality (NDA)" },
    { id: "security", label: "9. Security & Data" },
    { id: "ip", label: "10. Intellectual Property" },
    { id: "termination", label: "11. Suspension & Termination" },
    { id: "liability", label: "12. Limitation of Liability" },
    { id: "slas", label: "13. SLAs" },
    { id: "communication", label: "14. Communication" },
    { id: "modifications", label: "15. Modifications" },
    { id: "law", label: "16. Governing Law" },
    { id: "contact", label: "17. Contact" },
];

export default function TermsOfService() {
    const [activeSection, setActiveSection] = useState("intro");

    // Simple scroll spy to highlight active section in sidebar
    useEffect(() => {
        const handleScroll = () => {
            const sections = SECTIONS.map(s => document.getElementById(s.id));
            const scrollPosition = window.scrollY + 150; // Offset

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Header offset
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <main className="min-h-screen bg-[#020307] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-50 font-sans">
            {/* --- Ambient Background --- */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <div className="absolute top-[0%] left-[20%] h-[700px] w-[700px] rounded-full bg-emerald-900/10 blur-[120px]" />
                <div className="absolute bottom-[0%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-900/10 blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            <Navbar />

            {/* --- Header Section --- */}
            <section className="relative z-10 pt-32 pb-12 lg:pt-40 border-b border-white/5 bg-gradient-to-b from-transparent to-[#05060A]">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="max-w-4xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                            <ShieldCheck className="h-3 w-3" />
                            Legal Documentation
                        </div>
                        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                            Terms of Service
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl">
                            Please read these terms carefully before engaging with our infrastructure, optimization services, or consulting.
                        </p>
                        <div className="mt-8 flex items-center gap-4 text-xs font-mono text-slate-500">
                            <span className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
                                <FileText className="h-3.5 w-3.5" />
                                Version 1.2
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                                Last updated: January 2025
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Content Grid --- */}
            <section className="relative z-10 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 items-start">

                        {/* --- Sticky Sidebar (Desktop) --- */}
                        <aside className="hidden lg:block sticky top-28 h-[calc(100vh-140px)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            <nav className="space-y-1">
                                {SECTIONS.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`group flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-xs font-medium transition-all ${
                                            activeSection === item.id
                                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                                : "text-slate-500 hover:bg-white/5 hover:text-slate-300 border border-transparent"
                                        }`}
                                    >
                                        <span className="truncate">{item.label}</span>
                                        {activeSection === item.id && (
                                            <ArrowRight className="h-3 w-3 opacity-100" />
                                        )}
                                    </button>
                                ))}
                            </nav>
                        </aside>

                        {/* --- Main Legal Text --- */}
                        <article className="prose prose-invert prose-slate max-w-none space-y-16">

                            {/* 1. Introduction */}
                            <div id="intro" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">01</span>
                                    Introduction
                                </h2>
                                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 text-sm leading-7 text-slate-400">
                                    <p className="mb-4">
                                        These Terms of Service (“Terms”) govern your access to and use of all services provided by <strong>OptyxStack</strong> (“we”, “us”, “our”).
                                    </p>
                                    <p>
                                        By engaging with our services, signing a proposal, using our infrastructure, or accessing any part of our platform, you agree to these Terms. <span className="text-emerald-300 font-medium">If you do not agree, you must not use our services.</span>
                                    </p>
                                </div>
                            </div>

                            {/* 2. Scope */}
                            <div id="scope" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">02</span>
                                    Scope of Services
                                </h2>
                                <div className="text-sm leading-7 text-slate-400">
                                    <p className="mb-4">OptyxStack provides a range of technical services, including but not limited to:</p>
                                    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                                        {[
                                            "Full-Stack Performance Optimization",
                                            "System Architecture Design & Rebuild",
                                            "DevOps / SRE / Operations as a Service",
                                            "Managed VPS & Dedicated Infrastructure",
                                            "Database Management & Optimization",
                                            "System Audit & Technical Assessment",
                                            "Website Speed Optimization (Mini / Full)",
                                            "Migration & Transformation Projects",
                                            "Monitoring, Alerts, Backups & Incident Response"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="h-1 w-1 rounded-full bg-emerald-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="italic text-slate-500 border-l-2 border-white/10 pl-4">
                                        Service details may vary depending on the chosen plan, contract, or proposal.
                                    </p>
                                </div>
                            </div>

                            {/* 3. Engagement */}
                            <div id="engagement" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">03</span>
                                    Engagement Requirements
                                </h2>
                                <div className="text-sm leading-7 text-slate-400 space-y-4">
                                    <p>To perform our work effectively, the client agrees to:</p>
                                    <ul className="list-disc pl-5 space-y-2 text-slate-300">
                                        <li>Provide timely access to servers, codebase, dashboards, or documentation when required.</li>
                                        <li>Assign at least one point of contact for communication.</li>
                                        <li>Ensure that systems, applications, and data provided for work are legally owned or licensed.</li>
                                    </ul>
                                    <div className="flex items-start gap-3 rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4 text-yellow-200/80">
                                        <AlertCircle className="h-5 w-5 shrink-0" />
                                        <p className="text-xs">We are not liable for delays caused by missing or late access/information from the client side.</p>
                                    </div>
                                </div>
                            </div>

                            {/* 4. Infrastructure */}
                            <div id="infrastructure" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">04</span>
                                    Infrastructure & Hosting Terms
                                </h2>
                                <div className="space-y-6 text-sm leading-7 text-slate-400">
                                    <div>
                                        <h3 className="font-semibold text-white mb-2">4.1. Fair-use & Performance</h3>
                                        <p>Resources (CPU, RAM, bandwidth, IOPS) must be used reasonably and within agreed limits.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-2">4.2. Prohibited Content</h3>
                                        <p className="mb-2">You may NOT host:</p>
                                        <ul className="grid sm:grid-cols-2 gap-2 text-slate-300">
                                            {["Illegal content or activity", "Malware, phishing, crypto-mining", "DDoS tools", "Spam/Bulk-email", "Copyright-infringing materials"].map((bad, i) => (
                                                <li key={i} className="flex items-center gap-2 text-xs bg-white/5 rounded px-2 py-1">
                                                    <span className="text-red-400">✕</span> {bad}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="mt-2 text-xs text-red-400">We reserve the right to suspend services immediately for violations.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-2">4.3. Uptime & Reliability</h3>
                                        <p>We aim for industry-standard availability but do NOT guarantee 100% uptime unless explicitly stated in a separate SLA.</p>
                                    </div>
                                </div>
                            </div>

                            {/* 5. Payment */}
                            <div id="payment" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">05</span>
                                    Payment & Billing
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                        <h3 className="font-medium text-emerald-400 mb-3 text-xs uppercase tracking-wider">Payment Terms</h3>
                                        <ul className="text-sm text-slate-400 space-y-2">
                                            <li>• Billed monthly, yearly, or per project.</li>
                                            <li>• Payments must be completed <strong>before work begins</strong> unless stated otherwise.</li>
                                            <li>• Some services require deposits.</li>
                                        </ul>
                                    </div>
                                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                        <h3 className="font-medium text-emerald-400 mb-3 text-xs uppercase tracking-wider">Refund Policy</h3>
                                        <ul className="text-sm text-slate-400 space-y-2">
                                            <li>• Audit & Optimization: <strong>Non-refundable</strong>.</li>
                                            <li>• Infrastructure fees: <strong>Non-refundable</strong> once provisioned.</li>
                                            <li>• Refunds only for clear billing errors.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4 text-xs text-slate-500">
                                    Late payments may result in service suspension, removal of backups, or infrastructure shutdown after a warning period.
                                </div>
                            </div>

                            {/* 6. Scope Changes */}
                            <div id="changes" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">06</span>
                                    Project Scope & Changes
                                </h2>
                                <p className="text-sm text-slate-400 leading-7">
                                    Work is carried out based on the agreed scope. Any new requests (features, migrations, redesigns, additional optimization) may require additional fees, a new timeframe, or an updated proposal. <strong>We will not expand scope without client approval.</strong>
                                </p>
                            </div>

                            {/* 7 & 8 Grouped visually for flow */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div id="responsibilities" className="scroll-mt-32">
                                    <h2 className="text-lg font-semibold text-white mb-4">07. Client Responsibilities</h2>
                                    <ul className="text-sm text-slate-400 space-y-2 list-disc pl-5">
                                        <li>Maintaining valid access credentials.</li>
                                        <li>Ensuring data is legal/compliant.</li>
                                        <li>Informing us before major deployments.</li>
                                    </ul>
                                </div>
                                <div id="confidentiality" className="scroll-mt-32">
                                    <h2 className="text-lg font-semibold text-white mb-4">08. Confidentiality</h2>
                                    <p className="text-sm text-slate-400 mb-2">Both parties agree to keep all business, system, and customer data confidential.</p>
                                    <div className="flex items-center gap-2 text-xs text-emerald-400">
                                        <Lock className="h-3 w-3" />
                                        <span>Separate NDA available upon request.</span>
                                    </div>
                                </div>
                            </div>

                            {/* 9. Security */}
                            <div id="security" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">09</span>
                                    Security & Data Protection
                                </h2>
                                <div className="rounded-2xl border border-white/10 bg-[#0A0B10] p-6 text-sm text-slate-400">
                                    <p className="mb-4">OptyxStack follows industry-standard security practices. However:</p>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3">
                                            <span className="text-slate-600">1.</span>
                                            <span>No system can guarantee absolute security.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-slate-600">2.</span>
                                            <span>The client is responsible for application-level vulnerabilities unless covered by a separate security engagement.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-slate-600">3.</span>
                                            <span>We are not liable for breaches caused by third-party services, plugins, or client-side misconfigurations.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* 10. IP */}
                            <div id="ip" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">10</span>
                                    Intellectual Property
                                </h2>
                                <div className="space-y-4 text-sm text-slate-400">
                                    <div>
                                        <strong className="text-white block mb-1">Code provided by the client:</strong>
                                        Remains property of the client.
                                    </div>
                                    <div>
                                        <strong className="text-white block mb-1">Code or tools created by OptyxStack:</strong>
                                        We grant the client a license to use any optimizations or scripts created for the project. However, internal tools, libraries, or automation frameworks built by us remain exclusively ours unless stated otherwise.
                                    </div>
                                </div>
                            </div>

                            {/* 11. Termination */}
                            <div id="termination" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">11</span>
                                    Suspension & Termination
                                </h2>
                                <p className="text-sm text-slate-400 leading-7">
                                    We may suspend or terminate services if payments are overdue, the client violates laws, or systems are abusive. The client may terminate service with notice according to the contract. <strong className="text-white">Refunds are not provided for remaining time on a billing cycle.</strong>
                                </p>
                            </div>

                            {/* 12. Limitation of Liability */}
                            <div id="liability" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">12</span>
                                    Limitation of Liability
                                </h2>
                                <div className="rounded-lg border-l-4 border-emerald-500 bg-white/[0.02] p-6 text-sm text-slate-300 italic">
                                    <p className="mb-4">To the maximum extent permitted by law:</p>
                                    <ul className="space-y-2 list-disc pl-5">
                                        <li>OptyxStack is not liable for indirect damages, revenue loss, downtime, or business disruption.</li>
                                        <li>Total liability is limited to the amount the client has paid in the past 30 days.</li>
                                        <li>We are not responsible for issues caused by third-party providers (AWS, GCP, DCs, etc.).</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 13, 14, 15, 16 Grouped */}
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                                <div id="slas" className="scroll-mt-32">
                                    <h3 className="text-lg font-semibold text-white mb-2">13. SLAs (If Applicable)</h3>
                                    <p className="text-sm text-slate-400">SLAs regarding response times and uptime only apply if they are explicitly included in the service contract.</p>
                                </div>
                                <div id="communication" className="scroll-mt-32">
                                    <h3 className="text-lg font-semibold text-white mb-2">14. Communication</h3>
                                    <p className="text-sm text-slate-400">We use Email, Ticket Portals, and Slack/Telegram. Support hours depend on your selected plan.</p>
                                </div>
                                <div id="modifications" className="scroll-mt-32">
                                    <h3 className="text-lg font-semibold text-white mb-2">15. Modifications</h3>
                                    <p className="text-sm text-slate-400">We reserve the right to update these Terms. Continued use of services indicates acceptance.</p>
                                </div>
                                <div id="law" className="scroll-mt-32">
                                    <h3 className="text-lg font-semibold text-white mb-2">16. Governing Law</h3>
                                    <p className="text-sm text-slate-400">These Terms are governed by the laws of the jurisdiction in which OptyxStack operates unless stated otherwise.</p>
                                </div>
                            </div>

                            {/* 17. Contact */}
                            <div id="contact" className="scroll-mt-32 pt-8 border-t border-white/10">
                                <h2 className="text-xl font-semibold text-white mb-6">17. Contact Us</h2>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <a href="mailto:support@optyxstack.com" className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.05] transition-colors">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Support Email</div>
                                            <div className="text-white font-medium">support@optyxstack.com</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </article>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}