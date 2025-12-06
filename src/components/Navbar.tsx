"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
            if (dropdownTimeoutRef.current) {
                clearTimeout(dropdownTimeoutRef.current);
            }
        };
    }, []);

    const navLinks = [
        { name: "Solutions", href: "/solutions" },
        { name: "Pricing", href: "#pricing" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Blog", href: "/blog" },
        { name: "About", href: "/about" },
    ];

    const serviceGroups = [
        {
            label: "Entry – Audit & Mini Optimize",
            items: [
                { name: "System & Performance Audit", href: "/services/system-audit" },
                { name: "Website Speed Optimization (Mini)", href: "/services/website-speed-mini" },
            ],
        },
        {
            label: "Core – Full Optimization",
            items: [
                { name: "Full-Stack System Optimization", href: "/services/full-stack-optimization" },
                { name: "Infrastructure Architecture & Scaling", href: "/services/infra-architecture-scaling" },
            ],
        },
        {
            label: "Managed – Monthly Services",
            items: [
                { name: "Managed VPS", href: "/services/managed-vps" },
                { name: "Managed Database", href: "/services/managed-database" },
                { name: "Maintenance & Support Retainer", href: "/services/maintenance-support" },
            ],
        },
        {
            label: "Add-ons",
            items: [
                { name: "Backup & Disaster Recovery", href: "/services/backup-disaster-recovery" },
                { name: "Security Hardening", href: "/services/security-hardening" },
                { name: "Migration Service", href: "/services/migration" },
            ],
        },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#020307]/80 backdrop-blur-xl transition-all duration-300">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                {/* --- LOGO SECTION --- */}
                <Link href="/" className="group flex cursor-pointer items-center gap-4">
                    <div className="relative flex h-11 w-11 items-center justify-center">
                        <Image
                            src="/iconv.png"
                            alt="Logo"
                            width={44}
                            height={44}
                            className="object-contain p-1"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="block text-[10px] font-bold tracking-[0.2em] text-emerald-500/80 uppercase">
                            Optimization Studio
                        </span>
                        <span className="text-xl font-bold tracking-tight text-white">
                            Optyx<span className="text-slate-500">Stack</span>
                        </span>
                    </div>
                </Link>

                {/* --- DESKTOP NAVIGATION --- */}
                <nav className="hidden items-center gap-8 md:flex">
                    {/* Services dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => {
                            if (dropdownTimeoutRef.current) {
                                clearTimeout(dropdownTimeoutRef.current);
                                dropdownTimeoutRef.current = null;
                            }
                            setIsServicesDropdownOpen(true);
                        }}
                        onMouseLeave={() => {
                            dropdownTimeoutRef.current = setTimeout(() => {
                                setIsServicesDropdownOpen(false);
                            }, 300);
                        }}
                    >
                        <button className="flex items-center gap-1 text-sm font-medium text-slate-300 transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                            Services
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-200 ${
                                    isServicesDropdownOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        {isServicesDropdownOpen && (
                            <div className="absolute top-full left-0 mt-3 w-[620px] rounded-2xl border border-white/10 bg-[#020307]/95 backdrop-blur-xl shadow-2xl py-4 px-4 animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="grid grid-cols-2 gap-4">
                                    {serviceGroups.map((group) => (
                                        <div key={group.label}>
                                            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                                                {group.label}
                                            </p>
                                            <div className="space-y-1.5">
                                                {group.items.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block rounded-md px-2 py-1.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-emerald-300"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {navLinks.map((item) =>
                        item.href.startsWith("/") ? (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-sm font-medium text-slate-300 transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                            >
                                {item.name}
                            </Link>
                        ) : (
                            <a
                                key={item.name}
                                href={item.href}
                                className="relative text-sm font-medium text-slate-300 transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                            >
                                {item.name}
                            </a>
                        )
                    )}
                </nav>

                {/* --- DESKTOP CTA BUTTON --- */}
                <div className="hidden items-center gap-4 md:flex">
                    <a
                        href="#contact"
                        className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-white px-6 text-sm font-bold text-black transition-all hover:bg-emerald-400 hover:text-white hover:shadow-[0_0_20px_rgba(52,211,153,0.6)]"
                    >
                        <span className="relative z-10">Start Audit</span>
                    </a>
                </div>

                {/* --- MOBILE HAMBURGER BUTTON --- */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden hover:bg-white/5"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* --- MOBILE MENU OVERLAY --- */}
            {isMobileMenuOpen && (
                <div className="absolute left-0 top-full w-full border-b border-white/10 bg-[#020307] px-6 py-6 shadow-2xl backdrop-blur-3xl md:hidden animate-in slide-in-from-top-5 fade-in duration-200">
                    <nav className="flex flex-col gap-6">
                        {/* Mobile Services dropdown */}
                        <div>
                            <button
                                onClick={() =>
                                    setIsServicesDropdownOpen(!isServicesDropdownOpen)
                                }
                                className="flex w-full items-center justify-between text-lg font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                            >
                                Services
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-200 ${
                                        isServicesDropdownOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {isServicesDropdownOpen && (
                                <div className="mt-3 ml-2 flex flex-col gap-4 border-l border-white/10 pl-4">
                                    {serviceGroups.map((group) => (
                                        <div key={group.label} className="space-y-2">
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                                                {group.label}
                                            </p>
                                            <div className="flex flex-col gap-2">
                                                {group.items.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        onClick={() => {
                                                            setIsMobileMenuOpen(false);
                                                            setIsServicesDropdownOpen(false);
                                                        }}
                                                        className="text-base text-slate-400 hover:text-emerald-400 transition-colors"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {navLinks.map((item) =>
                            item.href.startsWith("/") ? (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                                >
                                    {item.name}
                                </a>
                            )
                        )}

                        <hr className="border-white/10" />
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-base font-bold text-white shadow-lg"
                        >
                            Start with an Audit
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
