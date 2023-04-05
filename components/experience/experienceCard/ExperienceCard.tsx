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
      <div className="px-2 flex flex-1 md:pl-6">
        <div className="flex flex-col">
          <p className="text-xs">
            {new Date(experience.dateStarted).toDateString()} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
          </p>
          <h4 className="text-xl md:text-xl">{experience.jobTitle}</h4>

          <span className="flex gap-2 divide-x-[1px] items-center">
            <p className="font-semibold text-xs md:text-base">
              {experience.company}
            </p>
            <p className=" text-xs font-light pl-2">{experience.nature}</p>
          </span>
          {/* Mobile */}
          <p
            className={`text-sm pt-2 md:pt-6 md:hidden text-[#140e2c] ${
              open ? "block" : "hidden"
            }`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
            >
              {experience.role}
            </motion.div>
          </p>
        </div>
      </div>
      <div className=" md:flex-1 hidden md:flex">
        <p className="text-xs hidden md:flex">{experience.role}</p>
      </div>
    </div>
    // <div>
    //   <article className="flex flex-col rounded-lg space-y-7 items-center cursor-pointer opacity-100 overflow-hidden md:opacity-40 md:hover:opacity-100 p-4 snap-center border border-white duration-200 flex-shrink-0 w-[300px] md:w-[400px]">
    //     <div>
    //       <div className="h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden z-10 relative">
    //         <img
    //           src={urlFor(experience.companyImage).url()}
    //           alt="Autofill Tech"
    //           className="relative object-cover"
    //         />
    //       </div>
    //       <div className="px-2 md:px-2">
    //         <h4 className="text-2xl font-light">{experience.jobTitle}</h4>
    //         <p className="font-bold text-2xl mt-1">{experience.company}</p>
    //         <p className=" text-sm mt-1">{experience.nature}</p>
    //         <p className="uppercase py-5 text-xs">
    //           {new Date(experience.dateStarted).toDateString()} -{" "}
    //           {experience.isCurrentlyWorkingHere
    //             ? "Present"
    //             : new Date(experience.dateEnded).toDateString()}
    //         </p>
    //         <p className="text-xs md:text-sm">{""}</p>
    //       </div>
    //     </div>
    //   </article>
    // </div>
  );
};

export default ExperienceCard;
