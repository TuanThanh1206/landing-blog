"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// --- Types ---
export interface InfraPageData {
    title: string;
    subtitle: string;
    description: string;
    heroDescription: string;
    stats: { label: string; value: string }[]; // New: Số liệu uy tín
    features: string[];
    specifications: {
        label: string;
        value: string;
        icon?: React.ReactNode;
    }[];
    useCases: {
        title: string;
        description: string;
    }[];
    pricing: {
        label: string;
        price: string;
        description: string; // New: Mô tả gói
        features: string[]; // New: Chi tiết gói
        highlight?: boolean; // New: Nổi bật gói phổ biến
    }[];
}

interface InfraPageTemplateProps {
    data: InfraPageData;
}

// --- Icons (Inline SVGs for portability) ---
const CheckIcon = () => (
    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
);
const CpuIcon = () => (
    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
);

export default function InfraPageTemplate({ data }: InfraPageTemplateProps) {
    return (
        <main className="min-h-screen bg-[#030305] text-slate-300 selection:bg-emerald-500/30 selection:text-emerald-50 font-sans antialiased">
            {/* --- Ambient Background Effects --- */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-emerald-900/10 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[10%] h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]" />
            </div>

            <Navbar />

            {/* --- Hero Section --- */}
            <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative">
                    {/* Background Grid Accent */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl opacity-20 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                    </div>

                    <div className="mx-auto max-w-4xl text-center relative">
                        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/30 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                            <span className="text-xs font-medium tracking-widest uppercase text-emerald-400">
                    {data.subtitle}
                </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                            {data.title.split(' ').map((word, i) => (
                                <span key={i} className={i === 0 ? "text-white" : "text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-white"}>
                        {word}{' '}
                    </span>
                            ))}
                        </h1>

                        <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
                            {data.heroDescription}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#pricing"
                                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                            >
                                View Configurations
                            </a>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium rounded-lg transition-all backdrop-blur-sm"
                            >
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Stats / Trust Section (New) --- */}
            <section className="relative z-10 border-y border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                        {data.stats.map((stat, idx) => (
                            <div key={idx} className="py-8 text-center">
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Overview & Tech Specs Combined --- */}
            <section className="relative z-10 py-24 bg-[#050508]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Built for Performance</h2>
                            <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                                {data.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {data.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5">
                                        <CheckIcon />
                                        <span className="text-sm font-medium text-slate-200">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technical Datasheet Look */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0F] shadow-2xl">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500" />
                            <div className="p-6 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
                                <h3 className="font-mono text-sm uppercase tracking-widest text-emerald-400">Technical Specifications</h3>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                </div>
                            </div>
                            <div className="p-0">
                                {data.specifications.map((spec, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-5 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group"
                                    >
                                        <div className="flex items-center gap-3">
                                    <span className="p-2 rounded bg-white/5 text-slate-400 group-hover:text-emerald-400 transition-colors">
                                        <CpuIcon />
                                    </span>
                                            <span className="text-sm font-medium text-slate-400">{spec.label}</span>
                                        </div>
                                        <span className="text-sm font-mono font-semibold text-slate-100">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Use Cases Grid --- */}
            <section className="relative z-10 py-24 bg-[#030305]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Ideal Workloads</h2>
                        <p className="text-slate-400">Optimized environments for your specific needs</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.useCases.map((useCase, index) => (
                            <div key={index} className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:translate-y-[-2px]">
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">{useCase.title}</h3>
                                <p className="text-sm leading-relaxed text-slate-400">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Pricing Section (Professional Tiers) --- */}
            <section id="pricing" className="relative z-10 py-24 bg-[#050508] border-t border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Transparent Pricing</h2>
                        <p className="text-slate-400">Enterprise-grade infrastructure at competitive rates</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {data.pricing.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col p-8 rounded-2xl border ${plan.highlight ? 'border-emerald-500/50 bg-emerald-950/10' : 'border-white/10 bg-white/[0.02]'} transition-all hover:border-emerald-500/30`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-black text-xs font-bold uppercase tracking-wide rounded-full">
                                        Most Popular
                                    </div>
                                )}
                                <div className="mb-6">
                                    <h3 className="text-lg font-medium text-white mb-2">{plan.label}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                                        {plan.price !== 'Contact Us' && <span className="text-slate-500">/mo</span>}
                                    </div>
                                    <p className="text-sm text-slate-400 mt-4">{plan.description}</p>
                                </div>

                                <div className="flex-1 space-y-4 mb-8">
                                    {plan.features.map((feat, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="mt-1"><CheckIcon /></div>
                                            <span className="text-sm text-slate-300">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className={`w-full py-3 rounded-lg text-sm font-semibold transition-all ${plan.highlight ? 'bg-emerald-500 hover:bg-emerald-400 text-black' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                                    {plan.price === 'Contact Us' ? 'Contact Sales' : 'Configure Now'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Footer (Minimalist) --- */}
            <footer className="py-12 border-t border-white/5 bg-[#020203] text-center">
                <div className="container mx-auto px-6">
                    <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} OptyxStack Infrastructure. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
