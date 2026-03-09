
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
      <div className="relative w-[90%] sm:w-[60%] mx-auto grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-12">
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
        relative h-28 sm:h-52 w-full flex flex-col items-center justify-center
        rounded-xl sm:rounded-2xl p-3 sm:p-10
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
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent" />

      {/* Number */}
      <h2
        className="
          text-2xl sm:text-6xl font-extrabold
          bg-gradient-to-r from-cyan-300 via-green-300 to-lime-300
          bg-clip-text text-transparent
          drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]
        "
      >
        <motion.span>{inView ? rounded : 0}</motion.span>+
      </h2>

      {/* Label */}
      <p className="mt-2 sm:mt-4 text-[10px] sm:text-sm uppercase tracking-widest text-cyan-200/70 text-center">
        {label}
      </p>
    </motion.div>
  );
}
// "use client";

// import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
// import { useRef, useEffect } from "react";

// export default function StatsSection() {
//   const stats = [
//     { target: 50, label: "Total Projects" },
//     { target: 10, label: "Successful Workshops" },
//     { target: 20, label: "Total Events" },
//   ];

//   return (
//     <div className="relative w-full py-20 flex justify-center bg-transparent">
      

//       {/* Stats Container */}
//       <div className="relative w-[90%] sm:w-[60%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
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
//   const inView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });

//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (v) => Math.round(v));

//   useEffect(() => {
//     if (inView) {
//       count.set(0);
//       const controls = animate(count, target, {
//         duration: 1.2,
//         delay,
//         ease: "easeOut",
//       });
//       return controls.stop;
//     }
//   }, [inView, target, delay, count]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay }}
//       className="
//         relative h-52 w-full flex flex-col items-center justify-center
//         rounded-2xl p-10
//         bg-gradient-to-br from-[#0b1f2a]/80 via-[#08141d]/80 to-[#02070b]/80
//         backdrop-blur-xl
//         border border-cyan-400/30
//         shadow-[0_0_25px_rgba(34,211,238,0.35)]
//         hover:shadow-[0_0_45px_rgba(34,211,238,0.6)]
//         hover:scale-[1.06]
//         transition-all duration-300
//       "
//     >
//       {/* Inner glow overlay */}
//       <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent" />

//       {/* Number */}
//       <h2
//         className="
//           text-5xl sm:text-6xl font-extrabold
//           bg-gradient-to-r from-cyan-300 via-green-300 to-lime-300
//           bg-clip-text text-transparent
//           drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]
//         "
//       >
//         <motion.span>{inView ? rounded : 0}</motion.span>+
//       </h2>

//       {/* Label */}
//       <p className="mt-4 text-sm uppercase tracking-widest text-cyan-200/70">
//         {label}
//       </p>
//     </motion.div>
//   );
// }
