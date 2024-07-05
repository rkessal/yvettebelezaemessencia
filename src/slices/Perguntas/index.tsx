import Questions from "@/app/components/Questions";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Perguntas`.
 */
export type PerguntasProps = SliceComponentProps<Content.PerguntasSlice>;

/**
 * Component for "Perguntas" Slices.
 */
const Perguntas = ({ slice }: PerguntasProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mx-[3rem] my-[6rem]"
    >
      <h1 className="text-dark font-seasons mb-[6rem] leading-[3rem] font-bold text-[3.375rem] text-center max-w-[47.375rem] mx-auto">
        <PrismicRichText field={slice.primary.title} />
      </h1>
      <div className="max-w-[54.375rem] w-full mx-auto">
        <Questions slices={slice.items} />
      </div>
    </section>
  );
};

export default Perguntas;
