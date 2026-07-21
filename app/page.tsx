import Link from "next/link";
import ImageSlider from "../components/ImageSlider";
import HeroSlider from "../components/HeroSlider";
import ClientLogo from "../components/ClientLogo";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="eyebrow" style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}>Centrifuges — Engineered in Ahmedabad</div>
              <h1>Solid-liquid separation equipment built for <em>continuous industrial duty.</em></h1>
              <p className="hero-sub">ADEN designs and manufactures centrifuges for pharmaceutical, chemical, textile and food manufacturers who cannot afford downtime. Every machine leaves our works floor tested against its own datasheet.</p>
              <div className="hero-actions">
                <Link href="/products" className="btn btn-solid">View Product Range</Link>
                <Link href="/contact" className="btn">Request a Quotation</Link>
              </div>
            </div>
            <div className="hero-visual reveal" style={{ justifySelf: "end", width: "100%" }}>
              <div style={{ position: "relative", marginBottom: "20px" }}>
                <HeroSlider slides={[
                  {
                    src: "/file_000000008c708207bc3aa587fba78b0d.png",
                    title: "Precision Separation Engineering",
                    subtitle: "Heavy Industrial Duty"
                  },
                  {
                    src: "/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Stainless%20Steel).png",
                    title: "Stainless Steel Construction",
                    subtitle: "Bag-Lifting Discharge"
                  },
                  {
                    src: "/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Stainless%20Steel)2.png",
                    title: "High Throughput Extraction",
                    subtitle: "Continuous Duty"
                  },
                  {
                    src: "/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Rubber-Lined).png",
                    title: "Corrosion Resistant Rubber-Lined",
                    subtitle: "Acid & Alkali Ready"
                  }
                ]} />
              </div>
              <div className="title-block" style={{ maxWidth: "100%" }}>
                <div className="tb-row">
                  <div className="tb-cell"><span className="tb-label">Manufacturer</span>ADEN</div>
                  <div className="tb-cell"><span className="tb-label">Product Class</span>Centrifuges</div>
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

      <section style={{ background: "var(--white)", borderTop: "1px solid var(--silver)", borderBottom: "1px solid var(--silver)" }}>
        <div className="container two-col" style={{ alignItems: "center" }}>
          <div className="reveal">
            <div className="eyebrow">Engineering Excellence</div>
            <h2>Built for demanding industrial separation environments.</h2>
            <p style={{ color: "var(--steel-light)" }}>Heavy-duty construction engineered to handle continuous solid-liquid extraction with minimal downtime and maximum operational safety.</p>
            <ul className="feature-list" style={{ marginTop: "16px" }}>
              <li>Precision machined drive and basket assemblies</li>
              <li>High-durability corrosion-resistant finishes</li>
              <li>Custom mounting and discharge configurations</li>
            </ul>
          </div>
          <div className="reveal" style={{ justifySelf: "end", display: "flex", justifyContent: "center", width: "100%" }}>
            <div style={{ border: "1px solid var(--silver)", padding: "12px", background: "var(--white)", display: "inline-block" }}>
              <img src="/file_000000008c708207bc3aa587fba78b0d.png" alt="Industrial Centrifuge Equipment" style={{ maxHeight: "440px", width: "auto", maxWidth: "100%", display: "block", objectFit: "contain" }} />
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
              <img src="/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Stainless%20Steel).png" alt="Manual Top Discharge SS" className="product-image" />
              <h3>Manual Top Discharge Centrifuge (Stainless Steel)</h3>
              <p>Top-discharge, bottom-driven hydro extractor with stainless steel construction, built for chemical, pharmaceutical, textile and food processing.</p>
              <Link href="/products#manual-ss" className="card-link">View datasheet</Link>
            </div>
            <div className="card">
              <div className="index">02 / Manual RL</div>
              <img src="/productimages/Bag-Lifting%20Top%20Discharge%20Centrifuge%20(Rubber-Lined).png" alt="Manual Top Discharge RL" className="product-image" />
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

      <section style={{ background: "var(--paper)", borderTop: "1px solid var(--silver)", borderBottom: "1px solid var(--silver)" }}>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">Valued Customers</div>
              <h2>Trusted by leading chemical &amp; pharma manufacturers.</h2>
            </div>
            <p>A selection of valued industrial plants running ADEN centrifuges and pumps on active production floors.</p>
          </div>

          <div className="client-grid reveal">
            <div className="client-card">
              <div className="client-logo-badge">
                <ClientLogo id="bodal" name="Bodal Chemicals Ltd" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
                <span className="client-loc">Vatva, Ahmedabad</span>
                <span className="tag">Dyes &amp; Chemicals</span>
              </div>
            </div>

            <div className="client-card">
              <div className="client-logo-badge">
                <ClientLogo id="meghmani" name="Meghmani Organics Ltd" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
                <span className="client-loc">Vatva, Ahmedabad</span>
                <span className="tag">Agro &amp; Organics</span>
              </div>
            </div>

            <div className="client-card">
              <div className="client-logo-badge">
                <ClientLogo id="valiant" name="Valiant Organics Ltd" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
                <span className="client-loc">Vatva, Ahmedabad</span>
                <span className="tag">Specialty Chem</span>
              </div>
            </div>

            <div className="client-card">
              <div className="client-logo-badge">
                <ClientLogo id="ambica" name="Ambica Industries" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
                <span className="client-loc">Naroda, Ahmedabad</span>
                <span className="tag">Process Chem</span>
              </div>
            </div>

            <div className="client-card">
              <div className="client-logo-badge">
                <ClientLogo id="sagardrugs" name="Sagar Drugs & Pharma" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
                <span className="client-loc">Singarwa, Ahmedabad</span>
                <span className="tag">Pharma &amp; APIs</span>
              </div>
            </div>

            <div className="client-card">
              <div className="client-logo-badge">
                <ClientLogo id="rksynthesis" name="R K Synthesis Ltd" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
                <span className="client-loc">Naroda, Ahmedabad</span>
                <span className="tag">Intermediates</span>
              </div>
            </div>

            <div className="client-card">
              <div className="client-logo-badge">
                <ClientLogo id="chemieorganic" name="Chemie Organic Chemicals" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
                <span className="client-loc">Jhagadia, Bharuch</span>
                <span className="tag">Organic Chem</span>
              </div>
            </div>

            <div className="client-card">
              <div className="client-logo-badge">
                <ClientLogo id="gopinath" name="Gopinath Chem Tech" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
                <span className="client-loc">Ahmedabad, Gujarat</span>
                <span className="tag">Fine Chemicals</span>
              </div>
            </div>

            <div className="client-card">
              <div className="client-logo-badge">
                <ClientLogo id="kpinternational" name="K.P. International" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
                <span className="client-loc">Dahej GIDC</span>
                <span className="tag">Export Media</span>
              </div>
            </div>

            <div className="client-card">
              <div className="client-logo-badge">
                <ClientLogo id="matangi" name="Matangi Industries" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
                <span className="client-loc">Vatva, Ahmedabad</span>
                <span className="tag">Performance</span>
              </div>
            </div>

            <div className="client-card">
              <div className="client-logo-badge">
                <ClientLogo id="prima" name="Prima Chemicals" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
                <span className="client-loc">Odhav, Ahmedabad</span>
                <span className="tag">Dyestuffs</span>
              </div>
            </div>

            <div className="client-card">
              <div className="client-logo-badge">
                <ClientLogo id="varahi" name="Varahi Intermediates" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
                <span className="client-loc">Naroda, Ahmedabad</span>
                <span className="tag">Chemical Duty</span>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <Link href="/clients" className="card-link">View all valued customer plants</Link>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--graphite)", color: "var(--silver)", padding: "64px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="eyebrow" style={{ justifyContent: "center", color: "var(--amber)" }}>Get In Touch</div>
            <h2 style={{ color: "var(--white)", maxWidth: "24ch", margin: "0 auto 16px" }}>Tell us what you need to separate or process.</h2>
            <p style={{ color: "var(--silver)", opacity: 0.8, maxWidth: "52ch", margin: "0 auto 24px" }}>
              Send us your process parameters or visit our Naroda works floor in Ahmedabad. Our engineering team is ready to assist.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "32px" }}>
              <Link href="/contact" className="btn btn-amber">Contact Us</Link>
              <a href="tel:+919825172158" className="btn" style={{ color: "var(--white)", borderColor: "var(--silver)" }}>Call: +91 98251 72158</a>
            </div>
          </div>

          <div style={{ border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "4px", overflow: "hidden", height: "360px", width: "100%" }}>
            <iframe
              title="ADEN, Naroda GIDC, Ahmedabad"
              src="https://www.google.com/maps?q=G.I.D.C.+Naroda,+Ahmedabad,+Gujarat+382330&output=embed"
              width="100%" height="100%" style={{ border: 0, display: "block" }}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
