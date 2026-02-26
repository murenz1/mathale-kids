import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mathare Kids Talents Hub - Where Talent Meets Opportunity",
  description: "From the heart of Mathare, we nurture creativity, restore hope, and transform young lives through dance, music, and storytelling. Support our mission to empower the next generation of artists.",
  keywords: "Mathare Kids Talents Hub, youth empowerment, creative arts, dance, music, Nairobi, Kenya, talent development, community transformation, performing arts, children education, non-profit, charity, children's organization",
  authors: [{ name: "Mathare Kids Talents Hub" }],
  creator: "Mathare Kids Talents Hub",
  publisher: "Mathare Kids Talents Hub",
  metadataBase: new URL("https://matharekidstalentshub.org"),
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "Mathare Kids Talents Hub - Where Talent Meets Opportunity",
    description: "Transforming young lives through creative arts in Mathare, Nairobi. Join us in nurturing the next generation of artists and leaders.",
    type: "website",
    locale: "en_US",
    url: "https://matharekidstalentshub.org",
    siteName: "Mathare Kids Talents Hub",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mathare Kids Talents Hub - Where Talent Meets Opportunity',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathare Kids Talents Hub - Where Talent Meets Opportunity",
    description: "Transforming young lives through creative arts in Mathare, Nairobi.",
    images: ['/logo.png'],
    creator: "@matharekidstalents",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code here
  },
  category: "Non-Profit Organization",
  classification: "Charity, Youth Empowerment, Arts Education",
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mathare Kids Talents Hub",
  "alternateName": "MKTH",
  "url": "https://matharekidstalentshub.org",
  "logo": "https://matharekidstalentshub.org/logo.png",
  "description": "From the heart of Mathare, we nurture creativity, restore hope, and transform young lives through dance, music, and storytelling.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kamunde Road, Kariobangi South, Sanoda Plaza, 2nd Floor",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi County",
    "addressCountry": "KE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254-794-679-931",
    "contactType": "general",
    "email": "matharekidstalentshub1@gmail.com",
    "areaServed": "KE",
    "availableLanguage": ["English", "Swahili"]
  },
  "sameAs": [
    "https://www.facebook.com/matharekidstalents",
    "https://www.instagram.com/matharekidstalents",
    "https://www.youtube.com/@matharekidstalents",
    "https://www.tiktok.com/@matharekidstalents",
    "https://www.mchanga.africa/fundraiser/77494"
  ],
  "areaServed": {
    "@type": "City",
    "name": "Mathare, Nairobi"
  },
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Youth Talent Development",
      "description": "Dance, music, and performing arts training for children"
    }
  }
};

// WebSite Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mathare Kids Talents Hub",
  "url": "https://matharekidstalentshub.org",
  "description": "Where Talent Meets Opportunity - Transforming young lives through creative arts in Mathare, Nairobi.",
  "publisher": {
    "@type": "Organization",
    "name": "Mathare Kids Talents Hub",
    "logo": {
      "@type": "ImageObject",
      "url": "https://matharekidstalentshub.org/logo.png"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://matharekidstalentshub.org/?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png?v=3" sizes="32x32" type="image/png" />
        <link rel="shortcut icon" href="/logo.png?v=3" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png?v=3" sizes="180x180" />
        <meta name="theme-color" content="#F59E0B" />
        <meta name="msapplication-TileColor" content="#F59E0B" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preload critical resources for Core Web Vitals */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        
        {/* Preload critical images */}
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        <link rel="preload" href="/2.jpeg" as="image" type="image/jpeg" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          suppressHydrationWarning
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#F9FAFB] text-[#111111]`}>
        {children}
      </body>
    </html>
  );
}
