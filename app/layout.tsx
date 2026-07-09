import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageLoader from "@/components/PageLoader";
import CornerMarkers from "@/components/CornerMarkers";

export const metadata: Metadata = {
  title: "AD Design — Architecture across New South Wales",
  description: "Residential, industrial, and medical architecture across NSW. Every project purpose-built for its site.",
  openGraph: {
    title: "AD Design — Architecture across New South Wales",
    description: "Residential, industrial, and medical architecture across NSW. Every project purpose-built for its site.",
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
