"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isInfraDropdownOpen, setIsInfraDropdownOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isMobileInfraOpen, setIsMobileInfraOpen] = useState(false);
    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const infraDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
            if (dropdownTimeoutRef.current) {
                clearTimeout(dropdownTimeoutRef.current);
            }
            if (infraDropdownTimeoutRef.current) {
                clearTimeout(infraDropdownTimeoutRef.current);
            }
        };
    }, []);

    // Navigation data structure
    const servicesItems = [
        { name: "Full-Stack Optimization", href: "/services/full-stack-optimization" },
        { name: "Website Speed Mini", href: "/services/website-speed-mini" },
        { name: "System Audit", href: "/services/system-audit" },
        { name: "Managed Database", href: "/services/managed-database" },
        { name: "Managed VPS", href: "/services/managed-vps" },
    ];

    const infrastructureItems = [
        { name: "Dedicated Server", href: "/infra/dedicated-server" },
        { name: "High Performance VPS", href: "/infra/high-performance-vps" },
        { name: "Managed VPS", href: "/infra/managed-vps" },
        { name: "Storage", href: "/infra/storage" },
    ];

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Blog", href: "/blog" },
        { name: "About", href: "/about" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl transition-all duration-300">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                {/* --- LOGO SECTION --- */}
                <Link href="/" className="group flex cursor-pointer items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center">
                        <Image
                            src="/iconv.png"
                            alt="OptyxStack Logo"
                            width={40}
                            height={40}
                            className="object-contain p-1"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-gray-900">
                        Optyx<span className="text-gray-500">Stack</span>
                    </span>
                </Link>

                {/* --- DESKTOP NAVIGATION --- */}
                <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
                    {/* Home link */}
                    <Link
                        href="/"
                        className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                    >
                        Home
                    </Link>

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
                        <button className="flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            Services
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-200 ${
                                    isServicesDropdownOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        {isServicesDropdownOpen && (
                            <div className="absolute top-full left-0 mt-3 w-64 rounded-xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="flex flex-col">
                                    {servicesItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block rounded-md px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-emerald-600"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Infrastructure dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => {
                            if (infraDropdownTimeoutRef.current) {
                                clearTimeout(infraDropdownTimeoutRef.current);
                                infraDropdownTimeoutRef.current = null;
                            }
                            setIsInfraDropdownOpen(true);
                        }}
                        onMouseLeave={() => {
                            infraDropdownTimeoutRef.current = setTimeout(() => {
                                setIsInfraDropdownOpen(false);
                            }, 300);
                        }}
                    >
                        <button className="flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            Infrastructure
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-200 ${
                                    isInfraDropdownOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        {isInfraDropdownOpen && (
                            <div className="absolute top-full left-0 mt-3 w-64 rounded-xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="flex flex-col">
                                    {infrastructureItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block rounded-md px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-emerald-600"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Other nav links */}
                    {navLinks
                        .filter((link) => link.name !== "Home")
                        .map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                            >
                                {item.name}
                            </Link>
                        ))}
                </nav>

                {/* --- DESKTOP CTA BUTTON --- */}
                <div className="hidden items-center gap-4 md:flex">
                    <Link
                        href="/services"
                        className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-lg bg-emerald-600 px-6 text-sm font-bold text-white transition-all hover:bg-emerald-700"
                    >
                        <span className="relative z-10">Request Audit</span>
                    </Link>
                </div>

                {/* --- MOBILE HAMBURGER BUTTON --- */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-900 md:hidden hover:bg-gray-50 transition-colors"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* --- MOBILE MENU OVERLAY --- */}
            {isMobileMenuOpen && (
                <div className="absolute left-0 top-full w-full border-b border-gray-200 bg-white px-6 py-6 shadow-2xl backdrop-blur-3xl md:hidden animate-in slide-in-from-top-5 fade-in duration-200">
                    <nav className="flex flex-col gap-6">
                        {/* Home link */}
                        <Link
                            href="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-medium text-gray-600 hover:text-emerald-600 transition-colors"
                        >
                            Home
                        </Link>

                        {/* Mobile Services accordion */}
                        <div>
                            <button
                                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                className="flex w-full items-center justify-between text-lg font-medium text-gray-600 hover:text-emerald-600 transition-colors"
                            >
                                Services
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-200 ${
                                        isMobileServicesOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {isMobileServicesOpen && (
                                <div className="mt-3 ml-2 flex flex-col gap-2 border-l border-gray-200 pl-4">
                                    {servicesItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsMobileServicesOpen(false);
                                            }}
                                            className="text-base text-gray-500 hover:text-emerald-600 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Infrastructure accordion */}
                        <div>
                            <button
                                onClick={() => setIsMobileInfraOpen(!isMobileInfraOpen)}
                                className="flex w-full items-center justify-between text-lg font-medium text-gray-600 hover:text-emerald-600 transition-colors"
                            >
                                Infrastructure
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-200 ${
                                        isMobileInfraOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {isMobileInfraOpen && (
                                <div className="mt-3 ml-2 flex flex-col gap-2 border-l border-gray-200 pl-4">
                                    {infrastructureItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsMobileInfraOpen(false);
                                            }}
                                            className="text-base text-gray-500 hover:text-emerald-600 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Other nav links */}
                        {navLinks
                            .filter((link) => link.name !== "Home")
                            .map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-gray-600 hover:text-emerald-600 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}

                        <hr className="border-gray-200" />
                        <Link
                            href="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex h-12 w-full items-center justify-center rounded-xl bg-emerald-600 text-base font-bold text-white shadow-lg transition-all hover:bg-emerald-700"
                        >
                            Request Audit
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
