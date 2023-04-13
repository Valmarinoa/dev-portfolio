import React, { useState } from "react";
import { Experience } from "../../../typings";
import { urlFor } from "../../../sanity";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

type Props = { experience: Experience };

const ExperienceCard = ({ experience }: Props) => {
  const [open, setOpen] = useState(false);
  const toggleInfo = () => setOpen(!open);

  return (
    <div
      className="w-full flex border-b border-spacing-1 py-6 text-left cursor-pointer"
      onClick={toggleInfo}
    >
      <div className="w-16 h-16 md:h-20 md:w-20 mx-auto rounded-full relative ">
        <Image
          src={urlFor(experience.companyImage).url()}
          alt={experience.company}
          layout="fill"
          priority
        />
      </div>
      <div className="pl-2 flex flex-1 md:pl-6">
        <div className="flex flex-col">
          <p className="text-sm">
            {new Date(experience.dateStarted).toDateString()} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
          </p>
          <h4 className="text-lg md:text-xl">{experience.jobTitle}</h4>

          <span className="flex gap-2 divide-x-[1px] divide-[#140e2c] items-center">
            <p className="font-semibold text-sm md:text-base">
              {experience.company}
            </p>
            <p className=" text-sm font-light pl-2">{experience.nature}</p>
          </span>
          {/* Mobile */}
          <div
            className={`text-sm pt-6 md:pt-6 md:hidden text-[#140e2c] ${
              open ? "block" : "hidden"
            }`}
          >
            <motion.p
              initial={{
                opacity: 0,
              }}
              transition={{ duration: 0.4 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm"
            >
              {experience.role}
            </motion.p>
          </div>
        </div>
      </div>
      <div className=" md:flex-1 hidden md:flex">
        <p className="text-sm hidden md:flex">{experience.role}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
