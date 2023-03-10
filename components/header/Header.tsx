import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../../typings";

type Props = { socials: Social[] };

const Header = ({ socials }: Props) => {
  return (
    <header className="flex justify-between sticky top-0 p-5 items-start max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => {
          return (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="#F1FAEE"
              bgColor="transparent"
            />
          );
        })}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          className="cursor-pointer"
          url="https://github.com/"
          fgColor="#F1FAEE"
          network="email"
          bgColor="transparent"
        />

        <p className="uppercase hidden md:inline-flex text-sm">
          <Link href="#contact">Get in touch </Link>
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
