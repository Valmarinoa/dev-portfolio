import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../../typings";
import ExperienceCard from "./experienceCard/ExperienceCard";

type Props = {
  experiences: Experience[];
};

const ExperienceComponent = ({ experiences }: Props) => {
  const sortedByDate = [...experiences].sort(
    (a, b) => b.dateEnded - a.dateEnded
  );
  console.log(sortedByDate);
  // console.log(experiences.map((i, d) => i.dateStarted));
  // console.log(experiences.map((ex) => ex.dateStarted));

  return (
    <div className="h-screen flex relative flex-col md:flex-row max-w-[1200px] px-6 md:w-[70%] justify-evenly mx-auto items-center text-left">
      <h3 className="absolute pl-5 top-24 md:top-20 uppercase tracking-[20px] text-xl text-[#140e2c] mb-6">
        Experience
      </h3>

      <div className="w-full flex flex-col mt-28 h-[70%] overflow-y-scroll">
        {experiences.map((single, i) => (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            key={single._id}
          >
            <ExperienceCard experience={single} key={single._id} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceComponent;
