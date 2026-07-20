import Link from "next/link";

export default function Clients() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / Clients &amp; Global Reach</div>
          <h1>Clients &amp; Global Reach</h1>
          <p style={{ maxWidth: "56ch", color: "var(--steel-light)", marginTop: "10px" }}>
            Equipment delivered to customers across more than 15 countries, serving pharmaceutical, chemical, textile, food and water treatment plants.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <h2>Where our equipment runs</h2>
            <p>Since 1990, ADEN centrifuges and pumps have shipped to customers across more than 15 countries.</p>
          </div>
          <div className="country-grid reveal">
            <div className="country-cell">USA</div>
            <div className="country-cell">UK</div>
            <div className="country-cell">Germany</div>
            <div className="country-cell">Switzerland</div>
            <div className="country-cell">Spain</div>
            <div className="country-cell">Australia</div>
            <div className="country-cell">Czech Republic</div>
            <div className="country-cell">Mexico</div>
            <div className="country-cell">Malaysia</div>
            <div className="country-cell">Singapore</div>
            <div className="country-cell">China</div>
            <div className="country-cell">Turkey</div>
            <div className="country-cell">Oman</div>
            <div className="country-cell">UAE</div>
            <div className="country-cell">Bangladesh</div>
            <div className="country-cell">Sri Lanka</div>
          </div>
          <p style={{ marginTop: "16px", fontSize: "12.5px", color: "var(--steel-light)", fontFamily: "var(--font-mono)" }}>
            List reflects export markets served to date — a current country list can be confirmed on request.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--white)", borderTop: "1px solid var(--silver)", borderBottom: "1px solid var(--silver)" }}>
        <div className="container">
          <div className="section-head reveal">
            <h2>Industries we serve</h2>
          </div>
          <div className="grid-3 reveal">
            <div className="card"><div className="index">01</div><h3>Pharmaceutical</h3><p>Amino acids, antibiotics, pharmaceutical intermediates and vitamins processing.</p></div>
            <div className="card"><div className="index">02</div><h3>Chemical</h3><p>Bulk and fine chemicals, crop protection chemicals, acidic and alkaline media.</p></div>
            <div className="card"><div className="index">03</div><h3>Textile</h3><p>Water and liquid extraction in textile finishing processes.</p></div>
            <div className="card"><div className="index">04</div><h3>Food Processing</h3><p>Solid-liquid separation for food industry applications.</p></div>
            <div className="card"><div className="index">05</div><h3>Water Treatment</h3><p>Corrosion-resistant pumps for water treatment plants.</p></div>
            <div className="card"><div className="index">06</div><h3>Steel &amp; Paper</h3><p>Pumps for steel plants, paper, sugar and salt processing.</p></div>
          </div>
        </div>
      </section>

      <section style={{ textAlign: "center" }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Working with a plant outside this list?</div>
          <h2 style={{ maxWidth: "26ch", margin: "0 auto 16px" }}>Talk to us about your export or local requirement.</h2>
          <Link href="/contact" className="btn btn-solid">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
