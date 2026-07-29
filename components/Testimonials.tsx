import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import AnimatedHeading from "@/components/AnimatedHeading";

const REVIEWS = [
  {
    quote:
      "ADA Design understood our vision and delivered a design that works beautifully for our site and our business.",
    name: "Vineyard Health Clinic",
    role: "Medical Centre",
    place: "Vineyard, NSW",
  },
  {
    quote:
      "Every question the council raised, they had an answer ready. Approval came through without a single rewrite.",
    name: "Kidd Circuit Estate",
    role: "Dual Occupancy",
    place: "Goulburn, NSW",
  },
  {
    quote:
      "Renders looked exactly like what we ended up building. That level of accuracy makes everything easier.",
    name: "McCormack Industrial Estate",
    role: "Industrial Development",
    place: "Arndell Park, NSW",
  },
];

const GoogleStars = () => (
  <span className="flex items-center gap-0.5" aria-label="5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F4B400" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </span>
);

export default function Testimonials() {
  const [lead, ...others] = REVIEWS;

  return (
    <section className="section-pad bg-cream relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-terracotta/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container-wide relative">
        <div className="flex items-end justify-between mb-14 md:mb-20">
          <div>
            <AnimatedFadeIn>
              <p className="label-text text-stone mb-4">What clients say</p>
            </AnimatedFadeIn>
            <AnimatedHeading className="font-serif text-display-md text-bark [text-wrap:balance]">
              Built once,<br />
              <em className="text-terracotta">said well.</em>
            </AnimatedHeading>
          </div>
        </div>

        {/* Lead quote */}
        <AnimatedFadeIn>
          <blockquote className="max-w-4xl relative">
            <span
              aria-hidden="true"
              className="absolute -top-6 -left-2 md:-top-10 md:-left-6 font-serif text-[6rem] md:text-[10rem] leading-none text-terracotta/20 select-none"
            >
              &ldquo;
            </span>
            <p className="font-serif text-[clamp(1.4rem,2.4vw,2.4rem)] text-bark leading-snug [text-wrap:pretty] italic font-light relative">
              {lead.quote}
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <div className="w-10 h-px bg-terracotta" />
              <div className="flex flex-col gap-1">
                <p className="label-text text-terracotta">{lead.name}</p>
                <p className="label-text text-stone text-[0.65rem]">
                  {lead.role} · {lead.place}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <GoogleStars />
                  <span className="label-text text-stone text-[0.6rem]">Google Review</span>
                </div>
              </div>
            </footer>
          </blockquote>
        </AnimatedFadeIn>

        {/* Supporting quotes */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 border-t border-sand/25 pt-14 md:pt-16">
          {others.map((q, i) => (
            <AnimatedFadeIn key={q.name} delay={i * 0.1}>
              <blockquote>
                <p className="font-serif text-xl md:text-2xl text-bark leading-snug font-light [text-wrap:pretty]">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-4">
                  <div className="w-6 h-px bg-terracotta" />
                  <div className="flex flex-col gap-1">
                    <p className="label-text text-terracotta">{q.name}</p>
                    <p className="label-text text-stone text-[0.65rem]">
                      {q.role} · {q.place}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <GoogleStars />
                      <span className="label-text text-stone text-[0.6rem]">Google Review</span>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </AnimatedFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
