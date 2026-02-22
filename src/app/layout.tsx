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
  keywords: "Mathare Kids Talents Hub, youth empowerment, creative arts, dance, music, Nairobi, Kenya, talent development, community transformation, performing arts, children education",
  authors: [{ name: "Mathare Kids Talents Hub" }],
  icons: {
    icon: '/logo.png?v=2',
    apple: '/logo.png?v=2',
  },
  openGraph: {
    title: "Mathare Kids Talents Hub - Where Talent Meets Opportunity",
    description: "Transforming young lives through creative arts in Mathare, Nairobi. Join us in nurturing the next generation of artists and leaders.",
    type: "website",
    locale: "en_US",
    url: "https://matharekidstalentshub.org",
    images: ['/logo.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathare Kids Talents Hub - Where Talent Meets Opportunity",
    description: "Transforming young lives through creative arts in Mathare, Nairobi.",
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-[#F9FAFB] text-[#111111]`}>
        {children}
      </body>
    </html>
  );
}
