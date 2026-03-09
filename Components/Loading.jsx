
// import Image from "next/image";

// import { useState, useEffect } from "react";
// export default function Loading() {
//   const fonts = [
//     "Arial, sans-serif",
//     "Georgia, serif",
//     "Courier New, monospace",
//     "Lucida Console, monospace",
//     "Times New Roman, serif",
//     "Verdana, sans-serif",
//     "Comic Sans MS, cursive",
//     "Impact, sans-serif",
//   ];
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     return () => clearTimeout(timeout);
//   }, []);

//   const AnimatedText = ({ text }) => {
//     const [fontStyles, setFontStyles] = useState([]);

//     useEffect(() => {
//       const changeFonts = () => {
//         setFontStyles(
//           text
//             .split("")
//             .map(() => fonts[Math.floor(Math.random() * fonts.length)])
//         );
//       };

//       changeFonts();
//       const interval = setInterval(changeFonts, 250);

//       return () => clearInterval(interval);
//     }, [text]);

//     return (
//       <div className="flex space-x-1 sm:text-5xl text-4xl font-bold text-white">
//         {text.split("").map((char, index) => (
//           <span key={index} style={{ fontFamily: fontStyles[index] }}>
//             {char}
//           </span>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       {loading && <AnimatedText text="Team Vibhav" />}
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";

export default function Loading() {
  const fonts = [
    "Arial, sans-serif",
    "Georgia, serif",
    "Courier New, monospace",
    "Lucida Console, monospace",
    "Times New Roman, serif",
    "Verdana, sans-serif",
    "Comic Sans MS, cursive",
    "Impact, sans-serif",
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const AnimatedText = ({ text }) => {
    const [fontStyles, setFontStyles] = useState([]);

    useEffect(() => {
      const changeFonts = () => {
        setFontStyles(
          text
            .split("")
            .map(() => fonts[Math.floor(Math.random() * fonts.length)])
        );
      };

      changeFonts();
      const interval = setInterval(changeFonts, 250);

      return () => clearInterval(interval);
    }, [text]);

    return (
      <div className="flex space-x-1 sm:text-5xl text-4xl font-bold text-white">
        {text.split("").map((char, index) => (
          <span key={index} style={{ fontFamily: fontStyles[index] }}>
            {char}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex justify-center items-center">
      {/* Background Video */}
      {/* <video
        src="/Assets/newtechCity.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      /> */}
       <img
                src="/Assets/loading.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover -z-10"
              /> 

              {/* <video
              src="/Assets/rain.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover -z-10"
            /> */}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75 -z-0" />

      {/* Foreground content */}
      {loading && (
        <div className="relative z-10">
          <AnimatedText text="Team Vibhav" />
        </div>
      )}
    </div>
  );
}