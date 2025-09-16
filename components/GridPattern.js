"use client";
import React, { useState, useEffect } from "react";

export default function PreciseGrid() {
  const [size, setSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // grid size
  const rowHeight = 60;
  const colWidth = 60;

  // rowIndex -> array of columnIndexes mapping for glowing squares
  const rowToCols = {
    1: [1, 14],
    2: [4, 10, 18],
    3: [6, 12],
    4: [8, 16],
    5: [20],
  };

  const arcs = [];

  // calculate total rows and columns based on window size
  const totalRows = Math.floor(size.height / rowHeight);
  const totalCols = Math.floor(size.width / colWidth);

  // collect comet launch points: {col, y}
  const cometLaunchPoints = [];

  for (let row = 1; row <= totalRows; row++) {
    if (rowToCols[row]) {
      rowToCols[row].forEach((col) => {
        if (col <= totalCols) {
          const y = row * rowHeight;
          const x = col * colWidth;

          // save launch point for comet effect
          cometLaunchPoints.push({ col, x, y });

          // arcs for glowing diamonds
          arcs.push(
            `M${x} ${y - 20} Q${x} ${y} ${x + 20} ${y}`,
            `M${x} ${y - 20} Q${x} ${y} ${x - 20} ${y}`,
            `M${x - 20} ${y} Q${x} ${y} ${x} ${y + 20}`,
            `M${x + 20} ${y} Q${x} ${y} ${x} ${y + 20}`
          );
        }
      });
    }
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Grid pattern */}
        <pattern
          id="gridTile"
          width={colWidth}
          height={rowHeight}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M0 0 H${colWidth} M0 0 V${rowHeight}`}
            fill="none"
            stroke="#4b5563"
            strokeWidth="1"
          />
        </pattern>

        {/* Fade mask */}
        <linearGradient id="fadeMask" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="maskGradient">
          <rect width="100%" height="100%" fill="url(#fadeMask)" />
        </mask>

        {/* Glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Comet glow */}
        <filter id="cometGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
      </defs>

      <g mask="url(#maskGradient)">
        {/* Grid */}
        <rect width="100%" height="100%" fill="url(#gridTile)" />

        {/* Glowing arcs */}
        <path d={arcs.join(" ")} fill="none" stroke="#4b5563" />
    {/* Falling comets starting from the squares */}
{cometLaunchPoints.map((pt, i) => (
  <circle
    key={`${pt.col}-${pt.y}`}
    cx={pt.x}
    cy={pt.y}
    r="6"
    fill="#7dd3fc"              // 🔵 light blue comet
    filter="url(#cometGlow)"
  >
    <animate
      attributeName="cy"
      from={pt.y}
      to={size.height + 20}
      dur="3s"
      begin={`${i * 0.8}s`}
      repeatCount="indefinite"
    />
    <animate
      attributeName="opacity"
      values="1;0.8;0"
      dur="3s"
      begin={`${i * 0.8}s`}
      repeatCount="indefinite"
    />
  </circle>
))}

      </g>
    </svg>
  );
}
