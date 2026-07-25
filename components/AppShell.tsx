"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";
import ScrollToTop from "./ScrollToTop";

interface Props {
  children: React.ReactNode;
  pageLoader: React.ReactNode;
  cornerMarkers: React.ReactNode;
}

export default function AppShell({ children, pageLoader, cornerMarkers }: Props) {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) return <>{children}</>;

  return (
    <>
      {pageLoader}
      {cornerMarkers}
      <SmoothScroll>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </SmoothScroll>
      <ScrollToTop />
    </>
  );
}
