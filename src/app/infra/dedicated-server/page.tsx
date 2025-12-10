"use client";

import InfraPageTemplate, { InfraPageData } from "@/components/InfraPageTemplate";

const dedicatedServerData: InfraPageData = {
    title: "Bare Metal Dedicated Servers",
    subtitle: "Enterprise Infrastructure",
    heroDescription: "Experience raw performance with single-tenant dedicated hardware. Engineered for high-frequency trading, massive databases, and mission-critical applications.",

    // New: Stats for credibility
    stats: [
        { label: "Uptime Guarantee", value: "99.99%" },
        { label: "Global Locations", value: "15+" },
        { label: "Network Capacity", value: "100 Tbps" },
        { label: "Support Response", value: "< 15 min" },
    ],

    description: "Eliminate the 'noisy neighbor' effect of cloud sharing. Our bare metal servers provide you with 100% of the system's resources, offering unmatched IOPS and processing power. Managed via an intuitive control panel with full root access.",

    features: [
        "100% Guaranteed Physical Resources",
        "Instant Provisioning (under 120s)",
        "IPMI / KVM Access included",
        "Private Networking (VLAN)",
        "DDoS Mitigation Pro (Unlimited)",
        "RAID 0/1/5/10 Hardware Support"
    ],

    specifications: [
        { label: "Processors", value: "Intel® Xeon® Scalable / AMD EPYC™" },
        { label: "Memory (RAM)", value: "Up to 2TB DDR5 ECC" },
        { label: "Storage Interface", value: "NVMe Gen4 / SAS 12Gbps" },
        { label: "Network Uplink", value: "1 Gbps - 25 Gbps Unmetered" },
        { label: "Compliance", value: "SOC 2 Type II, ISO 27001" },
        { label: "Operating Systems", value: "Ubuntu, CentOS, Debian, Windows Server" },
    ],

    useCases: [
        {
            title: "Big Data & Analytics",
            description: "Process massive datasets in real-time with high-core-count CPUs and huge memory footprints without virtualization overhead."
        },
        {
            title: "Database Hosting",
            description: "Optimal environment for SQL/NoSQL databases requiring high IOPS and low latency (MySQL, PostgreSQL, MongoDB)."
        },
        {
            title: "Game Server Hosting",
            description: "Maintain the lowest possible ping and lag-free experience for multiplayer gaming infrastructures."
        },
        {
            title: "Virtualization Nodes",
            description: "Create your own private cloud using Proxmox, VMware ESXi, or KVM on top of our bare metal hardware."
        },
        {
            title: "High Traffic E-commerce",
            description: "Handle Black Friday spikes with ease. Dedicated resources ensure your checkout never hangs under load."
        },
        {
            title: "Streaming & Transcoding",
            description: "Leverage GPU-accelerated dedicated servers for video encoding and content delivery networks."
        }
    ],

    pricing: [
        {
            label: "Entry Metal",
            price: "$149",
            description: "Perfect for web hosting and small apps.",
            features: [
                "Intel Xeon E-2388G (8 Cores)",
                "32GB DDR4 ECC RAM",
                "2x 960GB NVMe SSD",
                "1Gbps Unmetered",
            ],
            highlight: false
        },
        {
            label: "Performance King",
            price: "$299",
            description: "For databases and high-traffic sites.",
            features: [
                "AMD EPYC 7402P (24 Cores)",
                "128GB DDR4 ECC RAM",
                "2x 1.92TB NVMe Gen4",
                "10Gbps Public Uplink",
            ],
            highlight: true
        },
        {
            label: "Custom Enterprise",
            price: "Contact Us",
            description: "Tailored clusters for massive scale.",
            features: [
                "Dual AMD EPYC / Quad Intel Xeon",
                "Up to 2TB RAM",
                "All-Flash NVMe SAN Storage",
                "40Gbps / 100Gbps Private Network",
            ],
            highlight: false
        }
    ]
};

export default function DedicatedServerPage() {
    return <InfraPageTemplate data={dedicatedServerData} />;
}





