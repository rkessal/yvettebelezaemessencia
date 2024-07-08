"use client"
import { animateParagraph } from "@/app/animations/paragraph";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";

/**
 * Props for `Section`.
 */
export type SectionProps = SliceComponentProps<Content.SectionSlice>;

/**
 * Component for "Section" Slices.
 */
const Section = ({ slice, context, index }: SectionProps): JSX.Element => {
  const imageContainerRef = useRef<HTMLDivElement | null>(null)
  const sectionContainerRef = useRef<HTMLDivElement | null>(null)

  const handleResize = (): SplitType | undefined => {
    const paragraphs = sectionContainerRef.current?.querySelectorAll('p');
    if (!paragraphs) return
    return new SplitType(paragraphs, { 
      types: 'lines,words',
      tagName: 'span',
      lineClass: 'overflow-hidden overflow-fix-line',
      wordClass: 'overflow-fix-word',
    });
  };

  useGSAP(() => {
    const paragraphs = handleResize()
    const tl = gsap.timeline()

    animateParagraph(sectionContainerRef.current, paragraphs?.words, '90% center')
    window.addEventListener('resize', handleResize)

    tl.from(sectionContainerRef.current, {
      clipPath: 'polygon(30% 60%, 70% 60%, 70% 100%, 30% 100%)',
      scrollTrigger: {
        trigger: imageContainerRef.current,
        scrub: 1,
        pin: sectionContainerRef.current,
      },
    })

    return () => window.removeEventListener('resize', handleResize)
    
  })
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="section-container relative w-full mt-[6rem] h-[60rem] md:h-[100vh]"
      //@ts-ignore
      id={context[index]}
      ref={sectionContainerRef}
    >
      <figure ref={imageContainerRef} className="absolute top-0 left-0 w-full h-full overflow-hidden section-image-container">
        <PrismicImage className="object-cover w-full h-full" field={slice.primary.image} />
      </figure>
      <div className="mb-[5rem] text-dark absolute bottom-0 left-[50%] translate-x-[-50%] z-10 text-center w-full md:max-w-[47.375rem]">
        <h1 className="mb-[2rem] mt-[2rem] uppercase md:text-[1rem] tracking-[0.5rem]">
          <PrismicRichText field={slice.primary.title} />
        </h1>
        <div className="leading-[3rem] mb-[1rem] font-seasons text-center text-[3.375rem]">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
    </section>
  );
};

export default Section;
