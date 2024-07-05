import { Content } from "@prismicio/client";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Section`.
 */
export type SectionProps = SliceComponentProps<Content.SectionSlice>;

/**
 * Component for "Section" Slices.
 */
const Section = ({ slice, context, index }: SectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative mx-[3rem] mt-[6rem] h-[40rem]"
      //@ts-ignore
      id={context[index]}
    >
      <figure className="absolute top-0 left-0 w-full h-[40rem] overflow-auto">
        <PrismicImage className="object-cover w-full h-full" field={slice.primary.image} />
      </figure>
      <div className="mb-[2rem] md:mb-[5rem] text-dark absolute bottom-0 left-[50%] translate-x-[-50%] z-10 text-center max-w-[47.375rem]">
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
