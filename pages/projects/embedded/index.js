import { useEffect, useState } from "react";
import ProjectCard, { SkeletonProjectCard } from "../../../Components/UI/cards/ProjectCard/ProjectCard";
import projects from "../../../data/Projects.json";
import Layout from "../../../Components/UI/Layout";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    setProjectList(projects["EMBEDDED SYSTEMS"]);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer); 
  }, []);

  return (
    <Layout>
      <div className="">
       
        <div className="fixed bottom-0 top-0 left-0 w-full bg-black/2 pointer-events-none z-[-1]"></div>

       
        <img
          src="/Assets/projectbackground.jpg"
          alt="Background"
          className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
        />

        <div className="pt-32 bg-black/50 text-center z-50 font-batman">
         
          <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-10 font-batman tracking-widest uppercase 
              text-[#3f7aff] drop-shadow-[0_0_15px_rgba(63,122,255,0.9)]">
            Projects
          </h1>
          <span className="sm:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-400 text-center font-chakraBold z-50">
            EMBEDDED SYSTEMS
          </span>

         
          <div className="container mx-auto p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-5 justify-items-center">
            {loading
              ? Array.from({ length: projectList.length || 6 }).map((_, index) => (
                  <SkeletonProjectCard key={index} />
                ))
              : projectList.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

