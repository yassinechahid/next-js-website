import React from 'react'
import Image from 'next/image'

export default function ServiceCardSmall(props) {
    return (
    <div className='flex flex-col w-80 h-60 justify-center items-center bg-light-surface-container-lowest rounded-2xl p-6 gap-6 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.3),_0px_4px_8px_3px_rgba(0,0,0,0.15)]'>
        
        <Image src={props.icon} alt={props.alt} />        
        <span className='font-roboto text-body-large text-light-on-surface-variant text-center'>{props.title}</span>            

    </div>
    )
}
