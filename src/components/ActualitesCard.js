import React from 'react'
import Image from 'next/image'


export default function ActualitesCard(props) {
    return (
    <div className='flex bg-light-surface-container-lowest w-full h-auto rounded-3xl gap-6 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.3),_0px_4px_8px_3px_rgba(0,0,0,0.15)]'>
        
        <Image className='w-96 h-auto' src={props.image} alt={props.alt} />        
        
        <div className='flex flex-col w-full gap-6 py-6 pr-6'>
            <div className='flex flex-col gap-4'>
                <span className='font-roboto font-medium text-title-small text-light-on-surface-variant'>{props.date}</span>
                <span className='font-roboto font-normal text-title-large text-light-on-surface'>{props.title}</span>
                <span className='font-roboto font-normal text-body-large text-light-on-surface-variant line-clamp-2'>{props.description}</span>
            </div>

            <button className='flex justify-center items-center bg-light-primary rounded-full h-10 px-5 py-4 w-max text-light-on-primary text-label-large font-medium font-roboto'>En savoir plus</button>
        </div>

    </div>
    )
}
