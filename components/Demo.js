"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  FaReact,
  FaNodeJs,
  FaCode,
  FaDatabase,
  FaJs,
  FaCss3Alt,
  FaMobileAlt,
  FaWordpress,
  FaWix,
  FaGlobe,
  FaDraftingCompass,
  FaCube,
  FaPaintBrush,
  FaBolt,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";

export default function ServicesCircle() {
  const containerRef = useRef(null);
  const mountRef = useRef(null); // Ref for Three.js canvas
  const [size, setSize] = useState(700);

  const services = [
    { name: "React.js", icon: <FaReact size={24} /> },
    { name: "Node.js", icon: <FaNodeJs size={24} /> },
    { name: "Express.js", icon: <FaCode size={24} /> },
    { name: "MongoDB", icon: <FaDatabase size={24} /> },
    { name: "Next.js", icon: <FaJs size={24} /> },
    { name: "Tailwind CSS", icon: <FaCss3Alt size={24} /> },
    { name: "React Native", icon: <FaMobileAlt size={24} /> },
    { name: "Flutter", icon: <FaFlutter size={24} /> },
    { name: "PostgreSQL", icon: <FaDatabase size={24} /> },
    { name: "TypeScript", icon: <FaJs size={24} /> },
    { name: "WordPress", icon: <FaWordpress size={24} /> },
    { name: "Wix", icon: <FaWix size={24} /> },
    { name: "Webflow", icon: <FaGlobe size={24} /> },
    { name: "Framer", icon: <FaDraftingCompass size={24} /> },
    { name: "three.js", icon: <FaCube size={24} /> },
    { name: "GSAP", icon: <FaBolt size={24} /> },
    { name: "shadcn", icon: <FaPaintBrush size={24} /> },
    { name: "radix ui", icon: <FaDraftingCompass size={24} /> },
  ];

  const glowColors = [
    "rgba(59,130,246,0.6)", "rgba(34,197,94,0.6)", "rgba(234,179,8,0.6)",
    "rgba(168,85,247,0.6)", "rgba(239,68,68,0.6)", "rgba(6,182,212,0.6)",
    "rgba(236,72,153,0.6)", "rgba(16,185,129,0.6)", "rgba(99,102,241,0.6)",
    "rgba(249,115,22,0.6)", "rgba(139,92,246,0.6)", "rgba(20,184,166,0.6)",
    "rgba(251,191,36,0.6)", "rgba(132,204,22,0.6)", "rgba(244,63,94,0.6)",
    "rgba(79,70,229,0.6)", "rgba(34,211,238,0.6)", "rgba(217,70,239,0.6)",
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const resize = () => {
      const rect = el.getBoundingClientRect();
      const s = Math.min(rect.width, 900);
      setSize(s);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    // Three.js setup
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = null; // Transparent background to show SVG underneath

    const camera = new THREE.OrthographicCamera(
      -size / 2,
      size / 2,
      size / 2,
      -size / 2,
      0.1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(size, size);
    mount.appendChild(renderer.domElement);

    const count = services.length;
    const center = new THREE.Vector3(0, 0, 0);
    const radius = Math.max((size < 500 ? 100 * 1.2 : 140 * 1.2) / (2 * Math.sin(Math.PI / count)), size / 2 - (size < 500 ? 100 : 140) / 2 - 20);

    // Convert SVG coordinates to Three.js coordinates
    const cardPositions = services.map((_, idx) => {
      const angle = (idx / count) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return new THREE.Vector3(x, -y, 0); // Invert y-axis to match SVG
    });

    // Create animated meteors
    const meteors = [];
    const tailLength = 40;
    cardPositions.forEach((pos, idx) => {
      const curve = new THREE.CubicBezierCurve3(
        pos,
        new THREE.Vector3(pos.x * 0.7, pos.y * 0.7, 0),
        new THREE.Vector3(pos.x * 0.3, pos.y * 0.3, 0),
        center
      );

      // Base line with gray-700
      const baseLine = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(40)),
        new THREE.LineBasicMaterial({ color: "#374151", transparent: true, opacity: 0.3 })
      );
      scene.add(baseLine);

      // Tail segments with matching card glow color
      const segments = [];
      for (let i = 0; i < tailLength; i++) {
        const geom = new THREE.BufferGeometry();
        const mat = new THREE.LineBasicMaterial({
          color: glowColors[idx].replace(/,0\.6\)/, ""), // Use card's glow color
          transparent: true,
          opacity: 1 - i / tailLength,
        });
        const line = new THREE.Line(geom, mat);
        scene.add(line);
        segments.push(line);
      }

      meteors.push({ curve, t: 0, speed: 0.01 + idx * 0.002, segments });
    });

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);

      meteors.forEach((m) => {
        m.t += m.speed;
        if (m.t > 1) m.t = 0;

        m.segments.forEach((seg, i) => {
          const t1 = m.t - i * 0.01;
          const t2 = t1 - 0.01;
          if (t2 < 0) {
            seg.visible = false;
            return;
          }
          const p1 = m.curve.getPoint(t1);
          const p2 = m.curve.getPoint(t2);
          const geom = new THREE.BufferGeometry().setFromPoints([p1, p2]);
          seg.geometry.dispose();
          seg.geometry = geom;
          seg.visible = true;
        });
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const s = Math.min(el.getBoundingClientRect().width, 900);
      setSize(s);
      camera.left = -s / 2;
      camera.right = s / 2;
      camera.top = s / 2;
      camera.bottom = -s / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(s, s);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [services, glowColors, size]);

  const count = services.length;
  const center = { x: size / 2, y: size / 2 };
  const innerCircle = 80;

  const cardWidth = size < 500 ? 100 : 140;
  const cardHeight = size < 500 ? 70 : 90;
  const minRadius = (cardWidth * 1.2) / (2 * Math.sin(Math.PI / count));
  const radius = Math.max(minRadius, size / 2 - cardWidth / 2 - 20);

  const getPos = (idx) => {
    const angle = (idx / count) * Math.PI * 2 - Math.PI / 2;
    const x = center.x + Math.cos(angle) * radius;
    const y = center.y + Math.sin(angle) * radius;
    return { x, y, angle };
  };

  return (
    <section
      ref={containerRef}
      className="w-full flex justify-center items-center py-36 bg-black z-0"
    >
      <div className="relative" style={{ width: size, height: size, minWidth: 320 }}>
        {/* Three.js canvas */}
        <div
          ref={mountRef}
          className="absolute inset-0"
          style={{ width: size, height: size }}
        />

        {/* SVG Layer */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={`0 0 ${size} ${size}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {services.map((_, idx) => (
              <linearGradient
                key={`glow-${idx}`}
                id={`glow-${idx}`}
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor={glowColors[idx]} stopOpacity="0" />
                <stop offset="50%" stopColor={glowColors[idx]} stopOpacity="1" />
                <stop offset="100%" stopColor={glowColors[idx]} stopOpacity="0" />
              </linearGradient>
            ))}
            <style>
              {`
                .line-glow {
                  stroke-dasharray: 10 10;
                  stroke-dashoffset: 0;
                  animation: dash 2s linear infinite;
                }
                @keyframes dash {
                  to { stroke-dashoffset: -20; }
                }
              `}
            </style>
          </defs>

          {services.map((_, idx) => {
            const { x, y } = getPos(idx);
            return (
              <g key={`line-group-${idx}`}>
                {/* Base line with gray-700 */}
                <line
                  x1={x}
                  y1={y}
                  x2={center.x}
                  y2={center.y}
                  stroke="#374151"
                  strokeWidth={2}
                />
                {/* Glowing line with matching card color */}
                <line
                  x1={x}
                  y1={y}
                  x2={center.x}
                  y2={center.y}
                  stroke={`url(#glow-${idx})`}
                  strokeWidth={2}
                  className="line-glow"
                />
              </g>
            );
          })}
        </svg>

        {/* Central circle */}
        <div
          className="absolute flex flex-col items-center justify-center rounded-full text-center z-10"
          style={{
            left: center.x - innerCircle,
            top: center.y - innerCircle,
            width: innerCircle * 2,
            height: innerCircle * 2,
          }}
        >
          <div className="relative w-32 h-32 bg-black border border-gray-700 rounded-full flex items-center justify-center text-white font-semibold tracking-widest">
            <img src="/logo2.png" alt="Logo" className="h-25 w-auto" />
          </div>
        </div>

        {/* Cards */}
        {services.map((s, idx) => {
          const { x, y, angle } = getPos(idx);
          const deg = (angle * 180) / Math.PI;
          return (
            <div
              key={s.name}
              className="absolute flex items-center justify-center"
              style={{
                left: x - cardWidth / 2,
                top: y - cardHeight / 2,
                width: cardWidth,
                height: cardHeight,
                transform: `rotate(${deg}deg)`,
              }}
            >
              <div
                className="w-full h-full rounded-xl flex flex-col items-center justify-center px-3 text-center border border-transparent backdrop-blur-xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(31,31,31,0.9), rgba(17,17,17,0.8))",
                  boxShadow: `0 0 10px 2px ${glowColors[idx]}`,
                  transform: `rotate(${-deg}deg)`,
                }}
              >
                <div className="text-cyan-400 mb-2">{s.icon}</div>
                <span className="text-xs sm:text-sm font-medium text-white">{s.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}