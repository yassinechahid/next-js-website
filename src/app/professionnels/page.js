import React from 'react'

import HeroSmall from '../../components/HeroSmall'
import ServiceCardSmall from '../../components/ServiceCardSmall'

import pharmacist from "../../../public/assets/pictures/pharmacist.svg"
import box from "../../../public/assets/pictures/box.svg"
import calendar from "../../../public/assets/pictures/calendar.svg"
import description from "../../../public/assets/pictures/description.svg"
import location from "../../../public/assets/pictures/location.svg"
import stethoscope from "../../../public/assets/pictures/stethoscope.svg"
import send from "../../../public/assets/pictures/send.svg"
import folderShared from "../../../public/assets/pictures/folderShared.svg"
import draft from "../../../public/assets/pictures/draft.svg"




export default function Professionnels() {
  return (
    <article className='flex px-5 bg-light-background justify-center pt-24'>
      <main className='flex flex-col justify-center items-center w-[1040px] pb-28 bg-light-background '>

          {/*About section*/}
          <section className='flex lg:self-start flex-col gap-2 px-3 sm:px-14 md:px-32 lg:px-0 mb-16'>        
              
            <span className='font-roboto font-normal text-headline-large text-light-primary'>Professionnels</span>
            <span className='font-roboto font-normal text-body-large text-light-on-surface-variant'>Les pharmacies, laboratoires, cliniques et autres acteurs peuvent s'intégrer facilement à Mon Toubib.</span>

          </section>       
          

          {/* Intro content */}          
      
          <HeroSmall
            title="Accédez à vos soins en un instant !"
            description="Connectez-vous dès maintenant pour profiter d'une gestion simplifiée de votre santé, prendre rendez-vous, consulter votre médecin à distance, et bien plus encore."
            action="Se connecter"
            image={pharmacist}
            alt="image docteur"
          />          

          


          {/* Pharmacies Header */}
          <header className="w-full py-5 px-4 sm:px-8 flex justify-center">
            <span className='flex justify-center items-center font-roboto text-headline-medium text-light-primary py-12'>Pharmacies</span>
          </header>

          {/* Pharmacies Cards */}
          <div className="flex flex-wrap justify-center items-stretch gap-6 px-4 py-6 max-w-screen-lg mx-auto">
        {[
          {
            icon: description,
            alt: "icone calendrier",
            title: "Prise de rendez-vous simplifiée",            
          },
          {
            icon: box,
            alt: "icone écran",
            title: "Téléconsultation sécurisée",            
          },
          {
            icon: location,
            alt: "icone dossier",
            title: "Gestion des dossiers médicaux",            
          }
        ].map((card, index) => (
          <ServiceCardSmall
            key={index}
            icon={card.icon}
            alt={card.alt}
            title={card.title}            
          />
        ))}
          </div>
        
          {/* Laboratoires Header */}
          <header className="w-full py-5 px-4 sm:px-8 flex justify-center">
            <span className='flex justify-center items-center font-roboto text-headline-medium text-light-primary py-12'>Laboratoires d'Analyses Médicales</span>
          </header>

          {/* Laboratoires Cards */}
          <div className="flex flex-wrap justify-center items-stretch gap-6 px-4 py-6 max-w-screen-lg mx-auto">
        {[
          {
            icon: calendar,
            alt: "icone calendrier",
            title: "Prise de rendez-vous simplifiée",            
          },          
          {
            icon: stethoscope,
            alt: "icone laboratoire",
            title: "Résultats de laboratoire et imagerie médicale",            
          },
          {
            icon: send,
            alt: "icone laboratoire",
            title: "Résultats de laboratoire et imagerie médicale",            
          },
          {
            icon: location,
            alt: "icone laboratoire",
            title: "Résultats de laboratoire et imagerie médicale",            
          }
        ].map((card, index) => (
          <ServiceCardSmall
            key={index}
            icon={card.icon}
            alt={card.alt}
            title={card.title}            
          />
        ))}
          </div>
        
          {/* Centres Radiologies Header */}
          <header className="w-full py-5 px-4 sm:px-8 flex justify-center">
            <span className='flex justify-center items-center font-roboto text-headline-medium text-light-primary py-12'>Centres de Radiologie</span>
          </header>

          {/* Centres Radiologies Cards */}
          <div className="flex flex-wrap justify-center items-stretch gap-6 px-4 py-6 max-w-screen-lg mx-auto">
        {[
          {
            icon: calendar,
            alt: "icone calendrier",
            title: "Prise de rendez-vous simplifiée",            
          },
          {
            icon: folderShared,
            alt: "icone écran",
            title: "Téléconsultation sécurisée",            
          },
          {
            icon: draft,
            alt: "icone dossier",
            title: "Gestion des dossiers médicaux",            
          },
          {
            icon: send,
            alt: "icone laboratoire",
            title: "Résultats de laboratoire et imagerie médicale",            
          },
          {
            icon: location,
            alt: "icone laboratoire",
            title: "Résultats de laboratoire et imagerie médicale",            
          }
        ].map((card, index) => (
          <ServiceCardSmall
            key={index}
            icon={card.icon}
            alt={card.alt}
            title={card.title}            
          />
        ))}
          </div>
        

      </main>
    </article>
  )
}