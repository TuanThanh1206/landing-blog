"use client";

import InfraPageTemplate from "@/components/InfraPageTemplate";

const managedVpsData = {
    title: "Managed VPS",
    subtitle: "Infrastructure",
    heroDescription: "Fully managed virtual private servers with expert administration, monitoring, and support. Focus on your business while we handle the infrastructure.",
    description: "Our Managed VPS service combines the flexibility of virtual servers with comprehensive management and support. We handle server setup, security updates, monitoring, backups, and troubleshooting, allowing you to focus on your core business. Perfect for businesses that need reliable infrastructure without the overhead of managing servers in-house.",
    features: [
        "Fully managed administration",
        "Automated backups",
        "Security updates and patches",
        "24/7 monitoring and alerts",
        "Performance optimization",
        "Scalable resources",
        "Multiple OS options",
        "SSD storage included",
        "99.95% uptime SLA",
        "Expert technical support"
    ],
    specifications: [
        { label: "CPU Cores", value: "2 - 16 vCPU" },
        { label: "RAM", value: "4GB - 64GB" },
        { label: "Storage", value: "SSD 50GB - 2TB" },
        { label: "Bandwidth", value: "1TB - 10TB/month" },
        { label: "Uptime SLA", value: "99.95%" },
        { label: "Management", value: "Fully managed" },
        { label: "Backups", value: "Daily automated" },
        { label: "Support Response", value: "< 1 hour" }
    ],
    useCases: [
        {
            title: "Small to Medium Businesses",
            description: "Cost-effective infrastructure solution with professional management for growing businesses."
        },
        {
            title: "Web Applications",
            description: "Host web applications, APIs, and services with managed infrastructure and support."
        },
        {
            title: "E-commerce Platforms",
            description: "Reliable hosting for online stores with automated backups and security management."
        },
        {
            title: "Development Environments",
            description: "Managed development and staging environments with easy scaling and deployment."
        },
        {
            title: "Content Management",
            description: "Host CMS platforms like WordPress, Drupal, or custom content systems."
        },
        {
            title: "Remote Work Infrastructure",
            description: "Support remote teams with managed servers for collaboration tools and services."
        }
    ],
    pricing: [
        {
            label: "Basic",
            price: "Contact Us",
            period: "per month"
        },
        {
            label: "Standard",
            price: "Contact Us",
            period: "per month"
        },
        {
            label: "Premium",
            price: "Contact Us",
            period: "per month"
        }
    ]
};

export default function ManagedVpsPage() {
    return <InfraPageTemplate data={managedVpsData} />;
}

