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
      {/* Soft Star-Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      {/* Image Section - Now with a "Float" effect */}
      <div className="relative z-10 mt-8 w-[240px] h-[280px] overflow-hidden rounded-[30px] border border-white/10 shadow-inner">
        <Image
          src={image}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          alt={name}
        />
        {/* Soft Vignette on Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Name Section - Using Arvo/Serif for elegance to match the subtitle */}
      <div className="relative z-20 w-full px-6 flex flex-col items-center mt-6">
        <h2 className="font-arvo text-xl text-center text-white/90 group-hover:text-white transition-colors tracking-wide">
          {name}
        </h2>
        
        {/* Minimalist Social Icons */}
        <div className="mt-6 flex justify-center gap-6 items-center">
          <Link href={linkdin} target="_blank" className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300">
            <TiSocialLinkedinCircular className="h-10 w-10 text-white" />
          </Link>
          <Link href={github} target="_blank" className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300">
            <VscGithub className="h-7 w-7 text-white" />
          </Link>
        </div>
      </div>

      {/* Subtle Corner Accents (Matching the FAQ corner style but thinner) */}
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
      {/* Background Video (Restored as requested) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/Assets/CC.mp4" type="video/mp4" />
      </video>

      {/* Darkening Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      <div className="relative z-10 mx-auto py-24 px-4">
        <motion.div
          className="flex flex-col gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center gap-4 text-center">
            {/* Batman Font for Heading to stay consistent */}
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
// "use client";
// import CC1 from "../public/Assets/TeamPhotos/CC/Bhavneet Singh.webp";
// import CC2 from "../public/Assets/TeamPhotos/CC/Shresth Maheshwari.webp";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { Fade } from "react-awesome-reveal";
// import { motion } from "framer-motion";
// import { TiSocialLinkedinCircular } from "react-icons/ti";
// import { VscGithub } from "react-icons/vsc";
// import Link from "next/link";

// function Card({ name, image, github, linkdin }) {
//   return (
//     <Fade bottom distance="20px">
//       <motion.div
//         whileHover={{ y: -15, scale: 1.02 }}
//         className="group relative flex w-[380px] h-[550px] flex-col items-center justify-start overflow-hidden rounded-[30px] border border-white/10 bg-black/20 p-6 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-cyan-500/50"
//       >
//         {/* Glow Effect */}
//         <div className="absolute -inset-1 z-0 bg-gradient-to-br from-purple-600/10 to-cyan-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

//         {/* Grid Pattern */}
//         <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]"></div>

//         {/* Image */}
//         <div className="relative z-10 w-full h-[360px] overflow-hidden rounded-2xl border border-white/5">
//           <Image
//             src={image}
//             fill
//             className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
//             alt={name}
//           />
//           <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
//         </div>

//         {/* Name + Icons */}
//         <div className="relative z-20 w-full pt-8 pb-2 text-center">
//           <h2 className="mb-5 font-arvo text-2xl font-medium tracking-tight text-white drop-shadow-md">
//             {name}
//           </h2>

//           <div className="flex justify-center gap-8 items-center">
//             <Link href={linkdin} target="_blank">
//               <TiSocialLinkedinCircular className="h-12 w-12 text-gray-400 hover:text-cyan-400 transition-all" />
//             </Link>
//             <Link href={github} target="_blank">
//               <VscGithub className="h-8 w-8 text-gray-400 hover:text-purple-400 transition-all" />
//             </Link>
//           </div>
//         </div>

//         {/* Decorative Corners */}
//         <div className="absolute top-3 left-3 h-6 w-6 border-t-2 border-l-2 border-white/10 group-hover:border-cyan-500/50 transition-colors"></div>
//         <div className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-white/10 group-hover:border-purple-500/50 transition-colors"></div>
//       </motion.div>
//     </Fade>
//   );
// }

// export default function TechCitySection() {
//   const [isLaptop, setIsLaptop] = useState(null);

//   useEffect(() => {
//     const checkScreenSize = () => setIsLaptop(window.innerWidth >= 1024);
//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   return (
//     <section className="relative min-h-screen w-full overflow-hidden">

//       {/* Background Image */}
//       {/* <div
//         className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('/Assets/CC.png')", 
//         }}
//       /> */}
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover -z-10"
//       >
//         <source src="/Assets/CC.mp4" type="video/mp4" />
//       </video>



//       {/* Dark Overlay
//       <div className="absolute inset-0 -z-10 bg-black/70" /> */}

//       {/* Existing Grid Effect (kept as it is) */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_95%)]"></div>
//       </div>

//       <div className="relative z-10 mx-auto py-24">
//         <motion.div
//           className="flex flex-col gap-20 text-white"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <div className="flex flex-col items-center gap-6 text-center">
//             <h2 className="w-full max-w-6xl font-batman text-4xl md:text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
//               CLUB COORDINATOR
//             </h2>
//             <p className="w-full px-4 text-xl sm:text-3xl text-gray-400 font-arvo lg:whitespace-nowrap tracking-wide">
//               Streamlining operations and maximizing efficiency.
//             </p>
//           </div>

//           {isLaptop !== null && (
//             <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:gap-28 p-4">
//               <Card
//                 name="Bhavneet Singh"
//                 image={CC1}
//                 github="https://github.com/bhavneet1512"
//                 linkdin="https://www.linkedin.com/in/bhavneet-singh1512"
//               />
//               <Card
//                 name="Shresth Maheshwari"
//                 image={CC2}
//                 github="https://github.com/shresth2405"
//                 linkdin="https://www.linkedin.com/in/shresth-maheshwari-1a8a7028b"
//               />
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import CC1 from "../public/Assets/TeamPhotos/CC/Bhavneet Singh.webp";
// import CC2 from "../public/Assets/TeamPhotos/CC/Shresth Maheshwari.webp";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { Fade } from "react-awesome-reveal";
// import { motion } from "framer-motion";
// import { TiSocialLinkedinCircular } from "react-icons/ti";
// import { VscGithub } from "react-icons/vsc";
// import Link from "next/link";

// function Card({ name, image, github, linkdin }) {
//   return (
//     <Fade bottom distance="20px">
      
//       <motion.div 
//         whileHover={{ y: -15, scale: 1.02 }}
//         className="group relative flex w-[380px] h-[550px] flex-col items-center justify-start overflow-hidden rounded-[30px] border border-white/10 bg-black/20 p-6 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-cyan-500/50"
//       >
       
//         <div className="absolute -inset-1 z-0 bg-gradient-to-br from-purple-600/10 to-cyan-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
        
      
//         <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]"></div>

       
//         <div className="relative z-10 w-full h-[360px] overflow-hidden rounded-2xl border border-white/5">
//           <Image
//             src={image}
//             fill
//             className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
//             alt={name}
//           />
//           <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
//         </div>

       
//         <div className="relative z-20 w-full pt-8 pb-2 text-center">
//           <h2 className="mb-5 font-arvo text-2xl font-medium tracking-tight text-white drop-shadow-md">
//             {name}
//           </h2>

//           <div className="flex justify-center gap-8 items-center">
//             <Link href={linkdin} target="_blank">
//               <TiSocialLinkedinCircular className="h-12 w-12 text-gray-400 hover:text-cyan-400 transition-all" />
//             </Link>
//             <Link href={github} target="_blank">
//               <VscGithub className="h-8 w-8 text-gray-400 hover:text-purple-400 transition-all" />
//             </Link>
//           </div>
//         </div>

       
//         <div className="absolute top-3 left-3 h-6 w-6 border-t-2 border-l-2 border-white/10 group-hover:border-cyan-500/50 transition-colors"></div>
//         <div className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-white/10 group-hover:border-purple-500/50 transition-colors"></div>
//       </motion.div>
//     </Fade>
//   );
// }

// export default function TechCitySection() {
//   const [isLaptop, setIsLaptop] = useState(null);

//   useEffect(() => {
//     const checkScreenSize = () => setIsLaptop(window.innerWidth >= 1024);
//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-transparent">
      
      
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_95%)]"></div>
//       </div>

//       <div className="relative z-10 mx-auto py-24">
//         <motion.div
//           className="flex flex-col gap-20 text-white"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <div className="flex flex-col items-center gap-6 text-center">
//             <h2 className="w-full max-w-6xl font-batman text-4xl md:text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
//               CLUB COORDINATOR
//             </h2>
//             <p className="w-full px-4 text-xl sm:text-3xl text-gray-400 font-arvo lg:whitespace-nowrap tracking-wide">
//               Streamlining operations and maximizing efficiency.
//             </p>
//           </div>

//           {isLaptop !== null && (
//             <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:gap-28 p-4">
//               <Card 
//                 name="Bhavneet Singh" 
//                 image={CC1} 
//                 github="https://github.com/bhavneet1512" 
//                 linkdin="https://www.linkedin.com/in/bhavneet-singh1512"
//               />
//               <Card 
//                 name="Shresth Maheshwari" 
//                 image={CC2} 
//                 github="https://github.com/shresth2405" 
//                 linkdin="https://www.linkedin.com/in/shresth-maheshwari-1a8a7028b"
//               />
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// } 