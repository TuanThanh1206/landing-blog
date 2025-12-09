import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
    title: "Services | Full-Stack Optimization & Infrastructure",
    description: "Comprehensive service packages for system optimization, architecture design, DevOps, and managed infrastructure. Choose the plan that fits your needs.",
    path: "/services",
});

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

