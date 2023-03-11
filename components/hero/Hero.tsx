import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../backgroundcircles/BackgroundCircles";
import Image from "next/image";
import profilepic from "../../public/pp2.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { HomeInfo } from "../../typings";
import { urlFor } from "../../sanity";

type HeroProps = { homeInfo: HomeInfo };

const Hero = ({ homeInfo }: HeroProps) => {
  const [name, count] = useTypewriter({
    words: ["Hey! I'm Valentina"],
    delaySpeed: 1000,
  });
  const [text, countText] = useTypewriter({
    words: ["Developer. Designer. Creator."],
    delaySpeed: 1000,
    loop: true,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center z-10 overflow-hidden">
      <div className="md:mt-32">
        <BackgroundCircles />
      </div>

      <div className="h-32 w-32 rounded-full overflow-hidden z-10 relative">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src={urlFor(homeInfo?.profilePic).url()}
          alt="your dev"
          className="relative object-cover"
        />
      </div>
      <div className="z-20 flex flex-col justify-center items-center px-6 ">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 2,
            //   transitionDelay: 3,
          }}
          className="opacity-20 uppercase mt-[5px] "
        >
          <span className="animate-pulsingOne opacity-20 text-xs md:text-md md:font-normal font-thin tracking-widest md:tracking-[8px]">
            Developer
          </span>
          <span className="animate-pulsingTwo px-6 opacity-20 text-xs md:text-md font-thin tracking-widest md:tracking-[8px] md:font-normal">
            Designer
          </span>
          <span className="animate-pulsingThree opacity-20 font-thin text-xs md:text-md tracking-widest md:tracking-[8px] md:font-normal">
            Creator
          </span>
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 0.6,
            //   transitionDelay: 3,
          }}
          className="text-[#F1FAEE] text-4xl md:text-5xl font-semibold mt-2 z-10"
        >
          Hey! I'm {homeInfo.name}
        </motion.h1>

        <div className="mt-12 whitespace-nowrap px-12 flex gap-8 md:gap-16">
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
