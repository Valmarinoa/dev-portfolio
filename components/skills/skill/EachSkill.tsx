import { motion } from "framer-motion";
import { Skill } from "../../../typings";
import { urlFor } from "../../../sanity";
import { stringify } from "querystring";

type Props = {
  eachSkill: Skill;
  directionLeft?: boolean;
};

const EachSkill = ({ directionLeft, eachSkill }: Props) => {
  console.log(eachSkill.title);
  return (
    <div>
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-16 h-16 md:w-20 md:h-20 xl:w-32 xl:h-32 group relative cursor-pointer "
      >
        {eachSkill.logoTech && (
          <img
            src={urlFor(eachSkill.logoTech).url()}
            alt="Autofill Tech"
            className="relative object-cover"
          />
        )}

        {/* {data.map((element, i) => {
          return (
            <Image
              key={i}
              src={element}
              alt="Technology logo"
              width={200}
              height={200}
              className="group-hover:grayscale transition duration-300 ease-in-out"
            />
          );
        })} */}

        <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out h-20 w-20 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-full z-0">
          {/* <div className="flex items-center justify-center h-full">
            <p className="">100%</p>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default EachSkill;
