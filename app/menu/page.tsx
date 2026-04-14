import type { Metadata } from "next";
import CategoryCard from "@/components/CategoryCard";
import { formatCategoryName, menuCategories, menuItems } from "@/data/menuData";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse menu categories at Brew Haven, from starters and appetizers to main course and drinks.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: `${siteConfig.name} | Menu`,
    description:
      "Browse menu categories at Brew Haven, from starters and appetizers to main course and drinks.",
    url: "/menu",
  },
  twitter: {
    title: `${siteConfig.name} | Menu`,
    description:
      "Browse menu categories at Brew Haven, from starters and appetizers to main course and drinks.",
  },
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#0e0b07] px-6 pb-20 pt-32 md:px-10">
      <section className="mx-auto w-full max-w-6xl">

        {/* Header */}
        <header className="mb-14 text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-amber-500/70 mb-4">
            Brew Haven · Est. 2018
          </span>
          {/* decorative line */}
          <div className="mx-auto mb-5 flex items-center gap-3 justify-center">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-700/60" />
            <span className="text-amber-600/50 text-xs">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-700/60" />
          </div>
          <h1 className="font-serif text-5xl font-semibold tracking-tight text-amber-50 md:text-6xl">
            Our Menu
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-amber-100/50 md:text-base">
            Thoughtfully crafted selections made fresh throughout the day —
            from comforting starters to signature brews.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {menuCategories.map((category) => (
            <CategoryCard
              key={category}
              category={category}
              label={formatCategoryName(category)}
              itemCount={menuItems.filter((i) => i.category === category).length}
            />
          ))}
        </div>

      </section>
    </main>
  );
}