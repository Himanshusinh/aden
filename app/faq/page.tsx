"use client";

import Link from "next/link";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqs = [
    {
      q: "What industries do ADEN centrifuges and pumps serve?",
      a: "Pharmaceutical, chemical, textile, food processing, water treatment and steel plant applications — anywhere solid-liquid separation or corrosive-media pumping is part of the process."
    },
    {
      q: "Can ADEN size equipment for a process that isn't in your standard range?",
      a: "Yes. Send us your media, throughput and duty cycle through the contact form and our engineering team will recommend a sized centrifuge or pump rather than pointing you to the nearest catalogue part."
    },
    {
      q: "What materials of construction are available?",
      a: "Stainless steel, MSRL, polypropylene and CI rubber-lined construction, chosen to match the media being handled — corrosive chemicals, acidic or alkaline solutions, or general process fluids."
    },
    {
      q: "How quickly can a breakdown be attended to?",
      a: "Our breakdown line is staffed 24/7, 365 days a year, for both mechanical and electrical/control-system faults. Call 079 2282 3263 directly for an active breakdown."
    },
    {
      q: "Do you supply spares for older ADEN machines?",
      a: "Yes — baskets, seals, liners and drive components are sourced to the original build specification of your machine wherever possible."
    },
    {
      q: "Do you export outside India?",
      a: "ADEN has delivered centrifuges and pumps to customers in more than 15 countries since 1990. See our Clients & Reach page for the industries and regions we serve."
    },
    {
      q: "How do I request a quotation?",
      a: "Use the inquiry form on our Contact Us page with your process details, or call us directly — our engineering team typically responds within one business day."
    }
  ];

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / Frequently Asked Questions</div>
          <h1>Frequently Asked Questions</h1>
          <p style={{ maxWidth: "56ch", color: "var(--steel-light)", marginTop: "10px" }}>
            Common questions on sizing, materials, breakdown support and spares.
          </p>
        </div>
      </section>

      <section>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div className="accordion reveal">
            {faqs.map((faq, idx) => (
              <div key={idx} className="accordion-item" style={{ borderBottom: "1px solid var(--silver)", padding: "16px 0" }}>
                <button 
                  onClick={() => toggleAccordion(idx)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", padding: "10px 0", fontSize: "18px", fontWeight: 600, color: "var(--steel)", cursor: "pointer", textAlign: "left" }}
                >
                  {faq.q}
                  <span style={{ color: "var(--amber)", fontSize: "24px" }}>{openIndex === idx ? "-" : "+"}</span>
                </button>
                {openIndex === idx && (
                  <div style={{ padding: "10px 0 20px", color: "var(--steel-light)" }}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--graphite)", color: "var(--silver)", textAlign: "center" }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: "center", color: "var(--silver)" }}>Still have a question?</div>
          <h2 style={{ color: "var(--white)", maxWidth: "26ch", margin: "0 auto 16px" }}>Ask our engineering team directly.</h2>
          <Link href="/contact" className="btn btn-amber" style={{ background: "transparent" }}>Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
