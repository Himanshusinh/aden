import Link from "next/link";

export default function Sitemap() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / Sitemap</div>
          <h1>Sitemap</h1>
          <p style={{ maxWidth: "56ch", color: "var(--steel-light)", marginTop: "10px" }}>
            Every page on this website, in one place.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid-3 reveal" style={{ background: "var(--silver)", border: "1px solid var(--silver)" }}>
            <div className="card sitemap-col">
              <h4>Main</h4>
              <Link href="/">Home</Link>
              <Link href="/company">Company</Link>
              <Link href="/products">Products</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact Us &amp; Inquiry</Link>
            </div>
            <div className="card sitemap-col">
              <h4>Resources</h4>
              <Link href="/gallery">Gallery</Link>
              <Link href="/clients">Clients &amp; Global Reach</Link>
              <Link href="/certifications">Quality &amp; Certifications</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/careers">Careers</Link>
            </div>
            <div className="card sitemap-col">
              <h4>Legal</h4>
              <Link href="/terms">Terms &amp; Conditions</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
