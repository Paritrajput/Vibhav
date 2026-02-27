import React from "react";
import { motion } from "framer-motion";
import { IoOpenOutline } from "react-icons/io5";
import { MdOutlineOpenInNew } from "react-icons/md";


function GameSection() {
  return (
    <motion.div
      className="w-full p-1 rounded-md flex flex-col items-center mt-12 lg:hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
      <h1 className="text-4xl  md:text-5xl lg:text-7xl bg-clip-text  text-gray-200 font-batman mb-5 text-center">Play Our Game</h1>
      <p className="mx-0 text-xl text-gray-400  text-center font-chakra ">Think You Know Us? Put Your Knowledge to the Test!</p>
      </div>
      
      
      <div className="relative p-5 mt-5 rounded-xl bg-gray-600/30">
        <div className="relative w-full h-40 rounded-md overflow-hidden group cursor-pointer">
          
          
          <a
            href="https://vibhav124.itch.io/vibhavgame"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0"
          >
            <img
              src="/Assets/Homepage/gameCoverImg.jpg"
              alt="Game Cover"
              className="w-full h-full object-cover rounded-md transition-all duration-300 group-hover:brightness-50"
            />
          </a>

        
          <a
            href="https://vibhav124.itch.io/vibhavgame"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <button className="bg-gray-900/80 text-white px-4 py-2 rounded-full">
              Play Now
            </button>
          </a>
        </div>

        
        <div className="flex flex-col items-center mt-3 text-center">
          <a
            href="https://vibhav124.itch.io/vibhavgame"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 text-lg font-orbitron p-2"
          >
            <p>Portal Hunt</p>
            <MdOutlineOpenInNew  className="h-5 w-5 text-white hover:scale-105 transition-transform" />
          </a>
          
          <p className="text-justify font-sans  text-gray-300 text-base sm:text-lg">
          Put Your Memory to the Ultimate Test! Beat the Game, Prove You're the One, and Enjoy Endless Fun. Play Now!
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default GameSection;
