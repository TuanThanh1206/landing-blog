import type { Metadata } from "next";
import Script from "next/script";
import { generateMetadata as genMeta, generateProductSchema, siteConfig } from "@/lib/seo";

export const metadata: Metadata = genMeta({
    title: "High Performance VPS | Premium Virtual Private Servers",
    description: "Premium virtual private servers optimized for performance-intensive workloads. Built on enterprise hardware with NVMe storage and high-speed networking.",
    path: "/infra/high-performance-vps",
});

const jsonLd = generateProductSchema({
    name: "High Performance VPS",
    description: "Premium virtual private servers optimized for performance-intensive workloads. Featuring latest generation processors, NVMe SSD storage, and optimized network configurations.",
    url: `${siteConfig.siteUrl}/infra/high-performance-vps`,
});

export default function HighPerformanceVpsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Script
                id="product-hpvps-jsonld"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}

