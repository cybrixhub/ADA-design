import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageLoader from "@/components/PageLoader";
import CornerMarkers from "@/components/CornerMarkers";

export const metadata: Metadata = {
  title: "FORMA — Handcrafted Furniture & Interior Objects",
  description: "Furniture built from reclaimed oak, hand-thrown ceramics, and natural stone. Made to age with you.",
  openGraph: {
    title: "FORMA — Handcrafted Furniture & Interior Objects",
    description: "Furniture built to last. Crafted from natural materials. Made to age with you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-off-white text-bark antialiased">
        <PageLoader />
        <CornerMarkers />
        <SmoothScroll>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
