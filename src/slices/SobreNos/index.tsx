import { Content } from "@prismicio/client";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SobreNos`.
 */
export type SobreNosProps = SliceComponentProps<Content.SobreNosSlice>;

/**
 * Component for "SobreNos" Slices.
 */
const SobreNos = ({ slice }: SobreNosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mx-[3rem] text-dark mt-[6rem] flex flex-col md:flex-row justify-center item-center md:items-end"
    >
      <div className="text-center md:max-w-[19.25rem] mb-[8rem]">
        <h1 className="font-semibold uppercase text-[2rem]"><PrismicRichText field={slice.items[0].title} /></h1>
        <div className="text-[1.125.rem]">
          <PrismicRichText field={slice.items[0].description} />
        </div>
      </div>
      <figure className="w-full h-[38.875rem] md:w-[26.25rem] md:mx-[3.5rem]">
        <PrismicImage className="object-cover w-full h-full" field={slice.primary.image} />
      </figure>
      <div className="mt-[8rem] md:mt-0 text-center md:max-w-[19.25rem] mb-[8rem]">
        <h1 className="font-semibold uppercase text-[2rem]"><PrismicRichText field={slice.items[1].title} /></h1>
        <div className="text-[2.125.rem]">
          <PrismicRichText field={slice.items[1].description} />
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
