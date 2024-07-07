import gsap from "gsap";
import distributeByPosition from "../utils/gsap";

export const animateParagraph = (
  trigger: any, 
  element: any,
  start?: string,
  markers?: boolean
  ) => {
  return gsap.from(element, {
    yPercent: 100,
    delay: 0.2,
    ease: "power4.out",
    duration: 1.5,
    scrollTrigger: {
      trigger: trigger,
      start: start,
      markers: markers
    },
    stagger: distributeByPosition({
      amount: 0.3, 
      from: "start",
      axis: 'y'
    })
  });
}