import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../../sanity";
import { Project } from "../../typings";
import Image from "next/legacy/image";
import urlBuilder from "@sanity/image-url/lib/types/builder";

type Props = { projects: Project[] };

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col md:flex-row text-left max-w-full justify-evenly mx-auto items-center z-0"
    >
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        className="absolute pl-5 top-24 md:top-20 uppercase text-[#140e2c] tracking-[10px] md:tracking-[0.75em] text-xl text-center"
      >
        Projects
      </motion.h3>
      <div className="relative w-full flex overflow-x-scroll scrollbar-track-transparent scrollbar-thumb-indigo-400 scrollbar-thin-rounded-full scrollbar-thin overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-rounded-full">
        {projects?.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center mt-28 cursor-pointer flex flex-col space-y-5 items-center justify-between p-6 md:w-[30%] h-[80%]"
          >
            {/* {Image of Project} */}

            <div className="space-y-2 max-w-6xl text-center items-center md:hover:scale-105 md:grayscale hover:grayscale-0 border-transparent rounded-md p-4 transition-all">
              <a href={project.linkToBuild}>
                <motion.img
                  initial={{ y: -60, opacity: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full mx-auto object-contain max-w-[550px] rounded-xl "
                  src={urlFor(project.image).url()}
                  alt={project.title}
                />
              </a>

              <motion.div
                initial={{ y: 60, opacity: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-center font-semibold">
                  {/* Subtitle Project */}

                  <span className="underline decoration-white/50">
                    <a href={project.linkToBuild} className="no-underline">
                      <p className="text-xl mb-3">{project.title}</p>
                    </a>
                  </span>
                </h3>

                <p className="text-xs opacity-50">{project.note}</p>
                <p className="text-sm lg:text-sm md:text-xs text-center px-2 mb-3">
                  {project.summary}
                </p>

                <div className="flex items-center gap-2 h-fit flex-wrap justify-center mt-3">
                  {project.technologies.map((tech, i) => {
                    return (
                      <p
                        key={tech.title}
                        className="text-xs border text-center rounded-full px-2 py-[2px] bg-indigo-300/20 transition-all"
                      >
                        {tech.title}
                      </p>
                    );
                  })}
                </div>
              </motion.div>
              {/* <p className="sticky md:hidden bottom-0 bg-green-600">
                {i + 1} of {projects.length}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
