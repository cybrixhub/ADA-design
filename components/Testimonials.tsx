import AnimatedFadeIn from "@/components/AnimatedFadeIn";
import AnimatedHeading from "@/components/AnimatedHeading";

// Placeholder testimonials — swap for real client quotes.
const LEAD = {
  quote:
    "They understood the block before they drew a single line. The house we ended up with makes sense — for the site, for the way we live, and for the budget we had.",
  name: "Priya Nand",
  role: "Residential client",
  place: "Lochinvar, NSW",
};

const OTHERS = [
  {
    quote:
      "Every question the council raised, they had an answer ready. Approval came through without a single rewrite.",
    name: "Daniel Fenech",
    role: "Medical Centre owner",
    place: "Vineyard, NSW",
  },
  {
    quote:
      "Renders looked exactly like what we ended up building. That never happens.",
    name: "Marcus Overton",
    role: "Industrial developer",
    place: "Arndell Park, NSW",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-cream relative overflow-hidden">
      {/* Faint terracotta corner glow */}
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
              {LEAD.quote}
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <div className="w-10 h-px bg-terracotta" />
              <div>
                <p className="label-text text-terracotta">{LEAD.name}</p>
                <p className="label-text text-stone text-[0.65rem] mt-1">
                  {LEAD.role} · {LEAD.place}
                </p>
              </div>
            </footer>
          </blockquote>
        </AnimatedFadeIn>

        {/* Supporting quotes */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 border-t border-sand/25 pt-14 md:pt-16">
          {OTHERS.map((q, i) => (
            <AnimatedFadeIn key={q.name} delay={i * 0.1}>
              <blockquote>
                <p className="font-serif text-xl md:text-2xl text-bark leading-snug font-light [text-wrap:pretty]">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-4">
                  <div className="w-6 h-px bg-terracotta" />
                  <div>
                    <p className="label-text text-terracotta">{q.name}</p>
                    <p className="label-text text-stone text-[0.65rem] mt-1">
                      {q.role} · {q.place}
                    </p>
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
