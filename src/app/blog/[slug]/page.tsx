import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getPostData, getAllPostSlugs } from "@/lib/blog";
import { Calendar, ArrowLeft, Clock } from "lucide-react";

export function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostData(slug);

    if (!post) {
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
                <div className="mx-auto max-w-4xl px-6">
                    {/* Back Button */}
                    <Link
                        href="/blog"
                        className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-emerald-300"
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
                                        className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Title */}
                        <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                            {post.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                            {post.date && (
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
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
                                    <span className="text-slate-500">by</span>
                                    <span className="font-medium text-slate-300">{post.author}</span>
                                </div>
                            )}
                        </div>
                    </header>

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
                        dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
                    />
                </div>
            </article>

            {/* Footer */}
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

