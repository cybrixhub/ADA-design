export default function CornerMarkers() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[50]"
      style={{ mixBlendMode: "difference" }}
      aria-hidden="true"
    >
      {/* Top left */}
      <svg className="absolute top-5 left-5 text-white" width="12" height="12" viewBox="0 0 10 10" fill="none">
        <path d="M10 0V1H1V10H0V0H10Z" fill="currentColor" />
      </svg>
      {/* Top right */}
      <svg className="absolute top-5 right-5 text-white" width="12" height="12" viewBox="0 0 10 10" fill="none">
        <path d="M10 0V10H9V1H0V0H10Z" fill="currentColor" />
      </svg>
      {/* Bottom left */}
      <svg className="absolute bottom-5 left-5 text-white" width="12" height="12" viewBox="0 0 10 10" fill="none">
        <path d="M0 10V0H1V9H10V10H0Z" fill="currentColor" />
      </svg>
      {/* Bottom right */}
      <svg className="absolute bottom-5 right-5 text-white" width="12" height="12" viewBox="0 0 10 10" fill="none">
        <path d="M10 10V0H9V9H0V10H10Z" fill="currentColor" />
      </svg>
      {/* Centre left */}
      <svg className="absolute top-1/2 left-5 -translate-y-1/2 text-white" width="8" height="16" viewBox="0 0 8 16" fill="none">
        <rect width="8" height="1" fill="currentColor" />
        <rect y="15" width="8" height="1" fill="currentColor" />
        <rect x="3.5" width="1" height="16" fill="currentColor" />
      </svg>
      {/* Centre right */}
      <svg className="absolute top-1/2 right-5 -translate-y-1/2 text-white" width="8" height="16" viewBox="0 0 8 16" fill="none">
        <rect width="8" height="1" fill="currentColor" />
        <rect y="15" width="8" height="1" fill="currentColor" />
        <rect x="3.5" width="1" height="16" fill="currentColor" />
      </svg>
    </div>
  );
}
