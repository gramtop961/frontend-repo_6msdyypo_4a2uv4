import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

// Lightweight particle background (ocean/neon blue sparks floating upward)
function ParticleBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initParticles();
    };
    window.addEventListener('resize', handleResize);

    const particleCount = 80;
    let particles = [];

    const initParticles = () => {
      particles = Array.from({ length: particleCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.6,
        vy: -0.4 - Math.random() * 0.8,
        vx: (Math.random() - 0.5) * 0.2,
        a: 0.4 + Math.random() * 0.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // subtle gradient glow backdrop
      const g = ctx.createRadialGradient(width * 0.6, height * 0.8, 50, width * 0.6, height * 0.8, Math.max(width, height));
      g.addColorStop(0, 'rgba(2, 132, 199, 0.08)');
      g.addColorStop(1, 'rgba(2, 6, 23, 0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      for (const p of particles) {
        // trail
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
        grad.addColorStop(0, 'rgba(56, 189, 248, 0.9)');
        grad.addColorStop(1, 'rgba(2, 132, 199, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();

        // core
        ctx.fillStyle = 'rgba(168, 234, 255, 0.95)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // update
        p.y += p.vy;
        p.x += p.vx + Math.sin((p.y + p.x) * 0.004) * 0.05;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    initParticles();
    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ width: '100%', height: '100%' }}
    />
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#020617] text-white">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Custom particles overlay */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      {/* Gradient glows - make sure they don't block interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-12 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-white/5 px-4 py-2 backdrop-blur-sm"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-sky-300" />
          <span className="text-sm text-sky-200">BuildStart.io — Futuristic AI Automation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-[800] tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight"
          style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}
        >
          We complete your business with AI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-sky-100/90"
        >
          Empowering SMEs to automate systems, grow smarter, and scale faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-sky-500/90 px-6 py-3 text-white transition hover:bg-sky-400"
          >
            <span className="absolute inset-0 -z-0 rounded-full bg-sky-500 blur-md opacity-40 group-hover:opacity-60 transition" />
            <span className="relative z-10 font-semibold">Let's Build Smarter</span>
            <svg className="relative z-10 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-sky-700/50 bg-white/5 px-6 py-3 text-sky-100 hover:bg-white/10 transition">
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
