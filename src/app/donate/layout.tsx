import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate - Support a Child's Dream | Mathare Kids Talents Hub",
  description: "Make a difference today! Donate to Mathare Kids Talents Hub through M-Pesa, bank transfer, Western Union, or postal donations. Your contribution provides meals, education, and training for children in Mathare.",
  keywords: "donate, charity, Mathare Kids, M-Pesa donation, bank transfer, Western Union, support children, Kenya charity, youth empowerment donation",
  alternates: {
    canonical: "/donate",
  },
  openGraph: {
    title: "Donate - Support a Child's Dream | Mathare Kids Talents Hub",
    description: "Make a difference today! Your donation provides meals, education, and training for children in Mathare through M-Pesa, bank transfer, or Western Union.",
    url: "https://matharekidstalentshub.org/donate",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Donate to Mathare Kids Talents Hub',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate - Support a Child's Dream | Mathare Kids Talents Hub",
    description: "Make a difference today! Support children in Mathare through creative arts education.",
    images: ['/logo.png'],
  },
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
