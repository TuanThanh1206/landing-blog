"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Mail, Linkedin, ExternalLink, ArrowRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    // Nhóm 1: Các giải pháp tối ưu, bảo mật, audit (Thiên về Software/Logic)
    const solutionLinks = [
        { name: "System & Performance Audit", href: "/services/system-audit" },
        { name: "Website Speed Optimization", href: "/services/website-speed-mini" },
        { name: "Full-Stack Optimization", href: "/services/full-stack-optimization" },
        { name: "Security Hardening", href: "/services/security-hardening" },
        { name: "Migration Service", href: "/services/migration" },
    ];

    // Nhóm 2: Hạ tầng, Server và Quản trị định kỳ (Thiên về Hardware/Ops)
    const infrastructureLinks = [
        { name: "Managed VPS", href: "/infra/managed-vps" },
        { name: "Dedicated Server", href: "/infra/dedicated-server" },
        { name: "Managed Database", href: "/services/managed-database" },
        { name: "High Performance VPS", href: "/infra/high-performance-vps" },
        { name: "Storage Solutions", href: "/infra/storage" },
    ];

    // Nhóm 3: Thông tin công ty & Điều hướng chung
    const companyLinks = [
        { name: "About Us", href: "/about" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Blog & Insights", href: "/blog" },
        { name: "Pricing Models", href: "#pricing" },
    ];

    const socialLinks = [
        { name: "GitHub", icon: Github, href: "#" },
        { name: "Twitter", icon: Twitter, href: "#" },
        { name: "LinkedIn", icon: Linkedin, href: "#" },
        { name: "Email", icon: Mail, href: "mailto:contact@optyxstack.com" },
    ];

    return (
        <footer className="relative z-10 border-t border-white/10 bg-[#0B0F19] text-gray-400">
            {/* Decorative line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
                {/* Main Grid Layout */}
                <div className="grid gap-12 xl:gap-8 lg:grid-cols-12 mb-16">

                    {/* Column 1: Brand Identity (Chiếm 4/12 cột) */}
                    <div className="lg:col-span-4 flex flex-col items-start">
                        <Link href="/" className="group flex items-center gap-3 mb-6">
                            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                                <Image
                                    src="/iconv.png"
                                    alt="OptyxStack Logo"
                                    width={32}
                                    height={32}
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                                    Studio
                                </span>
                                <span className="text-lg font-bold tracking-tight text-white leading-none">
                                    Optyx<span className="text-gray-500">Stack</span>
                                </span>
                            </div>
                        </Link>

                        <p className="mb-8 max-w-sm text-sm leading-relaxed text-gray-400">
                            End-to-end optimization from user-facing pages to system architecture.
                            We build fast, stable systems that scale effortlessly under load.
                        </p>

                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                                        rel="noopener noreferrer"
                                        className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-400"
                                        aria-label={social.name}
                                    >
                                        <Icon size={16} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Column 2: Solutions (Chiếm 3/12 cột) */}
                    <div className="lg:col-span-3">
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">
                            Performance & Audit
                        </h3>
                        <ul className="space-y-3">
                            {solutionLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-emerald-500/50 opacity-0 transition-all group-hover:opacity-100" />
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Infrastructure (Chiếm 3/12 cột) */}
                    <div className="lg:col-span-3">
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">
                            Managed Infrastructure
                        </h3>
                        <ul className="space-y-3">
                            {infrastructureLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-emerald-500/50 opacity-0 transition-all group-hover:opacity-100" />
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Company (Chiếm 2/12 cột) */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center justify-between text-sm text-gray-400 transition-colors hover:text-white"
                                    >
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Legal */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row text-xs text-gray-500">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-center md:text-left">
                            <span>&copy; {currentYear} OptyxStack Inc.</span>
                            <span className="hidden md:block text-gray-600">|</span>
                            <span>All rights reserved.</span>
                        </div>

                        <div className="flex gap-6 font-medium">
                            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}