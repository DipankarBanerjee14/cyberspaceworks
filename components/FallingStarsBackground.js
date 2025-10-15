"use client";
import React, { useEffect, useRef } from "react";

export default function FallingStarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Resize canvas to full window
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create star objects
    const numStars = 250;
    const stars = Array.from({ length: numStars }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.5,
      speedY: Math.random() * 1.5 + 0.3,
      speedX: Math.random() * 0.4 - 0.2,
      trail: Math.random() < 0.25, // 25% are falling stars
    }));

    function draw() {
      // Slight fade for a motion blur effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Glow effect
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size * 4
        );
        gradient.addColorStop(0, "rgba(0, 255, 255, 0.9)");
        gradient.addColorStop(1, "rgba(0, 255, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Optional shooting trail
        if (star.trail) {
          const trailLength = 20;
          const trailGradient = ctx.createLinearGradient(
            star.x,
            star.y,
            star.x - star.speedX * trailLength,
            star.y - star.speedY * trailLength
          );
          trailGradient.addColorStop(0, "rgba(6, 182, 212, 0.8)");
          trailGradient.addColorStop(1, "rgba(6, 182, 212, 0)");
          ctx.strokeStyle = trailGradient;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(
            star.x - star.speedX * trailLength,
            star.y - star.speedY * trailLength
          );
          ctx.stroke();
        }

        // Update position
        star.x += star.speedX;
        star.y += star.speedY;

        // Reset when it exits the bottom
        if (star.y > canvas.height + 10) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }
      });
    }

    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
