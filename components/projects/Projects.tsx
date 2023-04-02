import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../../sanity";
import { Project } from "../../typings";
import Image from "next/legacy/image";
import urlBuilder from "@sanity/image-url/lib/types/builder";

type Props = { projects: Project[] };

const Projects = ({ projects }: Props) => {
  console.log(projects[0].summary);

  console.log(projects[0].technologies.map((stack) => stack.title));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col md:flex-row text-left max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase text-[#140e2c] tracking-[10px] md:tracking-[20px] text-2xl text-center">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin">
        {projects?.map((project, i) => {
          return (
            <div
              key={i}
              className="w-screen flex-shrink-0 snap-center cursor-pointer flex flex-col space-y-5 items-center justify-between p-6 md:w-[30%] h-[80%]"
            >
              {/* {Image of Project} */}

              <div className="space-y-2 max-w-6xl text-center items-center hover:scale-105 grayscale hover:grayscale-0 border-transparent rounded-md p-4 transition-all">
                <motion.img
                  initial={{ y: -60, opacity: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full mx-auto object-contain max-w-[550px] rounded-xl "
                  src={urlFor(project.image).url()}
                  alt={project.title}
                />

                <motion.div
                  initial={{ y: 60, opacity: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-center font-semibold">
                    {/* Subtitle Project */}

                    <span className="underline decoration-white/50">
                      <a href={project.linkToBuild}>
                        <p className="text-xl">{project.title}</p>
                      </a>
                    </span>
                  </h3>

                  <p className="text-xs opacity-50">{project.note}</p>
                  <p className="text-xs text-center px-2">{project.summary}</p>

                  {/* <div className="h-[1px] w-20 bg-white mx-auto"></div> */}
                  <div className="flex items-center gap-2 h-fit flex-wrap justify-center mt-3">
                    {project.technologies.map((tech, i) => {
                      return (
                        <p
                          key={tech.title}
                          className="text-xs border text-center rounded-full px-2 py-[2px] hover:bg-white/20 transition-all"
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
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
