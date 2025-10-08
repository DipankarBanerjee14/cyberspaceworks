"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  FaReact, FaNodeJs, FaCode, FaDatabase, FaJs, FaCss3Alt, FaMobileAlt,
  FaWordpress, FaWix, FaGlobe, FaDraftingCompass, FaCube,
  FaPaintBrush, FaBolt
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";

export default function ServicesCircle() {
  const containerRef = useRef(null);
  const mountRef = useRef(null);
  const [size, setSize] = useState(700);

  const services = [
    { name: "React.js", icon: <FaReact size={22} /> },
    { name: "Node.js", icon: <FaNodeJs size={22} /> },
    { name: "Express.js", icon: <FaCode size={22} /> },
    { name: "MongoDB", icon: <FaDatabase size={22} /> },
    { name: "Next.js", icon: <FaJs size={22} /> },
    { name: "Tailwind CSS", icon: <FaCss3Alt size={22} /> },
    { name: "React Native", icon: <FaMobileAlt size={22} /> },
    { name: "Flutter", icon: <FaFlutter size={22} /> },
    { name: "PostgreSQL", icon: <FaDatabase size={22} /> },
    { name: "TypeScript", icon: <FaJs size={22} /> },
    { name: "WordPress", icon: <FaWordpress size={22} /> },
    { name: "Wix", icon: <FaWix size={22} /> },
    { name: "Webflow", icon: <FaGlobe size={22} /> },
    { name: "Framer", icon: <FaDraftingCompass size={22} /> },
    { name: "three.js", icon: <FaCube size={22} /> },
    { name: "GSAP", icon: <FaBolt size={22} /> },
    { name: "shadcn", icon: <FaPaintBrush size={22} /> },
    { name: "radix ui", icon: <FaDraftingCompass size={22} /> },
  ];

  const glowColors = [
    "#00ffff", "#ff00ff", "#ffff00", "#ff8800", "#00ff88", "#8888ff", "#ff4444",
    "#ff00aa", "#00ffaa", "#ff9900", "#66ccff", "#cc66ff", "#ff6666", "#33ffff",
    "#ffaa33", "#33ff77", "#aa33ff", "#00ffcc",
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const resize = () => {
      const rect = el.getBoundingClientRect();
      let s = Math.min(rect.width, 900);
      if (window.innerWidth < 480) s = 340;
      else if (window.innerWidth < 768) s = 480;
      else if (window.innerWidth < 1024) s = 600;
      else s = 750;
      setSize(s);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(el);

    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.OrthographicCamera(
      -size / 2, size / 2, size / 2, -size / 2, 0.1, 1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(size, size);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    const center = new THREE.Vector3(0, 0, 0);
    const radius = Math.max(size / 2 - 70, 200);
    const innerCircle = size < 480 ? 50 : size < 768 ? 65 : 80;

    const cardWidth = size < 480 ? 80 : size < 768 ? 100 : 130;
    const topCount = 8;
    const bottomCount = 8;
    const horizontalSpacing = 40;

    const getPos = (idx) => {
      const totalSpacingTop = (topCount - 1) * horizontalSpacing;
      const totalWidthTop = cardWidth * topCount + totalSpacingTop;
      const startXTop = -totalWidthTop / 2 + cardWidth / 2;

      const totalSpacingBottom = (bottomCount - 1) * horizontalSpacing;
      const totalWidthBottom = cardWidth * bottomCount + totalSpacingBottom;
      const startXBottom = -totalWidthBottom / 2 + cardWidth / 2;

      if (idx < topCount)
        return new THREE.Vector3(startXTop + idx * (cardWidth + horizontalSpacing), radius * 0.7, 0);
      else if (idx < topCount + bottomCount) {
        const adj = idx - topCount;
        return new THREE.Vector3(startXBottom + adj * (cardWidth + horizontalSpacing), -radius * 0.7, 0);
      } else if (idx === topCount + bottomCount)
        return new THREE.Vector3(-radius * 1.1, 0, 0);
      else return new THREE.Vector3(radius * 1.1, 0, 0);
    };

    // --- Create connectors (card → inner circle edge) ---
    const connectors = [];
    services.forEach((_, idx) => {
      const start = getPos(idx); // card position

      // compute direction and end point at circle edge
      const dir = center.clone().sub(start).normalize();
      const end = dir.clone().multiplyScalar(innerCircle).add(center);

      const color = new THREE.Color(glowColors[idx % glowColors.length]);

      // Base connector (gray line)
      const curve = new THREE.LineCurve3(start.clone(), end.clone());
      const baseGeom = new THREE.BufferGeometry().setFromPoints(curve.getPoints(20));
      const baseMat = new THREE.LineBasicMaterial({
        color: "#3f3f46", // gray-700
        transparent: true,
        opacity: 0.4,
        depthWrite: false,
      });
      const baseLine = new THREE.Line(baseGeom, baseMat);
      scene.add(baseLine);

      // Glow animation (inward motion)
      const glowSegments = [];
      for (let i = 0; i < 25; i++) {
        const geom = new THREE.BufferGeometry();
        const mat = new THREE.LineBasicMaterial({
          color,
          transparent: true,
          opacity: 1 - i * 0.04,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const seg = new THREE.Line(geom, mat);
        seg.visible = false;
        scene.add(seg);
        glowSegments.push(seg);
      }

      connectors.push({
        curve,
        t: 0,
        speed: 0.006,
        segments: glowSegments,
      });
    });

    let animationStarted = false;
    setTimeout(() => (animationStarted = true), 1500);

    const animate = () => {
      requestAnimationFrame(animate);
      if (!animationStarted) {
        renderer.render(scene, camera);
        return;
      }

      connectors.forEach((c) => {
        c.t += c.speed;
        if (c.t > 1.2) c.t = 0;

        c.segments.forEach((seg, i) => {
          const tail = 0.03;
          const spacing = 0.02;
          const t1 = THREE.MathUtils.clamp(c.t - i * spacing, 0, 1);
          const t2 = THREE.MathUtils.clamp(t1 - tail, 0, 1);

          // Inward motion: card → circle edge
          const p1 = c.curve.getPoint(t1);
          const p2 = c.curve.getPoint(t2);

          const g = new THREE.BufferGeometry().setFromPoints([p1, p2]);
          seg.geometry.dispose();
          seg.geometry = g;
          seg.visible = t1 > 0 && t2 >= 0;
        });
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      resize();
      camera.left = -size / 2;
      camera.right = size / 2;
      camera.top = size / 2;
      camera.bottom = -size / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(size, size);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [services, size]);

  // --- UI Overlay ---
  const center = { x: size / 2, y: size / 2 };
  const innerCircle = size < 480 ? 50 : size < 768 ? 65 : 80;
  const cardWidth = size < 480 ? 80 : size < 768 ? 100 : 130;
  const cardHeight = size < 480 ? 60 : size < 768 ? 70 : 90;
  const radius = Math.max(size / 2 - cardWidth / 2 - 25, 150);
  const horizontalSpacing = 40;

  const getUIPos = (idx) => {
    const totalSpacingTop = (8 - 1) * horizontalSpacing;
    const totalWidthTop = cardWidth * 8 + totalSpacingTop;
    const startXTop = -totalWidthTop / 2 + cardWidth / 2;

    const totalSpacingBottom = (8 - 1) * horizontalSpacing;
    const totalWidthBottom = cardWidth * 8 + totalSpacingBottom;
    const startXBottom = -totalWidthBottom / 2 + cardWidth / 2;

    const p = (() => {
      if (idx < 8)
        return { x: startXTop + idx * (cardWidth + horizontalSpacing), y: radius * 0.7 };
      else if (idx < 16) {
        const adj = idx - 8;
        return { x: startXBottom + adj * (cardWidth + horizontalSpacing), y: -radius * 0.7 };
      } else if (idx === 16) return { x: -radius * 1.1, y: 0 };
      else return { x: radius * 1.1, y: 0 };
    })();

    return { x: p.x + size / 2, y: size / 2 - p.y };
  };

  return (
    <section
      ref={containerRef}
      className="w-full flex justify-center items-center py-20 sm:py-28 md:py-36 bg-black relative overflow-hidden"
    >
      <div className="relative" style={{ width: size, height: size }}>
        <div ref={mountRef} className="absolute inset-0" style={{ width: size, height: size }} />

        {/* Center Circle */}
        <div
          className="absolute flex flex-col items-center justify-center text-center z-10"
          style={{
            left: center.x - innerCircle,
            top: center.y - innerCircle,
            width: innerCircle * 2,
            height: innerCircle * 2,
          }}
        >
          <div
            className="relative flex items-center justify-center rounded-full bg-black border border-gray-700 shadow-[0_0_40px_rgba(0,255,255,0.6)]"
            style={{ width: innerCircle * 2, height: innerCircle * 2 }}
          >
            <img
              src="/logo2.png"
              alt="Logo"
              className="w-[60%] sm:w-[70%] md:w-[75%] h-auto object-contain"
            />
          </div>
        </div>

        {/* Cards */}
        {services.map((s, idx) => {
          const { x, y } = getUIPos(idx);
          return (
            <div
              key={s.name}
              className="absolute flex items-center justify-center"
              style={{
                left: x - cardWidth / 2,
                top: y - cardHeight / 2,
                width: cardWidth,
                height: cardHeight,
              }}
            >
              <div
                className="w-full h-full rounded-xl flex flex-col items-center justify-center px-1.5 py-1 border border-transparent backdrop-blur-xl transition-transform duration-300"
                style={{
                  background: "linear-gradient(180deg, rgba(31,31,31,0.9), rgba(17,17,17,0.8))",
                  boxShadow: `0 0 12px 2px ${glowColors[idx % glowColors.length]}80`,
                }}
              >
                <div className="text-cyan-400 mb-1">{s.icon}</div>
                <span className="text-[10px] sm:text-xs font-medium text-white">
                  {s.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
