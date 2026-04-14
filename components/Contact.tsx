"use client";

import { useState } from "react";

export default function Contact() {
  const [selectedDate, setSelectedDate] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: {
    name?: string;
    email?: string;
    message?: string;
    date?: string;
    time: FormDataEntryValue | null;
  }) => {
    const newErrors: Record<string, string> = {};
    if (!data.name) newErrors.name = "Name is required";
    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Invalid email";
    }
    if (!data.message) newErrors.message = "Message is required";
    if (!data.date) newErrors.date = "Select a date";
    if (!data.time) newErrors.time = "Select a time";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
      date: selectedDate,
      time: formData.get("time"),
    };
    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const text = encodeURIComponent(
      `Hello, I'm ${data.name}\nEmail: ${data.email}\nDate: ${data.date}\nTime: ${data.time}\n\nMessage:\n${data.message}`
    );
    const phoneNumber = "6363256821";
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  // Shared input classes
  const inputCls =
    "w-full rounded-xl border border-amber-900/25 bg-[#0e0b07] px-4 py-3 text-sm text-amber-50 placeholder-amber-100/25 outline-none transition-all duration-200 focus:border-amber-700/60 focus:ring-1 focus:ring-amber-700/40";

  return (
    <section id="contact" className="bg-[#0e0b07] px-6 py-24 md:px-10">
      <div className="mx-auto w-full max-w-6xl">

        {/* Header */}
        <header className="mb-14 text-center">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-700/60" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-amber-500/60">Contact</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-700/60" />
          </div>
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-amber-50 sm:text-5xl">
            Reserve Your Table
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-amber-100/50">
            Fill in the details below and we'll confirm your reservation via WhatsApp.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* ── FORM ── */}
          <div className="rounded-2xl border border-amber-900/25 bg-[#13100a] p-6 shadow-2xl shadow-black/40 sm:p-8">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-amber-600/80 to-transparent" />
              <p className="text-[11px] uppercase tracking-[0.2em] text-amber-500/60">Book a seat</p>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-amber-50 mb-8">
              Let&apos;s book your table ☕
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="sr-only">Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  aria-invalid={Boolean(errors.name)}
                  className={inputCls}
                />
                {errors.name && (
                  <p className="mt-1.5 text-[12px] text-red-400/90">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="sr-only">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  aria-label="Email"
                  aria-invalid={Boolean(errors.email)}
                  className={inputCls}
                />
                {errors.email && (
                  <p className="mt-1.5 text-[12px] text-red-400/90">{errors.email}</p>
                )}
              </div>

              {/* Date + Time row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-date" className="mb-1.5 block text-[11px] uppercase tracking-wider text-amber-500/50">
                    Date
                  </label>
                  {/* Native date input — opens system calendar picker on mobile & desktop */}
                  <input
                    id="contact-date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    aria-label="Select Date"
                    className={`${inputCls} [color-scheme:dark] cursor-pointer`}
                  />
                  {errors.date && (
                    <p className="mt-1.5 text-[12px] text-red-400/90">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-time" className="mb-1.5 block text-[11px] uppercase tracking-wider text-amber-500/50">
                    Time
                  </label>
                  <select
                    id="contact-time"
                    name="time"
                    aria-label="Select Time"
                    defaultValue=""
                    className={`${inputCls} cursor-pointer`}
                  >
                    <option value="" disabled>Select time</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                    <option value="08:00 PM">08:00 PM</option>
                  </select>
                  {errors.time && (
                    <p className="mt-1.5 text-[12px] text-red-400/90">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="sr-only">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Any special requests or notes..."
                  rows={4}
                  aria-label="Your message"
                  aria-invalid={Boolean(errors.message)}
                  className={`${inputCls} resize-none`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-[12px] text-red-400/90">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group mt-2 flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-amber-950 shadow-lg shadow-amber-900/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-amber-900/50"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 opacity-80" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.341-1.501A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 01-5.006-1.368l-.36-.214-3.732.883.938-3.63-.234-.373A9.79 9.79 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* ── INFO + MAP ── */}
          <div className="flex flex-col gap-5">

            {/* Info cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                { icon: "📍", label: "Location", value: "Bengaluru, India" },
                { icon: "📞", label: "Phone", value: "+91 63632 56821" },
                { icon: "🕐", label: "Hours", value: "9 AM – 9 PM daily" },
              ].map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-2 rounded-2xl border border-amber-900/25 bg-[#13100a] p-5"
                >
                  <span className="text-xl">{icon}</span>
                  <p className="text-[11px] uppercase tracking-wider text-amber-500/50">{label}</p>
                  <p className="text-sm font-medium text-amber-100/80">{value}</p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="flex-1 overflow-hidden rounded-2xl border border-amber-900/25 shadow-xl shadow-black/40 min-h-[260px]">
              <iframe
                title="Brew Haven cafe location on Google Maps"
                src="https://www.google.com/maps?q=Bengaluru%20India&output=embed"
                loading="lazy"
                className="h-full w-full min-h-[260px] border-0"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}