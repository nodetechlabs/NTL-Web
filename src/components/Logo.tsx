export default function Logo({ size = 30, onDark = false }: { size?: number; onDark?: boolean }) {
  return (
    <div className="nav-logo">
      <img
        src={onDark ? "/mark-dark.png" : "/mark-light.png"}
        alt=""
        width={size * 1.3}
        height={size}
        style={{ objectFit: "contain" }}
      />
      <span className={`nav-wordmark${onDark ? " on-dark" : ""}`}>
        <strong>NodeTech</strong>
        <em>Labs</em>
      </span>
    </div>
  );
}
