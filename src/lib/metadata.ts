import { Metadata } from "next";

const siteConfig = {
  name: "MVPDesignLabs",
  description: "Transform your ideas into digital reality. We craft MVPs, web apps, and digital solutions that make an impact.",
  url: "https://www.mvpdesignlabs.com",
  ogImage: "/og-image.jpg",
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "MVP Development",
    "Web Development",
    "Mobile Apps",
    "Software Development Agency",
    "Digital Solutions",
    "Tech Consulting",
    "Custom Software",
    "React Development",
    "Next.js Agency",
    "Startup Development",
    "Product Development",
    "MVP Strategy",
    "MVP Validation",
    "Startup Ideas",
    "Product-Market Fit",
    "Idea Validation"
  ],
  authors: [{ name: "MVP Design Labs" }],
  creator: "MVP Design Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@mvpdesignlabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "YOUR-ACTUAL-VERIFICATION-CODE",
  }
}; 