import Link from "next/link";
import { MenuCategory } from "@/data/menuData";

const categoryMeta: Record<MenuCategory, { icon: string; desc: string }> = {
  starters:   { icon: "🍲", desc: "Light bites to begin" },
  maincourse: { icon: "🍽️", desc: "Hearty plates & mains" },
  appetizers: { icon: "🥗", desc: "Crispy crowd favourites" },
  drinks:     { icon: "☕", desc: "Brews & cold sips" },
};

type Props = {
  category: MenuCategory;
  label: string;
  itemCount: number;
};

export default function CategoryCard({ category, label, itemCount }: Props) {
  const meta = categoryMeta[category];

  return (
    <Link
      href={`/menu/${category}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-amber-900/25 bg-[#13100a] p-6 overflow-hidden transition-all duration-300 hover:border-amber-700/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-600/[0.06] to-transparent" />

      {/* Icon */}
      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-900/40 bg-amber-950/60 text-2xl select-none">
        {meta.icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-[11px] uppercase tracking-[0.2em] text-amber-500/50 mb-2">
          {meta.desc}
        </p>
        <h3 className="font-serif text-2xl font-semibold text-amber-50 group-hover:text-amber-100 transition-colors duration-200">
          {label}
        </h3>
        <p className="mt-1 text-sm text-amber-100/40">
          {itemCount} curated {itemCount === 1 ? "item" : "items"}
        </p>
      </div>

      {/* Explore */}
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber-500/60 group-hover:text-amber-400 transition-all duration-200">
        Explore
        <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
      </div>
    </Link>
  );
}