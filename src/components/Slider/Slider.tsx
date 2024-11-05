"use client";
import IMG from "../../utils/images/Footer.jpg";
import Image from "next/image";
import "./Slider.css";
import { SliderItem } from "./Item";
import { MutableRefObject } from "react";
interface Item {
  id: number;
  item: number;
}
const items: Item[] = [
  {
    id: 0,
    item: 0,
  },
  {
    id: 1,
    item: 0,
  },
  {
    id: 2,
    item: 0,
  },
  {
    id: 3,
    item: 0,
  },
  {
    id: 4,
    item: 0,
  },
];
let detector: boolean = true;
let first: boolean = true;
let index: number = 0;
export const Slider = () => {
  function clear(
    position: MutableRefObject<HTMLDivElement | null>,
    id: number
  ) {
    if (position.current) {
      items[id].item = position.current.getBoundingClientRect().left;
      if (items[id].item > window.innerWidth) {
        if (detector) {
            if(first){
                items[id].item = items[0].item - 376 - 50; 
                position.current.style.left = `${items[id].item}px`;
                first = false
            }
            else{
                items[id].item = items[id-1].item - 376 - 50;
                position.current.style.left = `${items[id].item}px`;
            }
          if (id === items.length - 1) {
            index = id;
            detector = false;
            return;
          }
          return;
        }
        position.current.style.left = `${items[index].item - 376 - 50}px`;
        index = id;
      }
    }
  }

  return (
    <section className="slider-container">
      <div className="bacground-container">
        <div className="background-hidder"></div>
        <div>
          <Image src={IMG} alt="background" className="back-img" />
        </div>
      </div>
      <div className="h2-container">
        <h2 className="h2-moje">Moje práce</h2>
      </div>
      <section className="slider">
        {items.map((it) => (
          <SliderItem
            clear={(position, id) => clear(position, id)}
            id={it.id}
            key={it.id}
          />
        ))}
      </section>
    </section>
  );
};
