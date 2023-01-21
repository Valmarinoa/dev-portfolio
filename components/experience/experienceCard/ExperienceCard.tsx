import React from "react";
import Image from "next/image";
import reactlogo from "../../../public/react.png";
import auto from "../../../public/autofill.png";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col justify-center rounded-lg items-center cursor-pointer overflow-hidden pb-12 snap-center border border-white duration-200 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]">
      <div>
        <div className="h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden z-10 relative">
          <Image
            src={auto}
            alt="Autofill Tech"
            fill
            className="relative object-cover"
          />
        </div>
        <div className="px-0 md:px-10">
          <h4 className="text-2xl font-light">(React) Front-End Developer</h4>
          <p className="font-bold text-2xl mt-1">Autofill Tech</p>
          <div className="flex space-x-2 my-2">
            <Image
              src={reactlogo}
              alt="ReactJS"
              className="h-10 w-10 rounded-full object-contain"
            />
          </div>
          <p className="uppercase py-5">started on.... currently working at</p>
          <ul className="list-disc space-y-4 ml-5 text-SM">
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
