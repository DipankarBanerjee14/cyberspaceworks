"use client";
import React, { useEffect, useRef, useState } from "react";
import { SiReact, SiNextdotjs } from "react-icons/si";

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
      icon: <SiReact size={38} className="text-cyan-400" />,
      rgb: [0, 255, 255],
    },
    {
      icon: <SiNextdotjs size={38} className="text-fuchsia-500" />,
      rgb: [255, 0, 255],
    },
    {
      icon: (
        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">
          SWR
        </div>
      ),
      rgb: [255, 165, 0],
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

      const topCount = 7;
      const bottomCount = 7;
      const leftCount = 3;
      const rightCount = 3;

      const chipVisualW = Math.max(180, chipRect.width);
      const chipVisualH = Math.max(70, chipRect.height);

      const hSpan = chipVisualW * 0.84;

      const topPins = Array.from({ length: topCount }, (_, i) => {
        const t = i / (topCount - 1);
        return {
          x: chipCenter.x - hSpan / 2 + t * hSpan,
          y: chipCenter.y - chipVisualH / 2 - 10,
        };
      });

      const bottomPins = Array.from({ length: bottomCount }, (_, i) => {
        const t = i / (bottomCount - 1);
        return {
          x: chipCenter.x - hSpan / 2 + t * hSpan,
          y: chipCenter.y + chipVisualH / 2 + 10,
        };
      });

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

      const dests = services.map((_, idx) => {
        const boxEl = boxRefs.current[idx];
        if (!boxEl) return null;
        const center = getElementCenterRelativeToCanvas(boxEl, canvas);
        return center;
      });

      const connections = [
        { pin: pins.bottom[1], to: dests[0] },
        { pin: pins.bottom[3], to: dests[1] },
        { pin: pins.bottom[5], to: dests[2] },
      ];

      const paths = connections
        .filter((c) => c.pin && c.to)
        .map((c, idx) => {
          const from = { x: c.pin.x, y: c.pin.y };
          const to = { x: c.to.x, y: c.to.y };
          const dx = to.x - from.x;
          const dy = to.y - from.y;
          const legH = Math.abs(dx);
          const legV = Math.abs(dy);
          let control1, control2;
          if (legH <= legV) {
            control1 = { x: from.x + dx / 3, y: from.y };
            control2 = { x: to.x, y: to.y - dy / 3 };
          } else {
            control1 = { x: from.x, y: from.y + dy / 3 };
            control2 = { x: to.x - dx / 3, y: to.y };
          }
          return { from, to, control1, control2, dist: Math.hypot(dx, dy), rgb: services[idx].rgb };
        });

      const connectedPins = connections.map((c) => c.pin);
      const allPins = [...pins.top, ...pins.bottom, ...pins.left, ...pins.right];
      const unconnected = allPins.filter(
        (pin) => !connectedPins.some((cp) => cp.x === pin.x && cp.y === pin.y)
      );

      return { canvasRect, chipCenter, pins, paths, unconnected };
    };

    let lastTs = 0;
    let tProgress = 0;

    const drawFrame = (ts) => {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();

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

      const layout = computeLayout();
      const paths = layout.paths;

      paths.forEach((p) => {
        const rgb = p.rgb;
        const grad = ctx.createLinearGradient(p.from.x, p.from.y, p.to.x, p.to.y);
        grad.addColorStop(0, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.95)`);
        grad.addColorStop(
          0.5,
          `rgba(${Math.floor(rgb[0] * 0.8)},${Math.floor(rgb[1] * 0.8)},${Math.floor(
            rgb[2] * 0.8
          )},0.7)`
        );
        grad.addColorStop(
          1,
          `rgba(${Math.floor(rgb[0] * 0.8)},${Math.floor(rgb[1] * 0.8)},${Math.floor(
            rgb[2] * 0.8
          )},0)`
        );

        const steps = 40;
        ctx.lineCap = "round";
        const getPoint = (t) => {
          const omt = 1 - t;
          const omt2 = omt * omt;
          const omt3 = omt2 * omt;
          const t2 = t * t;
          const t3 = t2 * t;
          const a = omt3;
          const b = 3 * omt2 * t;
          const c = 3 * omt * t2;
          const d = t3;
          return {
            x: a * p.from.x + b * p.control1.x + c * p.control2.x + d * p.to.x,
            y: a * p.from.y + b * p.control1.y + c * p.control2.y + d * p.to.y,
          };
        };
        for (let i = 0; i < steps; i++) {
          const t1 = i / steps;
          const t2 = (i + 1) / steps;
          const fade = Math.pow(1 - t1, 1.5);
          ctx.strokeStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${0.25 * fade})`;
          ctx.lineWidth = 2.2 + 2 * fade;

          const a = getPoint(t1);
          const b = getPoint(t2);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }

        ctx.lineWidth = 1.6;
        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(p.from.x, p.from.y);
        ctx.bezierCurveTo(
          p.control1.x,
          p.control1.y,
          p.control2.x,
          p.control2.y,
          p.to.x,
          p.to.y
        );
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = `rgba(${rgb[0]},${Math.floor(rgb[1] * 0.94)},${rgb[2]},0.65)`;
        ctx.arc(p.to.x, p.to.y, 3.2, 0, Math.PI * 2);
        ctx.fill();
      });

      tProgress += (ts - lastTs) * 0.00035;
      if (tProgress > 1) tProgress -= 1;
      lastTs = ts;

      paths.forEach((p, idx) => {
        const rgb = p.rgb;
        const offset = (idx / paths.length) * 0.5;
        let t = (tProgress + offset) % 1;

        const getPoint = (tt) => {
          const omt = 1 - tt;
          const omt2 = omt * omt;
          const omt3 = omt2 * omt;
          const t2 = tt * tt;
          const t3 = t2 * tt;
          const a = omt3;
          const b = 3 * omt2 * tt;
          const c = 3 * omt * t2;
          const d = t3;
          return {
            x: a * p.from.x + b * p.control1.x + c * p.control2.x + d * p.to.x,
            y: a * p.from.y + b * p.control1.y + c * p.control2.y + d * p.to.y,
          };
        };

        const pulses = 1;
        for (let pi = 0; pi < pulses; pi++) {
          const tp = (t + pi * 0.12) % 1;
          const point = getPoint(tp);

          ctx.beginPath();
          ctx.fillStyle = `rgba(${rgb[0]},${Math.floor(rgb[1] * 0.9)},${rgb[2]},0.18)`;
          ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.95)`;
          ctx.arc(point.x, point.y, 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      layout.unconnected.forEach((pin) => {
        ctx.beginPath();
        const pulse = (Math.sin(ts * 0.004) + 1) / 2;
        ctx.fillStyle = `rgba(0,255,255,${0.3 + pulse * 0.4})`;
        ctx.arc(pin.x, pin.y, 3.8 + pulse * 1.2, 0, Math.PI * 2);
        ctx.fill();
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
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 py-16 px-4 bg-black overflow-hidden max-w-7xl mx-auto"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(14,186,199,0.12), transparent 45%)",
        }}
      />

      <div className="relative text-center z-10">
     
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 relative z-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={(el) => (boxRefs.current[idx] = el)}
              className="relative group"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 rounded-2xl opacity-70 group-hover:opacity-100 blur transition-opacity duration-700"></div>
              <div className="relative bg-gradient-to-b from-black/70 to-black/90 rounded-2xl p-6 border border-white/10 backdrop-blur-md text-center">
                <div className="flex justify-center items-center mb-4">
                  {service.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
           {/* Chip area */}
        <div className="flex items-center justify-center relative my-12">
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

            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center text-cyan-300 text-lg font-semibold tracking-wide">
              Powered By
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)] animate-pulse" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
