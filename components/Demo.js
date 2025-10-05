"use client";
import * as THREE from "three";
import { useEffect, useRef } from "react";

export default function Galaxy() {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, camera, renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 80; // Closer for more immersive view

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Parameters
        const starParams = {
            count: 80000, // More stars for density
            size: 0.015, // Slightly smaller for finer detail
            radius: 180,
            thickness: 25, // Thinner disk for galaxy band
            randomness: 0.7,
            randomnessPower: 3.0, // Higher power for more clustered arms
            insideColor: "#ffffff", // Bright white core
            outsideColor: "#6A0DAD", // Purple arms
        };

        const blueDustParams = {
            count: 5000,
            size: 3.0,
            radius: 180,
            thickness: 35,
            color: "#4169E1", // Royal blue
            opacity: 0.08,
            randomness: 0.8,
            randomnessPower: 2.5,
            randScale: 20,
        };

        const purpleDustParams = {
            count: 4000,
            size: 2.5,
            radius: 190,
            thickness: 40,
            color: "#9932CC", // Dark orchid
            opacity: 0.06,
            randomness: 0.6,
            randomnessPower: 2.0,
            randScale: 18,
        };

        const orangeDustParams = {
            count: 3000,
            size: 4.0,
            radius: 170,
            thickness: 30,
            color: "#FF8C00", // Dark orange glow
            opacity: 0.04,
            randomness: 0.9,
            randomnessPower: 3.5,
            randScale: 22,
        };

        // ----------------------
        // Stars
        // ----------------------
        const starGeometry = new THREE.BufferGeometry();
        const starPositions = new Float32Array(starParams.count * 3);
        const starColors = new Float32Array(starParams.count * 3);

        const colorInside = new THREE.Color(starParams.insideColor);
        const colorOutside = new THREE.Color(starParams.outsideColor);

        for (let i = 0; i < starParams.count; i++) {
            const i3 = i * 3;

            const radius = Math.random() * starParams.radius;
            const angle = Math.random() * Math.PI * 2;

            const x =
                Math.cos(angle) * radius +
                (Math.random() - 0.5) *
                starParams.randomness *
                Math.pow(radius / starParams.radius, starParams.randomnessPower) *
                25; // Adjusted randomness scaling
            const z =
                Math.sin(angle) * radius +
                (Math.random() - 0.5) *
                starParams.randomness *
                Math.pow(radius / starParams.radius, starParams.randomnessPower) *
                25;
            const y = (Math.random() - 0.5) * starParams.thickness;

            starPositions[i3] = x;
            starPositions[i3 + 1] = y * 4; // Slightly less vertical stretch
            starPositions[i3 + 2] = z;

            const mixedColor = colorInside.clone();
            mixedColor.lerp(colorOutside, radius / starParams.radius);

            starColors[i3] = mixedColor.r;
            starColors[i3 + 1] = mixedColor.g;
            starColors[i3 + 2] = mixedColor.b;
        }

        starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
        starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

        const starMaterial = new THREE.PointsMaterial({
            size: starParams.size,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // ----------------------
        // Dust Clouds
        // ----------------------
        const createDust = (params) => {
            const dustGeometry = new THREE.BufferGeometry();
            const dustPositions = new Float32Array(params.count * 3);

            for (let i = 0; i < params.count; i++) {
                const i3 = i * 3;

                const radius = Math.random() * params.radius;
                let angle = Math.random() * Math.PI * 2;

                // Add spiral twist for more organic shape
                angle += Math.log(radius + 1) * 4; // Log spiral offset

                let x = Math.cos(angle) * radius;
                let z = Math.sin(angle) * radius;

                // Add randomness for round, cloudy appearance
                const randFactorX = (Math.random() - 0.5) * params.randomness * Math.pow(Math.random(), params.randomnessPower) * params.randScale;
                const randFactorZ = (Math.random() - 0.5) * params.randomness * Math.pow(Math.random(), params.randomnessPower) * params.randScale;
                x += randFactorX;
                z += randFactorZ;

                const y = (Math.random() - 0.5) * params.thickness * 0.8; // Slightly thinner for centering on plane

                dustPositions[i3] = x;
                dustPositions[i3 + 1] = y * 4;
                dustPositions[i3 + 2] = z;
            }

            dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));

            const dustMaterial = new THREE.PointsMaterial({
                size: params.size,
                color: params.color,
                transparent: true,
                opacity: params.opacity,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
            });

            return new THREE.Points(dustGeometry, dustMaterial);
        };

        const blueDust = createDust(blueDustParams);
        scene.add(blueDust);

        // ----------------------
        // Purple Dust Clouds
        // ----------------------
        const purpleDust = createDust(purpleDustParams);
        purpleDust.rotation.y = Math.PI / 4; // Slight offset for layering
        scene.add(purpleDust);

        // ----------------------
        // Orange Dust Clouds
        // ----------------------
        const orangeDust = createDust(orangeDustParams);
        orangeDust.rotation.y = -Math.PI / 6; // Another offset
        scene.add(orangeDust);

        // ----------------------
        // Animation
        // ----------------------
        function animate() {
            requestAnimationFrame(animate);

            stars.rotation.y += 0.0002; // Slower rotation
            blueDust.rotation.y += 0.00015;
            purpleDust.rotation.y += 0.0001;
            orangeDust.rotation.y += 0.00025; // Vary speeds for depth

            renderer.render(scene, camera);
        }
        animate();

        // Resize
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener("resize", handleResize);
            // Dispose geometries and materials
            starGeometry.dispose();
            starMaterial.dispose();
            blueDust.geometry.dispose();
            blueDust.material.dispose();
            purpleDust.geometry.dispose();
            purpleDust.material.dispose();
            orangeDust.geometry.dispose();
            orangeDust.material.dispose();
        };
    }, []);

    return <div ref={mountRef} className="w-screen min-h-screen bg-black fixed top-0 left-0 z-0" />;
}