import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / Contact Us</div>
          <h1>Contact Us</h1>
          <p style={{ maxWidth: "56ch", color: "var(--steel-light)", marginTop: "10px" }}>Reachable around the clock, 365 days a year, for process, mechanical, electrical and control-system questions.</p>
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
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Email</span>aden66@ymail.com</div></div>
            <div className="tb-row"><div className="tb-cell"><span className="tb-label">Breakdown Call</span>079 2282 3263 — available 24/7, 365 days</div></div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", borderTop: "1px solid var(--silver)", borderBottom: "1px solid var(--silver)" }}>
        <div className="container">
          <div className="eyebrow reveal">Location</div>
          <div className="reveal" style={{ border: "1px solid var(--silver)", aspectRatio: "16/6", width: "100%" }}>
            <iframe
              title="ADEN, Naroda GIDC, Ahmedabad"
              src="https://www.google.com/maps?q=G.I.D.C.+Naroda,+Ahmedabad,+Gujarat+382330&output=embed"
              width="100%" height="100%" style={{ border: 0, display: "block" }}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>

      <section style={{ textAlign: "center" }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Prefer to write in?</div>
          <h2 style={{ maxWidth: "24ch", margin: "0 auto 16px" }}>Send your process details and we&apos;ll size the right machine.</h2>
          <Link href="/inquiry" className="btn btn-solid">Submit an Inquiry</Link>
        </div>
      </section>
    </main>
  );
}
