/* Three custom line icons for the home-page steps. Drawn on a 48px grid, stroke follows currentColor. */
const base = { width: 52, height: 52, viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

/* Step 1: a stack of coins with a euro sign. */
export function InvestIcon() {
  return (
    <svg {...base}>
      <ellipse cx="18" cy="35" rx="11" ry="4.5" />
      <path d="M7 35v-6c0 2.5 4.9 4.5 11 4.5s11-2 11-4.5v6" />
      <ellipse cx="18" cy="29" rx="11" ry="4.5" />
      <path d="M7 29v-6" />
      <circle cx="31" cy="17" r="10" />
      <path d="M35 13.5a5 5 0 1 0 0 7M25.5 16h7M25.5 19h7" />
    </svg>
  );
}

/* Step 2: an airplane, for living, working and travelling across Europe. */
export function VisaIcon() {
  return (
    <svg {...base} viewBox="0 0 24 24" strokeWidth={1.4}>
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

/* Step 3: a compass. */
export function DiscoverIcon() {
  return (
    <svg {...base}>
      <circle cx="24" cy="24" r="18" />
      <path d="M31.5 16.5l-4.5 10.5-10.5 4.5L21 21l10.5-4.5z" />
      <circle cx="24" cy="24" r="1.5" fill="currentColor" />
      <path d="M24 3.5v3M24 41.5v3M3.5 24h3M41.5 24h3" />
    </svg>
  );
}
