"use client"
import { PrismicRichText } from '@prismicio/react'
import React, { Dispatch, SetStateAction, useRef } from 'react'
import Services from './Services'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import { animateParagraph } from '../animations/paragraph'

type Props = {
  currentIndex: number
  setCurrentIndex: Dispatch<SetStateAction<number>>
  toggleServices: Dispatch<SetStateAction<boolean>>
  showServices: boolean
  slice: any
  index: number
  setRef: (ref: React.MutableRefObject<HTMLDivElement | null>) => void
}

const Category = ({setRef, showServices, toggleServices, currentIndex, setCurrentIndex, slice, index}: Props) => {
  const categoryRef = useRef<HTMLDivElement | null>(null)

  const handleResize = () => {
    const paragraph = categoryRef.current?.querySelectorAll('p');
    if (paragraph) {
      SplitType.create(paragraph, { 
        types: 'lines,words',
        tagName: 'span',
        lineClass: 'category-description-line',
        wordClass: 'category-description-word',
      });
    }
  };

  useGSAP(
    () => {
      if (currentIndex === index) {
        setRef(categoryRef)
        handleResize();
        animateParagraph(null, '.category-description-word')
        window.addEventListener('resize', handleResize);
      }

      return () => {
        if (currentIndex === index) {
          window.removeEventListener('resize', handleResize);
        }
      };
    },
    { scope: categoryRef, dependencies: [currentIndex] }
);

  return (
    currentIndex === index && 
    <div className='relative text-dark'>
        <h1 className='mt-[2rem] uppercase md:text-[1rem] tracking-[0.5rem]'>
          Serviços
        </h1>
      <div ref={categoryRef} className='min-h-[40rem] md:min-h-[27.25rem]'>
        <h2 className='overflow-hidden uppercase font-semibold text-[2.5rem] md:text-[2rem] mt-[1rem]'>
          <PrismicRichText field={slice.title} />
        </h2>
        <div className='overflow-hidden mt-[3rem] md:max-w-[26.25rem] w-full'>
          <PrismicRichText field={slice.description} />
        </div>
        <p onClick={() => toggleServices(prev => !prev)} className='hover:cursor-pointer mt-[3.5rem] uppercase font-bold md:text-[1.125rem]'>
          Ver os tratamentos
        </p>
      </div>
      {
        showServices && <Services toggleServices={toggleServices} services={slice.slices} />
      }
    </div>
  )
}

export default Category