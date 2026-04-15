import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#0e0b07] px-6 py-24 md:px-10">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl border border-amber-900/25 shadow-2xl shadow-black/50 group order-2 lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
            alt="Warm and cozy Brew Haven cafe interior"
            width={1200}
            height={840}
            className="h-[320px] w-full object-cover sm:h-[420px] transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b07]/70 via-black/10 to-transparent" />
        </div>

        {/* Text */}
        <div className="space-y-6 order-1 lg:order-2">

          {/* Label + ornament */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-amber-600/80 to-transparent" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-amber-500/60">
              About Brew Haven
            </p>
          </div>

          <h2 className="font-serif text-3xl font-semibold tracking-tight text-amber-50 sm:text-4xl leading-snug">
            A cozy corner built on flavor, warmth, and community.
          </h2>

          <div className="h-px w-16 bg-gradient-to-r from-amber-700/60 to-transparent" />

          <p className="text-sm leading-7 text-amber-100/50 sm:text-base">
            Brew Haven started as a small neighborhood coffee bar with a simple
            idea: serve honest food and remarkable coffee in a space that feels
            like home. Every cup is brewed to order, every plate is crafted
            fresh, and every guest is welcomed like a regular.
          </p>

          <p className="text-sm leading-7 text-amber-100/50 sm:text-base">
            From locally sourced ingredients to slow mornings with friends, we
            celebrate the little rituals that bring people together. Whether
            you stop by for a quick espresso or a long brunch, our tables are
            always open for good conversation and great taste.
          </p>

          {/* Stats row */}
          

        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl mt-10 grid grid-cols-3 gap-4 pt-2">
            {[
              { value: "6+", label: "Years serving" },
              { value: "40+", label: "Menu items" },
              { value: "10k+", label: "Happy guests" },
            ].map(({ value, label }) => (
              <div key={label} className="rounded-xl border border-amber-900/25 bg-[#13100a] px-4 py-4 text-center">
                <p className="font-serif text-2xl font-semibold text-amber-400">{value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-amber-100/40">{label}</p>
              </div>
            ))}
          </div>
    </section>
  );
}