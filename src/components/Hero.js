import React from 'react'
import Image from 'next/image'

export default function Hero(props) {
  return (
    <section>

      <section className="flex flex-col md:flex-row justify-center items-center w-full h-auto
        bg-light-secondary-container
        gap-1 md:gap-5 lg:gap-14
        px-5 md:px-36 lg:px-52 py-16 ">
        
          <div className="flex flex-col gap-6 w-full max-w-[596px]">
              <span className='text-light-primary text-display-medium font-roboto font-normal'>{props.title}</span>
              <span className='text-light-on-surface-variant text-body-large font-roboto font-normal'>{props.description}</span>
              <button className='bg-light-primary rounded-2xl gap-2 h-10 w-56 text-light-on-primary text-label-large font-medium font-roboto'>{props.action}</button>
          </div>

          <Image className='w-96 h-96' src={props.image} alt={props.alt} />
      </section>

        
                
    </section>
  )
}