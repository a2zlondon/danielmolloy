"use client";

// A silent, looping walkthrough of a typical engagement, drawn in brand
// colours. Pure CSS keyframes on one shared 32s clock, so pausing is a
// single play-state toggle and every element stays in sync. No audio.
// Five scenes: the deal, scope, evidence, findings, the decision.

import { useEffect, useState } from "react";
import { BRAND_INK, BRAND_MUTED, BRAND_SURFACE } from "@/lib/brand";

const ACCENT = "#313c44";

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
        .ea-svg * { animation-duration: 32s; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
        .ea-paused .ea-svg * { animation-play-state: paused !important; }

        @keyframes eaScene1 { 0% { opacity: 1; } 17% { opacity: 1; } 20% { opacity: 0; } 96% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes eaScene2 { 0% { opacity: 0; } 20% { opacity: 0; } 23% { opacity: 1; } 37% { opacity: 1; } 40% { opacity: 0; } 100% { opacity: 0; } }
        @keyframes eaScene3 { 0% { opacity: 0; } 40% { opacity: 0; } 43% { opacity: 1; } 57% { opacity: 1; } 60% { opacity: 0; } 100% { opacity: 0; } }
        @keyframes eaScene4 { 0% { opacity: 0; } 60% { opacity: 0; } 63% { opacity: 1; } 77% { opacity: 1; } 80% { opacity: 0; } 100% { opacity: 0; } }
        @keyframes eaScene5 { 0% { opacity: 0; } 80% { opacity: 0; } 83% { opacity: 1; } 97% { opacity: 1; } 100% { opacity: 0; } }
        .ea-s1 { animation-name: eaScene1; }
        .ea-s2 { animation-name: eaScene2; opacity: 0; }
        .ea-s3 { animation-name: eaScene3; opacity: 0; }
        .ea-s4 { animation-name: eaScene4; opacity: 0; }
        .ea-s5 { animation-name: eaScene5; opacity: 0; }

        @keyframes eaRise1 { 0% { transform: translateY(14px); } 4% { transform: translateY(0); } 96% { transform: translateY(0); } 100% { transform: translateY(14px); } }
        @keyframes eaRise2 { 20% { transform: translateY(14px); } 24% { transform: translateY(0); } 100% { transform: translateY(0); } }
        @keyframes eaRise3 { 40% { transform: translateY(14px); } 44% { transform: translateY(0); } 100% { transform: translateY(0); } }
        @keyframes eaRise4 { 60% { transform: translateY(14px); } 64% { transform: translateY(0); } 100% { transform: translateY(0); } }
        @keyframes eaRise5 { 80% { transform: translateY(14px); } 84% { transform: translateY(0); } 100% { transform: translateY(0); } }
        .ea-s1 { animation-name: eaScene1, eaRise1; }
        .ea-s2 { animation-name: eaScene2, eaRise2; }
        .ea-s3 { animation-name: eaScene3, eaRise3; }
        .ea-s4 { animation-name: eaScene4, eaRise4; }
        .ea-s5 { animation-name: eaScene5, eaRise5; }

        @keyframes eaSign { 0% { stroke-dashoffset: 180; } 26% { stroke-dashoffset: 180; } 32% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 0; } }
        .ea-sign { stroke-dasharray: 180; animation-name: eaSign; }

        @keyframes eaStamp { 0% { opacity: 0; transform: scale(1.6); } 33% { opacity: 0; transform: scale(1.6); } 35.5% { opacity: 1; transform: scale(1); } 100% { opacity: 1; transform: scale(1); } }
        .ea-stamp { animation-name: eaStamp; opacity: 0; transform-box: fill-box; transform-origin: center; }

        @keyframes eaLens {
          0% { transform: translate(0px, 0px); } 43% { transform: translate(0px, 0px); }
          46% { transform: translate(0px, 0px); } 49% { transform: translate(206px, 0px); }
          52% { transform: translate(206px, 118px); } 55% { transform: translate(0px, 118px); }
          58% { transform: translate(0px, 118px); } 100% { transform: translate(0px, 118px); }
        }
        .ea-lens { animation-name: eaLens; }

        @keyframes eaTickA { 0% { opacity: 0; } 48% { opacity: 0; } 49% { opacity: 1; } 100% { opacity: 1; } }
        @keyframes eaTickB { 0% { opacity: 0; } 51% { opacity: 0; } 52% { opacity: 1; } 100% { opacity: 1; } }
        @keyframes eaTickC { 0% { opacity: 0; } 54% { opacity: 0; } 55% { opacity: 1; } 100% { opacity: 1; } }
        @keyframes eaTickD { 0% { opacity: 0; } 57% { opacity: 0; } 58% { opacity: 1; } 100% { opacity: 1; } }
        .ea-tick-a { animation-name: eaTickA; opacity: 0; }
        .ea-tick-b { animation-name: eaTickB; opacity: 0; }
        .ea-tick-c { animation-name: eaTickC; opacity: 0; }
        .ea-tick-d { animation-name: eaTickD; opacity: 0; }

        @keyframes eaRowA { 0% { opacity: 0; transform: translateX(-16px); } 64% { opacity: 0; transform: translateX(-16px); } 67% { opacity: 1; transform: translateX(0); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes eaRowB { 0% { opacity: 0; transform: translateX(-16px); } 67% { opacity: 0; transform: translateX(-16px); } 70% { opacity: 1; transform: translateX(0); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes eaRowC { 0% { opacity: 0; transform: translateX(-16px); } 70% { opacity: 0; transform: translateX(-16px); } 73% { opacity: 1; transform: translateX(0); } 100% { opacity: 1; transform: translateX(0); } }
        .ea-row-a { animation-name: eaRowA; opacity: 0; }
        .ea-row-b { animation-name: eaRowB; opacity: 0; }
        .ea-row-c { animation-name: eaRowC; opacity: 0; }

        @keyframes eaFinalTick { 0% { opacity: 0; transform: scale(0.6); } 85% { opacity: 0; transform: scale(0.6); } 88% { opacity: 1; transform: scale(1); } 100% { opacity: 1; transform: scale(1); } }
        .ea-final-tick { animation-name: eaFinalTick; opacity: 0; transform-box: fill-box; transform-origin: center; }

        @keyframes eaDot1 { 0% { opacity: 1; } 19% { opacity: 1; } 20% { opacity: 0.25; } 100% { opacity: 0.25; } }
        @keyframes eaDot2 { 0% { opacity: 0.25; } 20% { opacity: 0.25; } 21% { opacity: 1; } 39% { opacity: 1; } 40% { opacity: 0.25; } 100% { opacity: 0.25; } }
        @keyframes eaDot3 { 0% { opacity: 0.25; } 40% { opacity: 0.25; } 41% { opacity: 1; } 59% { opacity: 1; } 60% { opacity: 0.25; } 100% { opacity: 0.25; } }
        @keyframes eaDot4 { 0% { opacity: 0.25; } 60% { opacity: 0.25; } 61% { opacity: 1; } 79% { opacity: 1; } 80% { opacity: 0.25; } 100% { opacity: 0.25; } }
        @keyframes eaDot5 { 0% { opacity: 0.25; } 80% { opacity: 0.25; } 81% { opacity: 1; } 99% { opacity: 1; } 100% { opacity: 0.25; } }
        .ea-dot-1 { animation-name: eaDot1; }
        .ea-dot-2 { animation-name: eaDot2; opacity: 0.25; }
        .ea-dot-3 { animation-name: eaDot3; opacity: 0.25; }
        .ea-dot-4 { animation-name: eaDot4; opacity: 0.25; }
        .ea-dot-5 { animation-name: eaDot5; opacity: 0.25; }
      `}</style>

      <svg
        className="ea-svg block w-full h-auto"
        viewBox="0 0 960 540"
        role="img"
        aria-label="A 30 second walkthrough of a typical engagement. A deal arrives, scope and fee are fixed under NDA, the evidence is examined across code, cloud, contracts and claims, findings arrive in plain English, and the investor decides with confidence."
      >
        <rect width="960" height="540" fill={BRAND_SURFACE} />

        <text x="64" y="64" fontSize="13" letterSpacing="3" fill={BRAND_MUTED} fontFamily="inherit">
          THE PROCESS
        </text>
        <text x="64" y="92" fontSize="19" fill={BRAND_INK} fontFamily="inherit">
          A typical engagement, in thirty seconds
        </text>

        {/* Scene 1. The deal */}
        <g className="ea-s1">
          <rect x="340" y="150" width="280" height="190" rx="14" fill="#ffffff" stroke={BRAND_INK} strokeOpacity="0.8" strokeWidth="2" />
          <circle cx="390" cy="200" r="20" fill="none" stroke={BRAND_MUTED} strokeWidth="2" />
          <rect x="424" y="188" width="120" height="10" rx="5" fill={BRAND_MUTED} opacity="0.35" />
          <rect x="424" y="206" width="84" height="10" rx="5" fill={BRAND_MUTED} opacity="0.2" />
          <rect x="366" y="244" width="52" height="24" rx="12" fill="none" stroke={ACCENT} strokeWidth="2" />
          <text x="392" y="261" fontSize="14" fill={ACCENT} textAnchor="middle" fontFamily="inherit">AI</text>
          <polyline points="440,300 480,282 520,290 560,258" fill="none" stroke={BRAND_INK} strokeWidth="2" strokeOpacity="0.7" />
          <text x="660" y="265" fontSize="72" fill={BRAND_MUTED} opacity="0.5" fontFamily="inherit">?</text>
          <text x="480" y="440" fontSize="21" fill={BRAND_INK} textAnchor="middle" fontFamily="inherit">
            A deal is on the table. The technology carries the valuation.
          </text>
        </g>

        {/* Scene 2. Scope */}
        <g className="ea-s2">
          <rect x="380" y="130" width="200" height="230" rx="10" fill="#ffffff" stroke={BRAND_INK} strokeOpacity="0.8" strokeWidth="2" />
          <rect x="404" y="160" width="152" height="9" rx="4.5" fill={BRAND_MUTED} opacity="0.35" />
          <rect x="404" y="182" width="152" height="9" rx="4.5" fill={BRAND_MUTED} opacity="0.2" />
          <rect x="404" y="204" width="110" height="9" rx="4.5" fill={BRAND_MUTED} opacity="0.2" />
          <path className="ea-sign" d="M410 310 q 18 -26 34 0 t 34 0 t 34 0" fill="none" stroke={BRAND_INK} strokeWidth="2.5" />
          <g className="ea-stamp">
            <circle cx="612" cy="180" r="34" fill="none" stroke={ACCENT} strokeWidth="2.5" />
            <text x="612" y="186" fontSize="16" fill={ACCENT} textAnchor="middle" fontFamily="inherit">NDA</text>
          </g>
          <text x="480" y="440" fontSize="21" fill={BRAND_INK} textAnchor="middle" fontFamily="inherit">
            Scope and fee are fixed within a business day. The NDA is signed.
          </text>
        </g>

        {/* Scene 3. Evidence */}
        <g className="ea-s3">
          {[
            { x: 310, y: 140, label: "Code" },
            { x: 516, y: 140, label: "Cloud" },
            { x: 310, y: 258, label: "Contracts" },
            { x: 516, y: 258, label: "Telemetry" },
          ].map((tile) => (
            <g key={tile.label}>
              <rect x={tile.x} y={tile.y} width="134" height="96" rx="10" fill="#ffffff" stroke={BRAND_INK} strokeOpacity="0.7" strokeWidth="2" />
              <text x={tile.x + 67} y={tile.y + 58} fontSize="15" fill={BRAND_MUTED} textAnchor="middle" fontFamily="inherit">
                {tile.label}
              </text>
            </g>
          ))}
          <g className="ea-tick-a">
            <circle cx="432" cy="152" r="10" fill={ACCENT} />
            <path d="M427 152 l4 4 l7 -8" stroke="#ffffff" strokeWidth="2" fill="none" />
          </g>
          <g className="ea-tick-b">
            <circle cx="638" cy="152" r="10" fill={ACCENT} />
            <path d="M633 152 l4 4 l7 -8" stroke="#ffffff" strokeWidth="2" fill="none" />
          </g>
          <g className="ea-tick-d">
            <circle cx="638" cy="270" r="10" fill={ACCENT} />
            <path d="M633 270 l4 4 l7 -8" stroke="#ffffff" strokeWidth="2" fill="none" />
          </g>
          <g className="ea-tick-c">
            <circle cx="432" cy="270" r="10" fill={ACCENT} />
            <path d="M427 270 l4 4 l7 -8" stroke="#ffffff" strokeWidth="2" fill="none" />
          </g>
          <g className="ea-lens">
            <circle cx="377" cy="188" r="26" fill="none" stroke={BRAND_INK} strokeWidth="3" />
            <line x1="396" y1="207" x2="414" y2="225" stroke={BRAND_INK} strokeWidth="4" strokeLinecap="round" />
          </g>
          <text x="480" y="440" fontSize="21" fill={BRAND_INK} textAnchor="middle" fontFamily="inherit">
            The evidence is examined. Code, cloud, contracts, claims.
          </text>
        </g>

        {/* Scene 4. Findings */}
        <g className="ea-s4">
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

        {/* Scene 5. The decision */}
        <g className="ea-s5">
          <rect x="365" y="160" width="230" height="150" rx="14" fill="#ffffff" stroke={BRAND_INK} strokeOpacity="0.8" strokeWidth="2" />
          <circle cx="405" cy="200" r="16" fill="none" stroke={BRAND_MUTED} strokeWidth="2" />
          <rect x="432" y="190" width="100" height="9" rx="4.5" fill={BRAND_MUTED} opacity="0.35" />
          <rect x="432" y="206" width="70" height="9" rx="4.5" fill={BRAND_MUTED} opacity="0.2" />
          <g className="ea-final-tick">
            <circle cx="595" cy="165" r="26" fill={ACCENT} />
            <path d="M583 165 l9 9 l16 -19" stroke="#ffffff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <rect x="432" y="346" width="34" height="34" rx="8" fill={BRAND_INK} />
          <text x="449" y="368" fontSize="15" fill={BRAND_SURFACE} textAnchor="middle" fontFamily="inherit">DM</text>
          <text x="478" y="369" fontSize="17" fill={BRAND_INK} fontFamily="inherit">Daniel Molloy</text>
          <text x="480" y="440" fontSize="21" fill={BRAND_INK} textAnchor="middle" fontFamily="inherit">
            Decide with confidence, before the money is committed.
          </text>
        </g>

        {/* Progress dots */}
        <g>
          <circle className="ea-dot-1" cx="64" cy="492" r="5" fill={BRAND_INK} />
          <circle className="ea-dot-2" cx="84" cy="492" r="5" fill={BRAND_INK} />
          <circle className="ea-dot-3" cx="104" cy="492" r="5" fill={BRAND_INK} />
          <circle className="ea-dot-4" cx="124" cy="492" r="5" fill={BRAND_INK} />
          <circle className="ea-dot-5" cx="144" cy="492" r="5" fill={BRAND_INK} />
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
