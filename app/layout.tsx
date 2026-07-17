import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageLoader from "@/components/PageLoader";
import CornerMarkers from "@/components/CornerMarkers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adadesign.com.au"),
  title: "ADA Design — Architecture across New South Wales",
  description:
    "Residential, industrial, and medical architecture across NSW. Every project purpose-built for its site.",
  openGraph: {
    title: "ADA Design — Architecture across New South Wales",
    description:
      "Residential, industrial, and medical architecture across NSW. Every project purpose-built for its site.",
    type: "website",
    url: "https://adadesign.com.au",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADA Design — Architecture across New South Wales",
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
        className={`${poppins.variable} bg-off-white text-bark antialiased`}
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
