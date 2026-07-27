import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Separation Engineering Blog | Centrifuge & Pump Selection Guides",
  description: "Read practical engineering articles on industrial centrifuge selection, maintenance, metallurgy, and solid-liquid separation best practices from ADEN.",
  keywords: [
    "Centrifuge Selection Guide",
    "Solid-Liquid Separation Articles",
    "Stainless Steel vs Rubber Lined Centrifuge",
    "Centrifuge Maintenance Tips",
    "Industrial Pump Selection",
    "Chemical Plant Equipment Blog",
    "Pharmaceutical Separation Best Practices",
    "ADEN Technical Blog"
  ],
  openGraph: {
    title: "Separation Engineering Blog | ADEN Technical Notes",
    description: "Practical notes on centrifuge and pump selection, materials and maintenance written by our engineering team.",
    url: "https://www.adengineers.co.in/blog",
  }
};

export default function Blog() {
  return (
    <main>
      <section style={{ paddingTop: "120px" }}>
        <div className="container">
          <div className="section-head reveal">
            <h2>Notes from the works floor</h2>
            <p>Practical, plant-level writing on separation and pumping equipment — not marketing copy.</p>
          </div>
          <div className="grid-2 reveal">
            <div className="blog-card card">
              <img src="/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Stainless%20Steel).png" alt="Blog cover" className="product-image" />
              <div className="blog-meta index" style={{ marginTop: "14px" }}>Process Notes</div>
              <h3>Choosing Between Top Discharge and Bottom Discharge Centrifuges</h3>
              <p>How duty cycle, cake handling and cleanroom requirements should drive the choice between top and bottom discharge basket centrifuges.</p>
              <Link href="/contact" className="card-link">Ask us about this</Link>
            </div>
            <div className="blog-card card">
              <img src="/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Rubber-Lined).png" alt="Blog cover" className="product-image" />
              <div className="blog-meta index" style={{ marginTop: "14px" }}>Materials</div>
              <h3>Why Material of Construction Matters More Than Basket Size</h3>
              <p>Stainless steel, MSRL, polypropylene or rubber-lined — getting the wrong material on a corrosive duty costs more than undersizing the basket.</p>
              <Link href="/contact" className="card-link">Ask us about this</Link>
            </div>
            <div className="blog-card card">
              <img src="/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Stainless%20Steel)2.png" alt="Blog cover" className="product-image" />
              <div className="blog-meta index" style={{ marginTop: "14px" }}>Technical</div>
              <h3>Reading a Centrifuge Datasheet: What the Numbers Actually Mean</h3>
              <p>Filtration area, wash efficiency and solids recovery, explained in plant terms rather than catalogue jargon.</p>
              <Link href="/contact" className="card-link">Ask us about this</Link>
            </div>
            <div className="blog-card card">
              <img src="/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Stainless%20Steel).png" alt="Blog cover" className="product-image" />
              <div className="blog-meta index" style={{ marginTop: "14px" }}>Maintenance</div>
              <h3>Planned Maintenance Windows for Batch Centrifuges</h3>
              <p>A practical checklist for keeping unplanned downtime short on service-friendly basket centrifuges.</p>
              <Link href="/contact" className="card-link">Ask us about this</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ textAlign: "center" }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Have a topic you'd like covered?</div>
          <h2 style={{ maxWidth: "28ch", margin: "0 auto 16px" }}>Ask our engineering team a process question.</h2>
          <Link href="/contact" className="btn btn-solid">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
