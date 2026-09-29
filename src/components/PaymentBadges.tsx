// Accurate payment methods actually accepted (PayPal + Visa/Mastercard).
export default function PaymentBadges() {
  return (
    <div className="mt-12 flex flex-col items-center gap-3">
      <p className="flex items-center gap-2 text-sm text-muted">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="4" y="10" width="16" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
        100% veilig betalen
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {/* Visa */}
        <span className="flex h-9 w-16 items-center justify-center rounded-md bg-white">
          <span className="font-display text-lg font-black italic tracking-tight text-[#1a1f71]">VISA</span>
        </span>
        {/* Mastercard */}
        <span className="flex h-9 w-16 items-center justify-center gap-0 rounded-md bg-white">
          <svg width="42" height="26" viewBox="0 0 42 26" aria-label="Mastercard">
            <circle cx="16" cy="13" r="8" fill="#EB001B" />
            <circle cx="26" cy="13" r="8" fill="#F79E1B" />
            <path d="M21 6.5a8 8 0 0 1 0 13 8 8 0 0 1 0-13Z" fill="#FF5F00" />
          </svg>
        </span>
        {/* PayPal */}
        <span className="flex h-9 w-20 items-center justify-center rounded-md bg-white">
          <span className="font-display text-base font-black italic">
            <span className="text-[#003087]">Pay</span>
            <span className="text-[#009cde]">Pal</span>
          </span>
        </span>
      </div>
    </div>
  );
}
