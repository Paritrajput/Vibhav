

 import Link from "next/link";


export const SkeletonWorkCard = () => {
  return (
    <div className="relative bg-gray-300 animate-pulse w-72 h-[22rem] md:w-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-gray-400" />
      <div className="absolute bottom-0 left-0 w-full p-4">
        <div className="h-5 bg-gray-500 rounded w-3/4 mx-auto mb-3" />
        <div className="h-8 bg-gray-500 rounded w-1/2 mx-auto" />
      </div>
    </div>
  );
};


const WorkCard = ({ work, type, year }) => {
  return (
    <Link href={`/work/${year}/${type}/${work.id}`}>
      <div className="group relative w-72 h-[23rem] md:w-80 md:h-[25rem] cursor-pointer">

        
        <div
          className="absolute -inset-[2px] rounded-lg
          bg-[#7C7CFF]
          blur-lg opacity-30
          group-hover:opacity-60 transition duration-300"
        />

        
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">

         
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${work.images[0]})` }}
          />

         
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />

         
          <div className="absolute bottom-0 left-0 w-full">
            <div
              className=" bg-[#0B0B14]/80 backdrop-blur-md
              rounded-md p-4 flex flex-col items-center gap-4"
            >
            
              <h3 className="text-white text-lg font-semibold text-center">
                {work.name}
              </h3>

              
              <div className="relative group/button">

               
                <div
                  className="absolute -inset-[2px] rounded-xl
                  bg-[#7C7CFF]
                  blur-sm opacity-30
                  group-hover/button:opacity-50transition duration-300"
                />

                
                <div className="relative rounded-xl p-[1.5px] bg-[#7C7CFF]">
                 
                  <div
                    className="px-6 py-2 rounded-xl
                    bg-[#0B0B14]
                    text-[#CFCFFF]
                    font-semibold text-sm tracking-wider
                    transition-transform duration-300
                    group-hover/button:scale-105"
                  >
                    EXPLORE
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
          


