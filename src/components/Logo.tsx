import { useTheme } from "../context/ThemeContext";

export default function Logo({ size = 30 }: { size?: number }) {
  const { theme } = useTheme();
  const src = theme === "dark" ? "/mark-dark.png" : "/mark-light.png";

  return (
    <div className="nav-logo">
      <img src={src} alt="" width={size * 1.3} height={size} style={{ objectFit: "contain" }} />
      <span className="nav-wordmark">
        <strong>NodeTech</strong>
        <em>Labs</em>
      </span>
    </div>
  );
}
