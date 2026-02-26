'use client'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  items: FAQItem[]
}

export default function FAQSchema({ items }: FAQSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

// Pre-defined FAQ data for Mathare Kids Talents Hub
export const defaultFAQs: FAQItem[] = [
  {
    question: "What is Mathare Kids Talents Hub?",
    answer: "Mathare Kids Talents Hub (MKTH) is a non-profit youth empowerment organization based in Mathare, Nairobi, Kenya. We nurture creativity and transform young lives through dance, music, and performing arts education for children in underserved communities."
  },
  {
    question: "How can I donate to Mathare Kids Talents Hub?",
    answer: "You can donate through multiple methods: M-Pesa mobile money (+254 794 679 931), bank transfer to ABSA Bank (Account: 2055861199), Western Union to Emmanuel Tony John in Nairobi, Kenya, or postal donations. Visit our donate page for complete details."
  },
  {
    question: "What programs does Mathare Kids Talents Hub offer?",
    answer: "We offer professional dance training, music education, performance arts development, and talent nurturing programs. Our programs include meals, educational support, and mentorship for over 50 young artists from Mathare."
  },
  {
    question: "Can I book Mathare Kids performers for events?",
    answer: "Yes! Our talented young dancers and musicians are available for booking at corporate events, festivals, weddings, private functions, and community shows in Nairobi and beyond. Contact us through our website to book a performance."
  },
  {
    question: "Where is Mathare Kids Talents Hub located?",
    answer: "We are located at Kamunde Road, Kariobangi South, Sanoda Plaza, 2nd Floor, Nairobi, Kenya. Our office is open Monday through Sunday from 8:00 AM to 5:00 PM."
  },
  {
    question: "Is Mathare Kids Talents Hub a registered charity?",
    answer: "Yes, Mathare Kids Talents Hub is a registered non-profit organization in Kenya. We operate with full transparency and are accountable to our donors, partners, and the community we serve."
  }
]
