import type { Metadata } from "next";
import Script from "next/script";
import HomeClient from "@/components/HomeClient";
import { generateMetadata as genMeta, generateProfessionalServiceSchema, siteConfig } from "@/lib/seo";

// Metadata using centralized SEO config
export const metadata: Metadata = genMeta({
    title: "DevOps & Full-Stack System Optimization Services",
    description: "OptyxStack turns slow, fragile systems into fast, reliable, scalable platforms. Expert DevOps, System Architecture, and 24/7 Operations as a Service.",
    path: "/",
});

// JSON-LD Schema
const jsonLd = generateProfessionalServiceSchema();

export default function Page() {
    return (
        <>
            {/* Schema JSON-LD */}
            <Script
                id="optyxstack-jsonld"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Home content */}
            <HomeClient />
        </>
    );
}
