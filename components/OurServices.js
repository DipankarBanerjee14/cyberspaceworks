"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCode,
  FaPalette,
  FaBullhorn,
  FaBrush,
  FaTrademark,
} from "react-icons/fa";

export default function OurServicesWithWires() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const chipRef = useRef(null);
  const boxRefs = useRef([]);
  const rafRef = useRef(null);
  const resizeObserverRef = useRef(null);

  const [ready, setReady] = useState(false);

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

  const getElementCenterRelativeToCanvas = (elem, canvas) => {
    const cRect = canvas.getBoundingClientRect();
    const r = elem.getBoundingClientRect();
    return {
      x: r.left + r.width / 2 - cRect.left,
      y: r.top + r.height / 2 - cRect.top,
    };
  };

  useEffect(() => {
    boxRefs.current = boxRefs.current.slice(0, services.length);

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const chipEl = chipRef.current;
    if (!canvas || !container || !chipEl) return;

    const ctx = canvas.getContext("2d");

   const boxColors = [
      [207, 250, 254],  // Web Development: cyan-100 shadow
      [255, 0, 255],    // App Development: magenta shadow
      [255, 255, 0],    // Software Development: yellow shadow
      [57, 255, 20],    // UI/UX Design: green shadow
      [225, 29, 72],    // Digital Marketing: rose shadow
      [249, 115, 22],   // Graphic Design: orange shadow
      [167, 139, 250],  // Branding: indigo shadow
];

    const cableColor = [55, 65, 81]; // gray-700
    const cableGlowColor = [40, 50, 66]; // darker gray for outer glow

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = container.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setCanvasSize();

    resizeObserverRef.current = new ResizeObserver(() => {
      setCanvasSize();
    });
    resizeObserverRef.current.observe(container);

    const computeLayout = () => {
      const canvasRect = canvas.getBoundingClientRect();
      const chipRect = chipEl.getBoundingClientRect();

      const chipCenter = {
        x: chipRect.left + chipRect.width / 2 - canvasRect.left,
        y: chipRect.top + chipRect.height / 2 - canvasRect.top,
      };

      // pins counts (mirror your sketch)
      const topCount = 7;
      const bottomCount = 7;
      const leftCount = 3;
      const rightCount = 3;

      const chipVisualW = Math.max(180, chipRect.width);
      const chipVisualH = Math.max(70, chipRect.height);

      const hSpan = chipVisualW * 0.84;

      const topPins = Array.from({ length: topCount }, (_, i) => {
        const t = topCount === 1 ? 0.5 : i / (topCount - 1);
        return {
          x: chipCenter.x - hSpan / 2 + t * hSpan,
          y: chipCenter.y - chipVisualH / 2 - 10,
        };
      });

      const bottomPins = Array.from({ length: bottomCount }, (_, i) => {
        const t = bottomCount === 1 ? 0.5 : i / (bottomCount - 1);
        return {
          x: chipCenter.x - hSpan / 2 + t * hSpan,
          y: chipCenter.y + chipVisualH / 2 + 10,
        };
      });

      const vSpan = chipVisualH * 0.6;
      const leftPins = Array.from({ length: leftCount }, (_, i) => {
        const t = leftCount === 1 ? 0.5 : i / (leftCount - 1);
        return {
          x: chipCenter.x - chipVisualW / 2 - 10,
          y: chipCenter.y - vSpan / 2 + t * vSpan,
        };
      });
      const rightPins = Array.from({ length: rightCount }, (_, i) => {
        const t = rightCount === 1 ? 0.5 : i / (rightCount - 1);
        return {
          x: chipCenter.x + chipVisualW / 2 + 10,
          y: chipCenter.y - vSpan / 2 + t * vSpan,
        };
      });

      const pins = { top: topPins, bottom: bottomPins, left: leftPins, right: rightPins };

      // destinations: centers of the service boxes
      const dests = services.map((_, idx) => {
        const boxEl = boxRefs.current[idx];
        if (!boxEl) return null;
        const center = getElementCenterRelativeToCanvas(boxEl, canvas);
        return center;
      });

      // connections follow your picture mapping (top 3, bottom 4 mapping)
      const connections = [
        { pin: pins.top[1], to: dests[0] }, // top-left to first
        { pin: pins.top[3], to: dests[1] }, // top-mid to second
        { pin: pins.top[5], to: dests[2] }, // top-right to third
        { pin: pins.bottom[1], to: dests[3] }, // bottom-left to fourth
        { pin: pins.bottom[3], to: dests[4] }, // bottom-mid to fifth
        { pin: pins.bottom[4], to: dests[5] }, // bottom-mid-right to sixth
        { pin: pins.bottom[6], to: dests[6] }, // bottom-right to seventh
      ];

      const validPaths = connections
        .filter((c) => c.pin && c.to)
        .map((c) => {
          const from = { x: c.pin.x, y: c.pin.y };
          const to = { x: c.to.x, y: c.to.y };
          return { from, to, dist: Math.hypot(to.x - from.x, to.y - from.y) };
        });

      // all pins and which are unconnected
      const connectedPins = connections.map((c) => c.pin);
      const allPins = [...pins.top, ...pins.bottom, ...pins.left, ...pins.right];
      const unconnected = allPins.filter(
        (pin) => !connectedPins.some((cp) => cp && cp.x === pin.x && cp.y === pin.y)
      );

      return { canvasRect, chipCenter, pins, paths: validPaths, unconnected };
    };

    // cubic bezier helper: get point for t (0..1)
    const cubicAt = (t, p0, p1, p2, p3) => {
      const u = 1 - t;
      const tt = t * t;
      const uu = u * u;
      const uuu = uu * u;
      const ttt = tt * t;
      const x = uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x;
      const y = uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y;
      return { x, y };
    };

    // produce control points for a smooth curve that can look like soft-L or flowing curve
    const makeControlPoints = (from, to) => {
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      // base offsets depend on distance and direction
      const d = Math.hypot(dx, dy);
      const common = Math.min(160, d * 0.35);
      // choose bend direction so curve looks natural:
      // if mostly vertical, offset horizontally; if mostly horizontal, offset vertically
      const horizBias = Math.abs(dx) > Math.abs(dy);
      const signX = dx >= 0 ? 1 : -1;
      const signY = dy >= 0 ? 1 : -1;

      const cp1 = {
        x: from.x + (horizBias ? dx * 0.25 : -signX * common * 0.4),
        y: from.y + (horizBias ? signY * common * 0.18 : dy * 0.25),
      };
      const cp2 = {
        x: from.x + (horizBias ? dx * 0.75 : signX * common * 0.4),
        y: from.y + (horizBias ? dy * 0.75 : dy * 0.75 + signY * common * 0.18),
      };
      return [cp1, cp2];
    };

    let lastTs = 0;
    let tProgress = 0;

    const drawFrame = (ts) => {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();

      // subtle vignette
      const w = canvas.width;
      const h = canvas.height;
      const grd = ctx.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, Math.max(w, h) * 0.6);
      grd.addColorStop(0, "rgba(0,40,40,0.06)");
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      const layout = computeLayout();
      const paths = layout.paths;

      // draw each path as sampled cubic bezier segments, with fading tail at the end
      paths.forEach((p, idx) => {
        const [r, g, b] = boxColors[idx];
        const from = p.from;
        const to = p.to;
        const [cp1, cp2] = makeControlPoints(from, to);
        const segments = 120; // finer segments for smooth fade
        // main glowing core (a thin bright spline) - gray cable
        for (let i = 0; i < segments; i++) {
          const t1 = i / segments;
          const t2 = (i + 1) / segments;
          const pt1 = cubicAt(t1, from, cp1, cp2, to);
          const pt2 = cubicAt(t2, from, cp1, cp2, to);

          // fading factor: tail fades towards the end of curve
          const fade = Math.pow(1 - t1, 1.8);
          const alpha = 0.22 * fade + 0.05; // base visibility
          ctx.lineWidth = 1.6 + 2.2 * fade;
          ctx.lineCap = "round";

          // gradient-like color variation via rgba - use gray
          ctx.strokeStyle = `rgba(${cableColor[0]},${cableColor[1]},${cableColor[2]},${alpha})`;
          ctx.beginPath();
          ctx.moveTo(pt1.x, pt1.y);
          ctx.lineTo(pt2.x, pt2.y);
          ctx.stroke();
        }

        // draw a subtle outer glow stroke following same curve - gray glow
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        for (let i = 0; i <= segments; i++) {
          const t = i / segments;
          const q = cubicAt(t, from, cp1, cp2, to);
          if (i === 0) ctx.moveTo(q.x, q.y);
          else ctx.lineTo(q.x, q.y);
        }
        ctx.strokeStyle = `rgba(${cableGlowColor[0]},${cableGlowColor[1]},${cableGlowColor[2]},0.12)`;
        ctx.stroke();

        // endpoint dots (denser near start and end) - gray
        ctx.beginPath();
        ctx.fillStyle = `rgba(${cableColor[0]},${cableColor[1]},${cableColor[2]},0.72)`;
        ctx.arc(from.x, from.y, 3.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(to.x, to.y, 3.2, 0, Math.PI * 2);
        ctx.fill();
      });

      // animated pulses traveling along each path (bright fast dots) - box color
      tProgress += (ts - lastTs) * 0.0006;
      if (tProgress > 1) tProgress -= 1;
      lastTs = ts;

      paths.forEach((p, idx) => {
        const [r, g, b] = boxColors[idx];
        const from = p.from;
        const to = p.to;
        const [cp1, cp2] = makeControlPoints(from, to);
        const pulses = 1;
        for (let pi = 0; pi < pulses; pi++) {
          // offset pulses per path to stagger them
          const offset = (idx / Math.max(1, paths.length)) * 0.45;
          const t0 = (tProgress + offset + pi * 0.12) % 1;
          // one dot
          const pt = cubicAt(t0, from, cp1, cp2, to);
          ctx.beginPath();
          ctx.fillStyle = `rgba(${r},${g},${b},0.95)`;
          ctx.arc(pt.x, pt.y, 3.6, 0, Math.PI * 2);
          ctx.fill();

          // outer glow
          ctx.beginPath();
          ctx.fillStyle = `rgba(${r},${g},${b},0.14)`;
          ctx.arc(pt.x, pt.y, 8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // draw unconnected pins as pulsing circles
      layout.unconnected.forEach((pin) => {
        const pulse = (Math.sin(ts * 0.004 + (pin.x + pin.y) * 0.001) + 1) / 2;
        const alpha = 0.28 + pulse * 0.42;
        const r = 3.8 + pulse * 1.6;
        ctx.beginPath();
        ctx.fillStyle = `rgba(0,255,255,${alpha})`;
        ctx.arc(pin.x, pin.y, r, 0, Math.PI * 2);
        ctx.fill();

        // tiny rim
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0,200,255,${0.25 + pulse * 0.25})`;
        ctx.lineWidth = 1;
        ctx.arc(pin.x, pin.y, r + 3, 0, Math.PI * 2);
        ctx.stroke();
      });

      ctx.restore();
      rafRef.current = requestAnimationFrame(drawFrame);
    };

    rafRef.current = requestAnimationFrame((ts) => {
      lastTs = ts;
      drawFrame(ts);
      setReady(true);
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
  ref={containerRef}
  className="relative z-10 py-16 bg-black overflow-hidden max-w-7xl mx-auto"
>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />
       {/* Cyan blurred background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[200px] h-[50px] rounded-full blur-[300px] bg-cyan-400 opacity-20" />
      </div>

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
     {/* Web Development */}
<div
  ref={(el) => (boxRefs.current[0] = el)}
  className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out"
>
  <div className="absolute inset-0 
    bg-gradient-to-br from-[#0f0f0f] to-[#141414] 
    shadow-[0_0_15px_rgba(207,250,254,0.2),inset_0_0_15px_rgba(207,250,254,0.03)] 
    backdrop-blur-xl 
    flex flex-col items-center justify-center text-center px-5 
    transition-all duration-500 ease-out rounded-lg
"
  >
    <div className="text-cyan-400 mb-2">
      <FaLaptopCode size={38} />
    </div>
    <h3 className="text-sm font-semibold text-white">Web Development</h3>
    <p className="text-xs text-gray-400 mt-1 leading-tight">
      Crafting responsive and dynamic <br /> websites tailored to your <br /> needs.
    </p>
  </div>
</div>



    {/* App Development */}
<div
  ref={(el) => (boxRefs.current[1] = el)}
  className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out "
>
  <div className="absolute inset-0 
    bg-gradient-to-br from-[#0f0f0f] to-[#141414] 
    shadow-[0_0_15px_rgba(255,0,255,0.2),inset_0_0_15px_rgba(255,0,255,0.03)] 
    backdrop-blur-xl 
    flex flex-col items-center justify-center text-center px-5 
    transition-all duration-500 ease-out rounded-lg">
    <div className="text-cyan-400 mb-2"><FaMobileAlt size={38} /></div>
    <h3 className="text-sm font-semibold text-white">App Development</h3>
    <p className="text-xs text-gray-400 mt-1 leading-tight">
      Building innovative and  <br/>user-friendly mobile  <br/>applications.
    </p>
  </div>
</div>


    
{/* Software Development */}
<div
  ref={(el) => (boxRefs.current[2] = el)}
  className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out"
>
  <div className="absolute inset-0 
    bg-gradient-to-br from-[#0f0f0f] to-[#141414] 
    shadow-[0_0_15px_rgba(255,255,0,0.2),inset_0_0_15px_rgba(255,255,0,0.03)] 
    backdrop-blur-xl 
    flex flex-col items-center justify-center text-center px-5 
    rounded-lg">
    <div className="text-cyan-400 mb-2"><FaCode size={38} /></div>
    <h3 className="text-sm font-semibold text-white">Software Development</h3>
    <p className="text-xs text-gray-400 mt-1 leading-tight">
      Custom software solutions to  <br/>optimize your business <br/> processes.
    </p>
  </div>
</div>


        </div>

        {/* Chip area */}
        <div className="flex items-center justify-center relative my-6">
          <div
            ref={chipRef}
            className="relative w-[300px] h-[92px] bg-gradient-to-b from-[#1b1b1b] to-[#0e0e0e] rounded-lg border border-[#222] shadow-[0_18px_60px_rgba(0,0,0,0.7)] flex items-center justify-center overflow-visible"
          >
            {/* pins */}
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

            {/* glowing core */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center text-cyan-300 text-lg font-semibold tracking-wide">
              CyberSpaceWork
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)] animate-pulse" />
            </div>
          </div>
        </div>

        {/* Bottom boxes */}
         {/* Bottom boxes */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-16">

{/* UI/UX Design */}
<div
  ref={(el) => (boxRefs.current[3] = el)}
  className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out "
>
  <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] to-[#141414] 
      shadow-[0_0_15px_rgba(57,255,20,0.2),inset_0_0_15px_rgba(57,255,20,0.03)] 
      backdrop-blur-xl flex flex-col items-center justify-center text-center px-5 rounded-lg">
    <div className="text-cyan-400 mb-2"><FaPalette size={38} /></div>
    <h3 className="text-sm font-semibold text-white">UI/UX Design</h3>
    <p className="text-xs text-gray-400 mt-1 leading-tight">
      Creating intuitive and  <br/>visually appealing user <br/> interfaces.
    </p>
  </div>
</div>
{/* Digital Marketing */}
<div
  ref={(el) => (boxRefs.current[4] = el)}
  className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out "
>
  <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] to-[#141414]
      shadow-[0_0_15px_rgba(225,29,72,0.2),inset_0_0_15px_rgba(225,29,72,0.03)]
      backdrop-blur-xl flex flex-col items-center justify-center text-center px-5 rounded-lg">
    <div className="text-cyan-400 mb-2"><FaBullhorn size={38} /></div>
    <h3 className="text-sm font-semibold text-white">Digital Marketing</h3>
    <p className="text-xs text-gray-400 mt-1 leading-tight">
      Boost your online presence  <br/>with targeted marketing  <br/>strategies.
    </p>
  </div>
</div>

{/* Graphic Design */}
<div
  ref={(el) => (boxRefs.current[5] = el)}
  className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out "
>
  <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] to-[#141414]
      shadow-[0_0_15px_rgba(249,115,22,0.2),inset_0_0_15px_rgba(249,115,22,0.03)]
      backdrop-blur-xl flex flex-col items-center justify-center text-center px-5 rounded-lg">
    <div className="text-cyan-400 mb-2"><FaBrush size={38} /></div>
    <h3 className="text-sm font-semibold text-white">Graphic Design</h3>
    <p className="text-xs text-gray-400 mt-1 leading-tight">
      Designing stunning visuals <br/> to enhance your brand <br/> identity.
    </p>
  </div>
</div>

{/* Branding */}
<div
  ref={(el) => (boxRefs.current[6] = el)}
  className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out"
>
  <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] to-[#141414]
      shadow-[0_0_15px_rgba(167,139,250,0.2),inset_0_0_15px_rgba(167,139,250,0.03)]
      backdrop-blur-xl flex flex-col items-center justify-center text-center px-5 rounded-lg">
    <div className="text-cyan-400 mb-2"><FaTrademark size={38} /></div>
    <h3 className="text-sm font-semibold text-white">Branding</h3>
    <p className="text-xs text-gray-400 mt-1 leading-tight">
      Developing a unique brand <br/> identity that stands out in  <br/>the market.
    </p>
  </div>
</div>


          </div>
      </div>
    </section>
  );
}