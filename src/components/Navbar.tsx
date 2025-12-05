"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isInfraDropdownOpen, setIsInfraDropdownOpen] = useState(false);
    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (dropdownTimeoutRef.current) {
                clearTimeout(dropdownTimeoutRef.current);
            }
        };
    }, []);

    const navLinks = [
        { name: "Services", href: "/services" },
        { name: "Blog", href: "/blog" },
        { name: "Process", href: "#process" },
        { name: "Pricing", href: "#pricing" },
    ];

    const infraSubLinks = [
        { name: "Dedicated Server", href: "/infra/dedicated-server" },
        { name: "Managed VPS", href: "/infra/managed-vps" },
        { name: "Storage", href: "/infra/storage" },
        { name: "High Performance VPS", href: "/infra/high-performance-vps" },
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
                <nav className="hidden items-center gap-10 md:flex">
                    {navLinks.map((item) => (
                        item.href.startsWith('/') ? (
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
                    ))}
                    
                    {/* Infra Dropdown */}
                    <div 
                        className="relative"
                        onMouseEnter={() => {
                            if (dropdownTimeoutRef.current) {
                                clearTimeout(dropdownTimeoutRef.current);
                                dropdownTimeoutRef.current = null;
                            }
                            setIsInfraDropdownOpen(true);
                        }}
                        onMouseLeave={() => {
                            dropdownTimeoutRef.current = setTimeout(() => {
                                setIsInfraDropdownOpen(false);
                            }, 300); // Delay 300ms before closing
                        }}
                    >
                        <button className="flex items-center gap-1 text-sm font-medium text-slate-300 transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                            Infra
                            <ChevronDown 
                                size={16} 
                                className={`transition-transform duration-200 ${isInfraDropdownOpen ? 'rotate-180' : ''}`}
                            />
                        </button>
                        
                        {isInfraDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-56 rounded-xl border border-white/10 bg-[#020307]/95 backdrop-blur-xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                {infraSubLinks.map((subLink) => (
                                    <Link
                                        key={subLink.name}
                                        href={subLink.href}
                                        className="block px-4 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-emerald-300"
                                    >
                                        {subLink.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
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
                        {navLinks.map((item) => (
                            item.href.startsWith('/') ? (
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
                        ))}
                        
                        {/* Mobile Infra Dropdown */}
                        <div>
                            <button
                                onClick={() => setIsInfraDropdownOpen(!isInfraDropdownOpen)}
                                className="flex w-full items-center justify-between text-lg font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                            >
                                Infra
                                <ChevronDown 
                                    size={20} 
                                    className={`transition-transform duration-200 ${isInfraDropdownOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {isInfraDropdownOpen && (
                                <div className="mt-2 ml-4 flex flex-col gap-3 border-l border-white/10 pl-4">
                                    {infraSubLinks.map((subLink) => (
                                        <Link
                                            key={subLink.name}
                                            href={subLink.href}
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsInfraDropdownOpen(false);
                                            }}
                                            className="text-base text-slate-400 hover:text-emerald-400 transition-colors"
                                        >
                                            {subLink.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        
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