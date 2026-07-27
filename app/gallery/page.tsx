import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Centrifuge Manufacturing Gallery | Factory Floor & Equipment Photos",
  description: "View photos of ADEN industrial centrifuges in production, stainless steel & rubber-lined machines ready for dispatch from our Naroda, Ahmedabad manufacturing facility.",
  keywords: [
    "Industrial Centrifuge Gallery",
    "Centrifuge Manufacturing Plant Photos",
    "Stainless Steel Centrifuge Pictures",
    "Rubber-Lined Centrifuge Photos",
    "ADEN Factory Ahmedabad",
    "Solid-Liquid Separation Equipment Gallery",
    "Top Discharge Centrifuge Images",
    "Chemical Equipment Exporter Photos"
  ],
  openGraph: {
    title: "Centrifuge Manufacturing Gallery | ADEN Works Ahmedabad",
    description: "Centrifuges in production, on customer plant floors, and ready for dispatch from our Naroda, Ahmedabad works.",
    url: "https://www.adengineers.co.in/gallery",
  }
};

export default function Gallery() {
  return (
    <main>
      <section style={{ paddingTop: "120px" }}>
        <div className="container">
          <div className="section-head reveal">
            <h2>From the works floor</h2>
            <p>A look at ADEN centrifuges in production and on installation, in stainless steel and rubber-lined construction.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <img src="/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Stainless%20Steel).png" alt="Top Discharge SS" className="product-image" />
              <h3>Top Discharge Centrifuge — Stainless Steel</h3>
              <p>Studio view showing the hydraulic lifting arm, discharge flanges and hydraulic power pack.</p>
            </div>
            <div className="card">
              <img src="/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Stainless%20Steel)2.png" alt="In-Plant Installation" className="product-image" />
              <h3>In-Plant Installation</h3>
              <p>Fitted with a cake discharge chute and collection tray for continuous plant operation.</p>
            </div>
            <div className="card">
              <img src="/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Rubber-Lined).png" alt="ADEN Works, Ahmedabad" className="product-image" />
              <h3>ADEN Works, Ahmedabad</h3>
              <p>Multiple units in build and finishing on our Naroda GIDC works floor.</p>
            </div>
            <div className="card">
              <img src="/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Stainless%20Steel).png" alt="Machining & Fabrication" className="product-image" />
              <h3>Machining &amp; Fabrication</h3>
              <p>Precision machining of basket and drive components.</p>
            </div>
            <div className="card">
              <img src="/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Stainless%20Steel)2.png" alt="Quality Inspection" className="product-image" />
              <h3>Quality Inspection</h3>
              <p>Every unit checked against its build datasheet before dispatch.</p>
            </div>
            <div className="card">
              <img src="/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Rubber-Lined).png" alt="Dispatch & Packing" className="product-image" />
              <h3>Dispatch &amp; Packing</h3>
              <p>Export-ready packing for shipment across 15+ countries.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--graphite)", color: "var(--silver)", textAlign: "center" }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: "center", color: "var(--silver)" }}>More photos coming</div>
          <h2 style={{ color: "var(--white)", maxWidth: "26ch", margin: "0 auto 16px" }}>Send us your factory and dispatch photos to fill this gallery out.</h2>
          <Link href="/contact" className="btn btn-amber" style={{ background: "transparent" }}>Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
