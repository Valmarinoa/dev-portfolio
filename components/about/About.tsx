import React from "react";
import Image from "next/image";
import aboutpic from "../../public/pp.png";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex relative flex-col text-center md:text-left h-screen max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#F1FAEE] ">
        About
      </h3>
      <motion.div className="flex flex-col md:flex-row md:gap-x-10 justify-center w-[80%] items-center">
        <motion.div
          className=""
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={aboutpic}
            alt="About your developer<3"
            objectFit="fill"
            className="rounded-full object-cover md:rounded-sm flex-shrink-0 max-w-[350px] w-full"
          />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-base max-w-[500px]"
        >
          <h3>
            I'm a Front-End Developer who loves to craft sensible digital
            interfaces. My main focus is on Web Development, but am a designer
            at heart. <br /> Currently living in Amsterdam, and looking to build
            cool remote projects around the world!
          </h3>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
