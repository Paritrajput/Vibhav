"use client";
import React from "react";
import PixelCard from "./UI/PixelCard";
import StatsSection from "./StatsSection";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Image ONLY for AboutUs */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/Assets/AboutUs.png')", // change image path
        }}
      /> */}
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/Assets/AboutUs.mp4" type="video/mp4" />
      </video>



      

      {/* Content */}
      <div className="relative z-10">
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
      </div>
    </section>
  );
}

export default AboutUs;

// "use client";
// import React from "react";
// import PixelCard from "./UI/PixelCard";
// import StatsSection from "./StatsSection";
// import { motion } from "framer-motion";

// function AboutUs() {
//   return (
//     <>
//       <motion.div
//         className="mt-24 sm:mt-36"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//       >
//         <PixelCard />
//       </motion.div>

//       <StatsSection />
//     </>
//   );
// }

// export default AboutUs;
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
