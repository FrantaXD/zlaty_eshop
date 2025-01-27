
import { MutableRefObject } from "react";

let f = 0;
export default function move(position: MutableRefObject<HTMLDivElement | null>, items: MutableRefObject<HTMLDivElement | null>[]) {
    if (f < 5) {
      items[f] = position;
      if (items[f].current)
        items[f].current!.style.left = `${(376 + 50) * f}px`;
      f++;
    } else {
      if (f === 5) {
        setInterval(() => {
          let min: number = 1536;
          items.forEach((element) => {
            if (element.current) {
              element.current.style.left = `${
                element.current.getBoundingClientRect().left + 0.5
              }px`;
            }
          });
          items.forEach((element) => {
            if (element.current && element.current?.getBoundingClientRect().left > 1536) {
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