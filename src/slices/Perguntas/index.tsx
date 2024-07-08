"use client"
import { animateParagraph } from "@/app/animations/paragraph";
import Questions from "@/app/components/Questions";
import { split } from "@/app/utils/split";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useRef } from "react";
import SplitType from "split-type";

/**
 * Props for `Perguntas`.
 */
export type PerguntasProps = SliceComponentProps<Content.PerguntasSlice>;

/**
 * Component for "Perguntas" Slices.
 */
const Perguntas = ({ slice }: PerguntasProps): JSX.Element => {
  const questionTitleRef = useRef<HTMLHeadingElement | null>(null)
  const handleResize = () => {
    const paragraphs = questionTitleRef.current?.querySelectorAll('p');
    if (!paragraphs) return
    return new SplitType(paragraphs, { 
      types: 'lines,words',
      tagName: 'span',
      lineClass: 'overflow-hidden overflow-fix-line',
      wordClass: 'overflow-fix-word',
    });
  }
  useGSAP(() => {
    const paragraphs = handleResize()
    animateParagraph(paragraphs?.lines, paragraphs?.words)

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mx-[3rem] my-[6rem]"
    >
      <h1 ref={questionTitleRef} id='questions-title' className="align-top text-dark font-seasons mb-[6rem] leading-[3.5rem] font-bold text-[3.375rem] text-center max-w-[47.375rem] mx-auto">
        <PrismicRichText field={slice.primary.title} />
      </h1>
      <div className="max-w-[54.375rem] w-full mx-auto">
        <Questions slices={slice.items} />
      </div>
    </section>
  );
};

export default Perguntas;
