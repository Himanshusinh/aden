import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ADEN | Centrifuge Inquiry & 24/7 Technical Support",
  description: "Get in touch with ADEN's engineering team in Ahmedabad, India for solid-liquid separation centrifuge sizing, custom equipment quotations, and 365-day technical support.",
  keywords: [
    "Contact ADEN",
    "Centrifuge Quotation India",
    "Solid-Liquid Separation Inquiry",
    "Manual Top Discharge Centrifuge Price",
    "Bag-Lifting Centrifuge Cost",
    "ADEN Naroda Ahmedabad Address",
    "Chemical Equipment Inquiry",
    "Centrifuge Manufacturer Contact"
  ],
  openGraph: {
    title: "Contact ADEN | Centrifuge Inquiry & 24/7 Technical Support",
    description: "Reachable around the clock, 365 days a year, for process, mechanical, electrical and control-system questions.",
    url: "https://www.adengineers.co.in/contact",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
