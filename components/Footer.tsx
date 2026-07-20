import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>ADEN</h4>
            <p style={{ fontSize: "13.5px", opacity: 0.8, maxWidth: "32ch" }}>
              Centrifuges and process pumps engineered and manufactured in Ahmedabad, India since 1990.
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/company">Company</Link>
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
          </div>
          <div>
            <h4>Resources</h4>
            <Link href="/gallery">Gallery</Link>
            <Link href="/clients">Clients &amp; Reach</Link>
            <Link href="/certifications">Certifications</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/careers">Careers</Link>
          </div>
          <div>
            <h4>Legal &amp; Contact</h4>
            <Link href="/contact">Contact Us</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ADEN. All rights reserved.</span>
          <span>Naroda GIDC, Ahmedabad, Gujarat, India</span>
        </div>
      </div>
    </footer>
  );
}
