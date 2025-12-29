import React from 'react';

export const YellowCircle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 50 C 10 20, 190 20, 190 50 C 190 80, 10 80, 10 50"
      stroke="#006D77"
      strokeWidth="4"
      strokeLinecap="round"
      style={{ filter: 'drop-shadow(0 0 4px #006D77)' }}
    />
  </svg>
);

export const PurpleSquiggle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 20" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 10 Q 25 0, 45 10 T 85 10"
      stroke="#0D9488"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const GreenFlower = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="5" fill="#006D77" />
    <path d="M25 20 L25 5 M25 30 L25 45 M20 25 L5 25 M30 25 L45 25 M22 22 L10 10 M38 38 L28 28 M38 12 L28 22 M12 38 L22 28" stroke="#006D77" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const YellowStar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25 2 L31 18 L48 18 L34 29 L39 46 L25 36 L11 46 L16 29 L2 18 L19 18 Z"
      stroke="#FACC15"
      strokeWidth="3"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const SmileyFace = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
     {/* Large thin primary outline */}
    <circle cx="100" cy="100" r="90" stroke="#006D77" strokeWidth="2" strokeOpacity="0.1" />
    <circle cx="70" cy="80" r="10" fill="#006D77" fillOpacity="0.1" />
    <circle cx="130" cy="80" r="10" fill="#006D77" fillOpacity="0.1" />
    <path d="M60 120 Q 100 160, 140 120" stroke="#006D77" strokeWidth="2" strokeOpacity="0.1" strokeLinecap="round"/>
  </svg>
);