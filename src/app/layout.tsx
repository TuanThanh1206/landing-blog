import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Full-Stack Optimization & Infrastructure Services | Speed Up Your System",
    template: "%s | Full-Stack Optimization",
  },
  description: "We turn slow, fragile websites and systems into fast, reliable ones. From the page your customers see to the servers behind it, we design, rebuild and operate everything — so you don't need a full in-house IT department.",
  keywords: [
    "website optimization",
    "system architecture",
    "DevOps services",
    "infrastructure management",
    "full-stack optimization",
    "website speed",
    "system performance",
    "IT as a service",
    "managed infrastructure",
    "database optimization",
  ],
  authors: [{ name: "Full-Stack Optimization Team" }],
  creator: "Full-Stack Optimization",
  publisher: "Full-Stack Optimization",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://optyxstack.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Full-Stack Optimization",
    title: "Full-Stack Optimization & Infrastructure Services | Speed Up Your System",
    description: "We turn slow, fragile websites and systems into fast, reliable ones. From the page your customers see to the servers behind it, we design, rebuild and operate everything.",
    images: [
      {
        url: "/iconv.png",
        width: 1200,
        height: 630,
        alt: "Full-Stack Optimization - Speed Up Your System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Optimization & Infrastructure Services",
    description: "We turn slow, fragile websites and systems into fast, reliable ones. One partner to speed up, clean up and run your whole stack.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    apple: "/iconv.png",
  },
  manifest: "/manifest.json",
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#020307" },
    { media: "(prefers-color-scheme: dark)", color: "#020307" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
