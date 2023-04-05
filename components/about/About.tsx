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
          // className=""
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <Image
            src={aboutpic}
            alt="About your developer<3"
            className="shadow-xl rounded-full object-cover md:rounded-sm flex-shrink-0 max-w-[250px] min-w-[155px] w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <h3 className="text-center text-sm max-w-[500px] md:mt-4">
            {aboutInfo.backgroundInfromation}
          </h3>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
