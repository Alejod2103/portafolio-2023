import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    nombre: string,
    email: string,
    asunto: string,
    comentarios: string,
  };

type Props = {};

function ContactMe({}: Props) {
    const { register,
         handleSubmit,} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:alejod2103@gmail?asunto=${formData.asunto}&body=Hola mi nombre es ${formData.nombre}. ${formData.email}. ${formData.comentarios}`
    }  ;

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[12px] text-gray-500 text-2xl">
        Contactame
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl font-semibold text-center">
          Vamos a trabajar{" "}
          <span className="decoration-[#F7AB0A]/50 underline "> juntos.</span>
        </h4>

        <div className="space-y-10" >
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-40 animate-pulse" />
            <p className="ml-[-10px] text-2xl">+503 7897-4171</p>
          </div>

          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">alejod2103@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">San Salvador, El Salvador</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2" >
                <input {...register('nombre')} placeholder="Nombre" className="contactInput" type="text" />
                <input {...register('email')} placeholder="E-mail" className="contactInput" type="email" />
            </div>

            <input {...register('asunto')} onSubmit={handleSubmit(onSubmit)} placeholder="Asunto" className="contactInput" type="text" />

            <textarea {...register('comentarios')} placeholder="Comentarios" className="contactInput" />
            <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg" >Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
