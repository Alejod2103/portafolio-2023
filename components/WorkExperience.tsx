import React from 'react';
import { motion } from "framer-motion";
import ExpCard from './CardExp/ExpCard';

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div
    initial={{
      opacity: 0,
  }}
  whileInView={{
      opacity: 1,
  }}
  transition={{
      duration: 1.5,
  }}
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[15px] text-gray-500 text-2xl' >Experiencias</h3>

        <div className='w-full h-[600px] flex space-x-5 overflow-x-scroll p-20 snap-x snap-mandatory' >
            <ExpCard />
            <ExpCard />
            <ExpCard />
            <ExpCard />
        </div>

    </motion.div>
  )
}

export default WorkExperience