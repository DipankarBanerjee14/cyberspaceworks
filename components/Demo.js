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

      // 🔹 Responsive scaling for mobile & tablet
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

    const count = services.length;
    const center = new THREE.Vector3(0, 0, 0);
    const radius = Math.max(size / 2 - 70, 200);

    const cardPositions = services.map((_, idx) => {
      const angle = (idx / count) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return new THREE.Vector3(x, -y, 0);
    });

    const connectors = [];
    cardPositions.forEach((pos, idx) => {
      const color = new THREE.Color(glowColors[idx % glowColors.length]);
      const curve = new THREE.CatmullRomCurve3([
        pos.clone().multiplyScalar(1.03),
        pos.clone().multiplyScalar(0.7).add(new THREE.Vector3(0, 6, 0)),
        pos.clone().multiplyScalar(0.5).add(new THREE.Vector3(0, 10, 0)),
        center.clone(),
      ]);

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
    setTimeout(() => (animationStarted = true), 2000);

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

  const count = services.length;
  const center = { x: size / 2, y: size / 2 };

  // 🔹 Responsive element sizing
  const innerCircle = size < 480 ? 50 : size < 768 ? 65 : 80;
  const cardWidth = size < 480 ? 80 : size < 768 ? 100 : 130;
  const cardHeight = size < 480 ? 60 : size < 768 ? 70 : 90;
  const radius = Math.max(size / 2 - cardWidth / 2 - 25, 150);

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
      className="w-full flex justify-center items-center py-20 sm:py-28 md:py-36 bg-black relative overflow-hidden"
    >
      <div
        className="relative"
        style={{
          width: size,
          height: size,
          minWidth: 300,
          maxWidth: "100vw",
        }}
      >
        <div ref={mountRef} className="absolute inset-0" style={{ width: size, height: size }} />

        {/* Center logo */}
    {/* Center logo (Perfect Circle) */}
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
    className="relative flex items-center justify-center rounded-full bg-black border border-gray-700 shadow-[0_0_40px_rgba(0,255,255,0.6)] overflow-hidden"
    style={{
      width: innerCircle * 2,
      height: innerCircle * 2,
    }}
  >
    <img
      src="/logo2.png"
      alt="Logo"
      className="w-[60%] sm:w-[70%] md:w-[75%] h-auto object-contain"
    />
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
                className="w-full h-full rounded-xl flex flex-col items-center justify-center px-1.5 py-1 text-center border border-transparent backdrop-blur-xl transition-transform duration-300"
                style={{
                  background: "linear-gradient(180deg, rgba(31,31,31,0.9), rgba(17,17,17,0.8))",
                  boxShadow: `0 0 6px 0.5px ${glowColors[idx % glowColors.length]}80`,
                  transform: `rotate(${-deg}deg)`,
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
