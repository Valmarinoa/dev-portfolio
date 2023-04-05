import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../../typings";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

type Props = { socials: Social[] };

const Header = ({ socials }: Props) => {

  return (
    <header className="flex justify-between sticky top-0 p-5 items-center max-w-7xl mx-auto z-20 xl:items-center">
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
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="#140e2c"
            bgColor="transparent"
          />
        ))}
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
        className="flex items-center"
      >
        <Link href="mailto:valenmarinocol@gmail.com">
          <EnvelopeIcon className="h-7 w-7 mr-2" />
        </Link>

        {/* <SocialIcon
          className="cursor-pointer"
          url="email/"
          fgColor="#140e2c"
          network="email"
          bgColor="transparent"
        /> */}

        <p className="uppercase hidden md:inline-flex text-sm">
          <Link href="#contact">Get in touch </Link>
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
function handleSubmit(arg0: () => void) {
  throw new Error("Function not implemented.");
}

