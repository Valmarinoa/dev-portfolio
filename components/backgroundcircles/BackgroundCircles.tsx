import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = ({}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.6, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="flex justify-center items-center relative"
    >
      {/* <div className="absolute h-[180px] w-[180px] border border-[#c5ebc3] opacity-5 rounded-full animate-pulse mt-52" /> */}
      <div className="absolute h-[300px] w-[300px] border border-[#c5ebc3] opacity-5 rounded-full mt-52" />
      <div className="absolute h-[500px] w-[500px] border border-[#c5ebc3] opacity-20 rounded-full mt-52" />
      <div className="absolute h-[650px] w-[650px] border border-[#c5ebc3] opacity-5 rounded-full animate-pulse mt-52" />
      <div className="absolute h-[800px] w-[800px] border border-[#c5ebc3] opacity-5 rounded-full mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
