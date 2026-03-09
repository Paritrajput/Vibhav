"use client";

import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import React from "react";
import LogoWall from "./UI/Logowall";

export default function Gallery() {

  const logoImgs = [
    { imgUrl: "/Assets/Homepage/t1.webp", altText: "Gallery Image" },
    { imgUrl: "/Assets/Homepage/t2.webp", altText: "Gallery Image" },
    { imgUrl: "/Assets/Homepage/t3.webp", altText: "Gallery Image" },
    { imgUrl: "/Assets/Homepage/t4.webp", altText: "Gallery Image" },
    { imgUrl: "/Assets/Homepage/t5.webp", altText: "Gallery Image" },
    { imgUrl: "/Assets/Homepage/t6.webp", altText: "Gallery Image" },
    { imgUrl: "/Assets/Homepage/t8.webp", altText: "Gallery Image" },
    { imgUrl: "/Assets/Homepage/t10.webp", altText: "Gallery Image" },
  ];

  return (
    <div className="relative py-16 md:py-20 overflow-hidden">

     <img
        src="/Assets/Gallery.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

       
      <div className="flex flex-col gap-12 overflow-hidden text-gray-200 relative z-10">

        {/* Heading */}
        <div className="mx-auto px-4">
          <Fade>
            <motion.div
              className="flex flex-col place-items-center gap-4 text-center"
              initial={{ opacity: 0.2, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="w-full max-w-6xl font-batman text-3xl sm:text-4xl md:text-5xl lg:text-7xl bg-clip-text text-gray-200">
                REFLECTING ON THE JOURNEY
              </h2>

              <p className="w-full font-chakra max-w-lg px-2 text-lg sm:text-xl md:text-2xl text-gray-400 md:max-w-xl">
                A glimpse into our team's past adventures, memories that shape
                our present.
              </p>
            </motion.div>
          </Fade>
        </div>

        {/* Gallery Carousel */}
        <div className="w-full px-2 sm:px-6">
          <LogoWall
            items={logoImgs}
            direction="horizontal"
            pauseOnHover={true}

            /* RESPONSIVE IMAGE SIZE */
            // size="clamp(7rem, 40vw, 20rem)"
            size="clamp(6rem, 28vw, 18rem)"

            duration="60s"
            bgColor="#060606"
            bgAccentColor="#111111"
          />
        </div>

      </div>
    </div>
  );
}
