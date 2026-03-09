"use client";
import { useEffect, useRef } from "react";

class Pixel {
  constructor(canvas, context, x, y, color, gap) {
    this.canvas = canvas;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = 2;
    this.gap = gap;
    this.scrollSpeed = 0.4; 
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  update() {
    this.y += this.scrollSpeed;

    if (this.y > this.canvas.height) {
      this.y = 0;
    }

    this.draw();
  }
}

export default function PixelCard({ className = "" }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const pixelsRef = useRef([]);
  const animationRef = useRef(null);

  const initPixels = () => {
    if (!containerRef.current || !canvasRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const gap = 8;
    const colors = ["#1e293b", "#334155", "#475569"];

    const pixels = [];

    for (let x = 0; x < width; x += gap) {
      for (let y = 0; y < height; y += gap) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        pixels.push(new Pixel(canvas, ctx, x, y, color, gap));
      }
    }

    pixelsRef.current = pixels;
  };

  const animate = () => {
    animationRef.current = requestAnimationFrame(animate);

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pixelsRef.current.forEach((pixel) => pixel.update());
  };

  useEffect(() => {
    initPixels();
    animate();

    const observer = new ResizeObserver(() => {
      initPixels();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="w-screen relative mt-11 z-10">
      <div
        ref={containerRef}
        className={`relative w-[90%] sm:w-[60%] overflow-hidden grid place-items-center rounded-[25px] isolate mx-auto mt-24 sm:mt-16 select-none
          bg-gradient-to-br from-[#0b1f2a]/80 via-[#08141d]/80 to-[#02070b]/80
          backdrop-blur-xl border border-cyan-400/30 shadow-[0_0_25px_rgba(34,211,238,0.35)]
          hover:shadow-[0_0_45px_rgba(34,211,238,0.6)] ${className}`}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 opacity-40"
        />

        <div className="relative z-10 flex flex-col gap-3 p-6 sm:p-8 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-batman">
            ABOUT US
          </h1>

          <p className="text-sm sm:text-lg text-justify leading-6 sm:leading-7 font-sans">
           Team Vibhav is the official departmental team of the Electronics and Communication Engineering Department at NIT Hamirpur, dedicated to contributing to Nimbus, the institute’s annual technical festival. The team promotes innovation ,teamwork, and technical excellence by providing students with opportunities to explore electronics, robotics, embedded systems, and emerging technologies. Through collaborative projects, technical events, and hands-on learning experiences, members develop practical skills while turning creative ideas into impactful technological solutions that encourage growth, experimentation, and a deeper understanding of modern engineering challenges.

          </p>
        </div>
      </div>
    </div>
  );
}




