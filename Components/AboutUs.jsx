"use client";
import React from "react";
import PixelCard from "./UI/PixelCard";
import StatsSection from "./StatsSection";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <>
      <motion.div
        className="mt-24 sm:mt-36"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <PixelCard />
      </motion.div>

      <StatsSection />
    </>
  );
}

export default AboutUs;
// import React from "react";
// import PixelCard from "./UI/PixelCard";
// import { motion } from "framer-motion";

// function AboutUs() {
//   return (
//     <motion.div
//       className="mt-24 sm:mt-36 bg-black bg-opacity-25"
//       initial={{ opacity: 0.2 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <PixelCard />
//     </motion.div>
//   );
// }

// export default AboutUs;
