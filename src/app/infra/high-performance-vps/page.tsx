"use client";

import InfraPageTemplate from "@/components/InfraPageTemplate";

const highPerformanceVpsData = {
    title: "High Performance VPS",
    subtitle: "Infrastructure",
    heroDescription: "Premium virtual private servers optimized for performance-intensive workloads. Built on enterprise hardware with NVMe storage and high-speed networking.",
    description: "Our High Performance VPS solutions are designed for applications that demand exceptional speed and reliability. Featuring the latest generation processors, NVMe SSD storage, and optimized network configurations, these servers deliver the performance you need for resource-intensive applications, high-traffic websites, and real-time processing workloads.",
    features: [
        "Latest generation CPUs",
        "NVMe SSD storage",
        "High-speed networking",
        "Low latency optimization",
        "Dedicated resources",
        "Auto-scaling capabilities",
        "Advanced monitoring",
        "Performance tuning",
        "99.99% uptime SLA",
        "Priority support"
    ],
    specifications: [
        { label: "CPU", value: "Latest Gen Intel/AMD" },
        { label: "RAM", value: "8GB - 128GB" },
        { label: "Storage", value: "NVMe SSD 100GB - 4TB" },
        { label: "Network Speed", value: "10Gbps" },
        { label: "IOPS", value: "Up to 100,000" },
        { label: "Uptime SLA", value: "99.99%" },
        { label: "Latency", value: "< 1ms" },
        { label: "Support Level", value: "Priority" }
    ],
    useCases: [
        {
            title: "High-Traffic Applications",
            description: "Handle millions of requests with low latency and consistent performance under heavy load."
        },
        {
            title: "Real-Time Processing",
            description: "Process data in real-time for analytics, trading platforms, and live applications."
        },
        {
            title: "Gaming & Streaming",
            description: "Low-latency infrastructure for gaming servers, live streaming, and interactive applications."
        },
        {
            title: "Machine Learning",
            description: "Run ML inference workloads with high-performance compute and fast storage access."
        },
        {
            title: "Financial Applications",
            description: "Ultra-low latency infrastructure for trading platforms and financial services."
        },
        {
            title: "Content Delivery",
            description: "Fast content delivery with optimized caching and edge computing capabilities."
        }
    ],
    pricing: [
        {
            label: "Performance Tier 1",
            price: "Contact Us",
            period: "per month"
        },
        {
            label: "Performance Tier 2",
            price: "Contact Us",
            period: "per month"
        },
        {
            label: "Performance Tier 3",
            price: "Contact Us",
            period: "per month"
        }
    ]
};

export default function HighPerformanceVpsPage() {
    return <InfraPageTemplate data={highPerformanceVpsData} />;
}

