import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Centrifuge Operation & Maintenance FAQ",
  description: "Find answers to common questions about industrial centrifuge selection, stainless steel vs rubber-lined construction, basket speed, slurry feeding, and ADEN warranty terms.",
  keywords: [
    "Centrifuge FAQ",
    "Solid-Liquid Separation Questions",
    "How to select an industrial centrifuge",
    "Centrifuge Basket Speed RPM",
    "Rubber-Lined Centrifuge Life",
    "Chemical Centrifuge Operation",
    "Centrifuge Maintenance FAQ",
    "ADEN Equipment Warranty"
  ],
  openGraph: {
    title: "Frequently Asked Questions | ADEN Industrial Centrifuges",
    description: "Answers to technical questions on centrifuge selection, operation, maintenance, and process engineering.",
    url: "https://www.adengineers.co.in/faq",
  }
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
