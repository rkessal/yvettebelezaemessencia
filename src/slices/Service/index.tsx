"use client"
import { Content } from "@prismicio/client";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import clsx from "clsx";
import SplitType from "split-type";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateParagraph } from "@/app/animations/paragraph";
/**
 * Props for `Service`.
 */
export type ServiceProps = SliceComponentProps<Content.ServiceSlice>;

/**
 * Component for "Service" Slices.
 */
const Service = ({ slice, context, index }: ServiceProps): JSX.Element => {
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  // @ts-ignore
  const { currentService, setCurrentService } = context

  const handleResize = () => {
    const paragraphs = descriptionRef.current?.querySelectorAll('p, li');
    if (paragraphs) {
      const paragraphArray = Array.from(paragraphs) as HTMLElement[];
      SplitType.create(paragraphArray, { 
        types: 'lines,words',
        tagName: 'span',
        lineClass: 'service-description-line',
        wordClass: 'service-description-word',
      });
    }
  };

  useGSAP(
    () => {

      if (currentService != undefined) {
        handleResize();
        animateParagraph(null, '.service-description-word')
        window.addEventListener('resize', handleResize);
      }

      return () => {
        if (currentService != undefined) {
          window.removeEventListener('resize', handleResize);
        }
      };
    },
    { scope: descriptionRef }
);

  return  (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col ml-auto overflow-scroll md:h-full"
    >
    
    {
      !currentService && (
        <div className="md:hidden mb-[8rem]">
          <h2 className='font-bold uppercase text-dark mb-[1.25rem]' ><PrismicRichText field={slice.primary.title} /></h2>
          <PrismicRichText field={slice.primary.description} />
        </div>
      )
    }
    {
      currentService === index && (
        <div className="hidden md:block">
          {
            prismic.isFilled.image(slice.primary.image) && 
              <figure className="w-[33.25rem] h-[24rem] overflow-hidden">
                <PrismicImage className="object-cover w-full h-full" field={slice.primary.image} />
              </figure>
          }
          <div ref={descriptionRef} className={clsx(
            "mr-[10.75rem] text-dark mt-[3rem] text-[1.125rem] w-[26.25rem]",
            !prismic.isFilled.image(slice.primary.image) && 'mt-[8.25rem]'
            )}>
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
      ) 
    }
    </section>
  );
};

export default Service;
