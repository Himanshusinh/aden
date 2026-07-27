"use client";

import Link from "next/link";

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const note = document.getElementById("form-note");
    if (note) {
      note.textContent = "Sending your inquiry...";
      note.style.display = "block";
      note.style.color = "var(--steel)";
    }

    const formattedBody = `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nPhone: ${data.phone}\nProduct: ${data.product}\nIndustry: ${data.industry}\n\nRequirement Details:\n${data.message}`;

    try {
      // Using Web3Forms for clean, professional, ad-free emails without any form activation requirements
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // Paste your free Access Key from https://web3forms.com below:
          access_key: "b07332f4-e493-429e-970b-e829f03dd9fd",
          subject: `Inquiry: ${data.product || "Process Equipment"} - ${data.company || data.name}`,
          from_name: "ADEN Website Inquiry",
          to_email: "info@adengineers.co.in",
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          product: data.product,
          industry: data.industry,
          message: data.message
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        if (note) {
          note.textContent = "Thank you — your inquiry has been sent successfully to info@adengineers.co.in! Our engineering team will respond within one business day.";
          note.style.color = "#15803d";
        }
        form.reset();
      } else {
        throw new Error("Web3Forms key not configured or submission failed");
      }
    } catch (error) {
      if (note) {
        note.innerHTML = `Could not send via background API. <a href="mailto:info@adengineers.co.in?subject=${encodeURIComponent(`Inquiry from ${data.name || 'Website'}`)}&body=${encodeURIComponent(formattedBody)}" style="color: var(--amber); text-decoration: underline; font-weight: 600;">Click here to send directly via your Email App</a>.`;
        note.style.color = "var(--graphite)";
      }
    }
  };

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / Contact Us</div>
          <h1>Contact Us</h1>
          <p style={{ maxWidth: "56ch", color: "var(--steel-light)", marginTop: "10px" }}><span className="text-highlight">Reachable around the clock, 365 days a year</span>, for process, mechanical, electrical and control-system questions.</p>
        </div>
      </section>

      <section>
        <div className="container two-col" style={{ alignItems: "start" }}>
          <div className="reveal">
            <div className="eyebrow">Registered works</div>
            <h2 style={{ maxWidth: "16ch" }}>ADEN</h2>
            <p style={{ color: "var(--steel-light)", fontSize: "15.5px", maxWidth: "38ch" }}>
              Plot No. 329, Phase I,<br />
              Behind Lion&apos;s School,<br />
              G.I.D.C., Naroda,<br />
              Ahmedabad – 382330,<br />
              Gujarat, India
            </p>
            <div className="badge-strip">
              <span className="badge">Mon–Sat, Works Open</span>
              <span className="badge">Breakdown line: 24/7</span>
            </div>
          </div>

          <div className="title-block reveal" style={{ maxWidth: "none" }}>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Tel</span>079 2282 3263</div></div>
            <div className="tb-row">
              <div className="tb-cell"><span className="tb-label">Mobile</span>+91 98251 72158</div>
              <div className="tb-cell"><span className="tb-label">Mobile</span>+91 94280 46318</div>
            </div>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Telefax</span>079 2281 8437</div></div>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Email</span><a href="mailto:aden66@ymail.com" className="text-highlight">aden66@ymail.com</a></div></div>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Breakdown Call</span>079 2282 3263 — <span className="text-highlight">available 24/7, 365 days</span></div></div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", borderTop: "1px solid var(--silver)", borderBottom: "1px solid var(--silver)" }}>
        <div className="container">
          <form id="inquiry-form" className="reveal" onSubmit={handleSubmit} style={{ padding: "20px 0", maxWidth: "860px", margin: "0 auto" }}>
            <div className="eyebrow">Send an Inquiry</div>
            <h2 style={{ marginBottom: "24px" }}>Submit process details for a sized recommendation.</h2>
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

          <div className="reveal" style={{ marginTop: "60px" }}>
            <div className="eyebrow">Location</div>
            <div style={{ border: "1px solid var(--silver)", width: "100%", height: "400px" }}>
              <iframe
                title="ADEN, Naroda GIDC, Ahmedabad"
                src="https://www.google.com/maps?q=G.I.D.C.+Naroda,+Ahmedabad,+Gujarat+382330&output=embed"
                width="100%" height="100%" style={{ border: 0, display: "block" }}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
