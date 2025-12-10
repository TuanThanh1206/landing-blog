import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import { getPostData, getAllPostSlugs, getRelatedPosts, getRecentPosts, calculateReadingTime } from "@/lib/blog";
import { Calendar, ArrowLeft, Clock } from "lucide-react";
import { generateMetadata as genMeta, generateBlogPostingSchema, siteConfig } from "@/lib/seo";

export function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostData(slug);

    if (!post) {
        return {};
    }

    return genMeta({
        title: post.title,
        description: post.excerpt || post.content.substring(0, 150) || "Read our latest engineering insights",
        path: `/blog/${slug}`,
    });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostData(slug);

    if (!post) {
        notFound();
    }

    // Get related and recent posts
    const relatedPosts = getRelatedPosts(slug, post.tags || [], 3);
    const recentPosts = getRecentPosts(slug, 3);
    const readingTime = calculateReadingTime(post.contentHtml || post.content);

    const jsonLd = generateBlogPostingSchema({
        title: post.title,
        description: post.excerpt || post.content.substring(0, 150) || "",
        url: `${siteConfig.siteUrl}/blog/${slug}`,
        datePublished: post.date,
        dateModified: post.date,
        author: post.author || siteConfig.organization.name,
    });

    return (
        <>
            <Script
                id="blogpost-jsonld"
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
                            href="/blog"
                            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-800 transition-colors hover:text-emerald-600"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </Link>

                        {/* Header */}
                        <header className="mb-12">
                            {/* Tags */}
                            {post.tags && post.tags.length > 0 && (
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Title */}
                            <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                                {post.title}
                            </h1>

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-800">
                                {post.date && (
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-gray-700" />
                                        <span>
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                )}
                                {post.author && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-600">by</span>
                                        <span className="font-semibold text-gray-900">{post.author}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-gray-700" />
                                    <span>{readingTime} min read</span>
                                </div>
                            </div>

                            {/* Featured Image */}
                            {post.thumbnail && (
                                <div className="mt-8 mb-6 relative h-96 w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
                                    <Image
                                        src={post.thumbnail}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 896px"
                                        priority
                                    />
                                </div>
                            )}

                            {/* Share Buttons */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <ShareButtons url={`${siteConfig.siteUrl}/blog/${slug}`} title={post.title} />
                            </div>
                        </header>

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
                            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
                        />
                    </div>
                </article>

                {/* Related / Recent Posts Section */}
                <section className="relative z-10 border-t border-gray-200 bg-gray-50 py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        {/* Related Posts */}
                        {relatedPosts.length > 0 && (
                            <div className="mb-16">
                                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                                    Related Posts
                                </h2>
                                <p className="text-gray-800 mb-8 font-medium">
                                    Posts you might be interested in
                                </p>
                                <div className="grid md:grid-cols-3 gap-8">
                                    {relatedPosts.map((relatedPost) => (
                                        <Link
                                            key={relatedPost.slug}
                                            href={`/blog/${relatedPost.slug}`}
                                            className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-emerald-200 hover:shadow-lg transition-all"
                                        >
                                            {/* Thumbnail Image */}
                                            {relatedPost.thumbnail ? (
                                                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                                    <Image
                                                        src={relatedPost.thumbnail}
                                                        alt={relatedPost.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="h-48 w-full bg-gradient-to-br from-emerald-50 to-cyan-50 flex items-center justify-center">
                                                    <div className="text-4xl opacity-20">📝</div>
                                                </div>
                                            )}
                                            <div className="p-6">
                                                {relatedPost.tags && relatedPost.tags.length > 0 && (
                                                    <div className="mb-3 flex flex-wrap gap-2">
                                                        {relatedPost.tags.slice(0, 2).map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="inline-block px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-semibold rounded-full uppercase tracking-wide"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                                    {relatedPost.title}
                                                </h3>
                                                <p className="text-sm text-gray-800 mb-4 line-clamp-3 font-normal">
                                                    {relatedPost.excerpt || relatedPost.content.substring(0, 150)}
                                                </p>
                                                <div className="flex items-center gap-4 text-xs text-gray-700 font-medium">
                                                    {relatedPost.date && (
                                                        <span>
                                                            {new Date(relatedPost.date).toLocaleDateString('en-US', {
                                                                month: 'short',
                                                                day: 'numeric',
                                                                year: 'numeric'
                                                            })}
                                                        </span>
                                                    )}
                                                    <span>•</span>
                                                    <span>{calculateReadingTime(relatedPost.contentHtml || relatedPost.content)} min read</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Recent Posts */}
                        {recentPosts.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                                    Recent Posts
                                </h2>
                                <p className="text-gray-800 mb-8 font-medium">
                                    Latest articles from our blog
                                </p>
                                <div className="grid md:grid-cols-3 gap-8">
                                    {recentPosts.map((recentPost) => (
                                        <Link
                                            key={recentPost.slug}
                                            href={`/blog/${recentPost.slug}`}
                                            className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-emerald-200 hover:shadow-lg transition-all"
                                        >
                                            {/* Thumbnail Image */}
                                            {recentPost.thumbnail ? (
                                                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                                    <Image
                                                        src={recentPost.thumbnail}
                                                        alt={recentPost.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="h-48 w-full bg-gradient-to-br from-emerald-50 to-cyan-50 flex items-center justify-center">
                                                    <div className="text-4xl opacity-20">📝</div>
                                                </div>
                                            )}
                                            <div className="p-6">
                                                {recentPost.tags && recentPost.tags.length > 0 && (
                                                    <div className="mb-3 flex flex-wrap gap-2">
                                                        {recentPost.tags.slice(0, 2).map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="inline-block px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-semibold rounded-full uppercase tracking-wide"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                                    {recentPost.title}
                                                </h3>
                                                <p className="text-sm text-gray-800 mb-4 line-clamp-3 font-normal">
                                                    {recentPost.excerpt || recentPost.content.substring(0, 150)}
                                                </p>
                                                <div className="flex items-center gap-4 text-xs text-gray-700 font-medium">
                                                    {recentPost.date && (
                                                        <span>
                                                            {new Date(recentPost.date).toLocaleDateString('en-US', {
                                                                month: 'short',
                                                                day: 'numeric',
                                                                year: 'numeric'
                                                            })}
                                                        </span>
                                                    )}
                                                    <span>•</span>
                                                    <span>{calculateReadingTime(recentPost.contentHtml || recentPost.content)} min read</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Back to Blog Link */}
                        <div className="text-center mt-12">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-50 hover:border-gray-300"
                            >
                                View all blog posts
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </main>
        </>
    );
}
