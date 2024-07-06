'use client'
import Service from '@/slices/Service'
import { useGSAP } from '@gsap/react'
import { PrismicRichText } from '@prismicio/react'
import clsx from 'clsx'
import gsap from 'gsap'
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'

type Props = {
  services: any[]
  toggleServices: Dispatch<SetStateAction<boolean>>
}

const Services = ({services, toggleServices}: Props) => {
  const [currentService, setCurrentService] = useState(0)
  const servicesRef = useRef<HTMLDivElement | null>(null)

  const { contextSafe } = useGSAP(
    () => {
      const tl = gsap.timeline()
      tl.from('.services-reveal', {
        autoAlpha: 0,
        duration: 1,
      })
      .from(servicesRef.current, {
        height: 0,
        ease: 'power4.out',
        duration: 1,
      }, '<')
    },
    { scope: servicesRef }
  )

  const onToggleServices = contextSafe(() => {
    const tl = gsap.timeline()

    tl.to('.services-reveal', {
      autoAlpha: 0,
      duration: 0.6,
    })
    .to(servicesRef.current, {
      height: 0,
      ease: 'power4.in',
      duration: 1,
      onComplete: () => toggleServices(false)
    }, '<')
  })

  return (
    <div ref={servicesRef} className='overflow-hidden px-[3rem] flex flex-col md:flex-row fixed bottom-0 left-0 w-full h-[95vh] rounded-t-3xl bg-pink text-dark z-10'>
      <button className='z-40 absolute left-0 top-0 m-[3rem]' onClick={() => onToggleServices()}>FECHAR</button>
      <ul className='services-reveal md:block hidden mt-[8rem] font-bold text-[2rem] w-[49.25rem] pr-[11.25rem]'>
        {
          services.map((s, index) => (
            <li data-service={index} className={clsx('hover:cursor-pointer',
            currentService === index && 'text-white italic' )} onClick={() => setCurrentService(index)} key={s.id}>
              <h2 className='uppercase' ><PrismicRichText field={s.primary.title} /></h2>
            </li>
          ))
        }
      </ul>
        {
          services.map((s, index) => (
            currentService === index && 
            <div key={index} className='hidden services-reveal md:block'>
              <Service  slice={s} index={index} slices={services} context={
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