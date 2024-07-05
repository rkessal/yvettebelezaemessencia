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
      className="relative h-[43.75rem]"
    >
      <figure className="h-full absolute left-0 top-0 w-full">
        <PrismicImage className="h-full w-full" field={slice.primary.background_image} />
      </figure>
      <figure className="h-[28.6875rem] w-[26.25rem] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-10">
        <PrismicImage className="w-full h-full" field={slice.primary.logo} />
      </figure>
    </section>
  );
};

export default Hero;
