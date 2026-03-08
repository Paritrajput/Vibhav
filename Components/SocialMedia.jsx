import React from "react";
import { useEffect, useState, useRef } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

export default function SocialLinks() {
  const [isVisible, setIsVisible] = useState(true);
  const landingPageRef = useRef(null);

  useEffect(() => {
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, 
      }
    );

    
    const landingPage = document.querySelector("header.relative");
    if (landingPage) {
      observer.observe(landingPage);
    }

    return () => {
      if (landingPage) {
        observer.unobserve(landingPage);
      }
    };
  }, []);

  // const iconClass =
  //   "w-5 h-5 md:w-6 md:h-6 text-cyan-300";
  const iconClass =
  "w-5 h-5 md:w-6 md:h-6 text-white";

  // const wrapperClass =
  //   "flex items-center justify-center w-12 h-12 rounded-full \
  //    bg-cyan-900/30 backdrop-blur-md border border-cyan-400/30 \
  //    shadow-[0_0_15px_rgba(34,211,238,0.6)] \
  //    hover:shadow-[0_0_30px_rgba(34,211,238,0.9)] \
  //    hover:scale-110 transition-all duration-300";
  const wrapperClass =
  "flex items-center justify-center w-12 h-12 rounded-full \
   bg-white/10 backdrop-blur-md border border-white/20 \
   shadow-[0_0_15px_rgba(255,255,255,0.35)] \
   hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] \
   hover:bg-white/20 hover:scale-110 transition-all duration-300";

  return (
    <div className={`flex items-center justify-center gap-4 mt-8 transition-all duration-500 ${
      isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    }`}>
      
      <a href="https://github.com/Team-Vibhav" target="_blank" aria-label="Github" className={wrapperClass}>
        <FaGithub className={iconClass} />
      </a>

      <a href="https://www.instagram.com/team_vibhav/" target="_blank" aria-label="Instagram" className={wrapperClass}>
        <FaInstagram className={iconClass} />
      </a>

      <a href="https://m.facebook.com/262566097142744/" target="_blank" aria-label="Facebook" className={wrapperClass}>
        <FaFacebook className={iconClass} />
      </a>

      <a href="https://discord.gg/cc3j3GbCrX" target="_blank" aria-label="Discord" className={wrapperClass}>
        <FaDiscord className={iconClass} />
      </a>

      <a href="https://www.linkedin.com/company/team-vibhav" target="_blank" aria-label="LinkedIn" className={wrapperClass}>
        <FaLinkedin className={iconClass} />
      </a>

    </div>
  );
}


