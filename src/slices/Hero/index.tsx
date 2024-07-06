import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      id='home'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full h-[43.75rem]"
    >
      <figure className="absolute top-0 left-0 w-full h-full">
        <PrismicImage className="w-full h-full" field={slice.primary.background_image} />
      </figure>
      <figure className="h-[28.6875rem] w-[26.25rem] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-10">
        <PrismicImage className="w-full h-full" field={slice.primary.logo} />
      </figure>
    </section>
  );
};

export default Hero;
