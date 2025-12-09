import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
    title: "Terms of Service",
    description: "OptyxStack's terms of service. Please read these terms carefully before engaging with our infrastructure, optimization services, or consulting.",
    path: "/terms",
});

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

