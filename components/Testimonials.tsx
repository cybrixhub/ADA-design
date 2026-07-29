"use client";

const REVIEWS = [
  {
    quote: "ADA Design understood our vision and delivered a design that works beautifully for our site and our business.",
    name: "Vineyard Health Clinic",
    role: "Medical Centre · Vineyard, NSW",
  },
  {
    quote: "Every question the council raised, they had an answer ready. Approval came through without a single rewrite.",
    name: "Kidd Circuit Estate",
    role: "Dual Occupancy · Goulburn, NSW",
  },
  {
    quote: "Renders looked exactly like what we ended up building. That level of accuracy makes everything easier.",
    name: "McCormack Industrial Estate",
    role: "Industrial Development · Arndell Park, NSW",
  },
  {
    quote: "From first sketch to signed drawings — one contact, no confusion. Exactly what you want when building.",
    name: "Dexter Road Residence",
    role: "Residential · Lochinvar, NSW",
  },
  {
    quote: "The design made the most of every square metre on a difficult block. Couldn't be happier with the result.",
    name: "Woodbine Crescent",
    role: "Dual Occupancy · Ryde, NSW",
  },
];

const Stars = () => (
  <span className="flex items-center gap-0.5" aria-label="5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#F4B400" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </span>
);

export default function Testimonials() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section className="bg-bark py-10 md:py-14 overflow-hidden">
      <div className="container-wide mb-8 flex items-end justify-between">
        <div>
          <p className="label-text text-sand/50 mb-2">What clients say</p>
          <h2 className="font-serif text-2xl md:text-3xl text-off-white">
            Client <em className="text-terracotta">reviews</em>
          </h2>
        </div>
        <span className="label-text text-stone hidden md:block">Google Reviews</span>
      </div>

      <div className="relative overflow-hidden">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-bark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-bark to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-4 md:gap-5"
          style={{ animation: "marquee 38s linear infinite", width: "max-content" }}
        >
          {doubled.map((r, i) => (
            <div
              key={i}
              className="w-72 md:w-80 shrink-0 bg-white/5 border border-white/10 rounded-sm p-5 md:p-6 flex flex-col"
            >
              <Stars />
              <p className="font-serif text-base md:text-lg text-off-white/90 mt-3 mb-4 italic font-light leading-snug flex-1">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div>
                <p className="label-text text-terracotta">{r.name}</p>
                <p className="label-text text-stone text-[0.6rem] mt-0.5">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
