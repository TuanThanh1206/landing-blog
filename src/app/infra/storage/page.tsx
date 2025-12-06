"use client";

import InfraPageTemplate from "@/components/InfraPageTemplate";

const storageData = {
    title: "Storage Solutions",
    subtitle: "Infrastructure",
    heroDescription: "Scalable, reliable storage infrastructure designed for modern applications. From object storage to block storage, we provide the right solution for your data needs.",
    description: "Our storage solutions offer high-performance, scalable infrastructure for all your data storage requirements. Whether you need object storage for media files, block storage for databases, or file storage for applications, we provide enterprise-grade solutions with redundancy, backup, and disaster recovery capabilities.",
    stats: [
        { label: "Data Durability", value: "99.99%" },
        { label: "Storage Types", value: "3+" },
        { label: "Regions", value: "Global" },
        { label: "API Compatibility", value: "S3-ready" },
    ],
    features: [
        "Multiple storage types",
        "High availability and redundancy",
        "Automated backups",
        "Scalable capacity",
        "Fast data access",
        "Data encryption at rest",
        "Cross-region replication",
        "Snapshot capabilities",
        "99.99% durability",
        "CDN integration"
    ],
    specifications: [
        { label: "Storage Types", value: "Object / Block / File" },
        { label: "Capacity", value: "Unlimited scaling" },
        { label: "Durability", value: "99.99%" },
        { label: "Availability", value: "99.9% - 99.99%" },
        { label: "Encryption", value: "AES-256" },
        { label: "Replication", value: "Multi-region" },
        { label: "Backup Retention", value: "Configurable" },
        { label: "API Access", value: "S3-compatible" }
    ],
    useCases: [
        {
            title: "Media & Content",
            description: "Store and serve images, videos, and other media files with global CDN integration."
        },
        {
            title: "Database Backups",
            description: "Reliable backup storage for databases with automated retention policies."
        },
        {
            title: "Application Data",
            description: "Persistent storage for applications, containers, and microservices."
        },
        {
            title: "Archive & Compliance",
            description: "Long-term storage for archives, compliance records, and data retention requirements."
        },
        {
            title: "Big Data & Analytics",
            description: "Scalable storage for data lakes, analytics workloads, and machine learning datasets."
        },
        {
            title: "Disaster Recovery",
            description: "Off-site storage for disaster recovery with fast restoration capabilities."
        }
    ],
    pricing: [
        {
            label: "Standard Storage",
            price: "Contact Us",
            description: "Cost-effective storage for general-purpose workloads and backups.",
            features: [
                "Object storage",
                "99.9% availability",
                "S3-compatible API",
                "Multi-region replication",
                "AES-256 encryption"
            ],
            highlight: false
        },
        {
            label: "Performance Storage",
            price: "Contact Us",
            description: "High-performance storage optimized for low latency and high IOPS.",
            features: [
                "SSD-backed storage",
                "99.99% availability",
                "Sub-millisecond latency",
                "High IOPS performance",
                "Global CDN integration"
            ],
            highlight: true
        },
        {
            label: "Archive Storage",
            price: "Contact Us",
            description: "Long-term archival storage for compliance and cost optimization.",
            features: [
                "Ultra-low cost storage",
                "99.99% durability",
                "Long-term retention",
                "Automated tiering",
                "Compliance ready"
            ],
            highlight: false
        }
    ]
};

export default function StoragePage() {
    return <InfraPageTemplate data={storageData} />;
}


