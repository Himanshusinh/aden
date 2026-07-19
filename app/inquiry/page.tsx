"use client";

import Link from "next/link";

export default function Inquiry() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const note = document.getElementById("form-note");
    if (note) {
      note.textContent = "Thank you — your enquiry has been noted. Our engineering team will respond within one business day.";
      note.style.display = "block";
    }
    e.currentTarget.reset();
  };

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / Inquiry</div>
          <h1>Submit an Inquiry</h1>
          <p style={{ maxWidth: "56ch", color: "var(--steel-light)", marginTop: "10px" }}>Tell us about your process and we'll come back with a sized recommendation — a centrifuge or pump matched to your media, throughput and duty cycle.</p>
        </div>
      </section>

      <section>
        <div className="container two-col" style={{ alignItems: "start" }}>
          <form id="inquiry-form" className="reveal" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="field">
                <label htmlFor="company">Company name</label>
                <input type="text" id="company" name="company" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="field">
                <label htmlFor="product">Product of interest</label>
                <select id="product" name="product">
                  <option>Manual Top Discharge Centrifuge (Stainless Steel)</option>
                  <option>Manual Top Discharge Centrifuge (Rubber-Lined)</option>
                  <option>Bag-Lifting Top Discharge Centrifuge (Stainless Steel)</option>
                  <option>Bag-Lifting Top Discharge Centrifuge (Rubber-Lined)</option>
                  <option>Not sure — need a recommendation</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="industry">Industry</label>
                <select id="industry" name="industry">
                  <option>Pharmaceutical</option>
                  <option>Chemical</option>
                  <option>Textile</option>
                  <option>Food processing</option>
                  <option>Water treatment</option>
                  <option>Steel plant</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="message">Process details / requirement</label>
                <textarea id="message" name="message" placeholder="Media to be handled, required throughput or discharge rate, batch or continuous operation, existing basket/impeller size if replacing an old unit, plant location, etc." required></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-solid" style={{ marginTop: "20px" }}>Send Inquiry</button>
            <p id="form-note" style={{ display: "none", marginTop: "14px", fontSize: "14px", color: "var(--steel)" }}></p>
          </form>

          <div className="title-block reveal" style={{ maxWidth: "none" }}>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Response time</span>Within 1 business day</div></div>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Prefer to call?</span>079 2282 3263</div></div>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Email directly</span>aden66@ymail.com</div></div>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Works address</span>Plot No. 329, Phase I, Behind Lion's School, G.I.D.C., Naroda, Ahmedabad – 382330</div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
