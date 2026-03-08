"use client";

import Head from "next/head";
import Layout from "../Components/UI/Layout";
import FAQs from "../Components/UI/FAQs";
import Contact from "../Components/Contact";
import LandingPage from "../Components/LandingPage";
import CC from "../Components/CC";
import Gallery from "../Components/Gallery";
import AboutUs from "../Components/AboutUs";
import GameSection from "../Components/GameSection";
import Footer from "../Components/UI/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Team Vibhav</title>
        <meta
          name="description"
          content="Team Vibhav is the Departmental team of Electronics & Communication Engineering Department which works for Nimbus-Annual Technical Festival of NIT Hamirpur"
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>

      <main>
        <Layout>
          <div className="h-screen  snap-y snap-mandatory scroll-smooth overflow-y-auto">

            {/* Landing */}
            <section className="relative min-h-screen snap-start flex items-center justify-center">
              
              <video
                src="/Assets/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />

              <div className="w-full">
                <LandingPage />
              </div>

            </section>

            {/* About */}
            <section className="min-h-screen snap-start flex flex-col justify-center">
              <AboutUs />
            </section>

            {/* Gallery */}
            <section className="min-h-screen snap-start flex flex-col justify-center">
              <Gallery />
            </section>

            {/* CC */}
            <section className="min-h-screen snap-start flex flex-col justify-center">
              <CC />
            </section>

            {/* Games */}
            {/* <section className="min-h-screen snap-start flex flex-col justify-center">
              <GameSection />
            </section> */}

            {/* FAQ */}
            <section className="min-h-screen snap-start flex flex-col justify-center">
              <FAQs />
            </section>

            {/* Contact */}
            <section className="min-h-screen snap-start flex flex-col justify-center">
              <Contact />
              
            </section>
              
            
          </div>
          
        </Layout>
      </main>
    </>
  );
}

// "use client";

// import Head from "next/head";
// import Layout from "../Components/UI/Layout";
// import FAQs from "../Components/UI/FAQs";
// import Contact from "../Components/Contact";
// import LandingPage from "../Components/LandingPage";
// import CC from "../Components/CC";
// import Gallery from "../Components/Gallery";
// import AboutUs from "../Components/AboutUs";
// import GameSection from "../Components/GameSection";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Team Vibhav</title>
//         <meta
//           name="description"
//           content="Team Vibhav is the Departmental team of Electronics & Communication Engineering Department which works for Nimbus-Annual Technical Festival of National Institute of Technology, Hamirpur"
//         />
//         <meta
//           name="keywords"
//           content="Projects, Events, Workshops, Our Team, Our Work, Alumni"
//         />
//         <link rel="icon" href="/favicon.ico?" />
//       </Head>

//       <main>
//         <Layout>
//           <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

//             {/* Landing Page */}
//             <section
//               id="home"
//               className="relative min-h-screen w-full overflow-hidden snap-start"
//             >
//               <video
//                 src="/Assets/video.mp4"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="fixed inset-0 w-screen h-screen object-cover -z-10"
//               />

//               <div className="relative z-20 flex items-center justify-center min-h-screen">
//                 <LandingPage />
//               </div>
//             </section>

//             {/* About Us */}
//             <section className="min-h-screen snap-start flex items-center justify-center">
//               <AboutUs />
//             </section>

//             {/* Gallery */}
//             <section className="min-h-screen snap-start flex items-center justify-center">
//               <Gallery />
//             </section>

//             {/* Core Committee */}
//             <section className="min-h-screen snap-start flex items-center justify-center">
//               <CC />
//             </section>

//             {/* Game Section */}
//             <section className="min-h-screen snap-start flex items-center justify-center">
//               <GameSection />
//             </section>

//             {/* FAQs */}
//             <section className="min-h-screen snap-start">
//               <FAQs />
//             </section>

//             {/* Contact */}
//             <section className="min-h-screen snap-start">
//               <Contact />
//             </section>

//           </div>
//         </Layout>
//       </main>
//     </>
//   );
// }

// "use client";

// import Head from "next/head";
// import Layout from "../Components/UI/Layout";
// import FAQs from "../Components/UI/FAQs";
// import Contact from "../Components/Contact";
// import LandingPage from "../Components/LandingPage";
// import CC from "../Components/CC";
// import Gallery from "../Components/Gallery";
// import AboutUs from "../Components/AboutUs";
// import GameSection from "../Components/GameSection";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Team Vibhav</title>
//         <meta
//           name="description"
//           content="Team Vibhav is the Departmental team of Electronics & Communication Engineering Department which works for Nimbus-Annual Technical Festival of National Institute of Technology, Hamirpur"
//         />
//         <meta
//           name="keywords"
//           content="Projects, Events, Workshops, Our Team, Our Work, Alumni"
//         />
//         <link rel="icon" href="/favicon.ico?" />
//       </Head>

//       <main>
//         <Layout>
//           <div className="flex flex-col">

    
//             <section
//               id="home"
//               className="relative h-screen w-full overflow-hidden"
//             >
          
//               {/* <img
//                 src="/Assets/purpleNeoncity.png"
//                 alt="Background"
//                 className="absolute inset-0 w-full h-full object-cover -z-10"
//               /> */}

//               <video
//                 src="/Assets/video.mp4"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="fixed inset-0 w-screen h-screen object-cover -z-10"
//               />

           
//               {/* <div className="absolute inset-0 bg-black/40 z-10" /> */}

       
//               <div className="relative z-20">
//                 <LandingPage />
//               </div>
//             </section>

        
//             <section>
//               <AboutUs />
//               <Gallery />
//               <CC />
//               <GameSection />
//               <FAQs />
//               <Contact />
//             </section>

//           </div>
//         </Layout>
//       </main>
//     </>
//   );
// }

