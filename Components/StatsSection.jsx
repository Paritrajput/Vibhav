"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

export default function StatsSection() {
  const stats = [
    { target: 50, label: "Total Projects" },
    { target: 10, label: "Successful Workshops" },
    { target: 20, label: "Total Events" },
  ];

  return (
    <div className="relative w-full py-20 flex justify-center bg-transparent">
      

      {/* Stats Container */}
      <div className="relative w-[90%] sm:w-[60%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            target={stat.target}
            label={stat.label}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
}

function StatItem({ target, label, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      count.set(0);
      const controls = animate(count, target, {
        duration: 1.2,
        delay,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, target, delay, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="
        relative h-52 w-full flex flex-col items-center justify-center
        rounded-2xl p-10
        bg-gradient-to-br from-[#0b1f2a]/80 via-[#08141d]/80 to-[#02070b]/80
        backdrop-blur-xl
        border border-cyan-400/30
        shadow-[0_0_25px_rgba(34,211,238,0.35)]
        hover:shadow-[0_0_45px_rgba(34,211,238,0.6)]
        hover:scale-[1.06]
        transition-all duration-300
      "
    >
      {/* Inner glow overlay */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent" />

      {/* Number */}
      <h2
        className="
          text-5xl sm:text-6xl font-extrabold
          bg-gradient-to-r from-cyan-300 via-green-300 to-lime-300
          bg-clip-text text-transparent
          drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]
        "
      >
        <motion.span>{inView ? rounded : 0}</motion.span>+
      </h2>

      {/* Label */}
      <p className="mt-4 text-sm uppercase tracking-widest text-cyan-200/70">
        {label}
      </p>
    </motion.div>
  );
}

// "use client";
// import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
// import { useRef, useEffect } from "react";

// export default function StatsSection() {
//   // target values (no plus sign, we append it in rendering)
//   const stats = [
//     { target: 50, label: "Total Projects" },
//     { target: 25, label: "Successful Workshops" },
//     { target: 20, label: "Total Events" },
//   ];

//   return (
//     <div className="w-full py-16 -mt-10 flex justify-center relative bg-[url('/Assets/backgroundImg.png')] bg-cover bg-center">
//       {/* black overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-80" />
//       {/* match PixelCard container width for consistency and center it */}
//       <div className="relative w-[90%] sm:w-[60%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center justify-items-start">
//         {stats.map((stat, index) => (
//           <StatItem
//             key={index}
//             target={stat.target}
//             label={stat.label}
//             delay={index * 0.2}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function StatItem({ target, label, delay }) {
//   const ref = useRef(null);
//   // trigger every time the element enters the viewport
//   const inView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });

//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (v) => Math.round(v));

//   useEffect(() => {
//     if (inView) {
//       // reset before animating, so it counts up each time
//       count.set(0);
//       const controls = animate(count, target, { duration: 1, delay });
//       return controls.stop;
//     }
//   }, [inView, target, count, delay]);
//   return (
//     <motion.div
//       ref={ref}
//       className="w-full h-48 flex flex-col justify-center bg-blue-800 bg-opacity-20 backdrop-blur-2xl border border-blue-400/70 rounded-2xl p-10 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.6)] ring-2 ring-blue-300/60"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay }}
//       // repeated animations allowed
//     >
//       <h2 className="text-5xl sm:text-6xl font-bold text-white">
//         <motion.span>{inView ? rounded : ""}</motion.span>
//         {inView && "+"}
//       </h2>
//       <p className="text-gray-400 mt-3 text-lg">{label}</p>
//     </motion.div>
//   );
// }