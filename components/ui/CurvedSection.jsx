export function CurtainShape({ pathRef }) {
  return (
    <svg className="curtain-shape" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path ref={pathRef} d="M0 0 H100 V100 H0 Z" />
    </svg>
  );
}

export default function CurvedSection({ children, className = "" }) {
  return (
    <footer className={`curved-section ${className}`}>
      <svg className="section-curve" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 100 Q500 -70 1000 100 Z" />
      </svg>
      {children}
    </footer>
  );
}
