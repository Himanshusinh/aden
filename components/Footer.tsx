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
            <h4>Navigate</h4>
            <Link href="/company">Company</Link>
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
          </div>
          <div>
            <h4>Get in touch</h4>
            <Link href="/inquiry">Submit an Inquiry</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div>
            <h4>Works</h4>
            <Link href="/contact">Plot No. 329, Phase I, G.I.D.C., Naroda, Ahmedabad – 382330</Link>
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
