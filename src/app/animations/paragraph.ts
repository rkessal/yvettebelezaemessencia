import gsap from "gsap";
import distributeByPosition from "../utils/gsap";

export const animateParagraph = (
  trigger: any, 
  element: any,
  start?: string,
  markers?: boolean
  ) => {
  return gsap.from(element, {
    yPercent: 150,
    delay: 0.2,
    ease: "power4.out",
    duration: 2,
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