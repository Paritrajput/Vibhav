"use client";
import React from "react";
import PixelCard from "./UI/PixelCard";
import StatsSection from "./StatsSection";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

     
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/Assets/StatsSection.mp4" type="video/mp4" />
      </video>



      

      
      <div className="relative z-10">
        <motion.div
          className="mt-12 sm:mt-24 md:mt-32"
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


