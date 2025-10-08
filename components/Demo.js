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
    "#00ffff", "#ff00ff", "#ffff00", "#ff8800", "#00ff88", "#8888ff", "#ff4444",
    "#ff00aa", "#00ffaa", "#ff9900", "#66ccff", "#cc66ff", "#ff6666", "#33ffff",
    "#ffaa33", "#33ff77", "#aa33ff", "#00ffcc",
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

    const count = services.length;
    const center = new THREE.Vector3(0, 0, 0);
    const radius = Math.max(
      (size < 500 ? 100 * 1.2 : 140 * 1.2) / (2 * Math.sin(Math.PI / count)),
      size / 2 - (size < 500 ? 100 : 140) / 2 - 20
    );

    const cardPositions = services.map((_, idx) => {
      const angle = (idx / count) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return new THREE.Vector3(x, -y, 0);
    });

    // Connectors (straight line but curved at start)
    const connectors = [];
    cardPositions.forEach((pos, idx) => {
      const color = new THREE.Color(glowColors[idx % glowColors.length]);

      // Make the path mostly straight but curved at start
      const curve = new THREE.CatmullRomCurve3([
        pos.clone().multiplyScalar(1.05),
        pos.clone().multiplyScalar(0.6).add(new THREE.Vector3(0, 30, 0)),
        center.clone(),
      ]);

      // Base faint line
      const baseLine = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(60)),
        new THREE.LineBasicMaterial({
          color: "#3f3f46",
          transparent: true,
          opacity: 0.3,
          depthWrite: false,
        })
      );
      scene.add(baseLine);

      // Glow line segments
      const glowSegments = [];
      for (let i = 0; i < 25; i++) {
        const geom = new THREE.BufferGeometry();
        const mat = new THREE.LineBasicMaterial({
          color: color,
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
        speed: 0.005,
        segments: glowSegments,
      });
    });

    let animationStarted = false;

    // Start after 7 seconds delay
    setTimeout(() => {
      animationStarted = true;
    }, 4000);

    const animate = () => {
      requestAnimationFrame(animate);
      if (!animationStarted) {
        renderer.render(scene, camera);
        return;
      }

      connectors.forEach((c) => {
        c.t += c.speed;
        if (c.t > 1.2) c.t = 0; // Restart after reaching cards

        c.segments.forEach((seg, i) => {
          const tail = 0.03;
          const spacing = 0.02;
          const t1 = THREE.MathUtils.clamp(c.t - i * spacing, 0, 1);
          const t2 = THREE.MathUtils.clamp(t1 - tail, 0, 1);

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
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [services, size]);

  const count = services.length;
  const center = { x: size / 2, y: size / 2 };
  const innerCircle = 80;
  const cardWidth = size < 500 ? 100 : 140;
  const cardHeight = size < 500 ? 70 : 90;
  const minRadius = (cardWidth * 1.2) / (2 * Math.sin(Math.PI / count));
  const radius = Math.max(minRadius, size / 2 - cardWidth / 2 - 20);

  const getPos = (idx) => {
    const angle = (idx / count) * Math.PI * 2 - Math.PI / 2;
    return {
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius,
      angle,
    };
  };

  return (
    <section
      ref={containerRef}
      className="w-full flex justify-center items-center py-36 bg-black relative overflow-hidden"
    >
      <div className="relative" style={{ width: size, height: size, minWidth: 320 }}>
        <div ref={mountRef} className="absolute inset-0" style={{ width: size, height: size }} />

        {/* Center logo */}
        <div
          className="absolute flex flex-col items-center justify-center rounded-full text-center z-10"
          style={{
            left: center.x - innerCircle,
            top: center.y - innerCircle,
            width: innerCircle * 2,
            height: innerCircle * 2,
          }}
        >
          <div className="relative w-32 h-32 bg-black border border-gray-700 rounded-full flex items-center justify-center shadow-[0_0_45px_rgba(0,255,255,0.6)]">
            <img src="/logo2.png" alt="Logo" className="h-24 w-auto" />
          </div>
        </div>

        {/* Service Cards */}
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
                className="w-full h-full rounded-xl flex flex-col items-center justify-center px-3 text-center border border-transparent backdrop-blur-xl transition-transform duration-300 "
                style={{
                  background: "linear-gradient(180deg, rgba(31,31,31,0.9), rgba(17,17,17,0.8))",
                  boxShadow: `0 0 6px 0.5px ${glowColors[idx % glowColors.length]}80`,
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
