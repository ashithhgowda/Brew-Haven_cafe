import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-[70px] md:px-10"
    >
      <Image
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1500&q=70"
        alt="Freshly brewed coffee at Brew Haven counter"
        fill
        priority
        quality={70}
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0805]/75 via-[#0b0805]/65 to-[#0b0805]/80" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <span className="mb-5 inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-amber-200/80 shadow-lg shadow-amber-900/20 backdrop-blur">
          Artisan Coffee Experience
        </span>

        <h1 className="max-w-3xl font-serif text-4xl font-semibold tracking-tight text-amber-50 drop-shadow sm:text-5xl md:text-6xl">
          Experience the Perfect Brew
        </h1>

        <p className="mt-5 max-w-xl text-base text-amber-100/80 sm:text-lg">
          Fresh coffee, cozy vibes
        </p>

        <div className="mt-9">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-amber-600 to-amber-500 px-7 py-3 text-sm font-medium uppercase tracking-wider text-amber-950 shadow-lg shadow-amber-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-amber-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            View Menu
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
