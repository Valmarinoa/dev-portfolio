import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../../sanity";
import { Skill } from "../../typings";
import EachSkill from "./skill/EachSkill";

type Props = { skills: Skill[] };

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex w-[90%] relative flex-col text-center md:text-left xl:flex-row max-w-[1000px] min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 md:top-20 uppercase tracking-[10px] text-[#140e2c] md:tracking-[0.75em] pl-5 text-xl">
        Skills
      </h3>
      <div className="grid grid-cols-4 gap-5 md:gap-6">
        {skills?.map((eachSkill, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            key={eachSkill._id}
          >
            <EachSkill key={i} eachSkill={eachSkill} />
          </motion.div>
        ))}
        {/* 
        {skills?.slice(0, skills.length / 2).map((eachSkill, i) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <EachSkill key={eachSkill._id} eachSkill={eachSkill} />
            </motion.div>
          );
        })}
        {skills?.slice(skills.length / 2, skills.length).map((eachSkill) => {
          return (
            <EachSkill
              key={eachSkill._id}
              eachSkill={eachSkill}
              directionLeft
            />
          );
        })} */}
      </div>
    </motion.div>
  );
};

export default Skills;
