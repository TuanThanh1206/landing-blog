"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// --- Data Configuration ---

const PACKAGES = [
    {
        name: "Small System",
        subtitle: "Starter Tier",
        price: "15.000.000",
        period: "VND/month",
        description: "Suitable for startups and small businesses",
        features: [
            "Website and performance optimization",
            "Basic CDN and caching",
            "24/7 System monitoring",
            "Automatic daily backups",
            "Technical support via email",
            "Monthly performance reports",
            "Up to 10GB storage",
            "Up to 100GB bandwidth/month",
        ],
        highlight: false,
    },
    {
        name: "Medium System",
        subtitle: "Growth Tier",
        price: "45.000.000",
        period: "VND/month",
        description: "Ideal for growing businesses",
        features: [
            "All Small System features",
            "Optimized system architecture",
            "Load balancing and auto-scaling",
            "Advanced database optimization",
            "Priority 24/7 technical support",
            "Detailed weekly reports",
            "Up to 100GB storage",
            "Up to 1TB bandwidth/month",
            "Automated CI/CD pipeline",
            "Disaster recovery plan",
        ],
        highlight: true,
    },
    {
        name: "Enterprise System",
        subtitle: "Corporate Tier",
        price: "Contact Us",
        period: "Custom",
        description: "Comprehensive solution for large enterprises",
        features: [
            "All Medium System features",
            "Multi-region architecture",
            "Dedicated infrastructure",
            "Dedicated DevOps team",
            "24/7 Support with SLA",
            "Real-time reporting and analytics",
            "Unlimited storage",
            "Unlimited bandwidth",
            "Multi-cloud deployment",
            "Security audit and compliance",
            "On-site support (if needed)",
            "Internal team training",
        ],
        highlight: false,
    },
] as const;

const ADDON_SERVICES = [
    {
        name: "System Architecture Consulting",
        price: "5.000.000",
        period: "VND/project",
        description: "Assessment and system architecture design from scratch",
    },
    {
        name: "Migration & Transformation",
        price: "10.000.000",
        period: "VND/project",
        description: "Safely migrate systems to new platforms",
    },
    {
        name: "Security Audit",
        price: "8.000.000",
        period: "VND/audit",
        description: "Comprehensive security check and vulnerability patching",
    },
    {
        name: "Performance Optimization",
        price: "6.000.000",
        period: "VND/project",
        description: "In-depth performance optimization for applications",
    },
    {
        name: "Training & Knowledge Transfer",
        price: "3.000.000",
        period: "VND/day",
        description: "Train internal teams on DevOps and best practices",
    },
    {
        name: "Emergency Support",
        price: "2.000.000",
        period: "VND/hour",
        description: "Emergency support outside of business hours",
    },
] as const;

// --- Main Services Page Component ---

export default function ServicesPage() {
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

            {/* --- Hero Section --- */}
            <section className="relative z-10 pt-28 pb-16 lg:pt-44 lg:pb-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </span>
                            Pricing & Services
                        </div>

                        <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
                            Choose the package{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
                                that fits you
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl mx-auto text-base leading-relaxed text-slate-300">
                            From small systems to enterprise solutions, we provide flexible service packages
                            to meet your needs. All include professional support and performance commitments.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Pricing Packages Section --- */}
            <section className="relative z-10 border-t border-white/5 bg-[#05060A] py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">
                            Service Packages
                        </h2>
                        <p className="mt-4 text-sm text-slate-300">
                            Select the plan that matches your scale and requirements
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {PACKAGES.map((pkg) => (
                            <div
                                key={pkg.name}
                                className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                                    pkg.highlight
                                        ? "bg-gradient-to-b from-white/[0.09] via-white/[0.03] to-transparent border border-emerald-400/40 ring-1 ring-emerald-400/30 shadow-[0_24px_80px_rgba(16,185,129,0.35)] scale-105"
                                        : "bg-white/[0.02] border border-white/8 hover:border-white/16 hover:bg-white/[0.04]"
                                }`}
                            >
                                {pkg.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-black">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <div className="text-xs font-semibold text-emerald-300 uppercase tracking-[0.18em]">
                                        {pkg.subtitle}
                                    </div>
                                    <h3 className="mt-1 text-2xl font-semibold text-white">
                                        {pkg.name}
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-400">
                                        {pkg.description}
                                    </p>
                                    <div className="mt-6">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-bold text-white">
                                                {pkg.price}
                                            </span>
                                            {pkg.period !== "Custom" && (
                                                <span className="text-sm text-slate-400">
                                                    {pkg.period}
                                                </span>
                                            )}
                                        </div>
                                        {pkg.period === "Custom" && (
                                            <p className="mt-1 text-sm text-slate-400">
                                                {pkg.period}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <ul className="mb-8 flex-1 space-y-4 border-t border-white/8 pt-7">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <div
                                                className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
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
                                    {pkg.price === "Contact Us" ? "Contact Support" : "Select Plan"}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Addon Services Section --- */}
            <section className="relative z-10 border-t border-white/5 bg-[#040509] py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12">
                        <h2 className="text-3xl font-semibold text-white">
                            Addon Services
                        </h2>
                        <p className="mt-4 text-sm text-slate-300">
                            Additional services can be added to any package to meet your specific needs
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {ADDON_SERVICES.map((addon) => (
                            <div
                                key={addon.name}
                                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/16"
                            >
                                <div className="mb-4">
                                    <h3 className="text-base font-semibold text-slate-50">
                                        {addon.name}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                        {addon.description}
                                    </p>
                                </div>

                                <div className="mt-auto border-t border-white/5 pt-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold text-white">
                                            {addon.price}
                                        </span>
                                        <span className="text-xs text-slate-400">
                                            {addon.period}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Notes & Important Information Section --- */}
            <section className="relative z-10 border-t border-white/5 bg-[#03040A] py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                        <h2 className="mb-6 text-2xl font-semibold text-white">
                            Important Notes
                        </h2>

                        <div className="space-y-6 text-sm text-slate-300">
                            <div>
                                <h3 className="mb-2 text-base font-semibold text-emerald-300">
                                    Service Commitment (SLA)
                                </h3>
                                <ul className="ml-4 space-y-2 list-disc">
                                    <li>Small System: 99.5% Uptime, support response within 24 hours</li>
                                    <li>Medium System: 99.9% Uptime, support response within 4 hours</li>
                                    <li>Enterprise System: 99.99% Uptime, support response within 1 hour</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-2 text-base font-semibold text-emerald-300">
                                    Contracts & Payment
                                </h3>
                                <ul className="ml-4 space-y-2 list-disc">
                                    <li>All packages require a minimum 3-month contract</li>
                                    <li>Payment is monthly or annually (10% discount for annual payment)</li>
                                    <li>Prices may vary depending on specific requirements and project scale</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-2 text-base font-semibold text-emerald-300">
                                    Additional Services
                                </h3>
                                <ul className="ml-4 space-y-2 list-disc">
                                    <li>Addon services can be added at any time</li>
                                    <li>Addon prices may vary depending on project complexity</li>
                                    <li>Some addon services may require separate implementation time</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-2 text-base font-semibold text-emerald-300">
                                    Support & Maintenance
                                </h3>
                                <ul className="ml-4 space-y-2 list-disc">
                                    <li>All packages include 24/7 system monitoring</li>
                                    <li>Periodic maintenance and security updates are included</li>
                                    <li>Emergency support is available for an additional fee (see Emergency Support addon)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Comparison Table Section --- */}
            <section className="relative z-10 border-t border-white/5 bg-[#05060A] py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">
                            Compare Packages
                        </h2>
                        <p className="mt-4 text-sm text-slate-300">
                            See detailed feature comparison between packages
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                            <tr className="border-b border-white/10">
                                <th className="px-4 py-4 text-left text-sm font-semibold text-slate-300">
                                    Features
                                </th>
                                <th className="px-4 py-4 text-center text-sm font-semibold text-slate-300">
                                    Small System
                                </th>
                                <th className="px-4 py-4 text-center text-sm font-semibold text-emerald-300">
                                    Medium System
                                </th>
                                <th className="px-4 py-4 text-center text-sm font-semibold text-slate-300">
                                    Enterprise
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {[
                                { feature: "Storage", small: "10GB", medium: "100GB", enterprise: "Unlimited" },
                                { feature: "Bandwidth/month", small: "100GB", medium: "1TB", enterprise: "Unlimited" },
                                { feature: "Uptime SLA", small: "99.5%", medium: "99.9%", enterprise: "99.99%" },
                                { feature: "Response Time", small: "24 hours", medium: "4 hours", enterprise: "1 hour" },
                                { feature: "Backup", small: "Daily", medium: "Daily", enterprise: "Real-time" },
                                { feature: "CI/CD Pipeline", small: "No", medium: "Yes", enterprise: "Advanced" },
                                { feature: "Load Balancing", small: "No", medium: "Yes", enterprise: "Multi-region" },
                                { feature: "Dedicated Team", small: "No", medium: "No", enterprise: "Yes" },
                            ].map((row, index) => (
                                <tr
                                    key={row.feature}
                                    className={`border-b border-white/5 ${
                                        index % 2 === 0 ? "bg-white/[0.01]" : ""
                                    }`}
                                >
                                    <td className="px-4 py-4 text-sm text-slate-200">{row.feature}</td>
                                    <td className="px-4 py-4 text-center text-sm text-slate-400">{row.small}</td>
                                    <td className="px-4 py-4 text-center text-sm text-emerald-300 font-medium">
                                        {row.medium}
                                    </td>
                                    <td className="px-4 py-4 text-center text-sm text-slate-400">{row.enterprise}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* --- FAQ Section --- */}
            <section className="relative z-10 border-t border-white/5 bg-[#040509] py-20">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-white">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "Can I upgrade or downgrade my service package?",
                                a: "Yes, you can change your service package at any time. Upgrades take effect immediately, while downgrades take effect at the beginning of the next billing cycle.",
                            },
                            {
                                q: "Do prices include VAT?",
                                a: "All displayed prices exclude 10% VAT. VAT will be added to the final invoice.",
                            },
                            {
                                q: "Can I customize the service package?",
                                a: "Yes, especially with the Enterprise System package. We can customize features and services to fit your specific needs. Please contact us to discuss.",
                            },
                            {
                                q: "Can addon services be cancelled at any time?",
                                a: "Yes, you can add or cancel addon services at any time. Cancellations will take effect at the start of the next billing cycle.",
                            },
                            {
                                q: "Is there an initial setup fee?",
                                a: "Small and Medium Systems have no setup fee. The Enterprise System may have a setup fee depending on project complexity, which will be discussed during consultation.",
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"
                            >
                                <h3 className="mb-3 text-base font-semibold text-white">
                                    {faq.q}
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-300">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section
                id="contact"
                className="relative z-10 border-t border-white/5 bg-[#020308] py-28"
            >
                <div className="mx-auto max-w-4xl px-6">
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#05050A] p-8 text-center md:p-14">
                        <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

                        <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
                            Ready to get started?
                        </h2>
                        <p className="mx-auto mb-9 max-w-xl text-sm text-slate-300">
                            Contact us for a free consultation and choose the service package best suited to your needs.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="#contact"
                                className="h-12 rounded-full bg-emerald-400 px-8 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_18px_40px_rgba(16,185,129,0.45)] transition-all hover:bg-emerald-300 hover:shadow-[0_22px_50px_rgba(16,185,129,0.65)] flex items-center justify-center"
                            >
                                Contact Us
                            </a>
                            <Link
                                href="/"
                                className="h-12 rounded-full border border-white/18 bg-white/5 px-8 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-white/10 flex items-center justify-center"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="relative z-10 border-t border-white/5 bg-[#020307] py-10 text-center">
                <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                    Website · System · Architecture · Infrastructure Optimization
                </div>
                <div className="flex justify-center gap-6 text-xs text-slate-400">
                    <a href="#" className="hover:text-emerald-300">
                        GitHub
                    </a>
                    <a href="#" className="hover:text-emerald-300">
                        Twitter
                    </a>
                    <a href="#" className="hover:text-emerald-300">
                        Status
                    </a>
                </div>
                <p className="mt-6 text-[10px] text-slate-600">
                    &copy; {new Date().getFullYear()} OptyxStack. End-to-end optimization from
                    user-facing pages to system architecture and dedicated infrastructure.
                </p>
            </footer>
        </main>
    );
}