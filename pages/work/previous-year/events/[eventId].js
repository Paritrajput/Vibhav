"use client";
import { useParams, useRouter } from "next/navigation";
import Layout from "@/Components/UI/Layout";
import { motion } from "framer-motion";
import workData from "../../../../data/ourwork.json"; 
import { useEffect, useState } from "react";

export default function WorkDetails() {
  const router = useRouter();
  const { eventId } = useParams();

 
  const Event = workData.Previous.Events.find(
    (item) => item.id === parseInt(eventId)
  );
console.log(Event)
  if (!Event) {
    return <div className="text-center pt-20">Project not found</div>;
  }

  const [isLaptop, setIsLaptop] = useState(false);
  useEffect(() => {
   
    setIsLaptop(window.innerWidth >= 768);
  }, []);

  return (
<Layout>
    <div className="container max-w-100% text-center mx-auto pt-24 md:pt-32 p-6 text-white relative">
      <motion.h1
        className="text-4xl text-center font-batman font-extrabold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {Event.name}
      </motion.h1>

      <div className="space-y-16 p-5 md:p-8 my-5 text-justify">
        {Event.images.map((image, index) => (
          <motion.div
            key={index}
            className={`flex flex-col justify-center lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } gap-10 md:gap-2`}
          >
            <motion.div
              className="flex-shrink-0 max-lg:w-full mx-auto flex items-center md:max-lg:justify-center"
              {...(isLaptop && {
                whileHover: { scale: 1.05 },
                initial: index % 2 !== 0 ? { x: 30 } : { x: -30 },
                animate: { x: 0 },
                transition: { duration: 0.7 },
              })}
              {...(!isLaptop && {
                whileInView: { scale: 1.02 },

                animate: { x: 0 },
                transition: { duration: 0.7 },
              })}
            >
              <img
                src={image}
                alt={`Project image ${index + 1}`}
                className="rounded-lg  md:h-96 md:max-lg:aspect-auto  object-cover"
              />
            </motion.div>

        
            <motion.div
              className="lg:w-[65%] w-full flex md:p-10 flex-col justify-center space-y-4 font-sans"
              {...(isLaptop && {
                whileInView: index % 2 !== 0 ? { x: 10 } : { x: -10 },
                initial: { opacity: 0, x: index % 2 === 0 ? 100 : -100 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 1, delay: index * 0.3 },
              })}
            >
              {index == 0 && <p className="text-lg">{Event.content}</p>}

              {Event[`round${2 * index + 1}`] && (
                <p className="text-lg">{Event[`round${2 * index + 1}`]}</p>
              )}
              {Event[`round${2 * index + 2}`] && (
                <p className="text-lg">{Event[`round${2 * index + 2}`]}</p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
    </Layout>
  );
}
