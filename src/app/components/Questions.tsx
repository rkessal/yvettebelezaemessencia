'use client'
import { PrismicRichText } from '@prismicio/react'
import React, { useEffect, useState } from 'react'
import { Simplify, PerguntasSliceDefaultItem } from '../../../prismicio-types'
import clsx from 'clsx'

type Props = {
  slices: Simplify<PerguntasSliceDefaultItem>[]
}

const Questions = ({slices}: Props) => {
  const [currentAnswer, toggleAnswer] = useState<null|number>(null)

  const onClickQuestion = (index: number) => {
    toggleAnswer(_ => index === currentAnswer ? null : index)
  }

  return (
    slices.map((slice, index) => (
      <div key={`question-${index}`} onClick={() => onClickQuestion(index)} className="text-dark hover:cursor-pointer border-dark border-b-2 pt-[2rem] last:border-none">
        <div className='font-semibold text-[2rem] mb-[1rem]'>
          <PrismicRichText field={slice.question} />
        </div>
        <div className={clsx('md:text-[1.125rem] mb-[2rem]',
          currentAnswer === index ? 'block' : 'hidden'
        )}>
          <PrismicRichText field={slice.answer} />
        </div>
      </div>
    ))
  )
}

export default Questions