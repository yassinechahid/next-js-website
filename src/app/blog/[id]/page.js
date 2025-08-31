import React from 'react'
import Image from 'next/image'

import { Articles } from '../../../data/Articles'

export default function Article({params}) {   
    
    //Find Current Article Id
    const currentId = parseInt(params.id);
    //Find Matching Article Index
    const currentIndex = Articles.findIndex(article => article.id === currentId);
    
    return (
        <main className='flex flex-col bg-light-background items-center pt-24 gap-7 pb-28 overflow-x-hidden w-full px-7'>
            
            {/* Section with image and article headline */}
            <section className='flex flex-col items-center w-full max-w-[468px] sm:max-w-[504px] md:max-w-[540px] lg:max-w-[720px] xl:max-w-[1040px]'>
                <div className='relative w-full aspect-[3/2] rounded-lg overflow-hidden'>
                    <Image 
                        src={Articles[currentIndex]["image"]} 
                        alt="image teleconsultation"
                        fill
                        className='object-cover rounded-3xl'
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 85vw, (max-width: 1024px) 75vw, 1040px"
                        priority
                    />
                </div>

                <div className='flex flex-col gap-6 py-6 w-full'>
                    <div className='flex flex-col gap-4'>
                        <span className='font-roboto font-medium text-title-small text-light-on-surface-variant'>{Articles[currentIndex]["date"]}</span>
                        <span className='font-roboto font-normal text-title-large text-light-on-surface'>{Articles[currentIndex]["title"]}</span>
                        <span className='font-roboto font-normal text-body-large text-light-on-surface-variant'>
                            La télémédecine est en plein essor au Maroc, offrant une solution moderne et pratique pour accéder aux soins médicaux sans quitter votre domicile. Avec Mon Toubib, cette technologie devient accessible à tous.
                        </span>
                    </div>
                </div>
            </section>

            {/* Section with remaining paragraphs */}
            <section className='flex flex-col gap-6 w-full max-w-[468px] sm:max-w-[504px] md:max-w-[540px] lg:max-w-[720px] xl:max-w-[1040px]'>
                <div className='flex flex-col gap-4'>
                    <span className='font-roboto text-title-large text-light-on-surface'>Qu'est-ce que la télémédecine ?</span>
                    <span className='font-roboto text-body-large text-light-on-surface-variant'>
                        La télémédecine désigne l'ensemble des pratiques médicales réalisées à distance grâce à l'utilisation des technologies de l'information et de la communication (TIC). Elle inclut des activités telles que la téléconsultation, le suivi à distance des patients, le diagnostic à distance, et la transmission de données médicales (comme les résultats de tests ou les images médicales) entre professionnels de santé. L'objectif de la télémédecine est d'améliorer l'accès aux soins, de faciliter la gestion des maladies chroniques et de permettre un suivi médical plus efficace, tout en réduisant la nécessité de déplacements physiques.
                    </span>
                </div>

                <div className='flex flex-col gap-4'>
                    <span className='font-roboto text-title-large text-light-on-surface'>Comment fonctionne une téléconsultation avec Mon Toubib ?</span>
                    <span className='font-roboto text-body-large text-light-on-surface-variant'>
                        La téléconsultation désigne une consultation médicale à distance entre un patient et un professionnel de santé, généralement via des outils de communication numériques tels que la vidéo, le chat, ou le téléphone. Cette pratique permet aux patients de recevoir des soins médicaux sans avoir à se déplacer physiquement dans un cabinet, tout en maintenant la sécurité et la confidentialité des échanges. Elle est particulièrement utile pour les suivis réguliers, les conseils médicaux, ou pour les patients vivant dans des zones rurales ou isolées.
                    </span>
                </div>

                <div className='flex flex-col gap-4'>
                    <span className='font-roboto text-title-large text-light-on-surface'>Les étapes d'une consultation en ligne</span>
                    <ul className='font-roboto text-body-large text-light-on-surface-variant list-disc pl-5 space-y-2'>
                        <li>Créer un compte sur Mon Toubib</li>
                        <li>Choisir un médecin disponible</li>
                        <li>Participer à la consultation via une plateforme sécurisée</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-4 pt-3'>
                    <span className='font-roboto text-title-large text-light-on-surface'>Conclusion</span>
                    <span className='font-roboto text-body-large text-light-on-surface-variant'>
                        Avec Mon Toubib, la télémédecine n'a jamais été aussi simple. Découvrez dès aujourd'hui comment cette innovation peut transformer votre expérience des soins médicaux.
                    </span>
                </div>
            </section>
        </main>
    )
}