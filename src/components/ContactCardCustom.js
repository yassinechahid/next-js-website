import React from "react";
import Image from "next/image";

export default function ContactCardCustom(props){
  return(
    <div className='flex rounded-2xl p-6 gap-6 bg-light-primary-container'>

      <Image src={props.image} alt={props.alt} />
      <div className="flex flex-col gap-2">
        <span className="font-roboto font-bold text-title-large text-light-on-surface" >{props.title}</span>
        <div className="flex gap-4">
            <Image src={props.icon1} alt="icone réseaux sociaux" />
            <Image src={props.icon2} alt="icone réseaux sociaux" />
            <Image src={props.icon3} alt="icone réseaux sociaux" />
        </div>
      </div>
    </div>

  )
}