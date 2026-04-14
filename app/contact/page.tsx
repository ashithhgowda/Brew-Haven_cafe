import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Brew Haven for table bookings, inquiries, and cafe visits in Bengaluru.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `${siteConfig.name} | Contact`,
    description:
      "Contact Brew Haven for table bookings, inquiries, and cafe visits in Bengaluru.",
    url: "/contact",
  },
  twitter: {
    title: `${siteConfig.name} | Contact`,
    description:
      "Contact Brew Haven for table bookings, inquiries, and cafe visits in Bengaluru.",
  },
};

export default function ContactPage() {
  return (
    <main className="pt-[80px]">
      <h1 className="sr-only">Contact Brew Haven</h1>
      <Contact />
    </main>
  );
}