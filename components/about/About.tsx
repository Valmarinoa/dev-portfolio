import React from "react";
import Image from "next/image";
import aboutpic from "../../public/bnw-profile.png";
import { motion } from "framer-motion";
import { HomeInfo } from "../../typings";

type Props = { aboutInfo: HomeInfo };

const About = ({ aboutInfo }: Props) => {
  return (
    <div className="flex relative flex-col text-center md:text-left h-screen max-w-7xl px-10 justify-evenly mx-auto items-center">
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        className="absolute top-24 md:top-20 pl-5 uppercase tracking-[20px] text-xl text-[#140e2c] "
      >
        About
      </motion.h3>
      <motion.div className="flex flex-col md:flex-row md:gap-x-10 justify-center w-[80%] items-center">
        <motion.div
          className=""
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
        >
          <Image
            src={aboutpic}
            alt="About your developer<3"
            className="shadow-xl rounded-full object-cover md:rounded-sm flex-shrink-0 max-w-[350px] w-full"
          />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          className="text-center text-sm max-w-[500px] mt-4"
        >
          <h3>{aboutInfo.backgroundInfromation}</h3>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
