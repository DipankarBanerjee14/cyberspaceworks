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

  const rowHeight = 80;
  const colWidth = 80;

  // rowIndex -> array of columnIndexes mapping
  const rowToCols = {
    1: [2, 14],  // first row: 2nd and 14th column
    3: [6, 10],
    5: [8],
    7: [2, 14],
  };

  const arcs = [];

  // go through rows
  for (let row = 1; row <= Math.floor(size.height / rowHeight); row++) {
    if (rowToCols[row]) {
      rowToCols[row].forEach((col) => {
        const y = row * rowHeight;
        const x = col * colWidth;

        arcs.push(
          `M${x} ${y - 40} Q${x} ${y} ${x + 40} ${y}`,
          `M${x} ${y - 40} Q${x} ${y} ${x - 40} ${y}`,
          `M${x - 40} ${y} Q${x} ${y} ${x} ${y + 40}`,
          `M${x + 40} ${y} Q${x} ${y} ${x} ${y + 40}`
        );
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
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 0 H80 M0 0 V80"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
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
      </defs>

      <g mask="url(#maskGradient)">
        {/* Grid */}
        <rect width="100%" height="100%" fill="url(#gridTile)" />

        {/* Glowing arcs */}
        <path
          d={arcs.join(" ")}
          fill="none"
          stroke="#7dd3fc"
          strokeWidth="2"
          filter="url(#glow)"
        />
      </g>
    </svg>
  );
}
