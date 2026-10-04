import React, { useEffect, useRef } from "react";

export default function HeroCanvas({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    const pointer = {
      x: null,
      y: null,
      radius: 120
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      pointer.x = null;
      pointer.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 14000), 55);

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 2 + 1,
          colorIndex: Math.floor(Math.random() * 3)
        });
      }
    }

    initParticles();

    const isDark = theme === "dark";
    const colors = isDark
      ? ["rgba(16, 185, 129, ", "rgba(6, 182, 212, ", "rgba(99, 102, 241, "]
      : ["rgba(5, 150, 105, ", "rgba(8, 145, 178, ", "rgba(79, 70, 229, "];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Mouse interaction
        if (pointer.x !== null && pointer.y !== null) {
          const dx = pointer.x - p1.x;
          const dy = pointer.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < pointer.radius) {
            const force = (pointer.radius - dist) / pointer.radius;
            p1.x -= (dx / dist) * force * 1.5;
            p1.y -= (dy / dist) * force * 1.5;
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors[p1.colorIndex] + (isDark ? "0.65)" : "0.5)");
        ctx.fill();

        // Connect with nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * (isDark ? 0.22 : 0.14);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = colors[p1.colorIndex] + alpha + ")";
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to pointer if near
        if (pointer.x !== null && pointer.y !== null) {
          const dx = p1.x - pointer.x;
          const dy = p1.y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < pointer.radius) {
            const alpha = (1 - dist / pointer.radius) * (isDark ? 0.45 : 0.25);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.strokeStyle = colors[0] + alpha + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      aria-hidden="true"
    />
  );
}
