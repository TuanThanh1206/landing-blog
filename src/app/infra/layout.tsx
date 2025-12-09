import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
    title: "Infrastructure Solutions | High-Performance VPS & Dedicated Servers",
    description: "Premium infrastructure solutions including high-performance VPS, dedicated servers, managed hosting, and storage. Designed for performance-intensive workloads.",
    path: "/infra",
});

export default function InfraLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

