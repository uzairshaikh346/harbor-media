export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Anchor-in-H mark */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path d="M6 4v32M22 4v32M6 20h16" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
        <circle cx="30" cy="12" r="4.2" fill="var(--color-gold)" />
        <path
          d="M30 15v14M24 24c0 3.3 2.7 6 6 6s6-2.7 6-6M25.5 21h9"
          stroke="var(--color-gold)"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="text-xl font-semibold tracking-tight">
        <span className="text-white">Harbor</span>
        <span className="text-gold">Media</span>
      </span>
    </div>
  );
}
