import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function ActualitesCardBig(props) {
    return (
    <div className='flex flex-col w-[320px] sm:w-[432px] md:w-[540px] lg:w-[504px] h-full bg-light-surface-container-lowest rounded-3xl gap-6 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.3),_0px_4px_8px_3px_rgba(0,0,0,0.15)]'>
        
        <Image className='w-full h-[213px] sm:h-[288px] md:h-[360px] lg:h-[336px]' src={props.image} alt={props.alt} />        
        
        <div className='flex flex-col w-full gap-6 px-6 pb-6'>
            <div className='flex flex-col gap-4'>
            <span className='font-roboto font-medium text-title-small text-light-on-surface-variant'>{props.date}</span>
            <span className='font-roboto font-normal text-title-large text-light-on-surface'>{props.title}</span>
            <span className='font-roboto font-normal text-body-large text-light-on-surface-variant'>{props.description}</span>
            </div>
            <Link href={`/blog/${props.id}`}>
                <button className='bg-light-primary rounded-full gap-2 h-10 w-max px-5 text-light-on-primary text-label-large font-medium font-roboto'>En savoir plus</button>
            </Link>
        </div>

    </div>
    )
}
