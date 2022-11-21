import React from 'react';

type Props = {};

function Projects({}: Props) {
  const proyectos = ["1", "2", "3", "4", "5"];
    return (
    <div className='relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0' >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Proyectos</h3>
        
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20' >
          {proyectos.map((proyecto, i) => (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ' ><img 
            src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png" 
            alt="none" 
            />
            <div><h4>Case study {i + 1} of {proyecto.length}: Netflix Clone</h4></div>
            </div>
          ))}

        </div>

        <div className="w-full absolute top-[30%] bg-[#80D133]/10 left-0 h-[500px] -skew-y-12" />

    </div>
  )
}

export default Projects