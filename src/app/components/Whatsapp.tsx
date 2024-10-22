import { ImageFieldImage, KeyTextField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'
import React from 'react'

type Props = {
  number: KeyTextField
  image: ImageFieldImage
}

const Whatsapp = ({ number, image }: Props) => {
  return (
    <div className='fixed bottom-0 right-[3rem] md:left-[3rem] md:right-auto h-16 z-50'>
      <Link href={`https://wa.me/${number?.trim()}`} target='_blank'>
        <PrismicNextImage field={image} />
      </Link>
    </div>
  )
}

export default Whatsapp