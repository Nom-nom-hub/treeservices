export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Tree Care of SWFL LLC - Licensed &amp; Insured"
      role="img"
    >
      {/* Palm Tree */}
      <g transform="translate(6, 6)">
        {/* Trunk */}
        <path
          d="M20 60 Q22 42 18 32 Q15 22 20 14"
          stroke="url(#palmGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Trunk segments */}
        <path d="M18 54 Q16 52 18 50" stroke="#22c55e" strokeWidth="1.2" opacity="0.4" fill="none" />
        <path d="M19 47 Q17 45 19 43" stroke="#22c55e" strokeWidth="1.2" opacity="0.4" fill="none" />
        <path d="M20 40 Q18 38 20 36" stroke="#22c55e" strokeWidth="1.2" opacity="0.4" fill="none" />
        <path d="M19 33 Q17 31 19 29" stroke="#22c55e" strokeWidth="1.2" opacity="0.4" fill="none" />
        <path d="M20 26 Q18 24 19 22" stroke="#22c55e" strokeWidth="1.2" opacity="0.4" fill="none" />

        {/* Fronds */}
        <path d="M20 14 Q10 4 -2 2 Q8 10 6 16 Q0 12 -2 18 Z" fill="#22c55e" opacity="0.45" />
        <path d="M20 14 Q6 -2 -2 -8 Q6 -2 8 4 Q2 -2 -2 0 Z" fill="#22c55e" opacity="0.55" />
        <path d="M20 14 Q14 -4 10 -12 Q16 -4 18 4 Q14 -2 12 2 Z" fill="#22c55e" opacity="0.65" />
        <path d="M20 14 Q26 -4 30 -12 Q24 -4 22 4 Q26 -2 28 2 Z" fill="#22c55e" opacity="0.65" />
        <path d="M20 14 Q34 4 42 -2 Q34 6 30 12 Q38 6 42 10 Z" fill="#22c55e" opacity="0.55" />
        <path d="M20 14 Q40 14 48 18 Q38 14 32 16 Q40 18 44 24 Z" fill="#22c55e" opacity="0.45" />

        {/* Solid center hub to cover frond convergence */}
        <circle cx="20" cy="13" r="4" fill="url(#hubGradient)" />
        <circle cx="20" cy="13" r="2" fill="#15803d" />
      </g>

      {/* Company Name */}
      <text x="72" y="28" fill="white" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="800" letterSpacing="0.5">
        TREE CARE
      </text>
      <text x="72" y="46" fill="#22c55e" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="700" letterSpacing="1.5">
        OF SWFL
      </text>

      {/* Badge: LLC + Licensed & Insured combined */}
      <g transform="translate(230, 12)">
        <rect x="0" y="0" width="104" height="22" rx="4" fill="url(#badgeGradient)" />
        <text x="52" y="15" fill="black" fontFamily="system-ui, -apple-system, sans-serif" fontSize="8" fontWeight="700" textAnchor="middle" letterSpacing="0.3">
          LLC · LICENSED &amp; INSURED
        </text>
      </g>

      {/* Gradients */}
      <defs>
        <linearGradient id="palmGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
        <radialGradient id="hubGradient">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#16a34a" />
        </radialGradient>
        <linearGradient id="badgeGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>
    </svg>
  );
}
