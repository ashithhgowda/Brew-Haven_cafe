import type { Metadata } from "next";
import About from "@/components/About";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the Brew Haven story, our fresh ingredient philosophy, and community-first cafe culture.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `${siteConfig.name} | About`,
    description:
      "Learn the Brew Haven story, our fresh ingredient philosophy, and community-first cafe culture.",
    url: "/about",
  },
  twitter: {
    title: `${siteConfig.name} | About`,
    description:
      "Learn the Brew Haven story, our fresh ingredient philosophy, and community-first cafe culture.",
  },
};

export default function AboutPage() {
  return (
    <main className="pt-[80px]">
      <h1 className="sr-only">About Brew Haven</h1>
      <About />
    </main>
  );
}