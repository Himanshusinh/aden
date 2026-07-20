import Link from "next/link";

export default function Gallery() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / Gallery</div>
          <h1>Gallery</h1>
          <p style={{ maxWidth: "56ch", color: "var(--steel-light)", marginTop: "10px" }}>
            Centrifuges in production, on customer plant floors, and ready for dispatch — from our Naroda, Ahmedabad works.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <h2>From the works floor</h2>
            <p>A look at ADEN centrifuges in production and on installation, in stainless steel and rubber-lined construction.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="photo-slot" style={{ border: "none" }}>
                <img src="/images/centrifuge-ss-studio.jpg" alt="ADEN stainless steel top discharge centrifuge, studio shot" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3>Top Discharge Centrifuge — Stainless Steel</h3>
              <p>Studio view showing the hydraulic lifting arm, discharge flanges and hydraulic power pack.</p>
            </div>
            <div className="card">
              <div className="photo-slot" style={{ border: "none" }}>
                <img src="/images/centrifuge-ss-plant.jpg" alt="ADEN centrifuge installed in a customer plant with cake discharge chute" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3>In-Plant Installation</h3>
              <p>Fitted with a cake discharge chute and collection tray for continuous plant operation.</p>
            </div>
            <div className="card">
              <div className="photo-slot" style={{ border: "none" }}>
                <img src="/images/centrifuge-factory-floor.jpg" alt="Multiple ADEN centrifuges on the manufacturing works floor" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3>ADEN Works, Ahmedabad</h3>
              <p>Multiple units in build and finishing on our Naroda GIDC works floor.</p>
            </div>
            <div className="card">
              <div className="photo-slot">Photo — Machining &amp; fabrication<br/><span style={{ opacity: 0.6 }}>(add when supplied)</span></div>
              <h3>Machining &amp; Fabrication</h3>
              <p>Precision machining of basket and drive components.</p>
            </div>
            <div className="card">
              <div className="photo-slot">Photo — Quality inspection<br/><span style={{ opacity: 0.6 }}>(add when supplied)</span></div>
              <h3>Quality Inspection</h3>
              <p>Every unit checked against its build datasheet before dispatch.</p>
            </div>
            <div className="card">
              <div className="photo-slot">Photo — Dispatch &amp; packing<br/><span style={{ opacity: 0.6 }}>(add when supplied)</span></div>
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
