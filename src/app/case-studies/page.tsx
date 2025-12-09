import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSortedCaseStudiesData } from "@/lib/case-studies";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
    title: "Case Studies | Real-World Results",
    description: "Real-world examples of how we've transformed slow, fragile systems into fast, reliable infrastructure. See measurable results from our optimization projects.",
    path: "/case-studies",
});

export default function CaseStudiesPage() {
    const caseStudies = getSortedCaseStudiesData();

    return (
        <main className="min-h-screen bg-[#020307] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-50 font-sans">
            {/* --- Subtle Ambient Background --- */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-20%] left-[10%] h-[520px] w-[520px] rounded-full bg-emerald-700/20 blur-[120px]" />
                <div className="absolute bottom-[-15%] right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-700/20 blur-[110px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_60%)] opacity-60" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            <Navbar />

            <section className="relative z-10 pt-28 pb-20 lg:pt-44 lg:pb-32">
                <div className="mx-auto max-w-7xl px-6">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </span>
                            Real Results
                        </div>
                        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Case{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
                                Studies
                            </span>
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300">
                            Real-world examples of how we've transformed slow, fragile systems into fast, reliable infrastructure.
                        </p>
                    </div>

                    {/* Case Studies Grid */}
                    {caseStudies.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-slate-400">No case studies yet. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {caseStudies.map((study) => (
                                <Link
                                    key={study.slug}
                                    href={`/case-studies/${study.slug}`}
                                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/16"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                                        <ArrowRight className="h-5 w-5 -rotate-45 text-emerald-400" />
                                    </div>

                                    <div className="flex flex-1 flex-col p-6">
                                        {/* Client & Industry */}
                                        {(study.client || study.industry) && (
                                            <div className="mb-3 flex flex-wrap gap-2">
                                                {study.client && (
                                                    <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-300">
                                                        {study.client}
                                                    </span>
                                                )}
                                                {study.industry && (
                                                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-slate-400">
                                                        {study.industry}
                                                    </span>
                                                )}
                                            </div>
                                        )}

                                        {/* Title */}
                                        <h2 className="mb-3 text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                                            {study.title}
                                        </h2>

                                        {/* Excerpt */}
                                        {study.excerpt && (
                                            <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-300">
                                                {study.excerpt}
                                            </p>
                                        )}

                                        {/* Metrics Preview */}
                                        {study.metrics && study.metrics.length > 0 && (
                                            <div className="mb-4 grid grid-cols-2 gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3">
                                                {study.metrics.slice(0, 2).map((metric, idx) => (
                                                    <div key={idx} className="text-center">
                                                        <div className="text-lg font-bold text-emerald-400">
                                                            {metric.value}
                                                        </div>
                                                        <div className="text-[10px] text-slate-500 uppercase tracking-wide">
                                                            {metric.label}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Tags */}
                                        {study.tags && study.tags.length > 0 && (
                                            <div className="mb-4 flex flex-wrap gap-2">
                                                {study.tags.slice(0, 3).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-400"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Meta Info */}
                                        <div className="mt-auto flex items-center gap-4 border-t border-white/5 pt-4 text-[11px] text-slate-400">
                                            {study.date && (
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="h-3.5 w-3.5" />
                                                    <span>
                                                        {new Date(study.date).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-1.5 text-emerald-400">
                                                <TrendingUp className="h-3.5 w-3.5" />
                                                <span>View Details</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}





