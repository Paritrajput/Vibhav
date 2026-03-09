"use client";

import { useEffect, useState } from "react";
import Team from "../../../data/team.json";
import ProfileCard, { SkeletonProfileCard } from "../../../Components/UI/cards/ProfileCard";
import Layout from "../../../Components/UI/Layout";

const CurrentTeam = () => {
  const [selectedYear, setSelectedYear] = useState("SuperFinal Year");
  const [loading, setLoading] = useState(true);
  const [showProfiles, setShowProfiles] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const yearLabels = {
    "SuperFinal Year": "Super Final Year Members",
    "Final Year": "Final Year Members",
    "Third Year": "Third Year Members",
    "Second Year": "Second Year Members",
    "First Year": "First Year Members",
  };

  const handleYearChange = (year) => {
    if (year === selectedYear) return;
    setSelectedYear(year);
    setLoading(true);
    setShowProfiles(false);

    setTimeout(() => {
      setLoading(false);
      setShowProfiles(true);
    }, 800);
  };
  

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setShowProfiles(true);
    }, 500);
  }, []);

  return (
    <Layout>
      <div className="relative text-white min-h-screen p-4 pt-24 sm:pt-24 overflow-hidden">
        <div
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-2] brightness-75"
          style={{ backgroundImage: "url('/Assets/projectbackground.jpg')" }}
        ></div>
        <div className="fixed inset-0 bg-black/5 z-[-1]"></div>

        <h1 className="text-2xl xs:text-3xl sm:text-6xl font-extrabold text-center mb-12 sm:mb-20 font-batman tracking-tight sm:tracking-widest uppercase text-[#5b8ef3] drop-shadow-[0_0_15px_rgba(91,142,243,0.9)] whitespace-nowrap px-2">
          Current Team
        </h1>

        <div className="flex flex-col items-center w-full">
          <div className="w-full flex items-center justify-center mb-12 sm:mb-20 px-2">
            
            <div className="sm:hidden w-full max-w-[340px] relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-center bg-zinc-900/90 text-white border border-white/20 rounded-lg px-4 py-3 font-chakraBold font-extrabold shadow-lg relative"
              >
                <span className="text-[#5b8ef3] whitespace-nowrap">
                  {selectedYear} Members
                </span>
                <span className={`absolute right-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-black/95 border border-white/10 rounded-xl overflow-hidden z-50 shadow-2xl">
                  <div className="flex flex-col p-2 space-y-1">
                    {Object.keys(Team).map((year) => (
                      <button
                        key={year}
                        onClick={() => {
                          handleYearChange(year);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full py-3 px-4 rounded-full text-sm font-chakra font-bold transition-all text-center whitespace-nowrap ${
                          selectedYear === year
                            ? "bg-[#1e293b] text-[#5b8ef3]"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {year} Members
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="hidden sm:flex items-center bg-zinc-900/40 backdrop-blur-md rounded-full border border-white/10 px-8 py-3 gap-6 shadow-[0_0_30px_rgba(91,142,243,0.5)]">
              {Object.keys(Team).map((year) => (
                <button
                  key={year}
                  className={`px-6 py-2 rounded-full text-base font-chakraBold font-bold transition-all duration-300 ${
                    selectedYear === year
                      ? "bg-[#5b8ef3] text-black shadow-[0_0_20px_#5b8ef3]"
                      : "bg-transparent text-gray-400 hover:text-white"
                  }`}
                  onClick={() => handleYearChange(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center mb-12 w-full px-4 overflow-hidden">
            <h2 className=" xs:text-2xl sm:text-3xl text-2xl text-[#5b8ef3] font-chakraBold font-black text-center  tracking-tighter whitespace-nowrap ">
              {yearLabels[selectedYear]}
            </h2>
          </div>

          <div className="w-full max-w-[1500px] px-6 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 sm:gap-y-24 justify-items-center">
              {loading
                ? Array.from({ length: 4 }).map((_, index) => <SkeletonProfileCard key={index} />)
                : showProfiles &&
                  Team[selectedYear].map((member, index) => (
                    <ProfileCard
                      key={index}
                      name={member.Name}
                      position={member.Position}
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

export default CurrentTeam;