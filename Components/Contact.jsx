"use client";
import React from "react";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { MdOutlineDownloadDone } from "react-icons/md";
import { motion } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";
import Footer from "./UI/Footer";


export default function Contact({}) {
  const [state, setState] = useState({
    formSubmitted: false,
  });

  const [secondFormState, handleSubmitSecondForm] = useForm("xzbqvrrv");

  const handleSecondFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmitSecondForm(e);
      setState({ formSubmitted: true });
      setTimeout(() => {
        setState({ formSubmitted: false });
      }, 4000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-20 sm:py-28 px-4  overflow-hidden">

     
      <img
        src="/Assets/contact.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {state.formSubmitted ? (
        <div className="relative mt-24 overflow-hidden rounded-[20px] flex pt-8 flex-col items-center justify-center w-full max-w-md mx-auto bg-black/60 backdrop-blur-md border border-emerald-500/50 p-12 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          <h2 className="text-4xl mb-12 tracking-tight font-batman font-extrabold text-center uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            Contact Us
          </h2>

          <div className="flex items-center justify-center w-full text-xl text-emerald-400">
            <div className="flex p-4 px-8 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <MdOutlineDownloadDone className="w-8 h-8 mr-2" />
              Message Received
            </div>
          </div>
        </div>
      ) : (
        <div className="z-10 flex sm:mt-12 p-1 w-full justify-center">
          <motion.div
           
            className="max-w-4xl relative flex flex-col mt-5 sm:mt-20 my-20 w-full mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

          

           
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[30px] p-5 sm:p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.6)] w-full relative z-10 overflow-hidden">

              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/10 border border-white/20 p-1 rounded-full">
                <FaChevronUp className="text-white/50 text-xs" />
              </div>

              <div className="z-10 w-full">
                <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-5xl tracking-[0.18em] sm:tracking-[0.25em] font-batman font-extrabold text-center uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  Contact Us
                </h2>

                <form
                  onSubmit={handleSecondFormSubmit}
                 className="space-y-4 font-sans text-lg"
                >
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm sm:text-base font-mono font-bold tracking-widest text-white/90 uppercase"
                    >
                      Your email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="shadow-sm font-sans border border-white/10 text-white text-xs sm:text-sm rounded-lg block w-full p-4 bg-white/5 outline-none transition-all duration-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                    />

                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={secondFormState.errors}
                    />
                  </div>

                  <div className="space-y-3">
                    <label
                      htmlFor="subject"
                      className="block text-sm sm:text-base font-mono font-bold tracking-widest text-white/90 uppercase"
                    >
                      Subject
                    </label>

                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="shadow-sm font-sans border border-white/10 text-white text-xs sm:text-sm rounded-lg block w-full p-4 bg-white/5 outline-none transition-all duration-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                    />
                  </div>

                <div className="space-y-3 w-full">
                 <label
                   htmlFor="message"
                   className="block text-sm sm:text-base font-mono font-bold tracking-widest text-white/90 uppercase"
  >
                             Your message
                   </label>

                       <textarea
                          id="message"
                           name="message"
                           rows="3"
                           className="shadow-sm font-sans border border-white/10 text-white text-xs sm:text-sm rounded-lg block w-full p-4 bg-white/5 outline-none transition-all duration-300 resize-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                        ></textarea>

                         <ValidationError
                     prefix="Message"
                      field="message"
                      errors={secondFormState.errors}
                       />
                   </div>

                  <div className="pt-2 flex justify-center">
                    <button
                      type="submit"
                      disabled={secondFormState.submitting}
                      className="px-8 sm:px-12 py-3 sm:py-5 text-xs sm:text-xs font-batman font-bold text-white rounded-lg bg-gradient-to-r from-[#1a1429] to-[#2b1c4a] border border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 uppercase tracking-[0.3em] disabled:opacity-50"
                    >
                      {secondFormState.submitting ? "Sending..." : "Message"}
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </motion.div>
        </div>
      )}
     <Footer />
    </div>
     
  
  );
} 

