export default function Logo({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 120 44" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor" 
      strokeWidth="1"
    >
      <text x="12" y="36" fontFamily="'Space Grotesk', sans-serif" fontSize="32" fontWeight="400" letterSpacing="1" strokeWidth="1" fill="none">aden</text>
      <line x1="12" y1="6" x2="38" y2="6" />
      <line x1="12" y1="10" x2="38" y2="10" />
      <line x1="12" y1="14" x2="38" y2="14" />
      
      <line x1="78" y1="6" x2="104" y2="6" />
      <line x1="78" y1="10" x2="104" y2="10" />
      <line x1="78" y1="14" x2="104" y2="14" />
    </svg>
  );
}
