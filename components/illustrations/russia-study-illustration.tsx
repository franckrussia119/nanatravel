export function RussiaStudyIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1b3a6b] to-[#0f2547] ${className}`}>
      <svg viewBox="0 0 480 380" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <circle cx="370" cy="70" r="130" fill="#c9a227" opacity="0.07" />

        {/* small Russian flag, top right */}
        <g transform="translate(408,26)">
          <line x1="0" y1="0" x2="0" y2="64" stroke="#e8e2d0" strokeWidth="2.5" />
          <rect x="2" y="2" width="42" height="8" fill="#f4efe2" />
          <rect x="2" y="10" width="42" height="8" fill="#1b3a6b" />
          <rect x="2" y="18" width="42" height="8" fill="#b3231f" />
        </g>

        {/* subtle low skyline strip along the bottom edge */}
        <g opacity="0.9">
          <rect x="0" y="332" width="480" height="48" fill="#0a1830" />
          <g transform="translate(70,300)">
            <rect x="-5" y="30" width="10" height="32" fill="#0a1830" />
            <path d="M0 0 C -13 13, -13 28, 0 34 C 13 28, 13 13, 0 0 Z" fill="#0a1830" />
          </g>
          <g transform="translate(150,288)">
            <rect x="-7" y="40" width="14" height="44" fill="#0a1830" />
            <path d="M0 -6 C -17 10, -17 40, 0 48 C 17 40, 17 10, 0 -6 Z" fill="#0a1830" />
          </g>
          <g transform="translate(330,292)">
            <rect x="-6" y="36" width="12" height="40" fill="#0a1830" />
            <path d="M0 -4 C -15 10, -15 36, 0 43 C 15 36, 15 10, 0 -4 Z" fill="#0a1830" />
          </g>
          <rect x="0" y="330" width="480" height="3" fill="#c9a227" opacity="0.3" />
        </g>

        {/* books, left of center */}
        <g transform="translate(140,268)">
          <rect x="-66" y="6" width="140" height="17" rx="2" fill="#6d1f2c" />
          <rect x="-60" y="-10" width="130" height="17" rx="2" fill="#c9a227" />
          <rect x="-54" y="-26" width="120" height="17" rx="2" fill="#f4efe2" />
        </g>

        {/* graduation cap resting on the books */}
        <g transform="translate(140,206)">
          <rect x="-7" y="0" width="14" height="18" fill="#0a1830" />
          <path d="M0 -30 L56 -7 L0 16 L-56 -7 Z" fill="#0a1830" />
          <path d="M0 -30 L56 -7 L0 16 L-56 -7 Z" fill="none" stroke="#c9a227" strokeWidth="1" opacity="0.4" />
          <circle cx="0" cy="-7" r="4.5" fill="#c9a227" />
          <line x1="0" y1="-7" x2="30" y2="5" stroke="#c9a227" strokeWidth="2" />
          <circle cx="30" cy="5" r="3.5" fill="#c9a227" />
        </g>

        {/* passport, right of center, upright */}
        <g transform="translate(325,240) rotate(-4)">
          <rect x="-56" y="-92" width="112" height="150" rx="9" fill="#6d1f2c" />
          <rect x="-56" y="-92" width="112" height="150" rx="9" stroke="#c9a227" strokeWidth="2" />
          <rect x="-44" y="-80" width="88" height="126" rx="3" fill="none" stroke="#c9a227" strokeWidth="0.75" opacity="0.5" />
          <circle cx="0" cy="-48" r="17" fill="none" stroke="#c9a227" strokeWidth="1.5" />
          <path d="M0 -59 L4 -50 L14 -50 L6 -43 L9 -34 L0 -40 L-9 -34 L-6 -43 L-14 -50 L-4 -50 Z" fill="#c9a227" />
          <text x="0" y="-4" textAnchor="middle" fill="#f4efe2" fontSize="7.5" fontFamily="Georgia, serif" letterSpacing="1.4">PASSPORT</text>
          <line x1="-32" y1="6" x2="32" y2="6" stroke="#c9a227" strokeWidth="0.75" opacity="0.6" />
          <text x="0" y="22" textAnchor="middle" fill="#c9a227" fontSize="6.5" fontFamily="Georgia, serif" letterSpacing="1" opacity="0.85">STUDENT VISA</text>
        </g>

        {/* approval stamp, floating above the passport's top-right, not overlapping */}
        <g transform="translate(392,148) rotate(12)">
          <circle cx="0" cy="0" r="30" fill="#0f2547" stroke="#3fae64" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="23" stroke="#3fae64" strokeWidth="1" opacity="0.6" fill="none" />
          <path d="M-9 0 L-3 7 L11 -9" fill="none" stroke="#3fae64" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <text x="0" y="-14" textAnchor="middle" fill="#3fae64" fontSize="5.5" fontFamily="Georgia, serif" letterSpacing="0.8">APPROVED</text>
        </g>
      </svg>
    </div>
  );
}
