

"use client";
import { useEffect, useState } from "react";
import WorkCard, { SkeletonWorkCard } from "../../../Components/UI/cards/WorkCard";
import ourWorkData from "../../../data/ourwork.json";
import Layout from "../../../Components/UI/Layout";

export default function PreviousYearWork() {
  const [events, setEvents] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [guestLectures, setGuestLectures] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEvents(ourWorkData.Previous.Events);
      setWorkshops(ourWorkData.Previous.Workshops);
      setGuestLectures(ourWorkData.Previous.GuestLectures); 
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <Layout>
      <div className="relative min-h-screen text-white pt-32  md:pt-36 lg:pt-40 p-4">
        
        
        <div className="fixed inset-0 bg-black/30 pointer-events-none z-[-1]"></div>

        <img
          src="/Assets/projectbackground.jpg"
          alt="Background"
          className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
        />

        <div className="container mx-auto text-center">
          
          <h1 className="text-3xl sm:text-7xl font-batman tracking-normal uppercase mb-4 md:mb-8 text-white drop-shadow-[0_0_15px_rgba(91,142,243,0.5)]">
            Our Work
          </h1>

         
          <div className="min-h-[85vh] flex flex-col items-center justify-start mb-20">
            <div className="inline-block mb-10 md:mb-20">
              <h2 className="sm:text-4xl text-1xl font-chakraBold text-white capitalize tracking-normal px-4 drop-shadow-[0_0_10px_rgba(91,142,243,0.5)]">
                Previous Year Events
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 justify-items-center px-4 w-full">
              {isLoading
                ? Array.from({ length: 2 }).map((_, i) => (
                    <SkeletonWorkCard key={i} />
                  ))
                : events.map((item) => (
                    <WorkCard
                      key={item.id}
                      work={item}
                      year="previous-year"
                      type="events"
                    />
                  ))}
            </div>
          </div>

       
          <div className="min-h-[85vh] flex flex-col items-center justify-start mb-20">
            <div className="inline-block mb-12">
              <h2 className="sm:text-4xl text-1xl font-chakraBold text-white capitalize tracking-normal px-4 drop-shadow-[0_0_10px_rgba(91,142,243,0.5)]">
                Previous Year Workshops
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 justify-items-center px-4 w-full">
              {isLoading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <SkeletonWorkCard key={i} />
                  ))
                : workshops.map((item) => (
                    <WorkCard
                      key={item.id}
                      work={item}
                      year="previous-year"
                      type="workshops"
                    />
                  ))}
            </div>
          </div>

         
          <div className="min-h-[85vh] flex flex-col items-center justify-start pb-20">
            <div className="inline-block mb-12">
              <h2 className="sm:text-4xl text-1xl font-chakraBold text-white capitalize tracking-normal px-4 drop-shadow-[0_0_10px_rgba(91,142,243,0.5)]">
                Previous Year Guest Lectures
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 justify-items-center px-4 w-full">
              {isLoading
                ? Array.from({ length: 2 }).map((_, i) => (
                    <SkeletonWorkCard key={i} />
                  ))
                : guestLectures.map((item) => (
                    <WorkCard
                      key={item.id}
                      work={item}
                      year="previous-year"
                      type="guestlectures"
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
