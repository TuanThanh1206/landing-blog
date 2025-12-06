import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCaseStudyData, getAllCaseStudySlugs } from "@/lib/case-studies";
import { Calendar, ArrowLeft, TrendingUp, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
    const slugs = getAllCaseStudySlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = await getCaseStudyData(slug);

    if (!study) {
        notFound();
    }

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

            <article className="relative z-10 pt-28 pb-20 lg:pt-44 lg:pb-32">
                <div className="mx-auto max-w-5xl px-6">
                    {/* Back Button */}
                    <Link
                        href="/case-studies"
                        className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-emerald-300"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Case Studies
                    </Link>

                    {/* Header */}
                    <header className="mb-12">
                        {/* Client & Industry */}
                        <div className="mb-6 flex flex-wrap items-center gap-3">
                            {study.client && (
                                <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-emerald-300">
                                    {study.client}
                                </span>
                            )}
                            {study.industry && (
                                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                                    {study.industry}
                                </span>
                            )}
                            {study.tags && study.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] text-slate-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                            {study.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                            {study.date && (
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>
                                        {new Date(study.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>
                            )}
                        </div>
                    </header>

                    {/* Metrics Section */}
                    {study.metrics && study.metrics.length > 0 && (
                        <div className="mb-12 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:grid-cols-2 lg:grid-cols-4">
                            {study.metrics.map((metric, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="mb-2 text-3xl font-bold text-emerald-400">
                                        {metric.value}
                                    </div>
                                    <div className="mb-1 text-sm font-medium text-slate-300">
                                        {metric.label}
                                    </div>
                                    {metric.improvement && (
                                        <div className="text-xs text-emerald-400">
                                            {metric.improvement}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Challenge Section */}
                    {study.challenge && (
                        <section className="mb-12 rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
                            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-white">
                                <span className="flex h-2 w-2 rounded-full bg-red-500" />
                                The Challenge
                            </h2>
                            <p className="text-slate-300 leading-relaxed">{study.challenge}</p>
                        </section>
                    )}

                    {/* Solution Section */}
                    {study.solution && (
                        <section className="mb-12 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
                            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-white">
                                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                                Our Solution
                            </h2>
                            <p className="text-slate-300 leading-relaxed">{study.solution}</p>
                        </section>
                    )}

                    {/* Results Section */}
                    {study.results && (
                        <section className="mb-12 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
                            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-white">
                                <TrendingUp className="h-5 w-5 text-cyan-400" />
                                Results
                            </h2>
                            <p className="text-slate-300 leading-relaxed">{study.results}</p>
                        </section>
                    )}

                    {/* Content */}
                    <div
                        className="prose prose-invert prose-lg max-w-none
                            prose-headings:text-white prose-headings:font-semibold
                            prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
                            prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
                            prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                            prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-4
                            prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300 hover:prose-a:underline
                            prose-strong:text-white prose-strong:font-semibold
                            prose-code:text-emerald-300 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                            prose-pre:bg-[#05060A] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:p-4
                            prose-ul:text-slate-300 prose-ul:my-4
                            prose-ol:text-slate-300 prose-ol:my-4
                            prose-li:my-2
                            prose-blockquote:border-l-emerald-400/50 prose-blockquote:bg-white/5 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-slate-300
                            prose-img:rounded-xl prose-img:border prose-img:border-white/10
                            prose-hr:border-white/10"
                        dangerouslySetInnerHTML={{ __html: study.contentHtml || '' }}
                    />

                    {/* CTA Section */}
                    <div className="mt-16 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-8 text-center">
                        <h3 className="mb-4 text-2xl font-semibold text-white">
                            Ready to transform your system?
                        </h3>
                        <p className="mb-6 text-slate-300">
                            Let's discuss how we can help optimize your infrastructure and improve performance.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-400 px-8 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_18px_40px_rgba(16,185,129,0.45)] transition-all hover:bg-emerald-300 hover:shadow-[0_22px_50px_rgba(16,185,129,0.65)]"
                        >
                            Book a Consultation
                        </a>
                    </div>
                </div>
            </article>

            {/* Footer */}
            <Footer />
        </main>
    );
}

