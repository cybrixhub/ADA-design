import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bark text-off-white">
      <div className="container-wide py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1 md:pr-16">
            <p className="font-serif text-4xl font-light tracking-[0.08em] mb-6">FORMA</p>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs font-light">
              Objects made to age with you.<br />
              Every piece carries the mark of the hand that made it.
            </p>
          </div>

          {/* Nav */}
          <div className="md:px-16 md:border-x md:border-white/10">
            <p className="label-text text-white/30 mb-6">Navigate</p>
            <ul className="space-y-4">
              {["Collections", "About", "Enquire"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Enquire" ? "/contact" : `/${item.toLowerCase()}`}
                    className="text-sm text-white/60 hover:text-white transition-colors font-light"
                  >
                    {item}
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
                Studio 4, The Warehouse<br />
                London, E1 6RF
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="label-text text-white/25">© 2026 Forma. All rights reserved.</p>
          <p className="text-xs text-white/25 font-light tracking-widest uppercase">
            Made slowly, on purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
