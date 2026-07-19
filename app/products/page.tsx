import Link from "next/link";

export default function Products() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / Products</div>
          <h1>Centrifuges</h1>
          <p style={{ maxWidth: "52ch", color: "var(--steel-light)", marginTop: "10px" }}>Four product lines, each engineered for a specific separation duty rather than sold as a generic catalogue size.</p>
          <div className="tag-row" style={{ marginTop: "20px" }}>
            <Link href="#manual-ss" className="tag">01 Manual SS</Link>
            <Link href="#manual-rl" className="tag">02 Manual RL</Link>
            <Link href="#bag-lifting-ss" className="tag">03 Bag-Lifting SS</Link>
            <Link href="#bag-lifting-rl" className="tag">04 Bag-Lifting RL</Link>
          </div>
        </div>
      </section>

      <section id="manual-ss">
        <div className="container">
          <div className="eyebrow reveal">Product 01 · Basket Centrifuge</div>
          <div className="datasheet reveal">
            <div className="datasheet-head">
              <h3>Manual Top Discharge Centrifuge (Stainless Steel)</h3>
              <span className="datasheet-tag">Hydro Extractor</span>
            </div>
            <div className="datasheet-body">
              <div>
                <p style={{ color: "var(--steel-light)", fontSize: "15px" }}>Top-discharge, bottom-driven hydro extractor with stainless steel construction, built for chemical, pharmaceutical, textile and food processing.</p>
                <ul className="feature-list">
                  <li>Easy maintenance through a service-friendly design</li>
                  <li>Efficient product discharge via a single, large discharge opening</li>
                  <li>Minimal product hold-up — dead zones designed out</li>
                  <li>Uniform cake formation during feeding through a dynamic feed device</li>
                </ul>
                <div className="eyebrow" style={{ marginTop: "20px" }}>Special features</div>
                <p style={{ fontSize: "14.5px" }}>Designed for multi-product plants, with easy inspectability, 100% product discharge and suitability for cleanroom installation.</p>
                <div className="eyebrow">Main applications</div>
                <div className="tag-row">
                  <span className="tag">Amino acids</span>
                  <span className="tag">Antibiotics</span>
                  <span className="tag">Crop protection chemicals</span>
                  <span className="tag">Fine chemicals</span>
                  <span className="tag">Pharmaceutical intermediates</span>
                </div>
              </div>
              <div>
                <div className="photo-slot" style={{ marginBottom: "18px" }}>Product photo — Manual SS<br /><span style={{ opacity: 0.6 }}>(add image when supplied)</span></div>
                <div className="eyebrow">Technical data</div>
                <table className="spec-table">
                  <tbody>
                    <tr><td>Operating principle</td><td>Filtration, solid–liquid separation</td></tr>
                    <tr><td>Mode of operation</td><td>Batch (Manual Discharge)</td></tr>
                    <tr><td>Materials of construction</td><td>Stainless steel</td></tr>
                    <tr><td>Status</td><td>Awaiting full details</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section id="manual-rl">
        <div className="container">
          <div className="eyebrow reveal">Product 02 · Basket Centrifuge</div>
          <div className="datasheet reveal">
            <div className="datasheet-head">
              <h3>Manual Top Discharge Centrifuge (Rubber-Lined)</h3>
              <span className="datasheet-tag">Corrosion Resistant</span>
            </div>
            <div className="datasheet-body">
              <div>
                <p style={{ color: "var(--steel-light)", fontSize: "15px" }}>Top-discharge centrifuge with rubber-lined construction for continuous duty on corrosive acidic and alkaline chemicals.</p>
                <ul className="feature-list">
                  <li>Easy maintenance through a service-friendly design</li>
                  <li>Efficient product discharge via a single, large discharge opening</li>
                  <li>Corrosion resistance against acidic media</li>
                </ul>
                <div className="eyebrow" style={{ marginTop: "20px" }}>Special features</div>
                <p style={{ fontSize: "14.5px" }}>Designed for multi-product plants, with easy inspectability and suitability for corrosive chemical duty.</p>
                <div className="eyebrow">Main applications</div>
                <div className="tag-row">
                  <span className="tag">Chemical processing</span>
                  <span className="tag">Pharmaceutical</span>
                  <span className="tag">Corrosive media</span>
                </div>
              </div>
              <div>
                <div className="photo-slot" style={{ marginBottom: "18px" }}>Product photo — Manual RL<br /><span style={{ opacity: 0.6 }}>(add image when supplied)</span></div>
                <div className="eyebrow">Technical data</div>
                <table className="spec-table">
                  <tbody>
                    <tr><td>Operating principle</td><td>Filtration, solid–liquid separation</td></tr>
                    <tr><td>Mode of operation</td><td>Batch (Manual Discharge)</td></tr>
                    <tr><td>Materials of construction</td><td>Rubber-lined</td></tr>
                    <tr><td>Status</td><td>Awaiting full details</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section id="bag-lifting-ss">
        <div className="container">
          <div className="eyebrow reveal">Product 03 · Basket Centrifuge</div>
          <div className="datasheet reveal">
            <div className="datasheet-head">
              <h3>Bag-Lifting Top Discharge Centrifuge (Stainless Steel)</h3>
              <span className="datasheet-tag">Hydro Extractor</span>
            </div>
            <div className="datasheet-body">
              <div>
                <p style={{ color: "var(--steel-light)", fontSize: "15px" }}>Efficient top-discharge centrifuge with bag-lifting mechanism for quick cake removal, built in stainless steel for clean operations.</p>
                <ul className="feature-list">
                  <li>Easy maintenance through a service-friendly design</li>
                  <li>Rapid product discharge using a lifting bag mechanism</li>
                  <li>Minimal product hold-up — dead zones designed out</li>
                  <li>Uniform cake formation during feeding</li>
                </ul>
                <div className="eyebrow" style={{ marginTop: "20px" }}>Special features</div>
                <p style={{ fontSize: "14.5px" }}>Designed for multi-product plants, drastically reduces unloading time, and suitable for cleanroom installation.</p>
                <div className="eyebrow">Main applications</div>
                <div className="tag-row">
                  <span className="tag">Amino acids</span>
                  <span className="tag">Antibiotics</span>
                  <span className="tag">Crop protection chemicals</span>
                  <span className="tag">Fine chemicals</span>
                  <span className="tag">Pharmaceutical intermediates</span>
                </div>
              </div>
              <div>
                <div className="photo-slot" style={{ marginBottom: "18px" }}>Product photo — Bag-Lifting SS<br /><span style={{ opacity: 0.6 }}>(add image when supplied)</span></div>
                <div className="eyebrow">Technical data</div>
                <table className="spec-table">
                  <tbody>
                    <tr><td>Operating principle</td><td>Filtration, solid–liquid separation</td></tr>
                    <tr><td>Mode of operation</td><td>Batch (Bag-Lifting Discharge)</td></tr>
                    <tr><td>Materials of construction</td><td>Stainless steel</td></tr>
                    <tr><td>Status</td><td>Awaiting full details</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section id="bag-lifting-rl">
        <div className="container">
          <div className="eyebrow reveal">Product 04 · Basket Centrifuge</div>
          <div className="datasheet reveal">
            <div className="datasheet-head">
              <h3>Bag-Lifting Top Discharge Centrifuge (Rubber-Lined)</h3>
              <span className="datasheet-tag">Corrosion Resistant</span>
            </div>
            <div className="datasheet-body">
              <div>
                <p style={{ color: "var(--steel-light)", fontSize: "15px" }}>Corrosion-resistant rubber-lined centrifuge featuring a bag-lifting mechanism for safe and rapid extraction of highly corrosive media.</p>
                <ul className="feature-list">
                  <li>Easy maintenance through a service-friendly design</li>
                  <li>Rapid product discharge using a lifting bag mechanism</li>
                  <li>Corrosion resistance against acidic media</li>
                </ul>
                <div className="eyebrow" style={{ marginTop: "20px" }}>Special features</div>
                <p style={{ fontSize: "14.5px" }}>Designed for rapid, safe extraction of corrosive chemicals, minimizing manual handling and downtime.</p>
                <div className="eyebrow">Main applications</div>
                <div className="tag-row">
                  <span className="tag">Chemical processing</span>
                  <span className="tag">Pharmaceutical</span>
                  <span className="tag">Corrosive media</span>
                </div>
              </div>
              <div>
                <div className="photo-slot" style={{ marginBottom: "18px" }}>Product photo — Bag-Lifting RL<br /><span style={{ opacity: 0.6 }}>(add image when supplied)</span></div>
                <div className="eyebrow">Technical data</div>
                <table className="spec-table">
                  <tbody>
                    <tr><td>Operating principle</td><td>Filtration, solid–liquid separation</td></tr>
                    <tr><td>Mode of operation</td><td>Batch (Bag-Lifting Discharge)</td></tr>
                    <tr><td>Materials of construction</td><td>Rubber-lined</td></tr>
                    <tr><td>Status</td><td>Awaiting full details</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--graphite)", color: "var(--silver)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center", color: "var(--silver)" }}>Need a size not listed here?</div>
          <h2 style={{ color: "var(--white)", maxWidth: "26ch", margin: "0 auto 16px" }}>Send us your process parameters and we'll spec the right machine.</h2>
          <Link href="/inquiry" className="btn btn-amber" style={{ background: "transparent" }}>Submit an Inquiry</Link>
        </div>
      </section>
    </main>
  );
}
