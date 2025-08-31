import React from 'react'
import Image from 'next/image'


export default function ServiceCard(props) {
    return (
      <div className='flex flex-col bg-light-surface-container-lowest rounded-2xl p-6 gap-6
        lg:w-[330px] lg:h-[232px] max-w-[330px] max-h-[232px] min-w-[240px] min-h-[184px]
        shadow-[0px_1px_3px_0px_rgba(0,0,0,0.3),_0px_4px_8px_3px_rgba(0,0,0,0.15)]'>
        <div className='flex justify-center'>
          <Image 
            src={props.icon} 
            alt={props.alt}            
          />
        </div>
        
        <div className='flex flex-col gap-2'>
          <span className='font-roboto font-normal text-title-large text-light-primary'>
            {props.title}
          </span>
          <span className='font-roboto font-normal text-body-large text-light-on-surface-variant min-h-[48px]'>
            {props.description}
          </span>
        </div>
      </div>
    )
  }