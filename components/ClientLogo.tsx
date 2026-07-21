import React from "react";

interface ClientLogoProps {
  id: string;
  name: string;
  className?: string;
}

export default function ClientLogo({ id, name, className = "" }: ClientLogoProps) {
  switch (id) {
    case "bodal":
      return (
        <svg viewBox="0 0 180 50" width="140" height="40" className={className} xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(5, 5)">
            <rect x="0" y="0" width="40" height="40" rx="4" fill="#0F3854" />
            <path d="M12 10 H22 C26 10 28 12 28 15 C28 17 26 19 23 19 H12 V10 Z" fill="#D98E2B" />
            <path d="M12 19 H24 C28 19 30 21 30 24.5 C30 28 27 30 22 30 H12 V19 Z" fill="#FFFFFF" />
            <text x="50" y="24" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="15" fill="#0F3854" letterSpacing="0.05em">BODAL</text>
            <text x="50" y="34" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="8" fill="#4C6178" letterSpacing="0.12em">CHEMICALS LTD.</text>
          </g>
        </svg>
      );

    case "meghmani":
      return (
        <svg viewBox="0 0 200 50" width="155" height="40" className={className} xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(5, 5)">
            <path d="M5 32 L15 8 L25 24 L35 8 L45 32" fill="none" stroke="#12377B" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="25" cy="10" r="3" fill="#2E7D32" />
            <text x="52" y="22" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="14" fill="#12377B">MEGHMANI</text>
            <text x="52" y="33" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="8" fill="#2E7D32" letterSpacing="0.1em">ORGANICS LIMITED</text>
          </g>
        </svg>
      );

    case "valiant":
      return (
        <svg viewBox="0 0 190 50" width="145" height="40" className={className} xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(5, 5)">
            <circle cx="20" cy="20" r="18" fill="#1B4D3E" />
            <path d="M11 14 L20 28 L29 14" fill="none" stroke="#A3D9A5" strokeWidth="3.5" strokeLinecap="round" />
            <text x="46" y="22" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="14" fill="#1B4D3E">VALIANT</text>
            <text x="46" y="33" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="8" fill="#4C6178" letterSpacing="0.12em">ORGANICS LTD.</text>
          </g>
        </svg>
      );

    case "ambica":
      return (
        <svg viewBox="0 0 180 50" width="140" height="40" className={className} xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(5, 5)">
            <polygon points="20,4 36,36 4,36" fill="#D98E2B" />
            <polygon points="20,12 30,32 10,32" fill="#2B3A4A" />
            <text x="44" y="23" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="15" fill="#2B3A4A">AMBICA</text>
            <text x="44" y="33" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="8" fill="#4C6178" letterSpacing="0.1em">INDUSTRIES</text>
          </g>
        </svg>
      );

    case "sagardrugs":
      return (
        <svg viewBox="0 0 190 50" width="145" height="40" className={className} xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(5, 5)">
            <rect x="2" y="2" width="36" height="36" rx="6" fill="#0277BD" />
            <path d="M20 10 V30 M10 20 H30" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
            <text x="46" y="22" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="14" fill="#0277BD">SAGAR DRUGS</text>
            <text x="46" y="33" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="8" fill="#4C6178" letterSpacing="0.1em">&amp; PHARMA PVT LTD</text>
          </g>
        </svg>
      );

    case "rksynthesis":
      return (
        <svg viewBox="0 0 180 50" width="140" height="40" className={className} xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(5, 5)">
            <circle cx="20" cy="20" r="16" fill="none" stroke="#283593" strokeWidth="3" />
            <text x="14" y="25" fontFamily="Space Grotesk, sans-serif" fontWeight="800" fontSize="14" fill="#283593">RK</text>
            <text x="44" y="22" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="14" fill="#283593">RK SYNTHESIS</text>
            <text x="44" y="33" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="8" fill="#4C6178" letterSpacing="0.1em">LIMITED</text>
          </g>
        </svg>
      );

    case "chemieorganic":
      return (
        <svg viewBox="0 0 190 50" width="145" height="40" className={className} xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(5, 5)">
            <polygon points="20,5 34,13 34,27 20,35 6,27 6,13" fill="none" stroke="#00695C" strokeWidth="3" />
            <circle cx="20" cy="20" r="5" fill="#D98E2B" />
            <text x="42" y="22" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="14" fill="#00695C">CHEMIE</text>
            <text x="42" y="33" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="8" fill="#4C6178" letterSpacing="0.1em">ORGANIC CHEMICALS</text>
          </g>
        </svg>
      );

    case "gopinath":
      return (
        <svg viewBox="0 0 190 50" width="145" height="40" className={className} xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(5, 5)">
            <path d="M8 32 C 8 10, 32 10, 32 32 Z" fill="#1565C0" />
            <circle cx="20" cy="16" r="4" fill="#4CAF50" />
            <text x="42" y="22" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="13.5" fill="#1565C0">GOPINATH</text>
            <text x="42" y="33" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="8" fill="#4C6178" letterSpacing="0.1em">CHEM TECH LTD</text>
          </g>
        </svg>
      );

    case "kpinternational":
      return (
        <svg viewBox="0 0 180 50" width="140" height="40" className={className} xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(5, 5)">
            <circle cx="20" cy="20" r="16" fill="#37474F" />
            <path d="M12 20 H28 M20 12 V28 M14 14 L26 26" stroke="#00ACC1" strokeWidth="2" />
            <text x="44" y="22" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="14" fill="#37474F">K.P. INT'L</text>
            <text x="44" y="33" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="8" fill="#4C6178" letterSpacing="0.1em">DAHEJ EXPORT</text>
          </g>
        </svg>
      );

    case "matangi":
      return (
        <svg viewBox="0 0 180 50" width="140" height="40" className={className} xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(5, 5)">
            <rect x="4" y="4" width="32" height="32" fill="#C62828" transform="rotate(45 20 20)" />
            <text x="44" y="22" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="14" fill="#C62828">MATANGI</text>
            <text x="44" y="33" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="8" fill="#4C6178" letterSpacing="0.1em">INDUSTRIES</text>
          </g>
        </svg>
      );

    case "prima":
      return (
        <svg viewBox="0 0 180 50" width="140" height="40" className={className} xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(5, 5)">
            <circle cx="15" cy="20" r="11" fill="#E53935" opacity="0.8" />
            <circle cx="25" cy="20" r="11" fill="#1E88E5" opacity="0.8" />
            <text x="44" y="22" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="14" fill="#1E88E5">PRIMA</text>
            <text x="44" y="33" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="8" fill="#4C6178" letterSpacing="0.1em">CHEMICALS</text>
          </g>
        </svg>
      );

    case "varahi":
      return (
        <svg viewBox="0 0 180 50" width="140" height="40" className={className} xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(5, 5)">
            <rect x="4" y="4" width="32" height="32" rx="4" fill="#4A148C" />
            <path d="M12 12 L20 28 L28 12" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            <text x="44" y="22" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="14" fill="#4A148C">VARAHI</text>
            <text x="44" y="33" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="8" fill="#4C6178" letterSpacing="0.1em">INTERMEDIATES</text>
          </g>
        </svg>
      );

    default:
      return (
        <div className="client-icon">
          {name.substring(0, 2).toUpperCase()}
        </div>
      );
  }
}
