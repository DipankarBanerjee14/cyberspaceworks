"use client";

import React from "react";

const Technologies = () => {
  return (
    <div className="flex items-center justify-center bg-black">
      <div className="w-full max-w-[800px]">
        <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <defs>
            <linearGradient id="chipGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2d2d2d" />
              <stop offset="100%" stopColor="#0f0f0f" />
            </linearGradient>
            <linearGradient id="textGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#eeeeee" />
              <stop offset="100%" stopColor="#888888" />
            </linearGradient>
            <linearGradient id="pinGradient" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#bbbbbb" />
              <stop offset="50%" stopColor="#888888" />
              <stop offset="100%" stopColor="#555555" />
            </linearGradient>
          </defs>

          {/* Traces */}
          <g id="traces">
            {/* Left to Right Traces */}
            <g>
              <path d="M100 100 H200 V210 H326" className="trace-bg" />
              <path d="M100 100 H200 V210 H326" className="trace-flow purple" />
            </g>
            <g>
              <path d="M80 180 H180 V230 H326" className="trace-bg" />
              <path d="M80 180 H180 V230 H326" className="trace-flow blue" />
            </g>
            <g>
              <path d="M60 260 H150 V250 H326" className="trace-bg" />
              <path d="M60 260 H150 V250 H326" className="trace-flow yellow" />
            </g>
            <g>
              <path d="M100 350 H200 V270 H326" className="trace-bg" />
              <path d="M100 350 H200 V270 H326" className="trace-flow green" />
            </g>

            {/* Right to Left Traces */}
            <g>
              <path d="M700 90 H560 V210 H474" className="trace-bg" />
              <path d="M700 90 H560 V210 H474" className="trace-flow blue" />
            </g>
            <g>
              <path d="M740 160 H580 V230 H474" className="trace-bg" />
              <path d="M740 160 H580 V230 H474" className="trace-flow green" />
            </g>
            <g>
              <path d="M720 250 H590 V250 H474" className="trace-bg" />
              <path d="M720 250 H590 V250 H474" className="trace-flow red" />
            </g>
            <g>
              <path d="M680 340 H570 V270 H474" className="trace-bg" />
              <path d="M680 340 H570 V270 H474" className="trace-flow yellow" />
            </g>

            {/* Top Pins (6) */}
            <g>
              <path d="M340 100 V187" className="trace-bg" />
              <path d="M340 100 V187" className="trace-flow green" />
            </g>
            <g>
              <path d="M364 100 V187" className="trace-bg" />
              <path d="M364 100 V187" className="trace-flow red" />
            </g>
            <g>
              <path d="M388 100 V187" className="trace-bg" />
              <path d="M388 100 V187" className="trace-flow purple" />
            </g>
            <g>
              <path d="M412 100 V187" className="trace-bg" />
              <path d="M412 100 V187" className="trace-flow blue" />
            </g>
            <g>
              <path d="M436 100 V187" className="trace-bg" />
              <path d="M436 100 V187" className="trace-flow yellow" />
            </g>
            <g>
              <path d="M460 100 V187" className="trace-bg" />
              <path d="M460 100 V187" className="trace-flow green" />
            </g>

            {/* Bottom Pins (6) */}
            <g>
              <path d="M340 380 V293" className="trace-bg" />
              <path d="M340 380 V293" className="trace-flow red" />
            </g>
            <g>
              <path d="M364 380 V293" className="trace-bg" />
              <path d="M364 380 V293" className="trace-flow purple" />
            </g>
            <g>
              <path d="M388 380 V293" className="trace-bg" />
              <path d="M388 380 V293" className="trace-flow blue" />
            </g>
            <g>
              <path d="M412 380 V293" className="trace-bg" />
              <path d="M412 380 V293" className="trace-flow yellow" />
            </g>
            <g>
              <path d="M436 380 V293" className="trace-bg" />
              <path d="M436 380 V293" className="trace-flow green" />
            </g>
            <g>
              <path d="M460 380 V293" className="trace-bg" />
              <path d="M460 380 V293" className="trace-flow red" />
            </g>
          </g>

          {/* Chip */}
          <rect
            x="330"
            y="190"
            width="140"
            height="100"
            rx="20"
            ry="20"
            fill="url(#chipGradient)"
            stroke="#222"
            strokeWidth="3"
            className="drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]"
          />

          {/* Left Pins (4) */}
          {[205, 225, 245, 265].map((y, i) => (
            <rect key={`left-${i}`} x="322" y={y} width="8" height="10" rx="2" fill="url(#pinGradient)" />
          ))}

          {/* Right Pins (4) */}
          {[205, 225, 245, 265].map((y, i) => (
            <rect key={`right-${i}`} x="470" y={y} width="8" height="10" rx="2" fill="url(#pinGradient)" />
          ))}

          {/* Top Pins (6) */}
          {[336, 360, 384, 408, 430, 456].map((x, i) => (
            <rect key={`top-${i}`} x={x} y="182" width="8" height="10" rx="2" fill="url(#pinGradient)" />
          ))}

          {/* Bottom Pins (6) */}
          {[336, 360, 384, 408, 430, 456].map((x, i) => (
            <rect key={`bottom-${i}`} x={x} y="290" width="8" height="10" rx="2" fill="url(#pinGradient)" />
          ))}

          {/* Loading Text */}
          <text
            x="400"
            y="240"
            fontFamily="Arial, sans-serif"
            fontSize="22"
            fill="url(#textGradient)"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            Loading
          </text>

          {/* Circles */}
          {[
            { cx: 100, cy: 100 },
            { cx: 80, cy: 180 },
            { cx: 60, cy: 260 },
            { cx: 100, cy: 350 },
            { cx: 700, cy: 90 },
            { cx: 740, cy: 160 },
            { cx: 720, cy: 250 },
            { cx: 680, cy: 340 },
            { cx: 340, cy: 100 },
            { cx: 364, cy: 100 },
            { cx: 388, cy: 100 },
            { cx: 412, cy: 100 },
            { cx: 436, cy: 100 },
            { cx: 460, cy: 100 },
            { cx: 340, cy: 380 },
            { cx: 364, cy: 380 },
            { cx: 388, cy: 380 },
            { cx: 412, cy: 380 },
            { cx: 436, cy: 380 },
            { cx: 460, cy: 380 },
          ].map(({ cx, cy }, i) => (
            <circle key={i} cx={cx} cy={cy} r="5" fill="black" />
          ))}

          {/* Inline SVG animation */}
          <style>
            {`
              .trace-bg { stroke: #333; stroke-width: 1.8; fill: none; }
              .trace-flow {
                stroke-width: 1.8;
                fill: none;
                stroke-dasharray: 40 400;
                stroke-dashoffset: 438;
                filter: drop-shadow(0 0 6px currentColor);
                animation: flow 3s cubic-bezier(0.5,0,0.9,1) infinite;
              }
              .yellow { stroke: #ffea00; color: #ffea00; }
              .blue { stroke: #00ccff; color: #00ccff; }
              .green { stroke: #00ff15; color: #00ff15; }
              .purple { stroke: #9900ff; color: #9900ff; }
              .red { stroke: #ff3300; color: #ff3300; }
              @keyframes flow { to { stroke-dashoffset: 0; } }
            `}
          </style>
        </svg>
      </div>
    </div>
  );
};

export default Technologies;