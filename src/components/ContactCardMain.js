import React from "react";
import Image from "next/image";

export default function ContactCard(props){
  return(
    <div className='flex rounded-2xl p-6 gap-6 bg-light-primary-container'>

      <Image src={props.image} alt={props.alt} />
      <div className="flex flex-col gap-2">
        <span className="font-roboto font-bold text-title-large text-light-on-surface" >{props.title}</span>
        <span className="font-roboto text-body-large text-light-on-surface-variant">{props.info}</span>
      </div>
    </div>

  )
}