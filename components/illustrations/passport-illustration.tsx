export function PassportIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-forest ${className}`}>
      <svg viewBox="0 0 400 320" className="h-4/5 w-4/5" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* back document (visa page) */}
        <rect x="130" y="40" width="220" height="150" rx="6" fill="#f4efe2" opacity="0.15" transform="rotate(8 240 115)" />
        <rect x="120" y="50" width="220" height="150" rx="6" fill="#f4efe2" opacity="0.9" transform="rotate(8 230 125)" />
        {/* visa stamp lines */}
        <g transform="rotate(8 230 125)" opacity="0.55">
          <line x1="150" y1="90" x2="300" y2="90" stroke="#0f3d2e" strokeWidth="3" />
          <line x1="150" y1="105" x2="280" y2="105" stroke="#0f3d2e" strokeWidth="3" />
          <line x1="150" y1="120" x2="290" y2="120" stroke="#0f3d2e" strokeWidth="3" />
          <line x1="150" y1="150" x2="260" y2="150" stroke="#0f3d2e" strokeWidth="3" />
        </g>
        {/* stamp circle */}
        <g transform="rotate(-18 245 100)">
          <circle cx="245" cy="100" r="34" stroke="#6d1f2c" strokeWidth="3" fill="none" />
          <circle cx="245" cy="100" r="26" stroke="#6d1f2c" strokeWidth="1.5" fill="none" />
          <text x="245" y="96" textAnchor="middle" fill="#6d1f2c" fontSize="9" fontFamily="Georgia, serif" fontWeight="bold">VISA</text>
          <text x="245" y="108" textAnchor="middle" fill="#6d1f2c" fontSize="7" fontFamily="Georgia, serif">RUSSIA</text>
        </g>

        {/* passport booklet, front */}
        <rect x="55" y="110" width="170" height="200" rx="10" fill="#6d1f2c" />
        <rect x="55" y="110" width="170" height="200" rx="10" stroke="#c9a227" strokeWidth="2.5" />
        <rect x="70" y="125" width="140" height="170" rx="4" fill="none" stroke="#c9a227" strokeWidth="1" opacity="0.5" />

        {/* emblem */}
        <circle cx="140" cy="175" r="26" fill="none" stroke="#c9a227" strokeWidth="2" />
        <path d="M140 158 L146 172 L161 172 L149 181 L154 196 L140 187 L126 196 L131 181 L119 172 L134 172 Z" fill="#c9a227" />

        {/* text lines */}
        <text x="140" y="225" textAnchor="middle" fill="#f4efe2" fontSize="11" fontFamily="Georgia, serif" letterSpacing="2">PASSPORT</text>
        <line x1="90" y1="245" x2="190" y2="245" stroke="#c9a227" strokeWidth="1" opacity="0.6" />
        <text x="140" y="268" textAnchor="middle" fill="#c9a227" fontSize="9" fontFamily="Georgia, serif" letterSpacing="1" opacity="0.85">STUDENT VISA</text>
      </svg>
    </div>
  );
}
