/**
 * SEO Configuration - Centralized config for all pages
 * Use this for metadata and JSON-LD schemas
 */

export const siteConfig = {
  siteName: "OptyxStack",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://optyxstack.com",
  defaultOgImage: "/iconv.png",
  description: "OptyxStack provides premium DevOps, full-stack performance optimization, and high-performance infrastructure design for growing digital businesses.",
  organization: {
    name: "OptyxStack",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://optyxstack.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://optyxstack.com"}/iconv.png`,
    description: "OptyxStack provides premium DevOps, full-stack performance optimization, and high-performance infrastructure design for growing digital businesses.",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-123-456-789",
      contactType: "Customer Service",
    },
    areaServed: {
      "@type": "GeoShape",
      circle: "0,0 10000", // worldwide
    },
    serviceType: [
      "DevOps as a Service",
      "System Architecture & Infrastructure Design",
      "Website Performance Optimization",
      "Cloud & Container Orchestration",
      "24/7 System Operations",
    ],
    knowsAbout: [
      "System Architecture",
      "Performance Engineering",
      "High-performance VPS Clusters",
      "OpenStack Orchestration",
      "Observability & Reliability",
      "Frontend Optimization",
      "Database Tuning",
      "DevOps Automation",
    ],
  },
} as const;

/**
 * Generate metadata for a page
 */
export function generateMetadata({
  title,
  description,
  path = "",
  ogImage,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}) {
  const url = `${siteConfig.siteUrl}${path}`;
  const image = ogImage ? `${siteConfig.siteUrl}${ogImage}` : `${siteConfig.siteUrl}${siteConfig.defaultOgImage}`;

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: `${title} | ${siteConfig.siteName}`,
    description: description.substring(0, 160), // Ensure max 160 chars
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.siteName}`,
      description: description.substring(0, 160),
      url: url,
      siteName: siteConfig.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} | ${siteConfig.siteName}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.siteName}`,
      description: description.substring(0, 160),
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Generate Organization JSON-LD schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}#organization`,
    name: siteConfig.organization.name,
    url: siteConfig.organization.url,
    logo: siteConfig.organization.logo,
    description: siteConfig.organization.description,
    foundingDate: siteConfig.organization.foundingDate,
    address: siteConfig.organization.address,
    contactPoint: siteConfig.organization.contactPoint,
    areaServed: siteConfig.organization.areaServed,
    knowsAbout: siteConfig.organization.knowsAbout,
  };
}

/**
 * Generate ProfessionalService JSON-LD schema
 */
export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.siteUrl}#optyxstack`,
    name: siteConfig.organization.name,
    url: siteConfig.organization.url,
    image: siteConfig.organization.logo,
    description: siteConfig.organization.description,
    address: siteConfig.organization.address,
    priceRange: "$$$",
    telephone: siteConfig.organization.contactPoint.telephone,
    areaServed: siteConfig.organization.areaServed,
    serviceType: siteConfig.organization.serviceType,
  };
}

/**
 * Generate Service JSON-LD schema
 */
export function generateServiceSchema({
  name,
  description,
  url,
  provider = siteConfig.organization.name,
}: {
  name: string;
  description: string;
  url: string;
  provider?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    url: url,
    provider: {
      "@type": "Organization",
      name: provider,
      url: siteConfig.organization.url,
    },
    areaServed: siteConfig.organization.areaServed,
    serviceType: "IT Services",
  };
}

/**
 * Generate Product/Service JSON-LD schema (for infrastructure pages)
 */
export function generateProductSchema({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    url: url,
    image: image || `${siteConfig.siteUrl}${siteConfig.defaultOgImage}`,
    brand: {
      "@type": "Brand",
      name: siteConfig.organization.name,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
  };
}

/**
 * Generate BlogPosting JSON-LD schema
 */
export function generateBlogPostingSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = siteConfig.organization.name,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author,
      url: siteConfig.organization.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.organization.name,
      url: siteConfig.organization.url,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.organization.logo,
      },
    },
    image: image || `${siteConfig.siteUrl}${siteConfig.defaultOgImage}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

/**
 * Generate CaseStudy/Article JSON-LD schema
 */
export function generateCaseStudySchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  client,
  industry,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  client?: string;
  industry?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: siteConfig.organization.name,
      url: siteConfig.organization.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.organization.name,
      url: siteConfig.organization.url,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.organization.logo,
      },
    },
    image: image || `${siteConfig.siteUrl}${siteConfig.defaultOgImage}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(client && {
      about: {
        "@type": "Thing",
        name: client,
        ...(industry && { additionalType: industry }),
      },
    }),
  };
}

