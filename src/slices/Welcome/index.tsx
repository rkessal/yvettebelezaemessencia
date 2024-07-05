import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Welcome`.
 */
export type WelcomeProps = SliceComponentProps<Content.WelcomeSlice>;

/**
 * Component for "Welcome" Slices.
 */
const Welcome = ({ slice }: WelcomeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mx-[3rem] mt-[6rem]"
    >
      <div className="mx-auto max-w-[54.75rem] w-full  flex flex-col justify-center items-center">
        <h1 className="mb-[1rem] font-seasons text-center text-[3.375rem] text-dark">
          <PrismicRichText field={slice.primary.title} />
        </h1>
        <div className="md:text-[1.125rem] text-dark text-center">
          <PrismicRichText field={slice.primary.description} />
        </div>
        <svg className="mt-[3rem]" width="31" height="52" viewBox="0 0 31 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="13.9027" y="0.741577" width="3.19463" height="50.3154" fill="#665E5A"/>
          <path d="M15.5 51.057C15.5 45.9988 12.6248 35.2436 1.12417 32.6879" stroke="#665E5A" strokeWidth="4"/>
          <path d="M15.5 51.057C15.5 45.9988 18.3752 35.2436 29.8758 32.6879" stroke="#665E5A" strokeWidth="4"/>
        </svg>

      </div>
    </section>
  );
};

export default Welcome;
