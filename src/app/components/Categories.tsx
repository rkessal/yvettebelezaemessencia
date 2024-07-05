'use client'
import React, { useEffect, useState } from 'react'
import Category from './Category'
import { GroupField } from '@prismicio/client'
import { HomeDocumentDataCategoriesItem, Simplify } from '../../../prismicio-types'
import { PrismicImage } from '@prismicio/react'

type Props = {
  categories: GroupField<Simplify<HomeDocumentDataCategoriesItem>> 
}

const Categories = ({categories}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showServices, toggleServices] = useState(false)

  const isFirst = () => {
    return currentIndex === 0
  }

  const isLast = () => {
    return currentIndex === categories.length - 1
  }

  const onClickPrev = () => {
    if (isFirst()) return
    setCurrentIndex(currentIndex - 1)
  }

  const onClickNext = () => {
    if (isLast()) return
    setCurrentIndex(currentIndex + 1)
  }
  return (
    <>
    <div className="max-h-[40rem] md:w-[40.125rem] overflow-hidden md:mr-[2rem]">
      <div className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
      {
        categories.map((category: any) => (
          <figure key={category.service.id} className="flex-none block w-full h-full">
                <PrismicImage className="object-cover w-full h-full"  field={category.service.data.image} />
          </figure>
          ))
      }
      </div>
    </div>
    <div>
    {
      categories.map((category: any, index) => (
        <Category showServices={showServices} 
        toggleServices={toggleServices}
        key={index} index={index} 
        setCurrentIndex={setCurrentIndex} 
        currentIndex={currentIndex} 
        slice={category.service.data} />
      ))
    }
      <div className='flex flex-row'>
        <div onClick={() => onClickPrev()} className='hover:cursor-pointer relative mr-[1rem]'>
          <svg className='h-[7.5rem] w-[7.5rem]' width="119" height="119" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="59.5" cy="59.5" r="58" transform="rotate(-180 59.5 59.5)" stroke="#665E5A" strokeWidth="3"/>
          </svg>
          <svg className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[3.145rem] h-[1.796875rem]' width="51" height="30" viewBox="0 0 51 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50.6577" y="13.302" width="3.19463" height="50.3154" transform="rotate(90 50.6577 13.302)" fill="#665E5A"/>
            <path d="M0.34229 14.8993C5.40046 14.8993 16.1557 12.0241 18.7114 0.523438" stroke="#665E5A" strokeWidth="4"/>
            <path d="M0.342284 14.8993C5.40045 14.8993 16.1557 17.7745 18.7114 29.2751" stroke="#665E5A" strokeWidth="4"/>
          </svg>
        </div>
        <div onClick={() => onClickNext()} className='hover:cursor-pointer relative mr-[1rem]'>
          <svg className='h-[7.5rem] w-[7.5rem]' width="119" height="119" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="59.5" cy="59.5" r="58" transform="rotate(-180 59.5 59.5)" stroke="#665E5A" strokeWidth="3"/>
          </svg>
          <svg className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[3.145rem] h-[1.796875rem]' width="51" height="30" viewBox="0 0 51 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.342285" y="16.698" width="3.19463" height="50.3154" transform="rotate(-90 0.342285 16.698)" fill="#665E5A"/>
            <path d="M50.6577 15.1007C45.5996 15.1007 34.8443 17.9759 32.2886 29.4766" stroke="#665E5A" strokeWidth="4"/>
            <path d="M50.6577 15.1007C45.5996 15.1007 34.8443 12.2255 32.2886 0.724854" stroke="#665E5A" strokeWidth="4"/>
          </svg>

        </div>
      </div>
    
</div>
    </>
  )
}

export default Categories