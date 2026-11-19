import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

// The contact page is a client component and can't export metadata itself,
// so its canonical URL is declared here.
export const metadata: Metadata = {
  alternates: { canonical: absoluteUrl("/contact") },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
