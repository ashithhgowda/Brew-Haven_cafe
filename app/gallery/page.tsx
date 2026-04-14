import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse moments from Brew Haven: coffee craft, warm interiors, and everyday cafe experiences.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: `${siteConfig.name} | Gallery`,
    description:
      "Browse moments from Brew Haven: coffee craft, warm interiors, and everyday cafe experiences.",
    url: "/gallery",
  },
  twitter: {
    title: `${siteConfig.name} | Gallery`,
    description:
      "Browse moments from Brew Haven: coffee craft, warm interiors, and everyday cafe experiences.",
  },
};

export default function GalleryPage() {
  return (
    <main className="pt-[80px]">
      <h1 className="sr-only">Brew Haven Gallery</h1>
      <Gallery />
    </main>
  );
}