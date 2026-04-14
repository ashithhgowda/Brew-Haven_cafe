import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import MenuItemCard from "@/components/MenuItemCard";
import {
  formatCategoryName,
  isMenuCategory,
  menuCategories,
  menuItems,
} from "@/data/menuData";
import { siteConfig } from "@/lib/site";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return menuCategories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  if (!isMenuCategory(category)) {
    return {
      title: "Menu",
      description: "Explore our menu categories.",
    };
  }

  const readableCategory = formatCategoryName(category);
  const description = `Explore ${readableCategory.toLowerCase()} at ${siteConfig.name}, crafted fresh with premium ingredients.`;
  const categoryPath = `/menu/${category}`;

  return {
    title: `${readableCategory} Menu`,
    description,
    alternates: {
      canonical: categoryPath,
    },
    openGraph: {
      title: `${siteConfig.name} | ${readableCategory} Menu`,
      description,
      url: categoryPath,
    },
    twitter: {
      title: `${siteConfig.name} | ${readableCategory} Menu`,
      description,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  if (!isMenuCategory(category)) notFound();

  const filteredItems = menuItems.filter((item) => item.category === category);

  return (
    <main className="min-h-screen bg-[#0e0b07] px-6 pb-20 pt-32 md:px-10">
      <section className="mx-auto w-full max-w-6xl">

        {/* Back */}
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-[13px] uppercase tracking-widest text-amber-500/60 hover:text-amber-400 transition-colors duration-200 mb-10 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          All Categories
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gradient-to-r from-amber-600/80 to-transparent" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-amber-500/60">Menu</span>
          </div>
          <h1 className="font-serif text-5xl font-semibold tracking-tight text-amber-50 md:text-6xl">
            {formatCategoryName(category)}
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-7 text-amber-100/50 md:text-base">
            Handpicked options crafted for taste, freshness, and the Brew Haven experience.
          </p>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-amber-900/60 via-amber-700/20 to-transparent" />
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>

      </section>
    </main>
  );
}