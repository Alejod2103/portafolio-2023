import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCirlcles from "./BackgroundCirlcles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Alejandro Domínguez",
      "Desarrollador Web",
      "<ReactLover />",
      "Front-End Developer",
      "Alejodev.js",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCirlcles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://iili.io/H9n8eaV.md.jpg"
        alt=""
      />

      <div className="z-20" >
        <h2 className="text-sm uppercase font-bold text-gray-500 pb-2 tracking-[15px]">
          Software developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#bfb302" />
        </h1>

        <div className="pt-5">
          <Link href="#about" >
            <button className="heroButton">sobre mi</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">experiencia</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects" >
            <button className="heroButton">proyectos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
