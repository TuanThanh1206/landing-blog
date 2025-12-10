"use client";

import React, { useState, useEffect } from "react";
import { Twitter, Linkedin, Facebook, Copy, Check } from "lucide-react";

export default function ShareButtons({ url, title }: { url: string; title: string }) {
    const [copied, setCopied] = useState(false);
    const [shareUrl, setShareUrl] = useState(url);

    useEffect(() => {
        // Use actual browser URL if available
        if (typeof window !== 'undefined') {
            setShareUrl(window.location.href);
        }
    }, []);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    };

    return (
        <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-900">Share:</span>
            <div className="flex items-center gap-2">
                <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
                    aria-label="Share on Twitter"
                >
                    <Twitter className="h-4 w-4" />
                </a>
                <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
                    aria-label="Share on LinkedIn"
                >
                    <Linkedin className="h-4 w-4" />
                </a>
                <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
                    aria-label="Share on Facebook"
                >
                    <Facebook className="h-4 w-4" />
                </a>
                <button
                    onClick={handleCopy}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
                    aria-label="Copy link"
                >
                    {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                </button>
            </div>
        </div>
    );
}

