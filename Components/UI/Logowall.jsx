


"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/assets/Homepage/t1.webp",
  "/assets/Homepage/t2.webp",
  "/assets/Homepage/t3.webp",
  "/assets/Homepage/t4.webp",
  "/assets/Homepage/t5.webp",
  "/assets/Homepage/t6.webp",
  "/assets/Homepage/t7.webp",
  "/assets/Homepage/t8.webp",
  "/assets/Homepage/t9.webp",
  "/assets/Homepage/t10.webp",
];

const SPRING = {
  type: "spring",
  stiffness: 170,
  damping: 28,
};

export default function True3DPhotoFrameCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      2800
    );
    return () => clearInterval(id);
  }, []);

  const getCircularIndex = (i) => (i + images.length) % images.length;

  return (
    <div
      className="relative w-full h-[700px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/backgroundImg.png')",
      }}
    >
      
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 w-full h-full flex items-center justify-center [perspective:2000px]">
        <AnimatePresence initial={false}>
          {[...Array(5)].map((_, i) => {
            const offset = i - 2;
            const imgIndex = getCircularIndex(index + offset);
            const isCenter = offset === 0;

            const xOffset = offset * 320;

            return (
              <motion.div
                key={imgIndex}
                className="absolute"
                transition={SPRING}
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: 100 - Math.abs(offset),
                }}
                animate={{
                  x: xOffset,
                  rotateY: offset * -30,
                  z: isCenter ? 420 : -260,
                  scale: isCenter ? 1 : 0.85,
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                }}
              >
                <div className="relative w-[300px] h-[400px] [transform-style:preserve-3d]">
                  
                  <div
                    className="absolute -inset-[4px] bg-[#111111] rounded-md border border-white"
                    style={{
                      transform: "translateZ(-18px)",
                      boxShadow: `
                        0 0 30px rgba(168,85,247,0.5),
                        0 0 60px rgba(168,85,247,0.35),
                        0 0 90px rgba(168,85,247,0.25)
                      `,
                    }}
                  />

                 
                  <img
                    src={images[imgIndex]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-md border border-white"
                    style={{
                      transform: "translateZ(18px)",
                      boxShadow: `
                        0 0 20px rgba(168,85,247,0.5),
                        0 0 40px rgba(168,85,247,0.35)
                      `,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}