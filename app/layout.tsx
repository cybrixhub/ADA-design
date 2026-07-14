import type { Metadata } from "next";
import { EB_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageLoader from "@/components/PageLoader";
import CornerMarkers from "@/components/CornerMarkers";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adadesign.com.au"),
  title: "AD Design — Architecture across New South Wales",
  description:
    "Residential, industrial, and medical architecture across NSW. Every project purpose-built for its site.",
  openGraph: {
    title: "AD Design — Architecture across New South Wales",
    description:
      "Residential, industrial, and medical architecture across NSW. Every project purpose-built for its site.",
    type: "website",
    url: "https://adadesign.com.au",
  },
  twitter: {
    card: "summary_large_image",
    title: "AD Design — Architecture across New South Wales",
    description:
      "Residential, industrial, and medical architecture across NSW. Every project purpose-built for its site.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${spaceGrotesk.variable} bg-off-white text-bark antialiased`}
      >
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
