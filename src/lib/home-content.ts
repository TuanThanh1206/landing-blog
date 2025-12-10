// Configuration for home page content with images
// Add your images to /public/images/ folder

export interface SocialProofLogo {
  name: string;
  logo: string; // Path to logo image in /public/images/
  url?: string; // Optional link to client website
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  avatar: string; // Path to avatar image in /public/images/
}

// Social Proof Logos
// Add your client logos to /public/images/logos/ folder
export const socialProofLogos: SocialProofLogo[] = [
  {
    name: "TechRetail",
    logo: "/images/logos/techretail.png",
    url: "#"
  },
  {
    name: "SaaS Platform",
    logo: "/images/logos/saas-platform.png",
    url: "#"
  },
  {
    name: "Media Co.",
    logo: "/images/logos/media-co.png",
    url: "#"
  },
  {
    name: "E-commerce",
    logo: "/images/logos/ecommerce.png",
    url: "#"
  }
];

// Testimonials with avatars
// Add avatar images to /public/images/avatars/ folder
export const testimonials: Testimonial[] = [
  {
    name: "James Mitchell",
    role: "CTO",
    company: "TechRetail Co.",
    content: "OptyxStack helped us increase our website speed by 3×. Black Friday this year no longer crashes!",
    rating: 5,
    avatar: "/images/avatars/james-mitchell.jpg" // Place avatar here
  },
  {
    name: "Sarah Johnson",
    role: "Founder",
    company: "SaaS Platform",
    content: "From a slow system, now we have professional infrastructure. The team can focus on product instead of firefighting.",
    rating: 5,
    avatar: "/images/avatars/sarah-johnson.jpg"
  },
  {
    name: "Michael Thompson",
    role: "Tech Lead",
    company: "Media Co.",
    content: "OptyxStack's database optimization helped us reduce query time from 2s to 50ms. Very impressive!",
    rating: 5,
    avatar: "/images/avatars/michael-thompson.jpg"
  }
];

