"use client";
import { useEffect, useState } from "react";
import WorkCard, { SkeletonWorkCard } from "../../../Components/UI/cards/WorkCard";
import ourWorkData from "../../../data/ourwork.json";
import Layout from "../../../Components/UI/Layout";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setEvents(ourWorkData.Current.Events);
      setWorkshops(ourWorkData.Current.Workshops);
      setIsLoading(false);
    }, 500);
  }, []);

  // Show "Coming Soon" only if both categories are empty
  if (!isLoading && events.length === 0 && workshops.length === 0) {
    return (
      <Layout>
        <div className="relative min-h-screen text-white pt-32 md:pt-36 lg:pt-40 p-4 font-batman text-center">
          <div className="fixed inset-0 bg-black/30 pointer-events-none z-[-1]"></div>
          <img
            src="/Assets/projectbackground.jpg"
            alt="Background"
            className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
          />
          <div className="pt-20">
            <h1 className="text-3xl sm:text-7xl font-batman tracking-normal uppercase mb-4 text-white drop-shadow-[0_0_15px_rgba(91,142,243,0.5)]">
              Current Year Work
            </h1>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-400">Coming Soon ...</h1>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative min-h-screen text-white pt-32 md:pt-36 lg:pt-40 p-4 font-batman">
        
       
        <div className="fixed inset-0 bg-black/30 pointer-events-none z-[-1]"></div>
        <img
          src="/Assets/projectbackground.jpg"
          alt="Background"
          className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
        />

        <div className="container mx-auto text-center">
        
          <h1 className="text-3xl sm:text-7xl font-batman tracking-normal uppercase mb-12 md:mb-16 text-white drop-shadow-[0_0_15px_rgba(91,142,243,0.5)]">
            Our Work
          </h1>

          
          {(events.length > 0 || isLoading) && (
            <div className="min-h-[60vh] flex flex-col items-center justify-start mb-20">
              <div className="inline-block mb-10 md:mb-12">
                <h2 className="sm:text-4xl text-2xl font-chakraBold text-white capitalize tracking-normal px-4 drop-shadow-[0_0_10px_rgba(91,142,243,0.5)]">
                  Current Year Events
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 justify-items-center px-4 w-full">
                {isLoading
                  ? Array.from({ length: 2 }).map((_, index) => (
                      <SkeletonWorkCard key={index} />
                    ))
                  : events.map((item, index) => (
                      <WorkCard
                        key={item.id}
                        work={item}
                        year="current-year"
                        type="events"
                      />
                    ))}
              </div>
            </div>
          )}

         
          {(workshops.length > 0 || isLoading) && (
            <div className="min-h-[60vh] flex flex-col items-center justify-start mb-20">
              <div className="inline-block mb-10 md:mb-12">
                <h2 className="sm:text-4xl text-2xl font-chakraBold text-white capitalize tracking-normal px-4 drop-shadow-[0_0_10px_rgba(91,142,243,0.5)]">
                  Current Year Workshops
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 justify-items-center px-4 w-full">
                {isLoading
                  ? Array.from({ length: 1 }).map((_, index) => (
                      <SkeletonWorkCard key={index} />
                    ))
                  : workshops.map((item, index) => (
                      <WorkCard
                        key={item.id}
                        work={item}
                        year="current-year"
                        type="workshops"
                      />
                    ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}