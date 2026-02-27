import React, { useState } from "react";
import { motion } from "framer-motion";
import { Popup } from "./ProjectModal";


export const SkeletonProjectCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="
        relative w-[300px]
        bg-[#050d14]
        border border-purple-700/20
        rounded-xl
        overflow-hidden
        shadow-[0_0_14px_#5da9ff44,0_0_26px_#a855f744]
      "
    >
     
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 blur-xl opacity-70" />

      
      <div className="absolute inset-0 bg-[linear-gradient(#6d7cff1a_1px,transparent_1px),linear-gradient(90deg,#6d7cff1a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative p-5">
        <div className="h-[260px] bg-gradient-to-r from-blue-400/15 via-purple-400/15 to-blue-400/15 animate-pulse rounded-md" />
        <div className="mt-4 h-5 w-3/4 mx-auto bg-blue-400/15 animate-pulse rounded" />
        <div className="mt-3 h-8 w-24 mx-auto bg-purple-400/15 animate-pulse rounded" />
      </div>
    </motion.div>
  );
};


const ProjectCard = ({ project }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.04,
          boxShadow: `
            0 0 18px #5da9ff55,
            0 0 32px #a855f755,
            0 0 60px #5da9ff33
          `,
        }}
        transition={{ type: "spring", stiffness: 180 }}
        className="
          relative w-[300px]
          bg-[#050d14]
          border border-purple-700/30
          rounded-xl
          overflow-hidden
          backdrop-blur-xl
          shadow-[0_0_14px_#5da9ff44,0_0_26px_#a855f744]
        "
      >
      
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 blur-xl opacity-70" />

        
        <div className="absolute inset-0 bg-[linear-gradient(#6d7cff1a_1px,transparent_1px),linear-gradient(90deg,#6d7cff1a_1px,transparent_1px)] bg-[size:26px_26px]" />

       
        <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400/60" />
        <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-400/60" />
        <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-400/60" />
        <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-400/60" />

       
        <div className="relative z-10 p-5 flex justify-center">
          <img
            src={project.images}
            alt={project.name}
            className="h-[260px] w-[260px] object-contain rounded-md"
          />
        </div>

       
        <div className="relative z-10 text-center pb-5">
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 text-lg font-bold tracking-wider">
            {project.name}
          </h4>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsPopupOpen(true)}
            className="
              mt-4 px-5 py-2 text-sm font-bold
              text-blue-300
              border border-blue-400/60
              rounded-md
              hover:bg-gradient-to-r hover:from-blue-500/15 hover:to-purple-500/15
              transition-all
              tracking-widest
            "
          >
            EXPLORE
          </motion.button>
        </div>
      </motion.div>

      
      {isPopupOpen && (
        <Popup
          title={project.name}
          description={project.content}
          image={project.images}
          github={project.github || ""}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;




