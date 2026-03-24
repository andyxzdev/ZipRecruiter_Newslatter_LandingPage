import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HandCoins, ArrowRight, FolderMinus } from "lucide-react";

import Logo_Top from "./assets/logo/logo1.svg";
import Logo_Top2 from "./assets/logo/logo2.svg";
import Banner_Hero from "./assets/images/banner_hero.jpg";
import Banner_Hero_Responsive from "./assets/images/banner_hero_res.jpg";
import Img_Connecting from "./assets/images/img_connecting.png";
import Img_globe from "./assets/images/globe.png";

import Button from "./assets/components/botons/Button";
import Text_Animated from "./assets/components/text_animated/Text_animated.jsx";
import Feedbacks from "./assets/components/feedbacks/Feedbacks.jsx";
import Forms from "./assets/components/forms/Forms.jsx";
import Footer from "./assets/components/footer/Footer.jsx";

const App = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-155, 35]);

  return (
    <main>
      <section
        className="relative w-full h-[90vh] lg:h-[80vh] flex flex-col items-center lg:items-start justify-start lg:justify-center lg:pl-30 bg-cover bg-center bg-no-repeat px-3

      bg-[url('./assets/images/banner_hero_res.jpg')]
      lg:bg-[url('./assets/images/banner_hero.jpg')]"
      >
        <div className="pt-40 lg:pt-0 text-center lg:text-left">
          <div className="relative z-10 flex flex-col items-center lg:items-start text-center">
            <img
              src={Logo_Top}
              alt="Logo zip recruiter"
              className="w-[30vw] lg:w-[10vw] xl:w-[7vw]"
            />
          </div>

          <div className="mt-6 space-y-7 2xl:w-[100%]">
            <h1 className="animate-fade-left animate-duration-1000 animate-ease-in text-4xl 2xl:text-[4rem] font-bold text-[#45DB61]">
              We are connecting your future!
            </h1>
            <h2 className="animate-fade-right animate-duration-1000 animate-delay-400 animate-ease-in text-2xl text-white font-bold">
              Your Next Opportunity Starts Here
            </h2>
            <h3 className="animate-fade-left animate-duration-1000 animate-delay-900 animate-ease-in text-base text-white max-w-xl">
              Stay ahead in your career with curated job opportunities, market
              insights, and expert guidance, delivered straight to your inbox.
            </h3>
            <Button text={"Sign Up for the Newsletter"} />
          </div>
        </div>
      </section>
      <Text_Animated />
      <section className="px-4 py-8 lg:px-0 lg:py-20">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-30">
          <img
            src={Img_Connecting}
            alt="Image young works"
            className="lg:w-[30vw] animate-fade-left animate-duration-1000 animate-delay-400 animate-ease-in"
          ></img>
          <div className="mt-5 lg:w-[50%]">
            <img
              src={Logo_Top2}
              alt="logo zip recruiter"
              className="w-[28vw] lg:w-[10vw] xl:w-[10vw]"
            />
            <div className="pt-4">
              <h1 className="animate-fade-right animate-duration-1000 animate-delay-400 animate-ease-in text-[2rem] lg:text-[2.4rem] xl:text-[3.5rem] text-[#002325] font-bold">
                Connecting Talent to Opportunity Worldwide
              </h1>
              <h2 className="animate-fade-left animate-duration-1000 animate-delay-700 animate-ease-in mt-6">
                <span className="font-bold">ZipRecruiter</span> was built to
                simplify the job search process and connect professionals with
                the right opportunities, faster and smarter.
              </h2>
              <h2 className="animate-fade-right animate-duration-1400 animate-delay-700 animate-ease-in mt-6">
                Our mission is to empower people to make better career decisions
                through data, technology, and access to global opportunities.
              </h2>
              <h2 className="animate-fade-right animate-duration-1600 animate-delay-700 animate-ease-in mt-6">
                From startups to global enterprises, we help companies find the
                right talent and professionals find the right path.
              </h2>
              <Button text={"Sign Up for the Newsletter"} className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col mt-10 mb-15 lg:mb-35 px-4 py-8">
        <div>
          <div className="text-center">
            <h1 className="animate-fade-up animate-duration-1000 animate-delay-600 animate-ease-in text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-bold text-[#002325]">
              Stay Informed.<br></br>Stay Ahead.
            </h1>
            <h2 className="mt-6 lg:text-[1.5rem] animate-fade-down animate-duration-1000 animate-delay-700 animate-ease-in">
              Get exclusive access to the latest job market trends, salary
              insights, and career strategies.
            </h2>
          </div>
          <div className="lg:mt-15 lg:flex lg:items-center lg:justify-evenly lg:gap-5">
            <div
              className="bg-[#094C55] mt-7 px-5 py-5 rounded-2xl
            animate-fade-left animate-duration-400 animate-delay-1000 animate-ease-in"
            >
              <div>
                <HandCoins size={45} className="text-[#45DB61]" />
              </div>
              <div className="pt-3">
                <h1 className="text-[1.4rem] text-white font-bold">
                  Salary Insights That Matter
                </h1>
                <h2 className="text-[1rem] text-white pt-3 pb-3">
                  Discover what your skills are worth in today’s market.
                </h2>
              </div>
              <a
                href="#"
                className="text-[1rem] mt-4 gap-5 items-center text-white flex"
              >
                Read more <ArrowRight size={20} />
              </a>
            </div>
            <div
              className="bg-[#094C55] mt-7 px-5 py-5 rounded-2xl
            animate-fade-left animate-duration-600 animate-delay-1200 animate-ease-in"
            >
              <div>
                <HandCoins size={45} className="text-[#45DB61]" />
              </div>
              <div className="pt-3">
                <h1 className="text-[1.4rem] text-white font-bold">
                  Salary Insights That Matter
                </h1>
                <h2 className="text-[1rem] text-white pt-3 pb-3">
                  Discover what your skills are worth in today’s market.
                </h2>
              </div>
              <a
                href="#"
                className="text-[1rem] mt-4 gap-5 items-center text-white flex"
              >
                Read more <ArrowRight size={20} />
              </a>
            </div>
            <div
              className="bg-[#094C55] mt-7 px-5 py-5 rounded-2xl
            animate-fade-left animate-duration-1800 animate-delay-700 animate-ease-in"
            >
              <div>
                <HandCoins size={45} className="text-[#45DB61]" />
              </div>
              <div className="pt-3">
                <h1 className="text-[1.4rem] text-white font-bold">
                  Salary Insights That Matter
                </h1>
                <h2 className="text-[1rem] text-white pt-3 pb-3">
                  Discover what your skills are worth in today’s market.
                </h2>
              </div>
              <a
                href="#"
                className="text-[1rem] mt-4 gap-5 items-center text-white flex"
              >
                Read more <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Text_Animated />

      <section className="px-4 py-15 bg-[#ECEBE6] lg:px-0 lg:py-50">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-30">
          <div className="mt-5 lg:w-[50%]">
            <img
              src={Logo_Top2}
              alt="logo zip recruiter"
              className="w-[28vw] lg:w-[10vw] xl:w-[10vw]"
            />
            <div className="pt-4">
              <h1 className="animate-fade-up animate-duration-1000 animate-delay-700 animate-ease-in text-[2rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[5rem] text-[#002325] font-bold">
                Global opportunities await
              </h1>
              <h2 className="animate-fade-left animate-duration-1000 animate-delay-1400 animate-ease-in mt-6">
                Wherever you are in your career journey, we connect you to
                opportunities across the world.
              </h2>
              <Button text={"Sign Up for the Newsletter"} className="mt-6" />
            </div>
          </div>
          <div className="mt-20">
            <motion.img
              src={Img_globe}
              alt="Image globe connecting"
              style={{ rotate }}
              className="lg:w-[30vw]"
            ></motion.img>
          </div>
        </div>
      </section>

      <Feedbacks />

      <section className="px-5 lg:px-15">
        <div className="flex flex-col items-center pb-30 lg:flex-row gap-20">
          <div className="lg:w-[50%]">
            <div>
              <h1 className="text-[2rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[4rem] text-[#002325] font-bold animate-fade-right animate-duration-1000 animate-delay-700 animate-ease-in">
                Take the Next Step in Your Career
              </h1>
              <h2 className="text-[1rem] pt-3 pb-3 animate-fade-left animate-duration-1500 animate-delay-700 animate-ease-in">
                Join our newsletter and receive curated job opportunities,
                salary insights, and career advice, all in one place.
              </h2>
            </div>
            <div className="animate-fade-down animate-duration-1000 animate-delay-700 animate-ease-in">
              <h1 className="text-[1.5rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2rem] text-[#002325] font-bold">
                Beneficts:
              </h1>
              <div className="flex flex-col">
                <div className="flex gap-8">
                  <div className="flex items-center gap-4 mt-6">
                    <HandCoins size={40} className="text-[#45DB61]" />
                    <p className="lg:text-[0.8rem]">
                      Curated job opportunities
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <HandCoins size={40} className="text-[#45DB61]" />
                    <p className="lg:text-[0.8rem]">
                      Market insights & salary data
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <HandCoins size={40} className="text-[#45DB61]" />
                  <p className="lg:text-[0.8rem]">Career tips from experts</p>
                </div>
              </div>
            </div>
          </div>
          <Forms />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default App;
