"use client";

import { useRouter } from "next/router";
import Layout from "@/Components/UI/Layout";
import { motion } from "framer-motion";
import workData from "../../../../data/ourwork.json";
import { useEffect, useState } from "react";

export default function GuestLectureDetails() {
  const router = useRouter();
  const { lectureId } = router.query;

  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    setIsLaptop(window.innerWidth >= 768);
  }, []);

  if (!lectureId) return null;


  const Lecture = workData.Previous.GuestLectures.find(
    (item) => item.id === Number(lectureId)
  );

  if (!Lecture) {
    return (
      <Layout>
        <div className="pt-24 text-center text-white">
          Lecture not found
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto pt-24 md:pt-32 p-6 text-white relative">

        <motion.h1
          className="text-4xl text-center font-batman font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {Lecture.name}
        </motion.h1>

        {Lecture.speaker && (
          <motion.p
            className="text-lg text-center mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Speaker: {Lecture.speaker}
          </motion.p>
        )}

     
        <div className="space-y-16 p-5 md:p-8 my-5 text-justify">
          {Lecture.images.map((image, index) => (
            <motion.div
              key={index}
              className={`flex flex-col justify-center lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } gap-10`}
            >
          
              <motion.div
                className="flex-shrink-0 w-full lg:w-auto flex justify-center"
                {...(isLaptop && {
                  whileHover: { scale: 1.05 },
                  initial: index % 2 !== 0 ? { x: 30 } : { x: -30 },
                  animate: { x: 0 },
                  transition: { duration: 0.7 },
                })}
              >
                <img
                  src={image}
                  alt={`Guest lecture image ${index + 1}`}
                  className="rounded-lg md:h-96 object-cover"
                />
              </motion.div>

            
              <motion.div
                className="lg:w-[65%] w-full flex md:p-10 flex-col justify-center space-y-4 font-sans"
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
              >
                {index === 0 && (
                  <p className="text-lg">{Lecture.content}</p>
                )}

                {Lecture[`round${index + 1}`] && (
                  <p className="text-lg">
                    {Lecture[`round${index + 1}`]}
                  </p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

