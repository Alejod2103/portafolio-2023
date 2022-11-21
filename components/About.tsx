import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0
    }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly
    mx-auto items-center"
    >
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl">
        sobre mi
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        whileInView={{
          x: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="-mb-40 md:mb-0 flex-shrink-0 w-[150px] h-[150px] rounded-full object-cover
        md:rounded-lg md:w-44 md:h-85 xl:w-[500px] xl:h-[600px]"
        src="https://iili.io/H9neDue.md.jpg"
        alt=""
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Que es lo que {" "}
          <span className="underline decoration-[#80D133]/50">hago? </span>{" "}
        </h4>
        <p className="text-base">
          Hola Mundo 🌎💻 Soy un Front-End Developer, Tengo 19 años y soy un Joven Apasionado por El
          Desarrollo de Software y Amante de Librerias en JavaScript, poseo actualmente un
          año de estar laborando formalmente en una empresa local de mi país en el area de soporte técnico y programacion, cumpliendo mi rol como IT en la empresa,
          Busco mantenerme siempre aprendiendo día a día de los diferentes retos y tratar de brindar soluciones optimas, estoy seguro de que podremos
          hacer un gran trabajo juntos! <br /> 🤝👨‍💻
        </p>
      </div>
    </motion.div>
  );
}

export default About;
