import React from "react";
import { Experience } from "../../typings";
import ExperienceCard from "./experienceCard/ExperienceCard";

type Props = {
  experiences: Experience[];
};

const ExperienceComponent = ({ experiences }: Props) => {
  console.log(experiences);
  return (
    <div className="h-screen flex relative overflow-hidden flex-col md-flex-row max-w-full px-10 justify-evenly mx-auto items-center text-left">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#F1FAEE] text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {experiences.map((single) => {
          return <ExperienceCard experience={single} key={single._id} />;
        })}
      </div>
    </div>
  );
};

export default ExperienceComponent;
