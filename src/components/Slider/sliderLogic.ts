
import { MutableRefObject } from "react";


export default async function move(position: MutableRefObject<HTMLDivElement | null>, items: MutableRefObject<HTMLDivElement | null>[], f: number) {
  console.log("wtf");
    if (f < 6) {
      items[f] = position;
      if (items[f].current)
        items[f].current!.style.left = `${(376 + 50) * f}px`;
      
    } else {
      if (f === 6) {
        setInterval(() => {
          let min: number = window.innerWidth;
          items.forEach((element) => {
            if (element.current) {
              let width = element.current.style.left.split("px");
              element.current.style.left = `${
                parseFloat(width[0]) + .1
              }px`;
            }
          });
          items.forEach((element) => {
            if (element.current && element.current?.getBoundingClientRect().left > window.innerWidth) {
              items.forEach((element2) => {
                if (element2.current) {
                  min = Math.min(min, element2.current.getBoundingClientRect().left);
                }
              });
              element.current.style.left = `${min - 376 - 50}px`;
            }
          });
        }, 1);
        f++;
      }
    }
  }