"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as THREE from "three";

export default function ServicesCircle({
  title = "Technologies We Use",
  items = [],
  centerLogo = "/logo2.png",
}) {
  const containerRef = useRef(null);
  const mountRef = useRef(null);
  const [size, setSize] = useState(700);

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
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    const center = new THREE.Vector3(0, 0, 0);
    const radius = Math.max(size / 2 - 70, 200);
    const innerCircle = size < 480 ? 50 : size < 768 ? 65 : 80;
    const cardWidth = size < 480 ? 80 : size < 768 ? 100 : 130;
    const spacing = 20;

    const getPos = (idx) => {
      if (idx === 0) return new THREE.Vector3(-radius * 1.2, 0, 0);
      if (idx === items.length - 1) return new THREE.Vector3(radius * 1.2, 0, 0);
      const half = Math.ceil((items.length - 2) / 2);
      if (idx > 0 && idx <= half) {
        const startX = -((half - 1) * (cardWidth + spacing)) / 2;
        return new THREE.Vector3(
          startX + (idx - 1) * (cardWidth + spacing),
          radius * 0.9,
          0
        );
      }
      const startX = -((half - 1) * (cardWidth + spacing)) / 2;
      return new THREE.Vector3(
        startX + (idx - half - 1) * (cardWidth + spacing),
        -radius * 0.9,
        0
      );
    };

    const connectors = [];
    items.forEach((_, idx) => {
      const start = getPos(idx);
      const dir = center.clone().sub(start).normalize();
      const end = dir.clone().multiplyScalar(innerCircle).add(center);

      const curve = new THREE.LineCurve3(start.clone(), end.clone());
      const baseGeom = new THREE.BufferGeometry().setFromPoints(curve.getPoints(20));
      const baseMat = new THREE.LineBasicMaterial({
        color: "#3f3f46",
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
      });
      const baseLine = new THREE.Line(baseGeom, baseMat);
      scene.add(baseLine);

      const glowSegments = [];
      for (let i = 0; i < 18; i++) {
        const geom = new THREE.BufferGeometry();
        const mat = new THREE.LineBasicMaterial({
          color: "#06b6d4",
          transparent: true,
          opacity: 1 - i * 0.04,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          linewidth: 5,
        });
        const seg = new THREE.Line(geom, mat);
        seg.visible = false;
        scene.add(seg);
        glowSegments.push(seg);
      }

      connectors.push({ curve, t: 0, speed: 0.01, segments: glowSegments });
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
          const tail = 0.008;
          const spacing = 0.005;
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
  }, [items, size]);

  const center = { x: size / 2, y: size / 2 };
  const innerCircle = size < 480 ? 50 : size < 768 ? 65 : 80;
  const cardWidth = size < 480 ? 80 : size < 768 ? 100 : 130;
  const cardHeight = size < 480 ? 60 : size < 768 ? 70 : 90;
  const radius = Math.max(size / 2 - cardWidth / 2 - 25, 150);
  const spacing = 20;

  const getUIPos = (idx) => {
    if (idx === 0) return { x: center.x - radius * 1.2, y: center.y };
    if (idx === items.length - 1) return { x: center.x + radius * 1.2, y: center.y };
    const half = Math.ceil((items.length - 2) / 2);
    if (idx > 0 && idx <= half) {
      const startX = center.x - ((half - 1) * (cardWidth + spacing)) / 2;
      return { x: startX + (idx - 1) * (cardWidth + spacing), y: center.y - radius * 0.9 };
    }
    const startX = center.x - ((half - 1) * (cardWidth + spacing)) / 2;
    return { x: startX + (idx - half - 1) * (cardWidth + spacing), y: center.y + radius * 0.9 };
  };

  return (
    <section
      ref={containerRef}
      className="w-full flex justify-center items-center  bg-black relative overflow-hidden"
    >
      <div className="relative text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-wide">
          {title}
        </h2>
        <div className="relative" style={{ width: size, height: size }}>
          <div ref={mountRef} className="absolute inset-0" />

          {/* Center Logo */}
          <div
            className="absolute flex items-center justify-center z-10"
            style={{
              left: center.x - innerCircle,
              top: center.y - innerCircle,
              width: innerCircle * 2,
              height: innerCircle * 2,
            }}
          >
            <div
              className="relative flex items-center justify-center rounded-full bg-black border border-gray-700 shadow-[0_0_40px_rgba(34,211,238,0.8)]"
              style={{ width: innerCircle * 2, height: innerCircle * 2 }}
            >
              <Image
                src={centerLogo}
                alt="Center Logo"
                className="w-[65%] md:w-[75%] h-auto object-contain"
              />
            </div>
          </div>

          {/* Outer Tech Cards */}
          {items.map((s, idx) => {
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
                  className="w-full h-full rounded-xl flex flex-col items-center justify-center px-1.5 py-1 backdrop-blur-xl transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(31,31,31,0.9), rgba(17,17,17,0.8))",
                    boxShadow: "0 0 6px 0.5px rgba(34,211,238,0.8)",
                  }}
                >
                  <div className="text-cyan-400 mb-1">{s.icon}</div>
                  <span className="text-[10px] sm:text-xs font-medium text-white text-center">
                    {s.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
