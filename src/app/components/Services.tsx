'use client'
import Service from '@/slices/Service'
import { PrismicRichText } from '@prismicio/react'
import clsx from 'clsx'
import React, { Dispatch, SetStateAction, useState } from 'react'

type Props = {
  services: any[]
  toggleServices: Dispatch<SetStateAction<boolean>>
}

const Services = ({services, toggleServices}: Props) => {
  const [currentService, setCurrentService] = useState(0)

  return (
    <div className='px-[3rem] flex flex-col md:flex-row fixed bottom-0 left-0 w-full h-[95vh] rounded-t-3xl bg-pink text-dark z-10'>
      <button className='z-40 absolute left-0 top-0 m-[3rem]' onClick={() => toggleServices(false)}>FECHAR</button>
      <ul className='md:block hidden mt-[8rem] font-bold text-[2rem] w-[49.25rem] pr-[11.25rem]'>
        {
          services.map((s, index) => (
            <li className={clsx('hover:cursor-pointer ',
            currentService === index && 'text-white italic' )} onClick={() => setCurrentService(index)} key={s.id}>
              <h2 className='uppercase' ><PrismicRichText field={s.primary.title} /></h2>
            </li>
          ))
        }
      </ul>
        {
          services.map((s, index) => (
            currentService === index && 
            <div className='hidden md:block'>
              <Service key={index} slice={s} index={index} slices={services} context={
                {
                  currentService,
                  setCurrentService
                }
              } />
            </div>
          ))
        }
        <div className="z-30 absolute top-[6rem] w-full md:hidden h-[4rem] bg-gradient-to-b from-pink to-transparent"></div>
        <div className='mt-[6rem] pt-[4rem] pb-[8rem] relative block h-auto overflow-auto md:hidden'>
          {
            services.map((s, index) => (
                <Service key={index} slice={s} index={index} slices={services} context={{}} />
            ))
          }
        </div>
    </div>
  )
}

export default Services