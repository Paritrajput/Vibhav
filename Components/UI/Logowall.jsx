// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const SPRING = {
//   type: "spring",
//   stiffness: 170,
//   damping: 28,
// };

// export default function LogoWall({ items = [] }) {
//   const images = items.map((item) => item.imgUrl);

//   const [index, setIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   // detect mobile screen
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // auto slide
//   useEffect(() => {
//     if (images.length === 0) return;

//     const id = setInterval(() => {
//       setIndex((i) => (i + 1) % images.length);
//     }, 2800);

//     return () => clearInterval(id);
//   }, [images.length]);

//   const getCircularIndex = (i) => (i + images.length) % images.length;

//   // mobile spacing
//   const spacing = isMobile ? 160 : 320;

//   // show fewer cards on mobile
//   const visibleCards = isMobile ? 3 : 5;

//   return (
//     <div className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] overflow-hidden bg-transparent">

//       <div className="relative z-10 w-full h-full flex items-center justify-center [perspective:1000px] sm:[perspective:1500px] lg:[perspective:2000px]">

//         <AnimatePresence initial={false}>
//           {[...Array(visibleCards)].map((_, i) => {

//             const centerIndex = Math.floor(visibleCards / 2);
//             const offset = i - centerIndex;

//             const imgIndex = getCircularIndex(index + offset);
//             const isCenter = offset === 0;

//             const xOffset = offset * spacing;

//             return (
//               <motion.div
//                 key={imgIndex}
//                 className="absolute"
//                 transition={SPRING}
//                 style={{
//                   transformStyle: "preserve-3d",
//                   zIndex: 100 - Math.abs(offset),
//                 }}
//                 animate={{
//                   x: xOffset,
//                   rotateY: offset * -30,
//                   z: isCenter ? 420 : -260,
//                   scale: isCenter ? 1 : 0.85,
//                   opacity: Math.abs(offset) > centerIndex ? 0 : 1,
//                 }}
//               >
//                 <div className="relative 
//                   w-[180px] h-[240px] 
//                   sm:w-[220px] sm:h-[300px] 
//                   md:w-[260px] md:h-[350px] 
//                   lg:w-[300px] lg:h-[400px] 
//                   [transform-style:preserve-3d]">

//                   {/* frame background */}
//                   <div
//                     className="absolute -inset-[4px] bg-[#111111] rounded-md border border-white"
//                     style={{
//                       transform: "translateZ(-18px)",
//                       boxShadow: `
//                         0 0 10px rgba(168,85,247,0.2),
//                         0 0 20px rgba(168,85,247,0.15),
//                         0 0 30px rgba(168,85,247,0.1)
//                       `,
//                     }}
//                   />

//                   {/* image */}
//                   <img
//                     src={images[imgIndex]}
//                     alt=""
//                     className="absolute inset-0 w-full h-full object-cover rounded-md border border-white"
//                     style={{
//                       transform: "translateZ(18px)",
//                       boxShadow: `
//                         0 0 8px rgba(168,85,247,0.2),
//                         0 0 16px rgba(168,85,247,0.15)
//                       `,
//                     }}
//                   />

//                 </div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>

//       </div>
//     </div>
//   );
// }
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
    <div className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] overflow-hidden bg-transparent">
      

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
                      // boxShadow: `
                      //   0 0 30px rgba(168,85,247,0.5),
                      //   0 0 60px rgba(168,85,247,0.35),
                      //   0 0 90px rgba(168,85,247,0.25)
                      // `,
                      boxShadow: `
                      0 0 10px rgba(168,85,247,0.2),
                      0 0 20px rgba(168,85,247,0.15),
                      0 0 30px rgba(168,85,247,0.1)
                `,
                    }}
                  />

                 
                  <img
                    src={images[imgIndex]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-md border border-white"
                    style={{
                      transform: "translateZ(18px)",
                      // boxShadow: `
                      //   0 0 20px rgba(168,85,247,0.5),
                      //   0 0 40px rgba(168,85,247,0.35)
                      // `,
                      boxShadow: `
                      0 0 8px rgba(168,85,247,0.2),
                      0 0 16px rgba(168,85,247,0.15)
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