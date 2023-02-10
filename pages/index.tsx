import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import gradient from "../public/bg-grdaient.png";
import About from "../components/about/About";
import ExperienceComponent from "../components/experience/ExperienceComponent";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import ContactMe from "../components/contact/ContactMe";
import { Experience, Skill, Social, Project, HomeInfo } from "../typings";
import { fetchHomeInfo } from "../utils/fetchHomeInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSKills";

type Props = {
  homeInfo: HomeInfo;
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
  projects: Project[];
};

const Home = ({ homeInfo, experiences, skills, socials, projects }: Props) => {
  return (
    <div className="bg-white scrollbar-thin scrollbar-track-neutral-100/20 scrollbar-thumb-fuchsia-500 bg-gradient-to-b from-[#a7afbd] via-[#a3a7ab] to-[#ebdfc6] h-screen text-[#F1FAEE] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>Val's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <ExperienceComponent />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const homeInfo: HomeInfo = await fetchHomeInfo();
  const experiences: Experience[] = await fetchExperiences();
  const socials: Social[] = await fetchSocials();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();

  return {
    props: {
      homeInfo,
      experiences,
      skills,
      socials,
      projects,
    },

    //Next.js will attempt to re-generate the page:
    //- when a request comes in
    //- at most once evrry 10sec
    revalidate: 10,
  };
};
