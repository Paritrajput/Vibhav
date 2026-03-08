"use client";

import React from "react";
import SocialLinks from "./SocialMedia";
import Typewriter from "typewriter-effect";
import { FaStar } from "react-icons/fa";
import FloatingGameInfo from "./UI/GameIcon";

export default function LandingPage() {
  return (
    <header className="relative mx-auto h-screen overflow-hidden mt-32">

     
      <div className="relative z-20 grid min-h-[70vh] place-items-center text-white">
        <div className="flex w-full flex-col items-center gap-6 lg:max-w-full">

         
          <div className="relative flex flex-col items-center -translate-y-2">
            <h1 className="font-batman text-[3rem] sm:text-8xl tracking-widest text-white text-center">
              TEAM VIBHAV
            </h1>
            <div className="mt-2 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>

          
          <div className="flex flex-col items-center translate-y-2 mb-4">
            <div className="text-2xl font-orbitron text-white">
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Beyond the Infinity....")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("अनंत से भी आगे....")
                    .pauseFor(1000)
                    .start();
                }}
              />
            </div>

            <div className="flex text-2xl justify-center items-center mt-8">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="mx-2 mt-4" />
              ))}
              <FaStar className="animate-pulse text-white mx-2 mt-4" />
            </div>
          </div>

          <SocialLinks />
        </div>

      </div>

     
    </header>
  );
}
















