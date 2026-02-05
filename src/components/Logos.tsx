import React from 'react';

export const LinkedInLogo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72 72"
    className={className}
    fill="none"
  >
    <path
      fill="#0077B5"
      d="M68 4H4C1.8 4 0 5.8 0 8V64C0 66.2 1.8 68 4 68H68C70.2 68 72 66.2 72 64V8C72 5.8 70.2 4 68 4Z"
    />
    <path
      fill="#FFFFFF"
      d="M10.7 28.1H21.4V62.4H10.7V28.1ZM16 12.3C12.8 12.3 10.7 14.4 10.7 17.5C10.7 20.6 12.8 22.7 16 22.7C19.2 22.7 21.3 20.6 21.3 17.5C21.3 14.4 19.3 12.3 16 12.3ZM27.3 28.1H37.5V32.8H37.7C39.1 30.2 42.5 27.5 47.4 27.5C57.7 27.5 59.6 34.3 59.6 43.1V62.4H48.9V45.7C48.9 41.7 48.8 36.6 43.3 36.6C37.8 36.6 37 40.9 37 45.4V62.4H27.3V28.1Z"
    />
  </svg>
);

export const GmailLogo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className={className}
  >
    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75v13h-4v2c0,2.21,1.79,4,4,4h5c2.21,0,4-1.79,4-4V16.2z" />
    <path fill="#43a047" d="M40,15h-5v21h5V15z" />
    <path fill="#e53935" d="M12,18.95c0-1.77,1.06-3.32,2.69-3.95L24,10l9.31,4.99C34.94,15.63,36,17.18,36,18.95V22l-1.39,1.52L24,29.9 l-10.61-6.38L12,22V18.95z" />
    <path fill="#2196f3" d="M3,16.2l5,2.75l5,4.75v13h4v2c0,2.21-1.79,4-4,4H8c-2.21,0-4-1.79-4-4V16.2z" />
    <path fill="#1976d2" d="M8,15H3v21h5V15z" />
  </svg>
);

export const ShrimpLogo = ({ className, size = 24 }: { className?: string; size?: number | string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Body */}
    <path d="M16 6.5c-1-1-2.5-1.5-4-1.5C9 5 7 7 7 10c0 2 1 3 2 4" />
    <path d="M8.5 14c-.5 1-1 2.5-1 4 0 1.5.5 2 1.5 2 2 0 3.5-1.5 4-3 1-2 2-3 2-4" />
    <path d="M14 17c1 .5 2 .5 3 0" /> {/* Tail */}
    {/* Legs */}
    <path d="M9 14l-2 1" />
    <path d="M10 16l-2 1" />
    {/* Antennae */}
    <path d="M12 5c2-2 5-2 6 0" />
    <path d="M10 5C8 2 6 2 5 4" />
  </svg>
);

export const OrcidLogo = ({ className, size = 24 }: { className?: string; size?: number | string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
  >
    <path
      fill="#A6CE39"
      d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.422.947.947s-.422.947-.947.947c-.525 0-.947-.422-.947-.947s.422-.947.947-.947zm-.72 3.636h1.44v10.004h-1.44V8.014zm8.644 2.727c1.78.675 2.16 2.9.89 4.32-1.07 1.2-3.89 1.15-4.48.06-.06-.5-.06-3.84-.06-4.22.8-.52 2.62-.64 3.65-.16zM10.237 8.014h1.76v10.004h-1.63c-.1 0-.13-4.25-.13-4.9.06-2.5.47-4.49 4.07-4.49 1.95.05 3.3 1.34 3.3 3.6 0 2.5-1.5 4.3-3.6 4.3-1.6 0-3.1-.73-3.77-1.8v1.89h-1.63" 
    />
  </svg>
);
