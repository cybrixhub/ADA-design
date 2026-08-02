import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <div className="fixed inset-0 z-[200] bg-bark flex flex-col overflow-hidden">
      {/* Corner markers */}
      <div className="absolute top-5 left-5 w-[10px] h-[10px]" style={{ mixBlendMode: "difference" }}>
        <svg viewBox="0 0 10 10" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M10 0V1H1V10H0V0H10Z"/></svg>
      </div>
      <div className="absolute top-5 right-5 w-[10px] h-[10px]" style={{ mixBlendMode: "difference" }}>
        <svg viewBox="0 0 10 10" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M10 0V10H9V1H0V0H10Z"/></svg>
      </div>
      <div className="absolute bottom-5 left-5 w-[10px] h-[10px]" style={{ mixBlendMode: "difference" }}>
        <svg viewBox="0 0 10 10" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M0 10V0H1V9H10V10H0Z"/></svg>
      </div>
      <div className="absolute bottom-5 right-5 w-[10px] h-[10px]" style={{ mixBlendMode: "difference" }}>
        <svg viewBox="0 0 10 10" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M10 10V0H9V9H0V10H10Z"/></svg>
      </div>

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta opacity-10 blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 pt-8">
        <p className="font-serif text-xl text-off-white tracking-widest uppercase">FORMA</p>
        <p className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-sand/40">
          Handcrafted Objects · London
        </p>
      </header>

      {/* Main */}
      <main className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-20 md:pb-28">
        <p className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-sand/40 mb-8">
          Under Maintenance
        </p>
        <h1 className="font-serif text-display-xl text-off-white mb-10 leading-[1.05] [text-wrap:balance]">
          We&apos;re preparing<br />
          <em className="text-terracotta not-italic">something</em><br />
          worth the wait.
        </h1>
        <p className="text-white/40 text-base font-light leading-relaxed max-w-xs mb-3">
          Back shortly. Reach us in the meantime.
        </p>
        <a
          href="mailto:info@adadesign.com.au"
          className="text-sand/60 hover:text-sand transition-colors duration-300 text-sm font-sans tracking-wide"
        >
          info@adadesign.com.au
        </a>
      </main>

      {/* Footer bar */}
      <footer className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 pb-8 pt-6 border-t border-white/10">
        <p className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-sand/30">© 2026 FORMA</p>
        <p className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-sand/30">Made slowly, on purpose.</p>
      </footer>
    </div>
  );
}
