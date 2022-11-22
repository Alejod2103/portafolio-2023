import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl' >
            Contactame
        </h3>
        <div className='flex flex-col space-y-10' >
            <h4>
                Vamos a trabajar{" "}
                <span className='decoation-[#F7AB0A]/50 underline ' > juntos.</span>
            </h4>

            <div className='flex items-center space-x-5' >
                <PhoneIcon  className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                <p className='text-2xl' >+503 7897-4171</p>
            </div>
        </div>
    </div>
  )
}

export default ContactMe