"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered after route change
    const timeout = setTimeout(() => {
      const reveals = document.querySelectorAll(".reveal");
      if ("IntersectionObserver" in window && reveals.length) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12 });

        reveals.forEach((el) => { io.observe(el); });

        return () => {
          reveals.forEach((el) => { io.unobserve(el); });
        };
      } else {
        reveals.forEach((el) => { el.classList.add("in"); });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
