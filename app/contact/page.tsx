"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const subjects = [
  "New residential project",
  "New commercial / industrial project",
  "Renders for an existing design",
  "Council / DA advice",
  "Something else",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", subject: subjects[0], message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 bg-linen">
        <div className="container-wide">
          <p className="label-text text-stone mb-6">Get in touch</p>
          <h1 className="font-serif text-display-lg text-bark max-w-xl [text-wrap:balance]">
            Tell us about<br />
            the site &<br />
            <em className="text-terracotta">the brief.</em>
          </h1>
        </div>
      </section>

      {/* ── MAIN ── */}
      <section className="section-pad bg-off-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20">

            {/* Left — info */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <p className="label-text text-stone mb-6">Studio</p>
                <address className="not-italic text-bark font-light leading-relaxed space-y-1">
                  <p>Sydney, NSW</p>
                  <p>Australia</p>
                </address>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-stone font-light text-sm">
                  <Mail size={14} className="text-terracotta shrink-0" />
                  <span>hello@adadesign.com.au</span>
                </div>
                <div className="flex items-start gap-3 text-stone font-light text-sm">
                  <MapPin size={14} className="text-terracotta shrink-0 mt-0.5" />
                  <span>Open Mon–Fri, 9am–5pm AEST<br />Consultations by appointment</span>
                </div>
              </div>

              {/* Subtle note */}
              <div className="border-l-2 border-terracotta pl-5">
                <p className="font-serif text-xl text-bark italic leading-relaxed">
                  "We reply to every enquiry personally. Usually within a day."
                </p>
              </div>

              {/* Studio image placeholder */}
              <div className="bg-[#7A6854] aspect-[4/3] hidden md:block" />
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7 lg:col-start-6">
              {submitted ? (
                <div className="flex flex-col items-start justify-center min-h-[400px]">
                  <div className="w-12 h-px bg-terracotta mb-8" />
                  <h2 className="font-serif text-4xl md:text-5xl text-bark mb-6">
                    Message received.
                  </h2>
                  <p className="text-stone font-light text-lg leading-relaxed max-w-md">
                    We&apos;ll be in touch shortly. In the meantime, browse our projects or read about how we work.
                  </p>
                  <div className="mt-10 flex gap-6">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="label-text text-terracotta underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="label-text text-stone" htmlFor="name">
                        Your name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full bg-transparent border-b border-linen focus:border-bark outline-none py-3 text-bark font-light placeholder:text-stone/40 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="label-text text-stone" htmlFor="email">
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@studio.com"
                        className="w-full bg-transparent border-b border-linen focus:border-bark outline-none py-3 text-bark font-light placeholder:text-stone/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="label-text text-stone" htmlFor="subject">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-linen focus:border-bark outline-none py-3 text-bark font-light appearance-none cursor-pointer transition-colors"
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="label-text text-stone" htmlFor="message">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about the site (address if you can), what you want to build, and the timeline. If you have a survey, sketches, or reference images, mention that too."
                      className="w-full bg-transparent border-b border-linen focus:border-bark outline-none py-3 text-bark font-light placeholder:text-stone/40 resize-none transition-colors"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-linen">
                    <p className="text-stone text-sm font-light">
                      We respond to every message personally.
                    </p>
                    <button type="submit" className="btn-primary group">
                      Send message
                      <Send size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── STUDIO VISIT BAND ── */}
      <section className="py-20 bg-bark">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            {[
              { num: "01", title: "Tell us the site", body: "Address, block dimensions, orientation. Council area if you know it." },
              { num: "02", title: "We propose an approach", body: "First-pass sketches, feasibility, timeline, and fee structure. Usually within a week." },
              { num: "03", title: "Design to approval", body: "Concept → render → documentation → DA. One point of contact through to consent." },
            ].map((step) => (
              <div key={step.num} className="flex gap-6">
                <p className="label-text text-sand/30 shrink-0 mt-1">{step.num}</p>
                <div>
                  <h3 className="font-serif text-2xl text-off-white mb-3">{step.title}</h3>
                  <p className="text-white/40 font-light text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
