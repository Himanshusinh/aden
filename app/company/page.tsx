import Link from "next/link";

export default function Company() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / Company</div>
          <h1>Our Commitment — Your Success</h1>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div className="reveal">
            <div className="eyebrow">Who we are</div>
            <p style={{ fontSize: "19px", color: "var(--steel)", fontFamily: "var(--font-display)", fontWeight: 500, lineHeight: 1.4 }}>ADEN provides innovative solutions in mechanical and thermal solid-liquid separation, offering centrifuges and pumps on a global basis.</p>
            <p>We support our customers with effective, reliable and profitable process technology equipment. Our goal is an all-encompassing, professional service — starting at the initial consultation and continuing through installation, commissioning and after-sales support.</p>
            <p>At the beginning of most separation problems sits a question of process, not just equipment. Analysing that problem and matching it to the right process technology takes long experience in plant and machinery. ADEN has answered that question for manufacturers for more than three decades.</p>
            <p>Since 1990, ADEN has delivered over 7,000 centrifuges and pumps to customers in more than 15 countries — equipment specified into pharmaceutical, chemical, textile and food-processing plants that depend on it running shift after shift.</p>
          </div>
          <div className="title-block reveal" style={{ maxWidth: "none" }}>
            <div className="tb-row">
              <div className="tb-cell"><span className="tb-label">Founded</span>1990</div>
              <div className="tb-cell"><span className="tb-label">Location</span>Naroda GIDC, Ahmedabad</div>
            </div>
            <div className="tb-row">
              <div className="tb-cell"><span className="tb-label">Scope</span>Mechanical &amp; thermal solid/liquid separation</div>
            </div>
            <div className="tb-row">
              <div className="tb-cell"><span className="tb-label">Delivered</span>7,000+ units</div>
              <div className="tb-cell"><span className="tb-label">Reach</span>15+ countries</div>
            </div>
            <div className="tb-row">
              <div className="tb-cell"><span className="tb-label">Support</span>Consultation → Commissioning → After-sales</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", borderTop: "1px solid var(--silver)", borderBottom: "1px solid var(--silver)" }}>
        <div className="container">
          <div className="section-head reveal">
            <h2>What guides how we build</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="index">Principle 01</div>
              <h3>Engineer to the process, not the catalogue</h3>
              <p>Every centrifuge or pump is matched to the media, the duty cycle and the plant it will run in — not sold off a fixed size chart.</p>
            </div>
            <div className="card">
              <div className="index">Principle 02</div>
              <h3>Design for the maintenance shift</h3>
              <p>Service-friendly construction, single large discharge openings and minimal dead zones keep unplanned downtime short.</p>
            </div>
            <div className="card">
              <div className="index">Principle 03</div>
              <h3>Stand behind what leaves the works</h3>
              <p>A 24/7 breakdown line and direct access to our engineering team back every machine we ship, long after commissioning.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <h2>The team behind the equipment</h2>
            <p>A small, senior team spanning design, sales engineering, production and quality control.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <div className="photo-slot" style={{ aspectRatio: "1/1" }}>Photo —<br />Managing Director<br /><span style={{ opacity: 0.6 }}>(add when supplied)</span></div>
              <h3>Bharat M. Patel</h3>
              <p>Managing Director</p>
            </div>
            <div className="card">
              <div className="photo-slot" style={{ aspectRatio: "1/1" }}>Photo —<br />Sales Engineer<br /><span style={{ opacity: 0.6 }}>(add when supplied)</span></div>
              <h3>Kanu V. Patel</h3>
              <p>Sales Engineer</p>
            </div>
            <div className="card">
              <div className="photo-slot" style={{ aspectRatio: "1/1" }}>Photo —<br />Chief Engineer<br /><span style={{ opacity: 0.6 }}>(add when supplied)</span></div>
              <h3>Joysan Victor</h3>
              <p>Chief Engineer</p>
            </div>
            <div className="card">
              <div className="photo-slot" style={{ aspectRatio: "1/1" }}>Photo —<br />Production Head<br /><span style={{ opacity: 0.6 }}>(add when supplied)</span></div>
              <h3>Hemchand</h3>
              <p>Production Head</p>
            </div>
            <div className="card">
              <div className="photo-slot" style={{ aspectRatio: "1/1" }}>Photo —<br />QC Head<br /><span style={{ opacity: 0.6 }}>(add when supplied)</span></div>
              <h3>Raju Panchal</h3>
              <p>Quality Control Head</p>
            </div>
            <div className="card" style={{ alignItems: "flex-start", justifyContent: "center" }}>
              <div className="index">Join us</div>
              <h3>Work with our engineering team</h3>
              <p>Have a separation or pumping problem that needs a proper look? Talk to us directly.</p>
              <Link href="/inquiry" className="card-link">Start an inquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
