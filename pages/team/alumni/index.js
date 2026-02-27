import { useState, useEffect } from "react";
import Alumni from "../../../data/alumni.json";
import ProfileCard from "../../../Components/UI/cards/ProfileCard";
import Layout from '../../../Components/UI/Layout'

const Aluminus = () => {
  // Set default to the most recent year available in the JSON
  const years = Object.keys(Alumni).sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState(years[0] || "2024");
  const [isOpen, setIsOpen] = useState(false);

  const yearLabels = {
    2019: "2019 Batch",
    2020: "2020 Batch",
    2021: "2021 Batch",
    2022: "2022 Batch",
    2023: "2023 Batch",
    2024: "2024 Batch",
    2025: "2025 Batch",
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setIsOpen(false);
  };

 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <Layout>
      <div className="p-4 mx-0 pt-28 sm:pt-48 relative text-white min-h-screen">
        <div className="fixed inset-0 bg-black/75 pointer-events-none z-[-1]"></div>
        <video
          src="/Assets/backvd.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
        />

        
        <h1 className="text-3xl sm:text-6xl font-extrabold text-center mb-10 sm:mb-16 font-batman tracking-widest uppercase">
          Alumni
        </h1>

        <div className="flex flex-col items-center">
          
         
          <div className="w-full flex items-center justify-center mb-12 sm:mb-24 px-4">
            
           
            <div className="md:hidden w-full max-w-[280px] relative z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-zinc-900/90 text-[#5b8ef3] border border-[#5b8ef3]/50 rounded-lg px-4 py-3 font-chakraBold flex justify-between items-center shadow-[0_0_15px_rgba(91,142,243,0.2)]"
              >
                <span>{yearLabels[selectedYear]}</span>
                <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {isOpen && (
                <div className="absolute top-full left-0 w-full mt-2 bg-zinc-900 border border-white/10 rounded-lg overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-2">
                  {years.map((year) => (
                    <div
                      key={year}
                      className={`px-4 py-3 font-chakra text-center cursor-pointer transition-colors ${
                        selectedYear === year ? "bg-[#5b8ef3] text-black" : "text-gray-300 hover:bg-zinc-800"
                      }`}
                      onClick={() => handleYearChange(year)}
                    >
                      {yearLabels[year]}
                    </div>
                  ))}
                </div>
              )}
            </div>

           
            <div className="hidden md:flex items-center bg-zinc-900/40 backdrop-blur-md rounded-full border border-white/10 px-8 py-4 gap-6">
              {years.map((year) => (
                <button
                  key={year}
                  className={`px-6 py-2 rounded-full text-base font-chakraBold transition-all duration-300 ${
                    selectedYear === year 
                    ? "bg-[#5b8ef3] text-black shadow-[0_0_20px_#5b8ef3] scale-105" 
                    : "bg-transparent text-gray-400 hover:text-white"
                  }`}
                  onClick={() => handleYearChange(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          
          <div className="text-xl sm:text-4xl text-[#5b8ef3] font-chakraBold flex justify-center mb-14 text-center uppercase tracking-normal drop-shadow-[0_0_10px_rgba(91,142,243,0.8)] px-6">
            <h1>{yearLabels[selectedYear]}</h1>
          </div>

         
          <div className="w-full max-w-[1500px] px-6 pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-24 justify-items-center">
              {Alumni[selectedYear]?.map((member, index) => (
                <ProfileCard
                  key={index}
                  name={member.Name}
                  position={member.Position || "Alumnus"} 
                  profileImg={member.Profile}
                  githubLink={member.Github}
                  linkdinLink={member.LinkedIn}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Aluminus;
