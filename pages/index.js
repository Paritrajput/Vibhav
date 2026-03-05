

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Team Vibhav</title>
        <meta
          name="description"
          content="Team Vibhav is the Departmental team of Electronics & Communication Engineering Department which works for Nimbus-Annual Technical Festival of National Institute of Technology, Hamirpur"
        />
        <meta
          name="keywords"
          content="Projects, Events, Workshops, Our Team, Our Work, Alumni"
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>

      <main>
        <Layout>
          <div className="flex flex-col">

    
            <section
              id="home"
              className="relative h-screen w-full overflow-hidden"
            >
          
              {/* <img
                src="/Assets/purpleNeoncity.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover -z-10"
              /> */}

              <video
                src="/Assets/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="fixed inset-0 w-screen h-screen object-cover -z-10"
              />

           
              {/* <div className="absolute inset-0 bg-black/40 z-10" /> */}

       
              <div className="relative z-20">
                <LandingPage />
              </div>
            </section>

        
            <section>
              <AboutUs />
              <Gallery />
              <CC />
              <GameSection />
              <FAQs />
              <Contact />
            </section>

          </div>
        </Layout>
      </main>
    </>
  );
}

