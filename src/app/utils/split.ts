import { MutableRefObject } from "react";
import SplitType from "split-type";

export const split = (target: MutableRefObject<HTMLDivElement | null>): SplitType | undefined => {
  const paragraphs = target.current?.querySelectorAll('p, li');
  if (!paragraphs) return
  const paragraphArray = Array.from(paragraphs) as HTMLElement[];
  return new SplitType(paragraphArray, { 
    types: 'lines,words',
    tagName: 'span',
    lineClass: 'overflow-hidden line',
  });
};