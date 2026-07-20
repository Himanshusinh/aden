import Link from "next/link";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Centrifuges &amp; Pumps — Engineered in Ahmedabad</div>
              <h1>Solid-liquid separation equipment built for <em>continuous industrial duty.</em></h1>
              <p className="hero-sub">ADEN designs and manufactures centrifuges and process pumps for pharmaceutical, chemical, textile and food manufacturers who cannot afford downtime. Every machine leaves our works floor tested against its own datasheet.</p>
              <div className="hero-actions">
                <Link href="/products" className="btn btn-solid">View Product Range</Link>
                <Link href="/inquiry" className="btn">Request a Quotation</Link>
              </div>
            </div>
            <div className="title-block reveal" style={{ justifySelf: "end" }}>
              <div className="tb-row">
                <div className="tb-cell"><span className="tb-label">Manufacturer</span>ADEN</div>
              </div>
              <div className="tb-row">
                <div className="tb-cell"><span className="tb-label">Product Class</span>Centrifuges</div>
                <div className="tb-cell"><span className="tb-label">&amp;</span>Process Pumps</div>
              </div>
              <div className="tb-row">
                <div className="tb-cell"><span className="tb-label">Est.</span>1990</div>
                <div className="tb-cell"><span className="tb-label">Origin</span>Ahmedabad, IN</div>
              </div>
              <div className="tb-row">
                <div className="tb-cell"><span className="tb-label">Standard</span>Built to order spec.</div>
              </div>
            </div>
          </div>

          <div className="stat-strip reveal">
            <div className="stat">
              <div className="num">7,000<span className="amber">+</span></div>
              <div className="label">Centrifuges &amp; pumps delivered</div>
            </div>
            <div className="stat">
              <div className="num">15<span className="amber">+</span></div>
              <div className="label">Countries served</div>
            </div>
            <div className="stat">
              <div className="num">35<span className="amber">+</span></div>
              <div className="label">Years in process equipment</div>
            </div>
            <div className="stat">
              <div className="num">24<span className="amber">/7</span></div>
              <div className="label">Breakdown service line</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <h2>Equipment, by application</h2>
            <p>Four product lines, each built around a specific separation or transfer problem rather than a generic catalogue part.</p>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <div className="index">01 / Manual SS</div>
              <div className="photo-slot">Product photo —<br />Manual Top Discharge (SS)<br /><span style={{ opacity: 0.6 }}>(add image when supplied)</span></div>
              <h3>Manual Top Discharge Centrifuge (Stainless Steel)</h3>
              <p>Top-discharge, bottom-driven hydro extractor with stainless steel construction, built for chemical, pharmaceutical, textile and food processing.</p>
              <Link href="/products#manual-ss" className="card-link">View datasheet</Link>
            </div>
            <div className="card">
              <div className="index">02 / Manual RL</div>
              <div className="photo-slot">Product photo —<br />Manual Top Discharge (RL)<br /><span style={{ opacity: 0.6 }}>(add image when supplied)</span></div>
              <h3>Manual Top Discharge Centrifuge (Rubber-Lined)</h3>
              <p>Top-discharge centrifuge with rubber-lined construction for continuous duty on corrosive acidic and alkaline chemicals.</p>
              <Link href="/products#manual-rl" className="card-link">View datasheet</Link>
            </div>
            <div className="card">
              <div className="index">03 / Bag-Lifting SS</div>
              <ImageSlider images={["/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Stainless%20Steel).png", "/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Stainless%20Steel)2.png"]} altPrefix="Bag-Lifting SS" />
              <h3>Bag-Lifting Top Discharge Centrifuge (Stainless Steel)</h3>
              <p>Efficient top-discharge centrifuge with bag-lifting mechanism for quick cake removal, built in stainless steel for clean operations.</p>
              <Link href="/products#bag-lifting-ss" className="card-link">View datasheet</Link>
            </div>
            <div className="card">
              <div className="index">04 / Bag-Lifting RL</div>
              <img src="/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Rubber-Lined).png" alt="Bag-Lifting RL" className="product-image" />
              <h3>Bag-Lifting Top Discharge Centrifuge (Rubber-Lined)</h3>
              <p>Corrosion-resistant rubber-lined centrifuge featuring a bag-lifting mechanism for safe and rapid extraction of highly corrosive media.</p>
              <Link href="/products#bag-lifting-rl" className="card-link">View datasheet</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", borderTop: "1px solid var(--silver)", borderBottom: "1px solid var(--silver)" }}>
        <div className="container two-col">
          <div className="reveal">
            <div className="eyebrow">Why manufacturers specify ADEN</div>
            <h2>Process equipment is only as good as its worst shift.</h2>
            <p style={{ color: "var(--steel-light)" }}>Our centrifuges and pumps are specified into plants that run three shifts a day, on materials that punish poorly built equipment. That is the standard we design to — not the standard a brochure photograph needs.</p>
            <ul className="feature-list">
              <li>Service-friendly design that keeps maintenance windows short</li>
              <li>Single, large discharge opening for efficient product removal</li>
              <li>Minimal product hold-up — no dead zones in the flow path</li>
              <li>Construction in stainless steel, MSRL, CI rubber-lined and polypropylene to match the media</li>
            </ul>
          </div>
          <div className="title-block reveal" style={{ maxWidth: "none" }}>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Industries served</span>Pharmaceutical, Chemical, Textile, Food, Water Treatment, Steel</div></div>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Materials of construction</span>Stainless steel, MSRL, Polypropylene, CI rubber-lined</div></div>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Support</span>24/7 breakdown response, spares &amp; commissioning</div></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <h2>Built on three decades of separation engineering</h2>
            <p>Since 1990, ADEN has supplied centrifuges and pumps to customers across more than 15 countries — equipment still running on factory floors today.</p>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <div className="index">The Problem</div>
              <h3>Every separation problem starts before the machine does</h3>
              <p>Choosing the right process technology equipment takes real plant experience — not a catalogue lookup. ADEN's engineering team works from the first consultation through commissioning and after-sales support, so the machine that arrives is the one the process actually needs.</p>
              <Link href="/company" className="card-link">Read about ADEN</Link>
            </div>
            <div className="card">
              <div className="index">The Standard</div>
              <h3>Global delivery, local accountability</h3>
              <p>Our machines run in customer plants across more than 15 countries, backed by a 24/7 breakdown line from our Naroda, Ahmedabad works — for both mechanical and electrical/control system questions.</p>
              <Link href="/services" className="card-link">See our services</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--graphite)", color: "var(--silver)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center", color: "var(--silver)" }}>Next step</div>
          <h2 style={{ color: "var(--white)", maxWidth: "24ch", margin: "0 auto 16px" }}>Tell us what you need to separate, pump or process.</h2>
          <p style={{ color: "var(--silver)", opacity: 0.8, maxWidth: "48ch", margin: "0 auto 28px" }}>Send us your process parameters and we'll size the right centrifuge or pump for your application.</p>
          <Link href="/inquiry" className="btn btn-amber" style={{ background: "transparent" }}>Submit an Inquiry</Link>
        </div>
      </section>
    </main>
  );
}
