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

    <div className="p-4 sm:p-12 relative z-10 bg-transparent min-h-screen">

  <img
    src="/Assets/FAQs.png"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover object-center -z-10"
  />

  <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <motion.div 
        /* Reduced size from max-w-screen-lg to max-w-2xl */
        className="max-w-2xl mx-auto my-10" 
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
                    <div className="text-xs sm:text-sm font-chakra font-bold text-left text-gray-200 tracking-[0.05em] leading-relaxed group-hover:text-cyan-300 transition-colors">
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
// "use client";
// import faqData from "../../data/faq.json";
// import { useState } from "react";
// import { HiChevronDown, HiChevronUp } from "react-icons/hi";
// import { motion, AnimatePresence } from "framer-motion";

// export default function FAQs() {
//   const [faqs, setFaqs] = useState([...faqData.faqs]);

//   const toggleFAQ = (index) => {
//     setFaqs((prevFaqs) =>
//       prevFaqs.map((faq, i) => {
//         if (i === index) {
//           return { ...faq, isOpen: !faq.isOpen };
//         } else {
//           return { ...faq, isOpen: false };
//         }
//       })
//     );
//   };

//   return (
//     <div className="p-4 sm:p-12 relative z-10 bg-transparent">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover -z-10"
//       >
//         <source src="/Assets/FAQs.mp4" type="video/mp4" />
//       </video>

      
//       <div className="absolute inset-0 bg-black/70 -z-10"></div>

//       <motion.div 
//         className="max-w-screen-lg mx-auto my-20"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <div className="relative">
          
         
//           <svg className="absolute -top-3 -left-3 w-32 h-32 z-30 pointer-events-none filter drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" viewBox="0 0 100 100" fill="none">
//             <path d="M 100 8 L 40 8 C 22 8 8 22 8 40 L 8 100" stroke="#9333ea" strokeWidth="10" strokeLinecap="round" />
//           </svg>
          
//           <svg className="absolute -bottom-3 -right-3 w-32 h-32 z-30 pointer-events-none filter drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" viewBox="0 0 100 100" fill="none">
//             <path d="M 0 92 L 60 92 C 78 92 92 78 92 60 L 92 0" stroke="#06b6d4" strokeWidth="10" strokeLinecap="round" />
//           </svg>

//           <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[40px] p-6 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative z-10">
            
//             <h2 className="text-3xl sm:text-5xl text-center font-batman uppercase tracking-[0.25em] mb-14 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
//               FAQs
//             </h2>

//             <div className="space-y-6">
//               {faqs.map((faq, index) => (
//                 <div key={index} className="flex flex-col">
//                   <button
//                     className={`w-full py-5 px-8 flex justify-between items-center transition-all duration-300 
//                       bg-[#1a1429]/60 hover:bg-[#251b3d]/80 
//                       border border-white/5 hover:border-cyan-400/40
//                       ${faq.isOpen 
//                         ? "rounded-t-2xl border-b-transparent ring-1 ring-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.1)]" 
//                         : "rounded-2xl hover:shadow-[0_0_15px_rgba(168,85,247,0.1)]"} 
//                       group`}
//                     onClick={() => toggleFAQ(index)}
//                   >
                    
                    
//                   <div className="text-xs sm:text-sm font-chakra   font-bold text-left text-gray-200 tracking-[0.05em] leading-relaxed group-hover:text-cyan-300 transition-colors">
//                    {faq.question}
//                        </div>
                    
//                     <div className={`transition-all transform duration-300 ${faq.isOpen ? "text-cyan-400" : "text-purple-400"}`}>
//                       {faq.isOpen ? <HiChevronUp className="w-5 h-5" /> : <HiChevronDown className="w-5 h-5" />}
//                     </div>
//                   </button>

//                   <AnimatePresence>
//                     {faq.isOpen && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                         className="overflow-hidden bg-[#1a1429]/40 rounded-b-2xl border-x border-b border-cyan-500/30"
//                       >
//                         <div className="p-8 text-gray-400 text-sm sm:text-base font-sans leading-relaxed border-t border-white/5">
//                           {faq.answer}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }