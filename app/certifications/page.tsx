import Link from "next/link";

export default function Certifications() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / Quality &amp; Certifications</div>
          <h1>Quality &amp; Certifications</h1>
          <p style={{ maxWidth: "56ch", color: "var(--steel-light)", marginTop: "10px" }}>
            Material checks, build inspection and pre-dispatch testing on every unit that leaves our works.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <h2>How we hold quality</h2>
            <p>Every ADEN machine passes through a dedicated Quality Control head before it leaves the works — checked against its own build datasheet, not a general pass/fail.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="index">Step 01</div>
              <h3>Material verification</h3>
              <p>Stainless steel, MSRL, polypropylene and CI rubber-lined components checked against the specified grade before fabrication begins.</p>
            </div>
            <div className="card">
              <div className="index">Step 02</div>
              <h3>Build inspection</h3>
              <p>Basket, drive and discharge assemblies inspected at each build stage, not only at final sign-off.</p>
            </div>
            <div className="card">
              <div className="index">Step 03</div>
              <h3>Pre-dispatch testing</h3>
              <p>Each unit run and checked against its datasheet — basket speed, discharge, seal integrity — before packing.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", borderTop: "1px solid var(--silver)", borderBottom: "1px solid var(--silver)" }}>
        <div className="container">
          <div className="section-head reveal">
            <h2>Certifications</h2>
            <p>Formal certification marks for this profile are being confirmed and will be published here once verified.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card cert-card cert-pending">
              <div className="cert-mark index" style={{ fontSize: "24px" }}>ISO</div>
              <h4>ISO Certification</h4>
              <p>To be confirmed and added.</p>
            </div>
            <div className="card cert-card cert-pending">
              <div className="cert-mark index" style={{ fontSize: "24px" }}>CE</div>
              <h4>CE Marking</h4>
              <p>To be confirmed and added.</p>
            </div>
            <div className="card cert-card cert-pending">
              <div className="cert-mark index" style={{ fontSize: "24px" }}>+</div>
              <h4>Other Approvals</h4>
              <p>Send us any certificates on file and we'll list them here.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ textAlign: "center" }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Need certificates for a tender?</div>
          <h2 style={{ maxWidth: "28ch", margin: "0 auto 16px" }}>Ask our team for current documentation on any unit.</h2>
          <Link href="/contact" className="btn btn-solid">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
