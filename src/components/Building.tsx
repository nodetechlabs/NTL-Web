import { useMemo, useRef } from "react";

interface Win {
  x: number;
  y: number;
  w: number;
  h: number;
  lit: number; // 0 = dark glass, 1 = full red-lit
  flicker: boolean;
  delay: number;
  dur: number;
}

// deterministic pseudo-random so the facade looks the same every render
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function makeFacade(x0: number, y0: number, cols: number, rows: number, colW: number, rowH: number, gap: number, seed: number): Win[] {
  const rnd = seeded(seed);
  const wins: Win[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const roll = rnd();
      let lit = 0;
      if (roll > 0.72) lit = 0.9;
      else if (roll > 0.58) lit = 0.5;
      else if (roll > 0.5) lit = 0.22;
      wins.push({
        x: x0 + c * colW + gap,
        y: y0 + r * rowH + gap,
        w: colW - gap * 2,
        h: rowH - gap * 2,
        lit,
        flicker: rnd() > 0.88,
        delay: rnd() * 8,
        dur: 3 + rnd() * 5,
      });
    }
  }
  return wins;
}

function Skyline() {
  const rnd = seeded(7);
  const buildings = Array.from({ length: 14 }, (_, i) => {
    const w = 30 + rnd() * 50;
    const h = 60 + rnd() * 220;
    const x = i * 70 - 60 + rnd() * 20;
    return { x, w, h };
  });
  return (
    <g className="skyline" opacity="0.18">
      {buildings.map((b, i) => (
        <rect key={i} x={b.x} y={760 - b.h} width={b.w} height={b.h} fill="#000000" />
      ))}
    </g>
  );
}

export default function Building() {
  const svgRef = useRef<SVGSVGElement>(null);

  const frontWindows = useMemo(() => makeFacade(312, 190, 15, 24, 18, 24.5, 2.4, 11), []);
  const leftWindows = useMemo(() => makeFacade(128, 430, 9, 14, 18, 25, 2.2, 23), []);
  const rightWindows = useMemo(() => makeFacade(612, 430, 9, 14, 18, 25, 2.2, 41), []);

  return (
    <svg ref={svgRef} className="building" id="building" viewBox="0 0 900 820" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="glassGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1c1c" />
          <stop offset="55%" stopColor="#0c0c0c" />
          <stop offset="100%" stopColor="#030303" />
        </linearGradient>
        <linearGradient id="glassGradSide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#060606" />
          <stop offset="100%" stopColor="#020202" />
        </linearGradient>
        <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="baseGlow" cx="50%" cy="100%" r="70%">
          <stop offset="0%" stopColor="#FF1F1F" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FF1F1F" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="glint" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="48%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="52%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="skyGlowLight" cx="50%" cy="10%" r="90%">
          <stop offset="0%" stopColor="#ffe3e3" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="blurSoft"><feGaussianBlur stdDeviation="8" /></filter>
        <filter id="blurSkyline"><feGaussianBlur stdDeviation="3" /></filter>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.035 0" />
        </filter>
        <clipPath id="frontClip"><rect x="300" y="180" width="300" height="600" /></clipPath>
        <clipPath id="leftClip"><polygon points="120,780 120,420 300,340 300,780" /></clipPath>
        <clipPath id="rightClip"><polygon points="600,780 600,420 780,340 780,780" /></clipPath>
      </defs>

      {/* atmosphere */}
      <rect x="0" y="0" width="900" height="820" fill="url(#skyGlowLight)" />
      <g filter="url(#blurSkyline)">
        <Skyline />
      </g>
      <ellipse cx="450" cy="770" rx="400" ry="90" fill="url(#baseGlow)" opacity="0.6" className="glow-pulse" />

      {/* === left wing === */}
      <g>
        <polygon points="120,780 120,420 300,340 300,780" fill="url(#glassGradSide)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
        <g clipPath="url(#leftClip)">
          {leftWindows.map((w, i) => (
            <rect
              key={i}
              x={w.x}
              y={w.y}
              width={w.w}
              height={w.h}
              rx="0.6"
              fill={w.lit > 0.4 ? "#FF1F1F" : "#2a2a2a"}
              opacity={w.lit > 0 ? w.lit * 0.8 : 0.18}
              className={w.flicker ? "win-flicker" : undefined}
              style={w.flicker ? { animationDelay: `${w.delay}s`, animationDuration: `${w.dur}s` } : undefined}
            />
          ))}
        </g>
        <rect x="130" y="558" width="160" height="5" fill="#FF1F1F" opacity="0.3" />
      </g>

      {/* === right wing === */}
      <g>
        <polygon points="600,780 600,420 780,340 780,780" fill="url(#glassGradSide)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
        <g clipPath="url(#rightClip)">
          {rightWindows.map((w, i) => (
            <rect
              key={i}
              x={w.x}
              y={w.y}
              width={w.w}
              height={w.h}
              rx="0.6"
              fill={w.lit > 0.4 ? "#FF1F1F" : "#2a2a2a"}
              opacity={w.lit > 0 ? w.lit * 0.8 : 0.18}
              className={w.flicker ? "win-flicker" : undefined}
              style={w.flicker ? { animationDelay: `${w.delay}s`, animationDuration: `${w.dur}s` } : undefined}
            />
          ))}
        </g>
        <rect x="610" y="578" width="160" height="5" fill="#FF1F1F" opacity="0.3" />
      </g>

      {/* === main tower === */}
      <g>
        <polygon points="300,780 300,180 450,100 600,180 600,780" fill="url(#glassGrad)" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />

        <g clipPath="url(#frontClip)">
          {frontWindows.map((w, i) => (
            <rect
              key={i}
              x={w.x}
              y={w.y}
              width={w.w}
              height={w.h}
              rx="0.6"
              fill={w.lit > 0.4 ? "#FF1F1F" : w.lit > 0 ? "#8a1414" : "#262626"}
              opacity={w.lit > 0 ? 0.3 + w.lit * 0.65 : 0.22}
              className={w.flicker ? "win-flicker" : undefined}
              style={w.flicker ? { animationDelay: `${w.delay}s`, animationDuration: `${w.dur}s` } : undefined}
            />
          ))}
          {/* glass sheen sweep */}
          <polygon points="300,780 300,180 450,100 600,180 600,780" fill="url(#sheen)" />
          {/* slow light glint traveling down the glass */}
          <rect x="300" y="100" width="300" height="900" fill="url(#glint)" className="glint-sweep" />
        </g>

        {/* crown */}
        <polygon points="300,180 450,100 600,180 560,180 450,122 340,180" fill="#FF1F1F" opacity="0.1" />
        <polygon points="300,180 450,100 600,180" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.4" />
        <rect x="446" y="60" width="8" height="42" fill="#0c0c0c" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx="450" cy="58" r="3.5" fill="#FF1F1F" className="win-flicker" />

        {/* NTL logo mark, mounted at the top of the tower */}
        <image href="/mark-dark.png" x="402" y="138" width="96" height="35" opacity="0.96" />
      </g>

      {/* reflections / bloom */}
      <polygon points="300,780 300,180 322,180 322,780" fill="#FF1F1F" opacity="0.1" filter="url(#blurSoft)" />
      <polygon points="578,780 578,180 600,180 600,780" fill="#FF1F1F" opacity="0.14" filter="url(#blurSoft)" />
      <rect x="300" y="300" width="300" height="60" fill="#FF1F1F" opacity="0.08" filter="url(#blurSoft)" />
      <rect x="300" y="540" width="300" height="80" fill="#FF1F1F" opacity="0.07" filter="url(#blurSoft)" />

      {/* film grain for photographic realism */}
      <rect x="0" y="0" width="900" height="820" filter="url(#grain)" opacity="0.5" />
    </svg>
  );
}
