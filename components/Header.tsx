import React from 'react';
import { motion } from "framer-motion";
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
            duration: 1
        }}
        whileHover={{
            scale: 1.2
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/Alejod2103"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/alejodev.tsx/"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/alejandro.dominguez.186590"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1
        }}
        whileHover={{
            scale: 1.2
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Contactar Ahora!
        </p>
      </motion.div>
    </header>
  );
}