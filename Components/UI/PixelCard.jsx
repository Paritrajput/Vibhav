"use client";
import { useEffect, useRef } from "react";

class Pixel {
  constructor(canvas, context, x, y, color, gap) {
    this.canvas = canvas;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = 2;
    this.gap = gap;
    this.scrollSpeed = 0.4; 
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  update() {
    this.y += this.scrollSpeed;

    if (this.y > this.canvas.height) {
      this.y = 0;
    }

    this.draw();
  }
}

export default function PixelCard({ className = "" }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const pixelsRef = useRef([]);
  const animationRef = useRef(null);

  const initPixels = () => {
    if (!containerRef.current || !canvasRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const gap = 8;
    const colors = ["#1e293b", "#334155", "#475569"];

    const pixels = [];

    for (let x = 0; x < width; x += gap) {
      for (let y = 0; y < height; y += gap) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        pixels.push(new Pixel(canvas, ctx, x, y, color, gap));
      }
    }

    pixelsRef.current = pixels;
  };

  const animate = () => {
    animationRef.current = requestAnimationFrame(animate);

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pixelsRef.current.forEach((pixel) => pixel.update());
  };

  useEffect(() => {
    initPixels();
    animate();

    const observer = new ResizeObserver(() => {
      initPixels();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="w-screen relative mt-11 z-10">
      <div
        ref={containerRef}
        className={`relative w-[90%] sm:w-[60%] overflow-hidden grid place-items-center border border-[#27272a] rounded-[25px] isolate mx-auto mt-14 select-none bg-black ${className}`}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 opacity-40"
        />

        <div className="relative z-10 flex flex-col gap-6 p-8 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-batman">
            ABOUT US
          </h1>

          <p className="text-base sm:text-lg text-justify leading-7 font-sans">
            Team Vibhav is the official departmental team of the Electronics &
            Communication Engineering Department at NIT Hamirpur, dedicated to
            contributing to Nimbus, the institute’s annual technical festival.
            As a team, we cultivate a spirit of innovation, teamwork, and
            technical excellence, fostering an environment where students can
            develop and showcase their skills in electronics, robotics,
            embedded systems, and cutting-edge technologies.
          </p>

          <p className="text-base sm:text-lg text-justify leading-7 font-sans">
            At Team Vibhav, we believe in nurturing a deep and genuine
            commitment toward technological advancements. Our diverse pool of
            talented students continuously explores new ideas, pushing the
            boundaries of what is possible. Whether it's designing intelligent
            automation systems, IoT-based applications, or futuristic
            electronic projects, we encourage creativity and hands-on learning.
          </p>
        </div>
      </div>
    </div>
  );
}



// "use client"
// import { useEffect, useRef } from "react";

// class Pixel {
//   constructor(canvas, context, x, y, color, speed, delay) {
//     this.width = canvas.width;
//     this.height = canvas.height;
//     this.ctx = context;
//     this.x = x;
//     this.y = y;
//     this.color = color;
//     this.speed = this.getRandomValue(0.1, 0.9) * speed;
//     this.size = 0;
//     this.sizeStep = Math.random() * 0.4;
//     this.minSize = 0.5;
//     this.maxSizeInteger = 2;
//     this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
//     this.delay = delay;
//     this.counter = 0;
//     this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
//     this.isIdle = false;
//     this.isReverse = false;
//     this.isShimmer = false;
//   }

//   getRandomValue(min, max) {
//     return Math.random() * (max - min) + min;
//   }

//   draw() {
//     const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
//     this.ctx.fillStyle = this.color;
//     this.ctx.fillRect(
//       this.x + centerOffset,
//       this.y + centerOffset,
//       this.size,
//       this.size
//     );
//   }

//   appear() {
//     this.isIdle = false;
//     if (this.counter <= this.delay) {
//       this.counter += this.counterStep;
//       return;
//     }
//     if (this.size >= this.maxSize) {
//       this.isShimmer = true;
//     }
//     if (this.isShimmer) {
//       this.shimmer();
//     } else {
//       this.size += this.sizeStep;
//     }
//     this.draw();
//   }

//   disappear() {
//     this.isShimmer = false;
//     this.counter = 0;
//     if (this.size <= 0) {
//       this.isIdle = true;
//       return;
//     } else {
//       this.size -= 0.1;
//     }
//     this.draw();
//   }

//   shimmer() {
//     if (this.size >= this.maxSize) {
//       this.isReverse = true;
//     } else if (this.size <= this.minSize) {
//       this.isReverse = false;
//     }
//     if (this.isReverse) {
//       this.size -= this.speed;
//     } else {
//       this.size += this.speed;
//     }
//   }
// }

// function getEffectiveSpeed(value, reducedMotion) {
//   const min = 0;
//   const max = 100;
//   const throttle = 0.001;
//   const parsed = parseInt(value, 10);

//   if (parsed <= min || reducedMotion) {
//     return min;
//   } else if (parsed >= max) {
//     return max * throttle;
//   } else {
//     return parsed * throttle;
//   }
// }


// const VARIANTS = {
//   default: {
//     activeColor: null,
//     gap: 5,
//     speed: 35,
//     colors: "#f8fafc,#f1f5f9,#cbd5e1",
//     noFocus: false
//   },
//   blue: {
//     activeColor: "#e0f2fe",
//     gap: 10,
//     speed: 25,
//     colors: "#e0f2fe,#7dd3fc,#0ea5e9",
//     noFocus: false
//   },
//   yellow: {
//     activeColor: "#fef08a",
//     gap: 3,
//     speed: 20,
//     colors: "#fef08a,#fde047,#eab308",
//     noFocus: false
//   },
//   pink: {
//     activeColor: "#fecdd3",
//     gap: 6,
//     speed: 80,
//     colors: "#fecdd3,#fda4af,#e11d48",
//     noFocus: true
//   }
// };

// export default function PixelCard({
//   variant = "default",
//   gap,
//   speed,
//   colors,
//   noFocus,
//   className = "",
//   children,
// }) {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const pixelsRef = useRef([]);
//   const animationRef = useRef(null);
//   const timePreviousRef = useRef(performance.now());
//   const reducedMotion = useRef(
//     window.matchMedia("(prefers-reduced-motion: reduce)").matches
//   ).current;

//   const variantCfg = VARIANTS[variant] || VARIANTS.default;
//   const finalGap = gap ?? variantCfg.gap;
//   const finalSpeed = speed ?? variantCfg.speed;
//   const finalColors = colors ?? variantCfg.colors;
//   const finalNoFocus = noFocus ?? variantCfg.noFocus;

//   const initPixels = () => {
//     if (!containerRef.current || !canvasRef.current) return;

//     const rect = containerRef.current.getBoundingClientRect();
//     const width = Math.floor(rect.width);
//     const height = Math.floor(rect.height);
//     const ctx = canvasRef.current.getContext("2d");

//     canvasRef.current.width = width;
//     canvasRef.current.height = height;
//     canvasRef.current.style.width = `${width}px`;
//     canvasRef.current.style.height = `${height}px`;

//     const colorsArray = finalColors.split(",");
//     const pxs = [];
//     for (let x = 0; x < width; x += parseInt(finalGap, 10)) {
//       for (let y = 0; y < height; y += parseInt(finalGap, 10)) {
//         const color =
//           colorsArray[Math.floor(Math.random() * colorsArray.length)];

//         const dx = x - width / 2;
//         const dy = y - height / 2;
//         const distance = Math.sqrt(dx * dx + dy * dy);
//         const delay = reducedMotion ? 0 : distance;

//         pxs.push(
//           new Pixel(
//             canvasRef.current,
//             ctx,
//             x,
//             y,
//             color,
//             getEffectiveSpeed(finalSpeed, reducedMotion),
//             delay
//           )
//         );
//       }
//     }
//     pixelsRef.current = pxs;
//   };

//   const doAnimate = (fnName) => {
//     animationRef.current = requestAnimationFrame(() => doAnimate(fnName));
//     const timeNow = performance.now();
//     const timePassed = timeNow - timePreviousRef.current;
//     const timeInterval = 1000 / 60; 

//     if (timePassed < timeInterval) return;
//     timePreviousRef.current = timeNow - (timePassed % timeInterval);

//     const ctx = canvasRef.current?.getContext("2d");
//     if (!ctx || !canvasRef.current) return;

//     ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

//     let allIdle = true;
//     for (let i = 0; i < pixelsRef.current.length; i++) {
//       const pixel = pixelsRef.current[i];
//       pixel[fnName]();
//       if (!pixel.isIdle) {
//         allIdle = false;
//       }
//     }
//     if (allIdle) {
//       cancelAnimationFrame(animationRef.current);
//     }
//   };

//   const handleAnimation = (name) => {
//     cancelAnimationFrame(animationRef.current);
//     animationRef.current = requestAnimationFrame(() => doAnimate(name));
//   };

//   const onMouseEnter = () => handleAnimation("appear");
//   const onMouseLeave = () => handleAnimation("disappear");
//   const onFocus = (e) => {
//     if (e.currentTarget.contains(e.relatedTarget)) return;
//     handleAnimation("appear");
//   };
//   const onBlur = (e) => {
//     if (e.currentTarget.contains(e.relatedTarget)) return;
//     handleAnimation("disappear");
//   };

//   useEffect(() => {
//     initPixels();
//     const observer = new ResizeObserver(() => {
//       initPixels();
//     });
//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }
//     return () => {
//       observer.disconnect();
//       cancelAnimationFrame(animationRef.current);
//     };
    
//   }, [finalGap, finalSpeed, finalColors, finalNoFocus]);

//   return (
//     <div className="w-screen relative mt-11 z-10 ">
//       <div
//         ref={containerRef}
//         className={`relative w-[90%] sm:w-[60%] overflow-hidden grid place-items-center border border-[#27272a] rounded-[25px]  isolate transition-colors duration-200 mx-auto ease-[cubic-bezier(0.5,1,0.89,1)] mt-14 select-none ${className}`}
//         onMouseEnter={onMouseEnter}
//         onMouseLeave={onMouseLeave}
//         onFocus={finalNoFocus ? undefined : onFocus}
//         onBlur={finalNoFocus ? undefined : onBlur}
//         tabIndex={finalNoFocus ? -1 : 0}
//       >
//         <canvas
//           className="absolute inset-0 opacity-45"
//           ref={canvasRef}
//         />
//         <div className="flex flex-col gap-3 p-6">
//           <h1 className="text-2xl sm:text-3xl md:text-5xl text-center font-batman">About Us</h1>
//           <p className="max-sm:hidden text-base sm:text-lg text-justify leading-6 font-sans text-white ">
//           Team Vibhav is the official departmental team of the Electronics & Communication Engineering Department at NIT Hamirpur, dedicated to contributing to Nimbus, the institute’s annual technical festival. As a team, we cultivate a spirit of innovation, teamwork, and technical excellence, fostering an environment where students can develop and showcase their skills in electronics, robotics, embedded systems, and cutting-edge technologies. At Team Vibhav, we believe in nurturing a deep and genuine commitment toward technological advancements. Our diverse pool of talented students continuously explores new ideas, pushing the boundaries of what is possible. Whether it's designing intelligent automation systems, IoT-based applications, or futuristic electronic projects, we encourage creativity and hands-on learning.</p>
 
//  <p className="sm:hidden  text-base sm:text-lg text-justify leading-6 font-sans text-white  ">
//  Team Vibhav is the official departmental team of the Electronics & Communication Engineering Department at NIT Hamirpur, dedicated to contributing to Nimbus, the institute’s annual technical festival. As a team, we cultivate a spirit of innovation, teamwork, and technical excellence, fostering an environment where students can develop and showcase their skills in electronics, robotics, embedded systems, and cutting-edge technologies.</p>


          
//         </div>
//       </div>
//     </div>
//   );
// }
