"use client"
import { animateParagraph } from "@/app/animations/paragraph";
import distributeByPosition from "@/app/utils/gsap";
import { split } from "@/app/utils/split";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { useRef } from "react";

/**
 * Props for `SobreNos`.
 */
export type SobreNosProps = SliceComponentProps<Content.SobreNosSlice>;

/**
 * Component for "SobreNos" Slices.
 */
const SobreNos = ({ slice }: SobreNosProps): JSX.Element => {
  const sectionContainerRef = useRef<HTMLDivElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  const handleResize = () => split(sectionContainerRef);

  useGSAP(() => {

    gsap.from(imageContainerRef.current, {
      clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)',
      ease: 'power4.inOut',
      duration: 2,
      delay: 0.3,
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: 'top center'
      }
    })

    const paragraphs = handleResize();

    window.addEventListener('resize', handleResize);
    animateParagraph(paragraphs?.lines, paragraphs?.words)
      return () => {
        window.removeEventListener('resize', handleResize);
    };
  },
);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mx-[3rem] text-dark mt-[6rem] flex flex-col md:flex-row justify-center item-center md:items-start"
      ref={sectionContainerRef}
    >
      <div className="text-center md:mt-[16rem] md:max-w-[19.25rem] mb-[4rem]">
        <h1 className="font-semibold uppercase leading-[2rem] mb-[1rem] text-[2rem]"><PrismicRichText field={slice.items[0].title} /></h1>
        <div className="text-[1.125.rem] ">
          <PrismicRichText field={slice.items[0].description} />
        </div>
      </div>
      <figure ref={imageContainerRef} data-clip-path className="w-full h-[70rem] md:h-[38.875rem] md:w-[26.25rem] md:mx-[3.5rem]">
        <PrismicImage className="object-cover w-full h-full" field={slice.primary.image} />
      </figure>
      <div className="mt-[4rem] md:mt-[16rem] text-center md:max-w-[19.25rem] mb-[8rem]">
        <h1 className="font-semibold uppercase leading-[2rem] mb-[1rem] text-[2rem]"><PrismicRichText field={slice.items[1].title} /></h1>
        <div className="text-[2.125.rem]">
          <PrismicRichText field={slice.items[1].description} />
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
