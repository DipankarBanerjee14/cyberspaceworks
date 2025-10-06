"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PoweredBySection() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0a0a0a");

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // Bigger microchip base
    const chipWidth = 6;
    const chipHeight = 2;
    const chipGeometry = new THREE.BoxGeometry(chipWidth, chipHeight, 0.2);
    const chipMaterial = new THREE.MeshStandardMaterial({
      color: "#111",
      emissive: "#00ffff",
      emissiveIntensity: 0.3,
    });
    const chip = new THREE.Mesh(chipGeometry, chipMaterial);
    scene.add(chip);

    // Pins with spacing around the chip
    const pinMaterial = new THREE.MeshStandardMaterial({ color: "#888" });
    const pinGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.2);
    const pinOffsetY = chipHeight / 2;
    const bottomPinPositions = [];

    const pinCount = 7;
    const pinInset = 0.5; // space from edge
    const pinSpacing = (chipWidth - 2 * pinInset) / (pinCount - 1);
    const pinStartX = -chipWidth / 2 + pinInset;

    for (let i = 0; i < pinCount; i++) {
      const x = pinStartX + i * pinSpacing;

      const topPin = new THREE.Mesh(pinGeometry, pinMaterial);
      topPin.position.set(x, pinOffsetY, 0);
      scene.add(topPin);

      const bottomPin = new THREE.Mesh(pinGeometry, pinMaterial);
      bottomPin.position.set(x, -pinOffsetY, 0);
      scene.add(bottomPin);

      bottomPinPositions.push(bottomPin.position.clone());
    }

    // Colors
    const glowColors = [
      "#00ffff", "#ff00ff", "#ffff00", "#ff8800",
      "#00ff88", "#8888ff", "#ff4444"
    ];

    // Meteor setup
    const meteors = [];
    const baseSpeed = 0.1;
    const tailLength = 50;

    bottomPinPositions.forEach((startPos, index) => {
      const curve = new THREE.CubicBezierCurve3(
        startPos,
        new THREE.Vector3(startPos.x, startPos.y - 0.4, 0),
        new THREE.Vector3(startPos.x, startPos.y - 0.8, 0),
        new THREE.Vector3(startPos.x, startPos.y - 1.6, 0)
      );

      // Grey line
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(40)),
        new THREE.LineBasicMaterial({ color: "#555", transparent: true, opacity: 0.4 })
      );
      scene.add(line);

      // Tail segments (short curved lines)
      const segments = [];
      for (let i = 0; i < tailLength; i++) {
        const segmentGeometry = new THREE.BufferGeometry();
        const segmentMaterial = new THREE.LineBasicMaterial({
          color: glowColors[index],
          transparent: true,
          opacity: 1 - i / tailLength,
        });
        const segment = new THREE.Line(segmentGeometry, segmentMaterial);
        scene.add(segment);
        segments.push(segment);
      }

      meteors.push({
        curve,
        t: 0,
        speed: baseSpeed,
        segments,
      });
    });

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    scene.add(new THREE.PointLight(0x00ffff, 1).position.set(0, 0, 6));

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);

      meteors.forEach((meteor) => {
        meteor.t += meteor.speed;
        if (meteor.t > 1) meteor.t = 0;

        for (let i = 0; i < tailLength; i++) {
          const t1 = meteor.t - i * 0.01;
          const t2 = t1 - 0.01;
          if (t2 < 0) {
            meteor.segments[i].visible = false;
            continue;
          }

          const p1 = meteor.curve.getPoint(t1);
          const p2 = meteor.curve.getPoint(t2);

          const geometry = new THREE.BufferGeometry().setFromPoints([p1, p2]);
          meteor.segments[i].geometry.dispose();
          meteor.segments[i].geometry = geometry;
          meteor.segments[i].visible = true;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "600px" }} />;
}