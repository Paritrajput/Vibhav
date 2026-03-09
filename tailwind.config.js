/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        batman: ["batman", "sans-serif"],
        orbitron: ["orbitron", "sans-serif"],
        grace: ["grace", "sans-serif"],
        chakra: ["Chakra Petch", "sans-serif"],
        chakraBold: ["Chakra Petch Bold", "sans-serif"],
        arvo: ["Arvo", "serif"],
        michroma: ["Michroma", "sans-serif"],

      },
      keyframes: {
        glitter: {
          "0%, 100%": {
            color: "#fff",
            filter: "blur(2px)",
            textShadow:
              "0 0 10px #FFDF00, 0 0 20px #FFDF00,0 0 10px #FFDF00,0 0 40px #FFDF00,0 0 80px #FFDF00,0 0 120px #FFDF00,0 0 200px #FFDF00,0 0 300px #FFDF00, 0 0 400px #FFDF00",
          },
          "25%, 75%": {
            color: "#000",
            filter: "blur(0px)",
            textShadow: "none",
          },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        mover: {
          "0%": { transform: "translateY(-35px)" },
          "100%": { transform: "translateY(-5px)" },
        },
        mover2: {
          "0%": { transform: "translateY(-30px)" },
          "100%": { transform: "translateY(-15px)" },
        },
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        brightnessPulse: {
          "0%, 100%": { filter: "brightness(50%)" },
          "50%": { filter: "brightness(120%)" },
        },
      },
      animation: {
        mover: "mover 3s infinite alternate",
        mover2: "mover2 3s infinite alternate",
        gradient: "gradient 8s linear infinite",
        scrollX: "scrollX 15s linear infinite",
        scrollY: "scrollY 15s linear infinite",
        brightnessPulse: "brightnessPulse 2s infinite linear",
      },
      backgroundImage: (theme) => ({
        "al-pacino":
          "url('https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg')",
        "ben-stiller":
          "url('https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg')",
        "patrick-stewart":
          "url('https://i.pinimg.com/originals/ee/85/08/ee850842e68cfcf6e3943c048f45c6d1.jpg')",
      }),
    },
  },
  plugins: [],
};
