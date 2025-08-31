import React from 'react'
import Image from 'next/image'

import underConstruction from "../../../../public/assets/pictures/underConstruction.svg"

export default function UnderConstruction() {
  return (
    <main className='flex flex-col gap-12 w-full h-[752px] justify-center items-center bg-light-background'>
        <Image src={underConstruction} alt="image erreur" />

        <div className='flex flex-col gap-4 w-full justify-center items-center' >
          <span className='font-roboto text-headline-medium text-light-primary'>Page en construction</span>
          <span className='font-roboto text-body-large text-light-on-surface-variant'>Nous travaillons actuellement sur cette page et elle sera bientôt prête.
          Merci pour votre patience !</span>
        </div>

    </main>
  )
}
