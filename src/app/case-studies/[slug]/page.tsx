import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import { getCaseStudyData, getAllCaseStudySlugs } from "@/lib/case-studies";
import { Calendar, ArrowLeft, TrendingUp, CheckCircle2, RefreshCw } from "lucide-react";
import { generateMetadata as genMeta, generateCaseStudySchema, siteConfig } from "@/lib/seo";

export function generateStaticParams() {
    const slugs = getAllCaseStudySlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const study = await getCaseStudyData(slug);

    if (!study) {
        return {};
    }

    return genMeta({
        title: study.title,
        description: study.excerpt || study.content.substring(0, 150) || "Read our case study",
        path: `/case-studies/${slug}`,
    });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = await getCaseStudyData(slug);

    if (!study) {
        notFound();
    }

    const createdAt = study.createdAt || study.date;
    const updatedAt = study.updatedAt || study.date;
    const formatDateLong = (dateString: string) =>
        new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

    const jsonLd = generateCaseStudySchema({
        title: study.title,
        description: study.excerpt || study.content.substring(0, 150) || "",
        url: `${siteConfig.siteUrl}/case-studies/${slug}`,
        datePublished: createdAt,
        dateModified: updatedAt,
        client: study.client,
        industry: study.industry,
    });

    return (
        <>
            <Script
                id="casestudy-jsonld"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-white text-gray-900 selection:bg-emerald-500/20 selection:text-gray-900 font-sans">
                {/* Subtle background grid */}
                <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#e5f9f3_0,_transparent_55%)] opacity-70" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(148,163,184,0.08)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(148,163,184,0.06)_1px,_transparent_1px)] bg-[size:56px_56px]" />
                </div>

                <Navbar />

                <article className="relative z-10 pt-28 pb-20 lg:pt-40 lg:pb-32">
                    <div className="mx-auto max-w-4xl px-6">
                        {/* Back Button */}
                        <Link
                            href="/case-studies"
                            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-800 transition-colors hover:text-emerald-600"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Case Studies
                        </Link>

                        {/* Header */}
                        <header className="mb-12">
                            {/* Tags */}
                            {(study.tags?.length || study.client || study.industry) && (
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {study.client && (
                                        <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-700">
                                            {study.client}
                                        </span>
                                    )}
                                    {study.industry && (
                                        <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-700">
                                            {study.industry}
                                        </span>
                                    )}
                                    {study.tags?.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Title */}
                            <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                                {study.title}
                            </h1>

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-800">
                                {updatedAt && (
                                    <div className="flex items-center gap-2">
                                        <RefreshCw className="h-4 w-4 text-gray-700" />
                                        <span>Updated {formatDateLong(updatedAt)}</span>
                                    </div>
                                )}
                                {createdAt && (
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-gray-700" />
                                        <span>Created {formatDateLong(createdAt)}</span>
                                    </div>
                                )}
                                {study.client && (
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <span className="font-semibold text-gray-900">Client:</span>
                                        <span>{study.client}</span>
                                    </div>
                                )}
                            </div>

                            {/* Featured Image */}
                            {study.thumbnail && (
                                <div className="mt-8 mb-6 relative h-96 w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
                                    <Image
                                        src={study.thumbnail}
                                        alt={study.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 896px"
                                        priority
                                    />
                                </div>
                            )}

                            {/* Share Buttons */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <ShareButtons url={`${siteConfig.siteUrl}/case-studies/${slug}`} title={study.title} />
                            </div>
                        </header>

                        {/* Metrics Section */}
                        {study.metrics && study.metrics.length > 0 && (
                            <div className="mb-12 grid gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2 lg:grid-cols-4">
                                {study.metrics.map((metric, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="mb-2 text-3xl font-bold text-emerald-600">
                                            {metric.value}
                                        </div>
                                        <div className="mb-1 text-sm font-semibold text-gray-900">
                                            {metric.label}
                                        </div>
                                        {metric.improvement && (
                                            <div className="text-xs font-medium text-emerald-700">
                                                {metric.improvement}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Challenge Section */}
                        {study.challenge && (
                            <section className="mb-12 rounded-2xl border border-red-100 bg-red-50/60 p-6">
                                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                                    <span className="flex h-2 w-2 rounded-full bg-red-500" />
                                    The Challenge
                                </h2>
                                <p className="text-gray-900 leading-relaxed">{study.challenge}</p>
                            </section>
                        )}

                        {/* Solution Section */}
                        {study.solution && (
                            <section className="mb-12 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6">
                                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                                    Our Solution
                                </h2>
                                <p className="text-gray-900 leading-relaxed">{study.solution}</p>
                            </section>
                        )}

                        {/* Results Section */}
                        {study.results && (
                            <section className="mb-12 rounded-2xl border border-cyan-100 bg-cyan-50/70 p-6">
                                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                                    <TrendingUp className="h-5 w-5 text-cyan-600" />
                                    Results
                                </h2>
                                <p className="text-gray-900 leading-relaxed">{study.results}</p>
                            </section>
                        )}

                        {/* Content */}
                        <div
                            className="prose prose-lg max-w-none
                                prose-headings:text-gray-900 prose-headings:font-semibold
                                prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8 prose-h1:text-gray-900
                                prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-gray-900 prose-h2:font-semibold
                                prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6 prose-h3:text-gray-900 prose-h3:font-semibold
                                prose-h4:text-lg prose-h4:text-gray-900 prose-h4:font-semibold
                                prose-p:text-gray-900 prose-p:leading-relaxed prose-p:mb-4 prose-p:font-normal
                                prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-700 hover:prose-a:underline prose-a:font-medium
                                prose-strong:text-gray-900 prose-strong:font-bold
                                prose-code:text-emerald-700 prose-code:bg-emerald-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:font-semibold
                                prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 prose-pre:rounded-xl prose-pre:p-4 prose-pre:text-gray-100
                                prose-ul:text-gray-900 prose-ul:my-4
                                prose-ol:text-gray-900 prose-ol:my-4
                                prose-li:text-gray-900 prose-li:my-2
                                prose-blockquote:border-l-emerald-500 prose-blockquote:bg-emerald-50/50 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-gray-900
                                prose-img:rounded-xl prose-img:border prose-img:border-gray-200 prose-img:shadow-sm
                                prose-hr:border-gray-200"
                            dangerouslySetInnerHTML={{ __html: study.contentHtml || '' }}
                        />

                        {/* CTA Section */}
                        <div className="mt-16 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-cyan-50 p-8 text-center shadow-sm">
                            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                                Ready to transform your system?
                            </h3>
                            <p className="mb-6 text-gray-800">
                                Let's discuss how we can help optimize your infrastructure and improve performance.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-500 px-8 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_18px_40px_rgba(16,185,129,0.35)] transition-all hover:bg-emerald-600 hover:shadow-[0_22px_50px_rgba(16,185,129,0.5)]"
                            >
                                Book a Consultation
                            </a>
                        </div>
                    </div>
                </article>

                {/* Footer */}
                <Footer />
            </main>
        </>
    );
}





