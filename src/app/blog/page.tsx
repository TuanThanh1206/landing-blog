import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getSortedPostsData } from "@/lib/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
    const posts = getSortedPostsData();

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
                            Blog & Insights
                        </div>
                        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Latest{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
                                Articles
                            </span>
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300">
                            Insights on performance optimization, system architecture, and infrastructure best practices.
                        </p>
                    </div>

                    {/* Blog Posts Grid */}
                    {posts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-slate-400">No blog posts yet. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/16"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                                        <ArrowRight className="h-5 w-5 -rotate-45 text-emerald-400" />
                                    </div>

                                    <div className="flex flex-1 flex-col p-6">
                                        {/* Tags */}
                                        {post.tags && post.tags.length > 0 && (
                                            <div className="mb-3 flex flex-wrap gap-2">
                                                {post.tags.slice(0, 2).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-300"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Title */}
                                        <h2 className="mb-3 text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                                            {post.title}
                                        </h2>

                                        {/* Excerpt */}
                                        {post.excerpt && (
                                            <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-300">
                                                {post.excerpt}
                                            </p>
                                        )}

                                        {/* Meta Info */}
                                        <div className="mt-auto flex items-center gap-4 border-t border-white/5 pt-4 text-[11px] text-slate-400">
                                            {post.date && (
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="h-3.5 w-3.5" />
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
                                                <div className="flex items-center gap-1.5">
                                                    <span className="text-slate-500">by</span>
                                                    <span className="font-medium text-slate-300">{post.author}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

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

