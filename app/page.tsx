import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { absoluteUrl, siteConfig } from "@/lib/site";

const Gallery = dynamic(() => import("@/components/Gallery"));
const Contact = dynamic(() => import("@/components/Contact"));

export const metadata: Metadata = {
  title: "Home",
  description:
    "Experience handcrafted coffee, cozy interiors, and fresh ingredients at Brew Haven.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Home`,
    description:
      "Experience handcrafted coffee, cozy interiors, and fresh ingredients at Brew Haven.",
    url: "/",
  },
  twitter: {
    title: `${siteConfig.name} | Home`,
    description:
      "Experience handcrafted coffee, cozy interiors, and fresh ingredients at Brew Haven.",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    image: absoluteUrl("/og-image.jpg"),
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    servesCuisine: ["Coffee", "Cafe", "Brunch"],
    priceRange: "$$",
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <About />
      <section style={{ contentVisibility: "auto", containIntrinsicSize: "1px 1000px" }}>
        <Gallery />
      </section>
      <section style={{ contentVisibility: "auto", containIntrinsicSize: "1px 1200px" }}>
        <Contact />
      </section>
    </div>
  );
}
