import { motion } from "framer-motion";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col md:flex-row  text-left max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase text-[#F1FAEE] tracking-[20px] text-2xl text-center">
        Projects
      </h3>
      <div className="relative w-full bg-red-400 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            {/* {Image of Project} */}

            <div className="space-y-2 py-2 px-0 md:px-10 max-w-6xl bg-blue-400 text-center items-center">
              {/* Title Project */}
              <motion.h3
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-24 bg-green-300 w-24 mx-auto"
              >
                {project}
              </motion.h3>
              <h3 className="h-12 text-center font-semibold">
                {/* Subtitle Project */}
                <span className="underline decoration-white/50">
                  Project Name
                </span>
                Case Study {i + 1} of {projects.length}
              </h3>
              <p className="text-sm text-center md:text-center">
                {/* Prpject Summary */}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
