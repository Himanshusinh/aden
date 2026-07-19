"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <nav className="nav">
        <Link href="/" className="brand">
          <div className="brand-mark" style={{ border: 'none' }}>
            <Logo className="w-full h-full text-[#2B3A4A]" />
          </div>
          <span className="text-xl tracking-wide font-medium">ADEN</span>
        </Link>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link href="/company" className={pathname === "/company" ? "active" : ""}>Company</Link></li>
          <li><Link href="/products" className={pathname === "/products" ? "active" : ""}>Products</Link></li>
          <li><Link href="/services" className={pathname === "/services" ? "active" : ""}>Services</Link></li>
          <li><Link href="/inquiry" className={pathname === "/inquiry" ? "active" : ""}>Inquiry</Link></li>
          <li><Link href="/contact" className={`nav-cta ${pathname === "/contact" ? "active" : ""}`}>Contact Us</Link></li>
        </ul>
        <button 
          className="nav-toggle" 
          aria-label="Toggle menu" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  );
}
