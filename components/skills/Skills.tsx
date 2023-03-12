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
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skills?.map((eachSkill) => {
          return <EachSkill key={eachSkill._id} eachSkill={eachSkill} />;
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
