import Link from "next/link";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Studio", href: "/about" },
  { label: "Enquire", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-bark text-off-white">
      <div className="container-wide py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1 md:pr-16">
            <p className="font-serif text-4xl font-light tracking-[0.08em] mb-6">AD DESIGN</p>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs font-light">
              Architectural design across New South Wales.<br />
              Residential, industrial, and medical — every project designed for its site.
            </p>
          </div>

          {/* Nav */}
          <div className="md:px-16 md:border-x md:border-white/10">
            <p className="label-text text-white/30 mb-6">Navigate</p>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:pl-16">
            <p className="label-text text-white/30 mb-6">Contact</p>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li>hello@adadesign.com.au</li>
              <li className="leading-relaxed">
                Sydney, NSW<br />
                Australia
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="label-text text-white/25">© 2026 AD Design. All rights reserved.</p>
          <p className="text-xs text-white/25 font-light tracking-widest uppercase">
            Purpose-built for its site.
          </p>
        </div>
      </div>
    </footer>
  );
}
