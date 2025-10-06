

"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCode,addColorStop
  FaPalette,
  FaBullhorn,
  FaBrush,
  FaTrademark,
} from "react-icons/fa";

/**
 * OurServicesWithWires
 * - draws wires from chip pins to service box centers using a full-size canvas overlay
 * - animated pulse travels along each wire
 *
 * Usage: just import and render <OurServicesWithWires /> inside your page.
 */
export default function OurServicesWithWires() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const chipRef = useRef(null);
  const boxRefs = useRef([]);
  const rafRef = useRef(null);
  const resizeObserverRef = useRef(null);

  const [ready, setReady] = useState(false);

  // services list (same as your original)
  const services = [
    {
      icon: <FaLaptopCode size={38} />,
      title: "Web Development",
      desc: "Crafting responsive and dynamic websites tailored to your needs.",
    },
    {
      icon: <FaMobileAlt size={38} />,
      title: "App Development",
      desc: "Building innovative and user-friendly mobile applications.",
    },
    {
      icon: <FaCode size={38} />,
      title: "Software Development",
      desc: "Custom software solutions to optimize your business processes.",
    },
    {
      icon: <FaPalette size={38} />,
      title: "UI/UX Design",
      desc: "Creating intuitive and visually appealing user interfaces.",
    },
    {
      icon: <FaBullhorn size={38} />,
      title: "Digital Marketing",
      desc: "Boost your online presence with targeted marketing strategies.",
    },
    {
      icon: <FaBrush size={38} />,
      title: "Graphic Design",
      desc: "Designing stunning visuals to enhance your brand identity.",
    },
    {
      icon: <FaTrademark size={38} />,
      title: "Branding",
      desc: "Developing a unique brand identity that stands out in the market.",
    },
  ];

  // helper to get center point of an element relative to canvas
  const getElementCenterRelativeToCanvas = (elem, canvas) => {
    const cRect = canvas.getBoundingClientRect();
    const r = elem.getBoundingClientRect();
    return {
      x: r.left + r.width / 2 - cRect.left,
      y: r.top + r.height / 2 - cRect.top,
    };
  };

  useEffect(() => {
    // ensure refs for boxes
    boxRefs.current = boxRefs.current.slice(0, services.length);

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const chipEl = chipRef.current;
    if (!canvas || !container || !chipEl) return;

    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = container.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // initial sizing
    setCanvasSize();

    // recompute on resize
    resizeObserverRef.current = new ResizeObserver(() => {
      setCanvasSize();
      // re-init drawing state if needed
    });
    resizeObserverRef.current.observe(container);

    // Build wires data: pins and destination boxes, with control points for curve
    const computeLayout = () => {
      const canvasRect = canvas.getBoundingClientRect();
      const chipRect = chipEl.getBoundingClientRect();

      // chip center relative to canvas
      const chipCenter = {
        x: chipRect.left + chipRect.width / 2 - canvasRect.left,
        y: chipRect.top + chipRect.height / 2 - canvasRect.top,
      };

      // compute pin positions around the chip - matches the visual top/bottom/left/right layout
      // top: 7 pins spaced horizontally (centered)
      const topCount = 7;
      const bottomCount = 7;
      const leftCount = 3;
      const rightCount = 3;

      const chipVisualW = Math.max(180, chipRect.width); // fallback widths
      const chipVisualH = Math.max(70, chipRect.height);

      // horizontal spacing across chip for pins
      const hSpan = chipVisualW * 0.84; // slightly inset
      const topPins = Array.from({ length: topCount }, (_, i) => {
        const t = i / (topCount - 1);
        return {
          x: chipCenter.x - hSpan / 2 + t * hSpan,
          y: chipCenter.y - chipVisualH / 2 - 10, // visually just above
        };
      });
      const bottomPins = Array.from({ length: bottomCount }, (_, i) => {
        const t = i / (bottomCount - 1);
        return {
          x: chipCenter.x - hSpan / 2 + t * hSpan,
          y: chipCenter.y + chipVisualH / 2 + 10, // visually just below
        };
      });

      // vertical side pins
      const vSpan = chipVisualH * 0.6;
      const leftPins = Array.from({ length: leftCount }, (_, i) => {
        const t = i / (leftCount - 1);
        return {
          x: chipCenter.x - chipVisualW / 2 - 10,
          y: chipCenter.y - vSpan / 2 + t * vSpan,
        };
      });
      const rightPins = Array.from({ length: rightCount }, (_, i) => {
        const t = i / (rightCount - 1);
        return {
          x: chipCenter.x + chipVisualW / 2 + 10,
          y: chipCenter.y - vSpan / 2 + t * vSpan,
        };
      });

      const pins = { top: topPins, bottom: bottomPins, left: leftPins, right: rightPins };

      // map services to which pin group they should connect to (imitating original)
      // top row (services 0..2) connect to top pins (left, center, right)
      // bottom row (services 3..6) connect to bottom pins (spread)
      const dests = services.map((_, idx) => {
        const boxEl = boxRefs.current[idx];
        if (!boxEl) return null;
        const center = getElementCenterRelativeToCanvas(boxEl, canvas);
        return center;
      });

      // connection mapping (choose pin index for each service to match original feel)
      const connections = [
        { pin: pins.top[1], to: dests[0] }, // web -> top-left-ish pin
        { pin: pins.top[3], to: dests[1] }, // app -> top-center pin
        { pin: pins.top[5], to: dests[2] }, // software -> top-right-ish pin
        { pin: pins.bottom[1], to: dests[3] }, // ui/ux -> bottom-left
        { pin: pins.bottom[3], to: dests[4] }, // digital -> bottom-left-center
        { pin: pins.bottom[4], to: dests[5] }, // graphic -> bottom-right-center
        { pin: pins.bottom[6], to: dests[6] }, // branding -> bottom-right
      ];

      // convert into path descriptions with control points
      const paths = connections
        .filter((c) => c.pin && c.to)
        .map((c) => {
          // control point calculation:
          // push control point away from straight line to make large, soft arcs
          const from = { x: c.pin.x, y: c.pin.y };
          const to = { x: c.to.x, y: c.to.y };

          // mid point
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2;

          // choose a control offset depending on whether line goes up/down/left/right
          // push control offset perpendicular to the from->to direction to create arc
          const dx = to.x - from.x;
          const dy = to.y - from.y;
          // perpendicular direction
          const perpX = -dy;
          const perpY = dx;
          // normalize
          const len = Math.max(1, Math.hypot(perpX, perpY));
          const normX = perpX / len;
          const normY = perpY / len;

          // strength of curve depends on distance
          const dist = Math.hypot(dx, dy);
          const strength = Math.min(1.0, Math.max(0.25, dist / 450)); // tuneable

          // final control point
          const control = {
            x: midX + normX * 80 * strength,
            y: midY + normY * 80 * strength,
          };

          return { from, to, control, dist };
        });

      return { canvasRect, chipCenter, pins, paths };
    };

    // animation state
    let lastTs = 0;
    let tProgress = 0; // animation progress 0..1 (used for pulse)

    const drawFrame = (ts) => {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      // scale back to CSS pixels since we already set transform earlier
      // draw slight vignette / glow under the chip area for aesthetics
      // background glow (subtle)
      const grd = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        10,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.6
      );
      grd.addColorStop(0, "rgba(0,40,40,0.06)");
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // recompute layout each frame to remain pixel perfect on resize (cheap)
      const layout = computeLayout();
      const paths = layout.paths;

      // Draw each cable path: base stroke + outer glow + moving pulse
      paths.forEach((p, idx) => {
        // Base faint stroke (outer glow)
        ctx.lineWidth = 6;
        ctx.strokeStyle = "rgba(0,200,200,0.05)";
        ctx.beginPath();
        ctx.moveTo(p.from.x, p.from.y);
        // draw quadratic bezier
        ctx.quadraticCurveTo(p.control.x, p.control.y, p.to.x, p.to.y);
        ctx.stroke();

        // Middle bright stroke
        ctx.lineWidth = 2.6;
        // create gradient along path (approx by using linear gradient between endpoints)
        const grad = ctx.createLinearGradient(p.from.x, p.from.y, p.to.x, p.to.y);
        grad.addColorStop(0, "rgba(0,200,200,0.95)");
        grad.addColorStop(0.5, "rgba(0,255,255,0.9)");
        grad.addColorStop(1, "rgba(0,200,200,0.95)");
        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(p.from.x, p.from.y);
        ctx.quadraticCurveTo(p.control.x, p.control.y, p.to.x, p.to.y);
        ctx.stroke();

        // small highlight stroke for depth
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(255,255,255,0.06)";
        ctx.beginPath();
        ctx.moveTo(p.from.x, p.from.y);
        ctx.quadraticCurveTo(p.control.x, p.control.y, p.to.x, p.to.y);
        ctx.stroke();

        // endpoint dot (soft)
        ctx.beginPath();
        ctx.fillStyle = "rgba(0,240,255,0.65)";
        ctx.arc(p.to.x, p.to.y, 3.2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw animated pulses travelling along each path (use tProgress + index offset)
      tProgress += (ts - lastTs) * 0.00035; // speed factor
      if (tProgress > 1) tProgress = tProgress - Math.floor(tProgress);
      lastTs = ts;

      paths.forEach((p, idx) => {
        // each path gets an offset so pulses are staggered
        const offset = (idx / paths.length) * 0.5;
        let t = (tProgress + offset) % 1;

        // optionally draw multiple pulses per path by adding small extra points
        const pulses = 1;
        for (let pi = 0; pi < pulses; pi++) {
          const tp = (t + pi * 0.12) % 1;
          // quadratic bezier point at parameter tp
          // B(t) = (1-t)^2 * P0 + 2(1-t)t * CP + t^2 * P1
          const it = tp;
          const oneMinus = 1 - it;
          const x =
            oneMinus * oneMinus * p.from.x +
            2 * oneMinus * it * p.control.x +
            it * it * p.to.x;
          const y =
            oneMinus * oneMinus * p.from.y +
            2 * oneMinus * it * p.control.y +
            it * it * p.to.y;

          // draw glow
          ctx.beginPath();
          ctx.fillStyle = "rgba(0,230,255,0.18)";
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.fillStyle = "rgba(0,255,255,0.95)";
          ctx.arc(x, y, 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.restore();
      rafRef.current = requestAnimationFrame(drawFrame);
    };

    // start animation
    rafRef.current = requestAnimationFrame((ts) => {
      lastTs = ts;
      drawFrame(ts);
      setReady(true);
    });

    // cleanup
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // render
  return (
    <section
      ref={containerRef}
      className="relative z-10 py-16 px-4 bg-black overflow-hidden max-w-7xl mx-auto"
    >
      {/* Canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />

      {/* subtle teal radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(14,186,199,0.12), transparent 45%)",
        }}
      />

      <div className="relative text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-wide">
          Our Services
        </h2>

        {/* Top three boxes */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16">
          {services.slice(0, 3).map((s, i) => (
            <div
              key={i}
              ref={(el) => (boxRefs.current[i] = el)}
              className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out hover:scale-[1.12] hover:z-20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] to-[#141414] border border-white/8 shadow-[0_8px_30px_rgba(0,255,255,0.06),inset_0_0_30px_rgba(255,255,255,0.02)] backdrop-blur-xl flex flex-col items-center justify-center text-center px-5 transition-all duration-500 ease-out group-hover:border-cyan-400/70 group-hover:shadow-[0_0_40px_rgba(0,255,255,0.4),inset_0_0_40px_rgba(0,255,255,0.06)] rounded-lg">
                <div className="text-cyan-400 mb-2">{s.icon}</div>
                <h3 className="text-sm font-semibold text-white">{s.title}</h3>
                <p className="text-xs text-gray-400 mt-1 leading-tight">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chip area */}
        <div className="flex items-center justify-center relative my-6">
          <div
            ref={chipRef}
            className="relative w-[300px] h-[92px] bg-gradient-to-b from-[#1b1b1b] to-[#0e0e0e] rounded-lg border border-[#222] shadow-[0_18px_60px_rgba(0,0,0,0.7)] flex items-center justify-center overflow-visible"
          >
            {/* top pins */}
            <div className="absolute -top-[28px] left-1/2 -translate-x-1/2 flex justify-between w-[260px]">
              {Array(7)
                .fill()
                .map((_, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-[2px] h-[14px] bg-gradient-to-b from-[#3a3a3a] via-[#7b7b7b] to-[#00d8ff] opacity-80" />
                    <div className="w-[10px] h-[12px] bg-gradient-to-b from-[#cfcfcf] via-[#9a9a9a] to-[#6b6b6b] rounded-b-[3px]" />
                  </div>
                ))}
            </div>

            {/* bottom pins */}
            <div className="absolute -bottom-[28px] left-1/2 -translate-x-1/2 flex justify-between w-[260px]">
              {Array(7)
                .fill()
                .map((_, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-[10px] h-[12px] bg-gradient-to-t from-[#cfcfcf] via-[#9a9a9a] to-[#6b6b6b] rounded-t-[3px]" />
                    <div className="w-[2px] h-[14px] bg-gradient-to-t from-[#3a3a3a] via-[#7b7b7b] to-[#00d8ff] opacity-80" />
                  </div>
                ))}
            </div>

            {/* left pins */}
            <div className="absolute -left-[28px] top-1/2 -translate-y-1/2 flex flex-col justify-between h-[66px]">
              {Array(3)
                .fill()
                .map((_, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-[14px] h-[2px] bg-gradient-to-r from-[#3a3a3a] via-[#7b7b7b] to-[#00d8ff] opacity-80" />
                    <div className="w-[12px] h-[10px] bg-gradient-to-r from-[#cfcfcf] via-[#9a9a9a] to-[#6b6b6b] rounded-r-[3px]" />
                  </div>
                ))}
            </div>

            {/* right pins */}
            <div className="absolute -right-[28px] top-1/2 -translate-y-1/2 flex flex-col justify-between h-[66px]">
              {Array(3)
                .fill()
                .map((_, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-[12px] h-[10px] bg-gradient-to-l from-[#cfcfcf] via-[#9a9a9a] to-[#6b6b6b] rounded-l-[3px]" />
                    <div className="w-[14px] h-[2px] bg-gradient-to-l from-[#3a3a3a] via-[#7b7b7b] to-[#00d8ff] opacity-80" />
                  </div>
                ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h3 className="text-gray-200 text-lg font-semibold select-none tracking-wide">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-400">
                  Powered By
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* bottom four boxes */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-12">
          {services.slice(3).map((s, i) => {
            const idx = i + 3;
            return (
              <div
                key={idx}
                ref={(el) => (boxRefs.current[idx] = el)}
                className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out hover:scale-[1.12] hover:z-20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] to-[#141414] border border-white/8 shadow-[0_8px_30px_rgba(0,255,255,0.06),inset_0_0_30px_rgba(255,255,255,0.02)] backdrop-blur-xl flex flex-col items-center justify-center text-center px-5 transition-all duration-500 ease-out group-hover:border-cyan-400/70 group-hover:shadow-[0_0_40px_rgba(0,255,255,0.4),inset_0_0_40px_rgba(0,255,255,0.06)] rounded-lg">
                  <div className="text-cyan-400 mb-2">{s.icon}</div>
                  <h3 className="text-sm font-semibold text-white">{s.title}</h3>
                  <p className="text-xs text-gray-400 mt-1 leading-tight">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
 