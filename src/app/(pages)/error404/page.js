import React from 'react'
import Image from 'next/image'

import error404 from "../../../../public/assets/pictures/error404.svg"



export default function Error404() {
  return (
    <main className='flex flex-col gap-12 w-full h-[752px] justify-center items-center bg-light-background'>
        <Image src={error404} alt="image erreur" />

        <div className='flex flex-col gap-4 w-full justify-center items-center' >
          <span className='font-roboto text-headline-medium text-light-primary'>Page non trouvée</span>
          <span className='font-roboto text-body-large text-light-on-surface-variant'>Il semble que la page que vous recherchez n’existe pas ou a été déplacée. </span>
        </div>

    </main>
  )
}
