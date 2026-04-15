import Image from "next/image";
import { MenuItem } from "@/data/menuData";

type Props = {
  item: MenuItem;
};

export default function MenuItemCard({ item }: Props) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-amber-900/25 bg-[#13100a] overflow-hidden transition-all duration-300 hover:border-amber-700/45 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50">

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 "
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        {/* Dark scrim at bottom so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#13100a] via-[#13100a]/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="font-serif text-lg font-semibold text-amber-50 group-hover:text-amber-100 transition-colors duration-200 leading-snug">
            {item.name}
          </h3>
          <p className="mt-2 text-[13px] leading-6 text-amber-100/45 line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Price row */}
        <div>
          <div className="my-4 h-px w-full bg-gradient-to-r from-amber-900/50 to-transparent" />
          <div className="flex items-center justify-between">
            <span className=" text-xl font-semibold text-amber-400">
            ₹{item.price.toFixed(2)}
            </span>
            {/* <button
              type="button"
              className="rounded-lg border border-amber-700/30 bg-amber-900/20 px-4 py-1.5 text-[12px] uppercase tracking-wider text-amber-400/80 hover:bg-amber-700/30 hover:text-amber-300 hover:border-amber-600/50 transition-all duration-200"
            >
              Add
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}