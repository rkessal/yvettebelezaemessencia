import Service from '@/slices/Service'
import { PrismicRichText } from '@prismicio/react'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Services from './Services'

type Props = {
  currentIndex: number
  setCurrentIndex: Dispatch<SetStateAction<number>>
  toggleServices: Dispatch<SetStateAction<boolean>>
  showServices: boolean
  slice: any
  index: number
}

const Category = ({showServices, toggleServices, currentIndex, setCurrentIndex, slice, index}: Props) => {

  return (
    currentIndex === index && 
    <div className='relative text-dark'>
      <div className='min-h-[40rem] md:min-h-[27.25rem]'>
        <h1 className='mt-[2rem] uppercase md:text-[1rem] tracking-[0.5rem]'>
          Serviços
        </h1>
        <h2 className='uppercase font-semibold text-[2.5rem] md:text-[2rem] mt-[1rem]'>
          <PrismicRichText field={slice.title} />
        </h2>
        <div className='mt-[3rem] md:max-w-[26.25rem] w-full'>
          <PrismicRichText field={slice.description} />
        </div>
        <div onClick={() => toggleServices(prev => !prev)} className='hover:cursor-pointer mt-[3.5rem] uppercase font-bold md:text-[1.125rem]'>
          Ver os tratamentos
        </div>
      </div>
      {
        showServices && <Services toggleServices={toggleServices} services={slice.slices} />
      }
    </div>
  )
}

export default Category