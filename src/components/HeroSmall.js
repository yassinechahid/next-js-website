import React from 'react'
import Image from 'next/image'

export default function HeroSmall(props) {
  return (
    /*<section className='flex bg-light-secondary-container justify-center items-center rounded-3xl px-12 py-6 gap-28'>*/
    <section className="flex flex-col justify-center items-center w-full h-auto rounded-3xl bg-light-secondary-container        
        px-5 py-16 gap-11    
        md:flex-row md:gap-7 md:px-12 md:py-6
        lg:gap-14">
            
      <div className='flex flex-col gap-6'>

        <div className='flex flex-col gap-4'>
          <span className='font-roboto text-headline-medium text-light-primary'>{props.title}</span>
          <span className='font-roboto text-body-large text-light-on-surface-variant'>{props.description}</span>
        </div>

        <button className='bg-light-primary rounded-full gap-2 h-10 w-max px-6 py-3 text-light-on-primary text-label-large font-medium font-roboto'>{props.action}</button>
      </div>

      <Image src={props.image} alt={props.alt}/>

    </section>
  )
}