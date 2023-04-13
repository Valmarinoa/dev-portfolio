import React from "react";
import Image from "next/image";
import aboutpic from "../../public/bnw-profile.png";
import { motion } from "framer-motion";
import { HomeInfo } from "../../typings";

type Props = { aboutInfo: HomeInfo };

const About = ({ aboutInfo }: Props) => {
  return (
    <div className="flex relative flex-col text-center md:text-left h-screen max-w-7xl px-10 justify-evenly mx-auto items-center">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        className="absolute top-24 md:top-20 pl-5 uppercase tracking-[20px] text-xl text-[#140e2c] "
      >
        About
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        className="flex flex-col md:flex-row md:gap-x-10 justify-center w-full md:w-1/2 items-center"
      >
        <div>
          <Image
            src={aboutpic}
            alt="About your developer<3"
            className="shadow-xl rounded-full object-cover flex-shrink-0 max-w-[250px] min-w-[155px] w-full"
          />
        </div>
        <div>
          <p className="text-center text-sm  mt-4 w-full">
            {aboutInfo.backgroundInfromation}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
