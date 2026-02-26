import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop - MKTH Merchandise | Mathare Kids Talents Hub",
  description: "Shop MKTH merchandise - hoodies, t-shirts, trousers, and caps designed by our talented kids. Every purchase keeps a child in school and supports our mission in Mathare, Nairobi.",
  keywords: "MKTH shop, Mathare Kids merchandise, charity shop, Kenya charity store, support children, hoodies, t-shirts, caps, youth empowerment products",
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: "Shop - MKTH Merchandise | Mathare Kids Talents Hub",
    description: "Shop MKTH merchandise designed by our talented kids. Every purchase keeps a child in school and supports our mission in Mathare.",
    url: "https://matharekidstalentshub.org/shop",
    images: [
      {
        url: '/hoodie2.jpeg',
        width: 1200,
        height: 630,
        alt: 'MKTH Merchandise Shop',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop - MKTH Merchandise | Mathare Kids Talents Hub",
    description: "Shop MKTH merchandise. Every purchase keeps a child in school in Mathare, Nairobi.",
    images: ['/hoodie2.jpeg'],
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
