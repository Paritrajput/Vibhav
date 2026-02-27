import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

export function SkeletonProfileCard() {
  return (
    <div className="relative bg-[#12181d] border-2 border-zinc-800/50 rounded-2xl w-[80vw] sm:w-72 h-[380px] sm:h-[450px] animate-pulse">
      <div className="m-4 h-48 sm:h-64 bg-zinc-800/20 rounded-xl"></div>
    </div>
  );
}

function ProfileCard({ name, position, profileImg, githubLink, linkdinLink }) {
  const brandBlue = "#5b8ef3"; 

  return (
    <div className="group relative bg-[#12181d] border-2 border-zinc-700/50 rounded-2xl w-[80vw] sm:w-72 h-auto pb-4 sm:h-[450px] overflow-hidden cursor-pointer transition-all duration-500 hover:border-[#5b8ef3] hover:shadow-[0_0_30px_rgba(91,142,243,0.3)]">
      
    
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-10"
        style={{ 
            backgroundImage: `linear-gradient(${brandBlue} 1px, transparent 1px), linear-gradient(90deg, ${brandBlue} 1px, transparent 1px)`, 
            backgroundSize: '20px 20px' 
        }}
      ></div>

     
      <div className="relative m-3 sm:m-4 overflow-hidden rounded-xl h-56 sm:h-64 bg-zinc-900 border border-white/5">
        <img src={profileImg} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>

      
      <div className="flex flex-col items-center px-4 mt-1 relative z-10">
        <h1 className="text-lg sm:text-xl font-bold text-center font-chakraBold text-zinc-100 uppercase">
          {name}
        </h1>
        
       
        <p className="uppercase text-[11px] sm:text-sm tracking-[0.2em] font-chakraBold mt-1" style={{ color: brandBlue }}>
          {position}
        </p>

     
        <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-4 sm:mt-6">
          {linkdinLink && (
            <a href={linkdinLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-zinc-600 text-white transition-all hover:bg-[#5b8ef3] hover:text-black">
              <RiLinkedinFill className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-zinc-600 text-white transition-all hover:bg-[#5b8ef3] hover:text-black">
              <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;