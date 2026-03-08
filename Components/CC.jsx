"use client";
import CC1 from "../public/Assets/TeamPhotos/CC/Bhavneet Singh.webp";
import CC2 from "../public/Assets/TeamPhotos/CC/Shresth Maheshwari.webp";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import Link from "next/link";

function Card({ name, image, github, linkdin }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative flex w-[320px] h-[480px] flex-col items-center justify-start overflow-hidden rounded-[40px] border border-white/5 bg-white/[0.03] backdrop-blur-md transition-all duration-700 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
    >
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      
      <div className="relative z-10 mt-8 w-[240px] h-[280px] overflow-hidden rounded-[30px] border border-white/10 shadow-inner">
        <Image
          src={image}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          alt={name}
        />
       
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

     
      <div className="relative z-20 w-full px-6 flex flex-col items-center mt-6">
        <h2 className="font-arvo text-xl text-center text-white/90 group-hover:text-white transition-colors tracking-wide">
          {name}
        </h2>
        
       
        <div className="mt-6 flex justify-center gap-6 items-center">
          <Link href={linkdin} target="_blank" className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300">
            <TiSocialLinkedinCircular className="h-10 w-10 text-white" />
          </Link>
          <Link href={github} target="_blank" className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300">
            <VscGithub className="h-7 w-7 text-white" />
          </Link>
        </div>
      </div>

      
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/10 group-hover:border-purple-400/40 transition-colors" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/10 group-hover:border-cyan-400/40 transition-colors" />
    </motion.div>
  );
}

export default function TechCitySection() {
  const [isLaptop, setIsLaptop] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => setIsLaptop(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      

      <img
        src="/Assets/4thImage.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

     
      <div className="absolute inset-0 bg-black/10 -z-10" />

      <div className="relative z-10 mx-auto py-24 px-4">
        <motion.div
          className="flex flex-col gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center gap-4 text-center">
           
            <h2 className="font-batman text-4xl md:text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              CLUB COORDINATOR
            </h2>
            <p className="max-w-3xl text-lg sm:text-2xl text-gray-300 font-arvo italic opacity-80">
              "Streamlining operations and maximizing efficiency."
            </p>
          </div>

          {isLaptop !== null && (
            <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20">
              <Card
                name="Bhavneet Singh"
                image={CC1}
                github="https://github.com/bhavneet1512"
                linkdin="https://www.linkedin.com/in/bhavneet-singh1512"
              />
              <Card
                name="Shresth Maheshwari"
                image={CC2}
                github="https://github.com/shresth2405"
                linkdin="https://www.linkedin.com/in/shresth-maheshwari-1a8a7028b"
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
