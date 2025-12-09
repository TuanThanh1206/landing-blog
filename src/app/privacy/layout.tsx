import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
    title: "Privacy Policy",
    description: "OptyxStack's privacy policy. Learn how we collect, use, and protect your data when you use our services.",
    path: "/privacy",
});

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

