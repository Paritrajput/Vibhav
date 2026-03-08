"use client";
import faqData from "../../data/faq.json";
import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQs() {
  const [faqs, setFaqs] = useState([...faqData.faqs]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen };
        } else {
          return { ...faq, isOpen: false };
        }
      })
    );
  };

  return (
    // <div className="p-4 sm:p-12 relative z-10 bg-transparent">
    //   {/* Background Video */}
    //   {/* <video
    //     autoPlay
    //     loop
    //     muted
    //     playsInline
    //     className="absolute inset-0 w-full h-full object-cover -z-10"
    //   >
    //     <source src="/Assets/FAQs.mp4" type="video/mp4" />
    //   </video> */}
    //   <img
    //     src="/Assets/Faqss.png"
    //     alt="background"
    //     className="absolute inset-0 w-full h-full object-cover -z-10"
    //   />

    //   <div className="absolute inset-0 bg-black/60 -z-10"></div>

    <div className="p-4 sm:p-12 relative z-10 bg-transparent min-h-screen flex items-center justify-center w-full">

  <img
    src="/Assets/FAQsss.png"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover object-center -z-10"
  />

  <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <motion.div 
        /* Reduced size from max-w-screen-lg to max-w-2xl */
        className="max-w-4xl mx-auto my-10 w-full" 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative">
          {/* Blue and Purple SVG lines removed from here */}

          {/* Increased transparency (bg-black/20) and refined border */}
          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-[30px] p-6 md:p-10 shadow-2xl relative z-10">
            
            <h2 className="text-2xl sm:text-4xl text-center font-batman uppercase tracking-[0.2em] mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              FAQs
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="flex flex-col">
                  <button
                    /* Adjusted button colors for more transparency */
                    className={`w-full py-4 px-6 flex justify-between items-center transition-all duration-300 
                      bg-white/5 hover:bg-white/10 
                      border border-white/5 hover:border-cyan-400/30
                      ${faq.isOpen 
                        ? "rounded-t-xl border-b-transparent ring-1 ring-cyan-500/50 shadow-lg" 
                        : "rounded-xl"} 
                      group`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="text-sm sm:text-sm font-chakra font-bold text-left text-gray-200 tracking-[0.05em] leading-relaxed group-hover:text-cyan-300 transition-colors">
                      {faq.question}
                    </div>
                    
                    <div className={`transition-all transform duration-300 ${faq.isOpen ? "text-cyan-400" : "text-purple-400"}`}>
                      {faq.isOpen ? <HiChevronUp className="w-5 h-5" /> : <HiChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {faq.isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden bg-black/30 rounded-b-xl border-x border-b border-cyan-500/20"
                      >
                        <div className="p-6 text-gray-400 text-sm sm:text-base font-sans leading-relaxed border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
