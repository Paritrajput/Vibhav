import { useState, useEffect, useRef } from "react";
import { IoGameController } from "react-icons/io5"; 

const FloatingGameInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null); 

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-10 right-10 hidden lg:block z-50">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-green-600 hover:bg-green-700 bg-gradient-to-r from-green-500 to-yellow-800 text-white rounded-full shadow-lg transition-all ease-in-out duration-300 hover:scale-105"
      >
        <IoGameController size={30} />
      </button>

      
      {isOpen && (
        <div
          ref={popupRef}
          className="absolute bottom-16 right-0 p-4 w-80 shadow-lg rounded-lg bg-black/20 backdrop-blur-md border border-white/30 "
        >
          
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-gray-600 hover:text-gray-400 z-50 bg-black rounded-full px-2 py-1"
          >
            ✖
          </button>

          
          <div className="relative group">
            <img
              src="/Assets/Homepage/gameCoverImg.jpg"
              alt="Game Cover"
              className="w-full h-40 object-cover rounded transition-all duration-300 group-hover:scale-95 group-hover:brightness-50"
            />

           
            <a
              href="https://vibhav124.itch.io/vibhavgame"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black bg-opacity-25  text-white z-40 absolute inset-0 flex items-center justify-center rounded transition-opacity duration-500 ease-in-out opacity-0  group-hover:opacity-100"
            >
              <button className="bg-black bg-gradient-to-t from-gray-800 to-[#11002080] shadow-[0_7px_20px_5px_rgba(0,0,0,0.5)] to white px-3 py-1 rounded-full  shadow-black z-50">Play</button>
              
            </a>
          </div>

         
          <h3 className="text-lg font-bold mt-2 text-gray-300 text-center">Portal Hunt</h3>
          <p className="text-gray-300 text-sm mt-1">
          Put Your Memory to the Ultimate Test! Beat the Game, Prove You're the One, and Enjoy Endless Fun. Play Now!
          </p>
        </div>
      )}
    </div>
  );
};

export default FloatingGameInfo;
