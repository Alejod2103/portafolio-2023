import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExpCard({}: Props) {
  return (
    <article 
        className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200" >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className="w-28 h-25 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://i.postimg.cc/cK1r6k3Y/multiservice-logo.jpg"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Programador IT</h4>
        <p className="font-bold text-1xl mt-1">Multiservicecall S.A de C.V</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://i2.wp.com/info.widespace.com/wp-content/uploads/2016/03/javascript-shield-logo.png?ssl=1"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Desde el 12/12/2021 - Actualidad
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Punto bueno</li>
          <li>Punto bueno</li>
          <li>Punto bueno</li>
          <li>Punto bueno</li>
          <li>Punto bueno</li>
        </ul>
      </div>
    </article>
  );
}

export default ExpCard;
