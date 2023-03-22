import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { urlFor } from "../../sanity";
import { Project } from "../../typings";

type Props = { projects: Project[] };

const Projects = ({ projects }: Props) => {
  console.log(projects[0].summary);

  console.log(projects[0].technologies.map((stack) => stack.title));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden  flex-col md:flex-row text-left max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase text-[#F1FAEE] tracking-[10px] md:tracking-[20px] text-2xl text-center">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects?.map((project, i) => {
          return (
            <div
              key={i}
              className="w-screen flex-shrink-0 snap-center cursor-pointer flex flex-col space-y-5 items-center justify-between p-6 md:w-[30%] h-[80%]"
            >
              {/* {Image of Project} */}

              <div className="space-y-2 max-w-6xl text-center items-center hover:scale-105 transition-all">
                <motion.img
                  initial={{ y: -100, opacity: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full mx-auto object-contain max-w-[550px]"
                  src={urlFor(project.image).url()}
                  alt={project.title}
                />

                <h3 className="text-center font-semibold">
                  {/* Subtitle Project */}

                  <span className="underline decoration-white/50">
                    <a href={project.linkToBuild}>
                      <p className="text-xl">{project.title}</p>
                    </a>
                  </span>
                </h3>
                <p className="text-xs text-center">{project.summary}</p>
              </div>
              <div className="flex items-center">
                {/* {project.technologies.map((tech, i) => {
                  return <img src={urlFor(tech.image).url()} alt="" key={i} />;
                })} */}
              </div>
              {/* <p className="sticky md:hidden bottom-0 bg-green-600">
                {i + 1} of {projects.length}
              </p> */}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
