import React from "react";
import { Experience } from "../../../typings";
import { urlFor } from "../../../sanity";

type Props = { experience: Experience };

const ExperienceCard = ({ experience }: Props) => {
  return (
    <div>
      <article className="flex flex-col rounded-lg space-y-7 items-center cursor-pointer opacity-100 overflow-hidden md:opacity-40 md:hover:opacity-100 p-4 snap-center border border-white duration-200 flex-shrink-0 w-[300px] md:w-[400px]">
        <div>
          <div className="h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden z-10 relative">
            <img
              src={urlFor(experience.companyImage).url()}
              alt="Autofill Tech"
              className="relative object-cover"
            />
          </div>
          <div className="px-2 md:px-4">
            <h4 className="text-2xl font-light">{experience.jobTitle}</h4>
            <p className="font-bold text-2xl mt-1">{experience.company}</p>
            <p className=" text-sm mt-1">{experience.nature}</p>
            <p className="uppercase py-5 text-xs">
              {new Date(experience.dateStarted).toDateString()} -{" "}
              {experience.isCurrentlyWorkingHere
                ? "Present"
                : new Date(experience.dateEnded).toDateString()}
            </p>
            <p className="text-xs md:text-sm">{""}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ExperienceCard;
