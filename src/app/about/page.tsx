import type { Metadata } from "next";
import Script from "next/script";
import AboutClient from "./AboutClient";
import { generateMetadata as genMeta, generateOrganizationSchema, siteConfig } from "@/lib/seo";

export const metadata: Metadata = genMeta({
    title: "About OptyxStack | Full-Stack Optimization Team & Philosophy",
    description: "Learn about OptyxStack's mission to help teams fix slow systems and build reliable infrastructure. We combine deep engineering with business sense to deliver fast, stable, and scalable systems.",
    path: "/about",
});

// JSON-LD for AboutPage
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteConfig.siteUrl}/about#webpage`,
    name: "About OptyxStack",
    description: "Learn about OptyxStack's mission, philosophy, and expertise in full-stack optimization and infrastructure management.",
    url: `${siteConfig.siteUrl}/about`,
    mainEntity: generateOrganizationSchema(),
};

export default function AboutPage() {
    return (
        <>
            <Script
                id="about-jsonld"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AboutClient />
        </>
    );
}