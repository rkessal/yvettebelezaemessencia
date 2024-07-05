import { Content } from "@prismicio/client";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import clsx from "clsx";
/**
 * Props for `Service`.
 */
export type ServiceProps = SliceComponentProps<Content.ServiceSlice>;

/**
 * Component for "Service" Slices.
 */
const Service = ({ slice, context, index }: ServiceProps): JSX.Element => {
  // @ts-ignore
  const { currentService, setCurrentService } = context
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
          <div className={clsx(
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
