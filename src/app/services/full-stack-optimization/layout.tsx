import type { Metadata } from "next";
import Script from "next/script";
import { generateMetadata as genMeta, generateServiceSchema, siteConfig } from "@/lib/seo";

export const metadata: Metadata = genMeta({
    title: "Full-Stack System Optimization",
    description: "End-to-end performance optimization across frontend, backend, database, and multi-layer infrastructure. From audit to scalable production.",
    path: "/services/full-stack-optimization",
});

const jsonLd = generateServiceSchema({
    name: "Full-Stack System Optimization",
    description: "End-to-end performance optimization across frontend, backend, database, and multi-layer infrastructure — built for real traffic and real growth.",
    url: `${siteConfig.siteUrl}/services/full-stack-optimization`,
});

export default function FullStackOptimizationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Script
                id="service-fullstack-jsonld"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}

