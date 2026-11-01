"use client";

// A silent, looping walkthrough of a typical engagement, drawn in brand
// colours. Pure CSS keyframes on one shared 36s clock, so pausing is a
// single play-state toggle and every element stays in sync. No audio.
// Six scenes. The AI deal, NDA and contract, the data room, interviews
// and reviews, findings, and the final report.

import { useEffect, useState } from "react";
import { BRAND_INK, BRAND_MUTED, BRAND_SURFACE } from "@/lib/brand";

const ACCENT = "#313c44";

const TILES = [
  { x: 270, y: 150, label: "Code" },
  { x: 435, y: 150, label: "Model & data" },
  { x: 600, y: 150, label: "Cloud" },
  { x: 270, y: 258, label: "Contracts" },
  { x: 435, y: 258, label: "Telemetry" },
  { x: 600, y: 258, label: "Security" },
];

export function EngagementAnimation() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPaused(true);
    }
  }, []);

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border bg-card ${
        paused ? "ea-paused" : ""
      }`}
    >
      <style>{`
        .ea-svg * { animation-duration: 36s; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
        .ea-paused .ea-svg * { animation-play-state: paused !important; }

        @keyframes eaHeader { 0% { opacity: 1; } 14% { opacity: 1; } 22% { opacity: 0; } 97% { opacity: 0; } 100% { opacity: 1; } }
        .ea-header { animation-name: eaHeader; }

        @keyframes eaScene1 { 0% { opacity: 1; } 14% { opacity: 1; } 16.5% { opacity: 0; } 97% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes eaScene2 { 0% { opacity: 0; } 16.7% { opacity: 0; } 19.2% { opacity: 1; } 30.7% { opacity: 1; } 33.2% { opacity: 0; } 100% { opacity: 0; } }
        @keyframes eaScene3 { 0% { opacity: 0; } 33.3% { opacity: 0; } 35.8% { opacity: 1; } 47.4% { opacity: 1; } 49.9% { opacity: 0; } 100% { opacity: 0; } }
        @keyframes eaScene4 { 0% { opacity: 0; } 50% { opacity: 0; } 52.5% { opacity: 1; } 64% { opacity: 1; } 66.5% { opacity: 0; } 100% { opacity: 0; } }
        @keyframes eaScene5 { 0% { opacity: 0; } 66.7% { opacity: 0; } 69.2% { opacity: 1; } 80.7% { opacity: 1; } 83.2% { opacity: 0; } 100% { opacity: 0; } }
        @keyframes eaScene6 { 0% { opacity: 0; } 83.3% { opacity: 0; } 85.8% { opacity: 1; } 96.5% { opacity: 1; } 99.5% { opacity: 0; } 100% { opacity: 0; } }

        @keyframes eaRise1 { 0% { transform: translateY(0); } 96% { transform: translateY(0); } 100% { transform: translateY(0); } }
        @keyframes eaRise2 { 0% { transform: translateY(14px); } 16.7% { transform: translateY(14px); } 19.7% { transform: translateY(0); } 100% { transform: translateY(0); } }
        @keyframes eaRise3 { 0% { transform: translateY(14px); } 33.3% { transform: translateY(14px); } 36.3% { transform: translateY(0); } 100% { transform: translateY(0); } }
        @keyframes eaRise4 { 0% { transform: translateY(14px); } 50% { transform: translateY(14px); } 53% { transform: translateY(0); } 100% { transform: translateY(0); } }
        @keyframes eaRise5 { 0% { transform: translateY(14px); } 66.7% { transform: translateY(14px); } 69.7% { transform: translateY(0); } 100% { transform: translateY(0); } }
        @keyframes eaRise6 { 0% { transform: translateY(14px); } 83.3% { transform: translateY(14px); } 86.3% { transform: translateY(0); } 100% { transform: translateY(0); } }

        .ea-s1 { animation-name: eaScene1, eaRise1; }
        .ea-s2 { animation-name: eaScene2, eaRise2; opacity: 0; }
        .ea-s3 { animation-name: eaScene3, eaRise3; opacity: 0; }
        .ea-s4 { animation-name: eaScene4, eaRise4; opacity: 0; }
        .ea-s5 { animation-name: eaScene5, eaRise5; opacity: 0; }
        .ea-s6 { animation-name: eaScene6, eaRise6; opacity: 0; }

        @keyframes eaSign { 0% { stroke-dashoffset: 180; } 20% { stroke-dashoffset: 180; } 24% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 0; } }
        .ea-sign { stroke-dasharray: 180; animation-name: eaSign; }

        @keyframes eaStamp { 0% { opacity: 0; transform: scale(1.6); } 25% { opacity: 0; transform: scale(1.6); } 27% { opacity: 1; transform: scale(1); } 100% { opacity: 1; transform: scale(1); } }
        .ea-stamp { animation-name: eaStamp; opacity: 0; transform-box: fill-box; transform-origin: center; }

        @keyframes eaLens {
          0% { transform: translate(0, 0); } 36% { transform: translate(0, 0); }
          38% { transform: translate(0, 0); } 38.5% { transform: translate(165px, 0); }
          40.3% { transform: translate(165px, 0); } 40.8% { transform: translate(330px, 0); }
          42.6% { transform: translate(330px, 0); } 43.1% { transform: translate(0, 108px); }
          44.9% { transform: translate(0, 108px); } 45.4% { transform: translate(165px, 108px); }
          47.2% { transform: translate(165px, 108px); } 47.7% { transform: translate(330px, 108px); }
          100% { transform: translate(330px, 108px); }
        }
        .ea-lens { animation-name: eaLens; }

        @keyframes eaT1 { 0% { opacity: 0; } 37.4% { opacity: 0; } 37.9% { opacity: 1; } 100% { opacity: 1; } }
        @keyframes eaT2 { 0% { opacity: 0; } 39.7% { opacity: 0; } 40.2% { opacity: 1; } 100% { opacity: 1; } }
        @keyframes eaT3 { 0% { opacity: 0; } 42% { opacity: 0; } 42.5% { opacity: 1; } 100% { opacity: 1; } }
        @keyframes eaT4 { 0% { opacity: 0; } 44.3% { opacity: 0; } 44.8% { opacity: 1; } 100% { opacity: 1; } }
        @keyframes eaT5 { 0% { opacity: 0; } 46.6% { opacity: 0; } 47.1% { opacity: 1; } 100% { opacity: 1; } }
        @keyframes eaT6 { 0% { opacity: 0; } 48.9% { opacity: 0; } 49.4% { opacity: 1; } 100% { opacity: 1; } }
        .ea-t1 { animation-name: eaT1; opacity: 0; }
        .ea-t2 { animation-name: eaT2; opacity: 0; }
        .ea-t3 { animation-name: eaT3; opacity: 0; }
        .ea-t4 { animation-name: eaT4; opacity: 0; }
        .ea-t5 { animation-name: eaT5; opacity: 0; }
        .ea-t6 { animation-name: eaT6; opacity: 0; }

        @keyframes eaReview { 0% { opacity: 0; } 58% { opacity: 0; } 60% { opacity: 1; } 100% { opacity: 1; } }
        .ea-review { animation-name: eaReview; opacity: 0; }

        @keyframes eaRowA { 0% { opacity: 0; transform: translateX(-16px); } 70.5% { opacity: 0; transform: translateX(-16px); } 72% { opacity: 1; transform: translateX(0); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes eaRowB { 0% { opacity: 0; transform: translateX(-16px); } 72.5% { opacity: 0; transform: translateX(-16px); } 74% { opacity: 1; transform: translateX(0); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes eaRowC { 0% { opacity: 0; transform: translateX(-16px); } 74.5% { opacity: 0; transform: translateX(-16px); } 76% { opacity: 1; transform: translateX(0); } 100% { opacity: 1; transform: translateX(0); } }
        .ea-row-a { animation-name: eaRowA; opacity: 0; }
        .ea-row-b { animation-name: eaRowB; opacity: 0; }
        .ea-row-c { animation-name: eaRowC; opacity: 0; }

        @keyframes eaFinalTick { 0% { opacity: 0; transform: scale(0.6); } 88% { opacity: 0; transform: scale(0.6); } 90% { opacity: 1; transform: scale(1); } 100% { opacity: 1; transform: scale(1); } }
        .ea-final-tick { animation-name: eaFinalTick; opacity: 0; transform-box: fill-box; transform-origin: center; }

        @keyframes eaDot1 { 0% { opacity: 1; } 16.5% { opacity: 1; } 17% { opacity: 0.25; } 99.5% { opacity: 0.25; } 100% { opacity: 1; } }
        @keyframes eaDot2 { 0% { opacity: 0.25; } 16.7% { opacity: 0.25; } 17.2% { opacity: 1; } 33.2% { opacity: 1; } 33.7% { opacity: 0.25; } 100% { opacity: 0.25; } }
        @keyframes eaDot3 { 0% { opacity: 0.25; } 33.3% { opacity: 0.25; } 33.8% { opacity: 1; } 49.9% { opacity: 1; } 50.4% { opacity: 0.25; } 100% { opacity: 0.25; } }
        @keyframes eaDot4 { 0% { opacity: 0.25; } 50% { opacity: 0.25; } 50.5% { opacity: 1; } 66.5% { opacity: 1; } 67% { opacity: 0.25; } 100% { opacity: 0.25; } }
        @keyframes eaDot5 { 0% { opacity: 0.25; } 66.7% { opacity: 0.25; } 67.2% { opacity: 1; } 83.2% { opacity: 1; } 83.7% { opacity: 0.25; } 100% { opacity: 0.25; } }
        @keyframes eaDot6 { 0% { opacity: 0.25; } 83.3% { opacity: 0.25; } 83.8% { opacity: 1; } 99.5% { opacity: 1; } 100% { opacity: 0.25; } }
        .ea-dot-1 { animation-name: eaDot1; }
        .ea-dot-2 { animation-name: eaDot2; opacity: 0.25; }
        .ea-dot-3 { animation-name: eaDot3; opacity: 0.25; }
        .ea-dot-4 { animation-name: eaDot4; opacity: 0.25; }
        .ea-dot-5 { animation-name: eaDot5; opacity: 0.25; }
        .ea-dot-6 { animation-name: eaDot6; opacity: 0.25; }
      `}</style>

      <svg
        className="ea-svg block w-full h-auto"
        viewBox="0 0 960 540"
        role="img"
        aria-label="A short walkthrough of a typical engagement with an AI business. A deal arrives, the NDA and engagement contract are signed, the data room is examined across code, model and data, cloud, contracts, telemetry and security, the team is interviewed and the architecture reviewed, findings arrive in plain English, and the final due diligence report lets the investor decide with confidence."
      >
        <rect width="960" height="540" fill={BRAND_SURFACE} />

        <g className="ea-header">
          <text x="64" y="64" fontSize="13" letterSpacing="3" fill={BRAND_MUTED} fontFamily="inherit">
            THE PROCESS
          </text>
          <text x="64" y="92" fontSize="19" fill={BRAND_INK} fontFamily="inherit">
            A typical engagement, from first call to final report
          </text>
        </g>

        {/* Scene 1. The AI deal */}
        <g className="ea-s1">
          <rect x="340" y="150" width="280" height="190" rx="14" fill="#ffffff" stroke={BRAND_INK} strokeOpacity="0.8" strokeWidth="2" />
          <circle cx="390" cy="200" r="20" fill="none" stroke={BRAND_MUTED} strokeWidth="2" />
          <rect x="424" y="188" width="120" height="10" rx="5" fill={BRAND_MUTED} opacity="0.35" />
          <rect x="424" y="206" width="84" height="10" rx="5" fill={BRAND_MUTED} opacity="0.2" />
          <rect x="366" y="244" width="94" height="24" rx="12" fill="none" stroke={ACCENT} strokeWidth="2" />
          <text x="413" y="261" fontSize="13" fill={ACCENT} textAnchor="middle" fontFamily="inherit">AI product</text>
          <circle cx="388" cy="300" r="4" fill={BRAND_MUTED} />
          <circle cx="412" cy="288" r="4" fill={BRAND_MUTED} />
          <circle cx="412" cy="312" r="4" fill={BRAND_MUTED} />
          <line x1="391" y1="298" x2="409" y2="290" stroke={BRAND_MUTED} strokeWidth="1.5" />
          <line x1="391" y1="302" x2="409" y2="310" stroke={BRAND_MUTED} strokeWidth="1.5" />
          <polyline points="470,306 505,288 540,296 580,264" fill="none" stroke={BRAND_INK} strokeWidth="2" strokeOpacity="0.7" />
          <text x="668" y="262" fontSize="72" fill={BRAND_MUTED} opacity="0.5" fontFamily="inherit">?</text>
          <text x="480" y="440" fontSize="21" fill={BRAND_INK} textAnchor="middle" fontFamily="inherit">
            A deal is on the table. An AI company, and the technology carries the valuation.
          </text>
        </g>

        {/* Scene 2. NDA and contract */}
        <g className="ea-s2">
          <rect x="352" y="146" width="190" height="218" rx="10" fill="#ffffff" stroke={BRAND_MUTED} strokeOpacity="0.6" strokeWidth="2" />
          <text x="376" y="178" fontSize="13" letterSpacing="1.5" fill={BRAND_MUTED} fontFamily="inherit">NDA</text>
          <rect x="376" y="194" width="140" height="8" rx="4" fill={BRAND_MUTED} opacity="0.2" />
          <rect x="376" y="212" width="110" height="8" rx="4" fill={BRAND_MUTED} opacity="0.2" />
          <rect x="412" y="130" width="200" height="234" rx="10" fill="#ffffff" stroke={BRAND_INK} strokeOpacity="0.8" strokeWidth="2" />
          <text x="436" y="164" fontSize="13" letterSpacing="1.5" fill={BRAND_INK} fontFamily="inherit">ENGAGEMENT CONTRACT</text>
          <rect x="436" y="182" width="152" height="9" rx="4.5" fill={BRAND_MUTED} opacity="0.35" />
          <rect x="436" y="202" width="152" height="9" rx="4.5" fill={BRAND_MUTED} opacity="0.2" />
          <rect x="436" y="222" width="110" height="9" rx="4.5" fill={BRAND_MUTED} opacity="0.2" />
          <text x="436" y="262" fontSize="12" fill={BRAND_MUTED} fontFamily="inherit">Scope · Fee · Timeline</text>
          <path className="ea-sign" d="M440 320 q 18 -26 34 0 t 34 0 t 34 0" fill="none" stroke={BRAND_INK} strokeWidth="2.5" />
          <g className="ea-stamp">
            <circle cx="646" cy="180" r="34" fill="none" stroke={ACCENT} strokeWidth="2.5" />
            <text x="646" y="186" fontSize="15" fill={ACCENT} textAnchor="middle" fontFamily="inherit">SIGNED</text>
          </g>
          <text x="480" y="440" fontSize="21" fill={BRAND_INK} textAnchor="middle" fontFamily="inherit">
            The NDA is signed. Scope, fee, and contract are fixed within a business day.
          </text>
        </g>

        {/* Scene 3. The data room */}
        <g className="ea-s3">
          {TILES.map((tile) => (
            <g key={tile.label}>
              <rect x={tile.x} y={tile.y} width="150" height="92" rx="10" fill="#ffffff" stroke={BRAND_INK} strokeOpacity="0.7" strokeWidth="2" />
              <text x={tile.x + 75} y={tile.y + 55} fontSize="14" fill={BRAND_MUTED} textAnchor="middle" fontFamily="inherit">
                {tile.label}
              </text>
            </g>
          ))}
          {TILES.map((tile, index) => (
            <g key={tile.label} className={`ea-t${index + 1}`}>
              <circle cx={tile.x + 134} cy={tile.y + 14} r="10" fill={ACCENT} />
              <path
                d={`M${tile.x + 129} ${tile.y + 14} l4 4 l7 -8`}
                stroke="#ffffff"
                strokeWidth="2"
                fill="none"
              />
            </g>
          ))}
          <g className="ea-lens">
            <circle cx="330" cy="188" r="26" fill="none" stroke={BRAND_INK} strokeWidth="3" />
            <line x1="349" y1="207" x2="367" y2="225" stroke={BRAND_INK} strokeWidth="4" strokeLinecap="round" />
          </g>
          <text x="480" y="440" fontSize="21" fill={BRAND_INK} textAnchor="middle" fontFamily="inherit">
            The data room opens. Code, model and data, cloud, contracts, telemetry, security.
          </text>
        </g>

        {/* Scene 4. Interviews and reviews */}
        <g className="ea-s4">
          <circle cx="360" cy="196" r="24" fill="none" stroke={BRAND_INK} strokeOpacity="0.8" strokeWidth="2" />
          <path d="M324 262 q 36 -40 72 0" fill="none" stroke={BRAND_INK} strokeOpacity="0.8" strokeWidth="2" />
          <circle cx="600" cy="196" r="24" fill="none" stroke={BRAND_MUTED} strokeWidth="2" />
          <path d="M564 262 q 36 -40 72 0" fill="none" stroke={BRAND_MUTED} strokeWidth="2" />
          <rect x="430" y="176" width="46" height="10" rx="5" fill={BRAND_MUTED} opacity="0.3" />
          <rect x="484" y="176" width="46" height="10" rx="5" fill={BRAND_MUTED} opacity="0.3" />
          <rect x="452" y="196" width="56" height="10" rx="5" fill={BRAND_MUTED} opacity="0.2" />
          <rect x="398" y="296" width="164" height="54" rx="10" fill="#ffffff" stroke={BRAND_INK} strokeOpacity="0.7" strokeWidth="2" />
          <text x="480" y="320" fontSize="13" fill={BRAND_MUTED} textAnchor="middle" fontFamily="inherit">Architecture review</text>
          <text x="480" y="338" fontSize="13" fill={BRAND_MUTED} textAnchor="middle" fontFamily="inherit">Code review</text>
          <g className="ea-review">
            <circle cx="562" cy="296" r="11" fill={ACCENT} />
            <path d="M556 296 l4 4 l8 -9" stroke="#ffffff" strokeWidth="2" fill="none" />
          </g>
          <text x="480" y="440" fontSize="21" fill={BRAND_INK} textAnchor="middle" fontFamily="inherit">
            The team is interviewed. Architecture and code are reviewed together.
          </text>
        </g>

        {/* Scene 5. Findings */}
        <g className="ea-s5">
          <rect x="280" y="128" width="400" height="236" rx="12" fill="#ffffff" stroke={BRAND_INK} strokeOpacity="0.8" strokeWidth="2" />
          <text x="308" y="166" fontSize="15" letterSpacing="2" fill={BRAND_MUTED} fontFamily="inherit">FINDINGS</text>
          <g className="ea-row-a">
            <circle cx="320" cy="204" r="8" fill="none" stroke={BRAND_MUTED} strokeWidth="2" />
            <rect x="344" y="197" width="220" height="12" rx="6" fill={BRAND_MUTED} opacity="0.25" />
            <text x="652" y="209" fontSize="13" fill={BRAND_MUTED} textAnchor="end" fontFamily="inherit">solid</text>
          </g>
          <g className="ea-row-b">
            <circle cx="320" cy="252" r="8" fill={BRAND_MUTED} opacity="0.45" />
            <rect x="344" y="245" width="260" height="12" rx="6" fill={BRAND_MUTED} opacity="0.25" />
            <text x="652" y="257" fontSize="13" fill={BRAND_MUTED} textAnchor="end" fontFamily="inherit">watch</text>
          </g>
          <g className="ea-row-c">
            <circle cx="320" cy="300" r="8" fill={BRAND_INK} />
            <rect x="344" y="293" width="180" height="12" rx="6" fill={BRAND_MUTED} opacity="0.25" />
            <text x="652" y="305" fontSize="13" fill={BRAND_INK} textAnchor="end" fontFamily="inherit">material</text>
          </g>
          <text x="480" y="440" fontSize="21" fill={BRAND_INK} textAnchor="middle" fontFamily="inherit">
            Findings arrive in plain English. Solid, fragile, and what it means.
          </text>
        </g>

        {/* Scene 6. The final deliverable */}
        <g className="ea-s6">
          <rect x="390" y="120" width="180" height="244" rx="10" fill="#ffffff" stroke={BRAND_INK} strokeOpacity="0.85" strokeWidth="2" />
          <rect x="414" y="148" width="30" height="30" rx="7" fill={BRAND_INK} />
          <text x="429" y="168" fontSize="13" fill={BRAND_SURFACE} textAnchor="middle" fontFamily="inherit">DM</text>
          <text x="414" y="214" fontSize="16" fill={BRAND_INK} fontFamily="inherit">Technical Due</text>
          <text x="414" y="236" fontSize="16" fill={BRAND_INK} fontFamily="inherit">Diligence Report</text>
          <rect x="414" y="258" width="130" height="8" rx="4" fill={BRAND_MUTED} opacity="0.25" />
          <rect x="414" y="274" width="104" height="8" rx="4" fill={BRAND_MUTED} opacity="0.2" />
          <rect x="414" y="290" width="118" height="8" rx="4" fill={BRAND_MUTED} opacity="0.2" />
          <text x="414" y="336" fontSize="12" fill={BRAND_MUTED} fontFamily="inherit">Risks · Impact · Actions</text>
          <g className="ea-final-tick">
            <circle cx="588" cy="142" r="26" fill={ACCENT} />
            <path d="M576 142 l9 9 l16 -19" stroke="#ffffff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text x="480" y="440" fontSize="21" fill={BRAND_INK} textAnchor="middle" fontFamily="inherit">
            The final report. Decide with confidence, before the money is committed.
          </text>
        </g>

        {/* Progress dots */}
        <g>
          <circle className="ea-dot-1" cx="64" cy="492" r="5" fill={BRAND_INK} />
          <circle className="ea-dot-2" cx="84" cy="492" r="5" fill={BRAND_INK} />
          <circle className="ea-dot-3" cx="104" cy="492" r="5" fill={BRAND_INK} />
          <circle className="ea-dot-4" cx="124" cy="492" r="5" fill={BRAND_INK} />
          <circle className="ea-dot-5" cx="144" cy="492" r="5" fill={BRAND_INK} />
          <circle className="ea-dot-6" cx="164" cy="492" r="5" fill={BRAND_INK} />
        </g>
      </svg>

      <button
        type="button"
        onClick={() => setPaused((current) => !current)}
        aria-pressed={paused}
        className="absolute bottom-4 right-4 rounded-full border border-border bg-background/90 px-4 py-1.5 text-xs text-foreground hover:bg-background transition-colors"
      >
        {paused ? "Play" : "Pause"}
      </button>
    </div>
  );
}
