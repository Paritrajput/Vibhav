// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const images = [
//   "/assets/Homepage/t1.webp",
//   "/assets/Homepage/t2.webp",
//   "/assets/Homepage/t3.webp",
//   "/assets/Homepage/t4.webp",
//   "/assets/Homepage/t5.webp",
//   "/assets/Homepage/t6.webp",
//   "/assets/Homepage/t7.webp",
//   "/assets/Homepage/t8.webp",
//   "/assets/Homepage/t9.webp",
//   "/assets/Homepage/t10.webp",
// ];

// const SPRING = {
//   type: "spring",
//   stiffness: 150,
//   damping: 25,
// };

// export default function True3DPhotoFrameCarousel() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const id = setInterval(
//       () => setIndex((i) => (i + 1) % images.length),
//       3000
//     );
//     return () => clearInterval(id);
//   }, []);

//   const getCircularIndex = (i) => (i + images.length) % images.length;

//   return (
//     /* INCREASED: Parent container height to 850px to prevent clipping */
//     <div className="relative w-full h-[850px] bg-black overflow-hidden flex items-center justify-center">
      
//       /* INCREASED: Perspective value for a more cinematic depth */
//       <div className="relative w-full h-full flex items-center justify-center [perspective:3000px]">
//         <AnimatePresence initial={false}>
//           {[...Array(5)].map((_, i) => {
//             const offset = i - 2;
//             const imgIndex = getCircularIndex(index + offset);
//             const isCenter = offset === 0;

//             // INCREASED: Horizontal spacing (450px) so larger images don't overlap
//             const xOffset = offset * 450;

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
//                   rotateY: offset * -25,
//                   // INCREASED: Z-depth and scale for the center image
//                   z: isCenter ? 400 : -500,
//                   scale: isCenter ? 1.2 : 0.8,
//                   opacity: Math.max(0, 1 - Math.abs(offset) * 0.4),
//                 }}
//               >
//                 {/* IMAGE FRAME SIZES:
//                   Increased significantly across all screen sizes.
//                 */}
//                 <div
//                   className="
//                     relative
//                     w-[300px] h-[450px]
//                     sm:w-[400px] sm:h-[550px]
//                     md:w-[500px] md:h-[650px]
//                     lg:w-[580px] lg:h-[720px]
//                     [transform-style:preserve-3d]
//                   "
//                 >
//                   {/* BACK PANEL (Shadow/Glow) */}
//                   <div
//                     className="absolute -inset-[10px] bg-[#111111] rounded-2xl border border-white/10"
//                     style={{
//                       transform: "translateZ(-40px)",
//                       boxShadow: `
//                         0 0 50px rgba(168,85,247,0.3),
//                         0 0 100px rgba(168,85,247,0.15)
//                       `,
//                     }}
//                   />

//                   {/* MAIN IMAGE */}
//                   <img
//                     src={images[imgIndex]}
//                     alt=""
//                     className="absolute inset-0 w-full h-full object-cover rounded-2xl border-2 border-white/30"
//                     style={{
//                       transform: "translateZ(40px)",
//                       boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
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















//old code 

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const images = [
//   "/assets/Homepage/t1.webp",
//   "/assets/Homepage/t2.webp",
//   "/assets/Homepage/t3.webp",
//   "/assets/Homepage/t4.webp",
//   "/assets/Homepage/t5.webp",
//   "/assets/Homepage/t6.webp",
//   "/assets/Homepage/t7.webp",
//   "/assets/Homepage/t8.webp",
//   "/assets/Homepage/t9.webp",
//   "/assets/Homepage/t10.webp",
// ];

// const SPRING = {
//   type: "spring",
//   stiffness: 170,
//   damping: 28,
// };

// export default function True3DPhotoFrameCarousel() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 2800);
//     return () => clearInterval(id);
//   }, []);

  
//   const getCircularIndex = (i) => (i + images.length) % images.length;

//   return (
//     <div className="relative w-full h-[600px] bg-black overflow-hidden">
     
//       <div className="absolute inset-0 flex items-center justify-center [perspective:2000px]">

//         <AnimatePresence initial={false}>
       
//           {[...Array(5)].map((_, i) => {
//             const offset = i - 2; 
//             const imgIndex = getCircularIndex(index + offset);
//             const isCenter = offset === 0;

       
//             const xOffset = offset * 240;

//             return (
//               <motion.div
//                 key={imgIndex}
//                 className="absolute"
//                 transition={SPRING}
//                 style={{ transformStyle: "preserve-3d", zIndex: 100 - Math.abs(offset) }}
//                 animate={{
//                   x: xOffset,
//                   rotateY: offset * -30,
//                   z: isCenter ? 300 : -200,
//                   scale: isCenter ? 1 : 0.8,
//                   opacity: Math.abs(offset) > 2 ? 0 : 1,
//                 }}
//               >
              
//                 <div className="relative w-[240px] h-[320px] [transform-style:preserve-3d]">

                 
//                   <div
//                     className="absolute -inset-[3px] bg-[#111111] rounded-md border border-white"
//                     style={{
//                       transform: "translateZ(-15px)",
//                       boxShadow: `
//                         0 0 20px rgba(168,85,247,0.4),
//                         0 0 40px rgba(168,85,247,0.3),
//                         0 0 60px rgba(168,85,247,0.2)
//                       `,
//                     }}
//                   />

//                   <img
//                     src={images[imgIndex]}
//                     alt=""
//                     className="absolute inset-0 w-full h-full object-cover rounded-md border border-white"
//                     style={{
//                       transform: "translateZ(15px)",
//                       boxShadow: `
//                         0 0 15px rgba(168,85,247,0.4),
//                         0 0 30px rgba(168,85,247,0.3)
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

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const images = [
//   "/assets/Homepage/t1.webp",
//   "/assets/Homepage/t2.webp",
//   "/assets/Homepage/t3.webp",
//   "/assets/Homepage/t4.webp",
//   "/assets/Homepage/t5.webp",
//   "/assets/Homepage/t6.webp",
//   "/assets/Homepage/t7.webp",
//   "/assets/Homepage/t8.webp",
//   "/assets/Homepage/t9.webp",
//   "/assets/Homepage/t10.webp",
// ];

// const SPRING = {
//   type: "spring",
//   stiffness: 170,
//   damping: 28,
// };

// export default function True3DPhotoFrameCarousel() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const id = setInterval(
//       () => setIndex((i) => (i + 1) % images.length),
//       2800
//     );
//     return () => clearInterval(id);
//   }, []);

//   const getCircularIndex = (i) => (i + images.length) % images.length;

//   return (
//     <div className="relative w-full h-[600px] overflow-hidden">
      
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 z-[-2]"
//         style={{
//           backgroundImage: "url('/Assets/backgroundImg.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       {/* Black Overlay */}
//       <div className="absolute inset-0 bg-black/30 z-[-1]" />

//       {/* Carousel */}
//       <div className="absolute inset-0 flex items-center justify-center [perspective:2000px] z-10">
//         <AnimatePresence initial={false}>
//           {[...Array(5)].map((_, i) => {
//             const offset = i - 2;
//             const imgIndex = getCircularIndex(index + offset);
//             const isCenter = offset === 0;
//             const xOffset = offset * 240;

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
//                   z: isCenter ? 300 : -200,
//                   scale: isCenter ? 1 : 0.8,
//                   opacity: Math.abs(offset) > 2 ? 0 : 1,
//                 }}
//               >
//                 <div className="relative w-[3200px] h-[120px] [transform-style:preserve-3d]">
                  
//                   {/* Back Shadow Layer */}
//                   <div
//                     className="absolute -inset-[3px] bg-[#111111] rounded-md border border-white"
//                     style={{
//                       transform: "translateZ(-15px)",
//                       boxShadow: `
//                         0 0 20px rgba(168,85,247,0.4),
//                         0 0 40px rgba(168,85,247,0.3),
//                         0 0 60px rgba(168,85,247,0.2)
//                       `,
//                     }}
//                   />

//                   {/* Image */}
//                   <img
//                     src={images[imgIndex]}
//                     alt=""
//                     className="absolute inset-0 w-full h-full object-cover rounded-md border border-white"
//                     style={{
//                       transform: "translateZ(15px)",
//                       boxShadow: `
//                         0 0 15px rgba(168,85,247,0.4),
//                         0 0 30px rgba(168,85,247,0.3)
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
    <div
      className="relative w-full h-[700px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/backgroundImg.png')",
      }}
    >
      {/* Dark overlay for contrast */}
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
                  {/* Back frame */}
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

                  {/* Image */}
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