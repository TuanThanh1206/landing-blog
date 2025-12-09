"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar"; // Assumes existing component
import Footer from "@/components/Footer"; // Assumes existing component
import {
    Lock,
    Eye,
    Shield,
    Globe,
    Cookie,
    FileText,
    CheckCircle2,
    Mail,
    ArrowRight,
    Server,
    Fingerprint
} from "lucide-react";

// --- Navigation Links for Sticky Sidebar ---
const SECTIONS = [
    { id: "intro", label: "1. Introduction" },
    { id: "who-we-are", label: "2. Who We Are" },
    { id: "collection", label: "3. Information Collection" },
    { id: "usage", label: "4. How We Use Data" },
    { id: "legal-bases", label: "5. Legal Bases" },
    { id: "sharing", label: "6. Sharing Information" },
    { id: "retention", label: "7. Data Retention" },
    { id: "security", label: "8. Security" },
    { id: "rights", label: "9. Your Rights" },
    { id: "cookies", label: "10. Cookies & Tracking" },
    { id: "third-party", label: "11. Third-Party Links" },
    { id: "children", label: "12. Children’s Privacy" },
    { id: "international", label: "13. International Transfers" },
    { id: "changes", label: "14. Changes to Policy" },
    { id: "contact", label: "15. Contact Us" },
];

export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState("intro");

    // Scroll spy to highlight active section in sidebar
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
                <div className="absolute top-[0%] right-[20%] h-[700px] w-[700px] rounded-full bg-emerald-900/10 blur-[120px]" />
                <div className="absolute bottom-[0%] left-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-900/10 blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            <Navbar />

            {/* --- Header Section --- */}
            <section className="relative z-10 pt-32 pb-12 lg:pt-40 border-b border-white/5 bg-gradient-to-b from-transparent to-[#05060A]">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="max-w-4xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                            <Lock className="h-3 w-3" />
                            Data Protection
                        </div>
                        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl">
                            Transparency is part of our engineering culture. Here is how we collect, handle, and protect your data.
                        </p>
                        <div className="mt-8 flex items-center gap-4 text-xs font-mono text-slate-500">
                            <span className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
                                <FileText className="h-3.5 w-3.5" />
                                Version 1.0
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
                                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm leading-7 text-slate-400">
                                    <p className="mb-4">
                                        This Privacy Policy explains how <strong>OptyxStack</strong> (“we”, “us”, “our”) collects, uses, discloses, and protects information about you when you:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 mb-4">
                                        <li>Visit our website <strong>optyxstack.com</strong> or any related domains/subdomains.</li>
                                        <li>Contact us via forms, email, or other channels.</li>
                                        <li>Engage with our services, including audits, optimization, DevOps/operations, and managed infrastructure.</li>
                                    </ul>
                                    <p>
                                        By using our website or services, you agree to this Privacy Policy. If you do not agree, please do not use our website or services.
                                    </p>
                                </div>
                            </div>

                            {/* 2. Who We Are */}
                            <div id="who-we-are" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">02</span>
                                    Who We Are
                                </h2>
                                <p className="text-sm text-slate-400 leading-7 mb-4">
                                    OptyxStack is a technical services partner focused on:
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
                                    {["Full-stack performance optimization", "System architecture design & rebuild", "DevOps / SRE / Operations as a Service", "Managed VPS & dedicated infrastructure"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 rounded border border-white/5 bg-white/5 px-3 py-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 3. Information Collection */}
                            <div id="collection" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">03</span>
                                    Information We Collect
                                </h2>
                                <div className="space-y-8">
                                    {/* 3.1 Provided */}
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                                            <Fingerprint className="h-4 w-4 text-slate-500" /> 3.1. Information you provide
                                        </h3>
                                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 text-sm text-slate-400">
                                            <ul className="space-y-3 list-disc pl-5">
                                                <li><strong>Contact details:</strong> Name, work email, phone number, job title.</li>
                                                <li><strong>Project info:</strong> Descriptions of your stack, goals, issues, and diagrams.</li>
                                                <li><strong>Billing info:</strong> Address, tax info (payments handled by third-party processors).</li>
                                                <li><strong>Support:</strong> Tickets, emails, chat messages, and feedback.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* 3.2 Automated */}
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                                            <Globe className="h-4 w-4 text-slate-500" /> 3.2. Information we collect automatically
                                        </h3>
                                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 text-sm text-slate-400">
                                            <ul className="space-y-3 list-disc pl-5">
                                                <li><strong>Usage data:</strong> IP address, browser type, OS, pages visited.</li>
                                                <li><strong>Cookies:</strong> Session identifiers, analytics cookies, preference settings.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* 3.3 Access */}
                                    <div>
                                        <h3 className="text-lg font-medium text-emerald-400 mb-3 flex items-center gap-2">
                                            <Server className="h-4 w-4" /> 3.3. Information we access during service delivery
                                        </h3>
                                        <div className="rounded-xl border border-emerald-500/20 bg-emerald-900/5 p-6 text-sm text-slate-300">
                                            <p className="mb-3">When you engage us to work on your systems, we may (with explicit permission) access:</p>
                                            <ul className="space-y-2 list-disc pl-5 text-slate-400 mb-4">
                                                <li>System configuration (Server, VPS, Cloud, Network).</li>
                                                <li>Load balancer, Cache, CDN, Database setups.</li>
                                                <li>Monitoring dashboards, logs, metrics, and traces.</li>
                                                <li>Limited production data (if strictly necessary for debugging).</li>
                                            </ul>
                                            <p className="text-xs text-emerald-400/80 italic">
                                                * We prefer working on non-production, scrubbed, or minimized datasets whenever possible.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 4. Usage */}
                            <div id="usage" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">04</span>
                                    How We Use Your Information
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6 text-sm">
                                    <div className="space-y-4">
                                        <h3 className="font-semibold text-white">To Provide Services</h3>
                                        <ul className="space-y-2 text-slate-400 list-disc pl-5">
                                            <li>Conduct audits & architectural work.</li>
                                            <li>Operate & monitor infrastructure.</li>
                                            <li>Diagnose performance issues.</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="font-semibold text-white">To Operate & Communicate</h3>
                                        <ul className="space-y-2 text-slate-400 list-disc pl-5">
                                            <li>Manage billing and accounting.</li>
                                            <li>Respond to support tickets.</li>
                                            <li>Maintain security & prevent abuse.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-6 border-t border-white/5 pt-4 text-xs text-slate-500">
                                    We do not sell your personal information to third parties.
                                </div>
                            </div>

                            {/* 5. Legal Bases */}
                            <div id="legal-bases" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">05</span>
                                    Legal Bases (Where Applicable)
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "Contract", desc: "To deliver the services you requested." },
                                        { title: "Legitimate Interests", desc: "To improve services, secure systems, and operate business." },
                                        { title: "Consent", desc: "For certain analytics, cookies, or marketing." },
                                        { title: "Legal Obligations", desc: "Where required to retain/share data by law." }
                                    ].map((item, i) => (
                                        <div key={i} className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                                            <div className="text-emerald-400 font-medium text-sm mb-1">{item.title}</div>
                                            <div className="text-slate-400 text-xs">{item.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 6. Sharing */}
                            <div id="sharing" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">06</span>
                                    How We Share Information
                                </h2>
                                <div className="space-y-6 text-sm text-slate-400 leading-7">
                                    <div>
                                        <strong className="text-white block mb-2">Service Providers:</strong>
                                        We may share data with hosting partners, email tools, analytics providers, and payment processors. They process data only on our behalf with strict security obligations.
                                    </div>
                                    <div>
                                        <strong className="text-white block mb-2">Client Tools:</strong>
                                        When working on your infrastructure, we integrate with your third-party tools (AWS, Datadog, etc.) per your instructions.
                                    </div>
                                    <div>
                                        <strong className="text-white block mb-2">Legal:</strong>
                                        If required by law, regulation, or to protect our rights and safety.
                                    </div>
                                </div>
                            </div>

                            {/* 7. Retention */}
                            <div id="retention" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">07</span>
                                    Data Retention
                                </h2>
                                <ul className="space-y-3 text-sm text-slate-400 list-disc pl-5">
                                    <li><strong>Project Data:</strong> Kept for a reasonable period post-engagement, then archived/deleted.</li>
                                    <li><strong>Logs:</strong> Retained only as long as useful for analysis or agreed operational monitoring.</li>
                                    <li><strong>Billing Records:</strong> Kept for the duration of the relationship and as required by tax law.</li>
                                </ul>
                            </div>

                            {/* 8. Security */}
                            <div id="security" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">08</span>
                                    Security
                                </h2>
                                <div className="rounded-xl border-l-4 border-emerald-500 bg-white/[0.02] p-6 text-sm text-slate-300">
                                    <div className="flex items-start gap-4 mb-4">
                                        <Shield className="h-6 w-6 text-emerald-500 shrink-0" />
                                        <p>We take reasonable technical and organizational measures to protect your information, including restricted access, secure communication channels, and least-privilege access policies.</p>
                                    </div>
                                    <p className="text-slate-500 text-xs pl-10">
                                        Note: No method of transmission is completely secure. While we work to protect your data, we cannot guarantee absolute security.
                                    </p>
                                </div>
                            </div>

                            {/* 9. Your Rights */}
                            <div id="rights" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">09</span>
                                    Your Rights
                                </h2>
                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                                    {["Access", "Correction", "Deletion", "Restriction", "Objection", "Portability"].map((right, i) => (
                                        <div key={i} className="rounded border border-white/10 bg-[#0A0B10] px-4 py-3 text-center text-slate-300 hover:border-emerald-500/50 transition-colors cursor-default">
                                            {right}
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-sm text-slate-400">
                                    To exercise your rights, contact us at <span className="text-emerald-400">privacy@optyxstack.com</span>. We may need to verify your identity.
                                </p>
                            </div>

                            {/* 10, 11, 12, 13 Grouped */}
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                                <div id="cookies" className="scroll-mt-32">
                                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                        <Cookie className="h-4 w-4 text-slate-500" /> 10. Cookies
                                    </h3>
                                    <p className="text-sm text-slate-400">
                                        We use cookies to remember preferences and analyze usage. You can control these via your browser settings.
                                    </p>
                                </div>
                                <div id="third-party" className="scroll-mt-32">
                                    <h3 className="text-lg font-semibold text-white mb-2">11. Third-Party Links</h3>
                                    <p className="text-sm text-slate-400">
                                        We are not responsible for the privacy practices of external websites linked from our platform.
                                    </p>
                                </div>
                                <div id="children" className="scroll-mt-32">
                                    <h3 className="text-lg font-semibold text-white mb-2">12. Children’s Privacy</h3>
                                    <p className="text-sm text-slate-400">
                                        Our services are not directed to children under 16. We do not knowingly collect data from them.
                                    </p>
                                </div>
                                <div id="international" className="scroll-mt-32">
                                    <h3 className="text-lg font-semibold text-white mb-2">13. International Transfers</h3>
                                    <p className="text-sm text-slate-400">
                                        Data may be processed in other countries. We ensure appropriate safeguards (like standard contractual clauses) are in place.
                                    </p>
                                </div>
                            </div>

                            {/* 14. Changes */}
                            <div id="changes" className="scroll-mt-32">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/20 text-sm font-mono text-emerald-400">14</span>
                                    Changes to this Policy
                                </h2>
                                <p className="text-sm text-slate-400">
                                    We may update this policy to reflect changes in services or laws. The "Last updated" date at the top indicates the latest revision. Continued use implies acceptance.
                                </p>
                            </div>

                            {/* 15. Contact */}
                            <div id="contact" className="scroll-mt-32 pt-8 border-t border-white/10">
                                <h2 className="text-xl font-semibold text-white mb-6">15. Contact Us</h2>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <a href="mailto:privacy@optyxstack.com" className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.05] transition-colors">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Privacy Inquiries</div>
                                            <div className="text-white font-medium">privacy@optyxstack.com</div>
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