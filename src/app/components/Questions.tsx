'use client'
import { PrismicRichText } from '@prismicio/react'
import React, { useEffect, useRef, useState } from 'react'
import { Simplify, PerguntasSliceDefaultItem } from '../../../prismicio-types'
import clsx from 'clsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

type Props = {
  slices: Simplify<PerguntasSliceDefaultItem>[]
}

const Questions = ({slices}: Props) => {
  const [currentAnswer, toggleAnswer] = useState<null|number>(null)
  const questionContainerRef = useRef<HTMLDivElement | null>(null)

  const {contextSafe} = useGSAP(() => {
  if (currentAnswer !== null) {
    gsap.from(`#question-${currentAnswer}`, { 
      height: 0,
      paddingBottom: 0,
      ease: 'power4.out',
      duration: 1.5,
    })
  }
  }, {dependencies: [currentAnswer], scope: questionContainerRef})

  const changeAnswer = (index: number) => toggleAnswer(prev => index === prev ? null : index)

  const onClickQuestion = contextSafe((index: number) => {
    if (currentAnswer == null)  {
      toggleAnswer(index)
      return
    } 

    gsap.to(`#question-${currentAnswer}`, {
      height: 0,
      ease: 'power4.out',
      paddingBottom: 0,
      duration: 0.5,
      onComplete: () => changeAnswer(index)
    })
  })

  return (
    <div ref={questionContainerRef}>
    {
      slices.map((slice, index) => (
        <div key={`question-${index}`} onClick={() => onClickQuestion(index)} className="text-dark hover:cursor-pointer border-dark border-b-2 pt-[2rem]">
          <div className='box-border font-semibold text-[2rem] mb-[1rem]'>
            <PrismicRichText field={slice.question} />
          </div>
          {
            currentAnswer === index && (
              <div id={`question-${index}`} className={clsx('overflow-hidden md:text-[1.125rem] pb-[2rem]')}>
                <PrismicRichText field={slice.answer} />
              </div>
            )
          }
        </div>
      ))
    }
    </div>
  )
}

export default Questions