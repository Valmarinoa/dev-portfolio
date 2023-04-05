import { motion } from "framer-motion";
import React from "react";
import Image from "next/legacy/image";
import reactlogo from "../../../public/react.png";
import { Skill } from "../../../typings";
import { urlFor } from "../../../sanity";

type Props = {
  eachSkill: Skill;
  directionLeft?: boolean;
};

const EachSkill = ({ directionLeft, eachSkill }: Props) => {
  return (
    <div>
      <motion.div
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className=" group w-[60px] h-[60px] md:h-16 md:w-16 rounded-md relative cursor-pointer object-contain"
      >
        {eachSkill.skillImage && (
          <>
            <div className="hover:backdrop-blur-md w-fit h-fit">
              <Image
                src={urlFor(eachSkill.skillImage).url()}
                alt="Technology logo"
                layout="fill"
                priority
                className="relative p-2 w-full h-full transition duration-300 ease-in-out object-contain"
              />
            </div>
            <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-full h-full rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-xs text-black whitespace-nowrap">
                  {eachSkill.title}
                </p>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default EachSkill;
