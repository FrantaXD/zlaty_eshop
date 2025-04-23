"use client";
import IMG from "../../utils/images/Footer.jpg";
import Image from "next/image";
import "./Slider.css";
import { SliderItem } from "./Item";
import move from "./sliderLogic";
import { MutableRefObject, useEffect, useMemo, useRef, useState } from "react";
export const Slider = () => {
  const [priveousWidth, setPreviousWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0)
  const [items] = useState<MutableRefObject<HTMLDivElement | null>[]>(Array.from(
    { length: 6 },
    () => useRef<HTMLDivElement | null>(null)
  )); 
  
  useEffect(() => {
    const resize = async () => {
      if(window.innerWidth == priveousWidth){
        return;
      }
      await setTimeout(function() {
        const diferensOfWidth = window.innerWidth + priveousWidth;
        setPreviousWidth(diferensOfWidth);
         items.forEach(e => { 
         if(e.current){
           let width = e.current.style.left.split("px");
           e.current.style.left = `${parseFloat(width[0]) + diferensOfWidth}px`;
           console.log("wtf2");
         }
       }, 1)
      }
    )
    };
   addEventListener("resize", resize)

   return () => { removeEventListener("resize", resize)};
  })
  return (
    <section className="slider-container">
      <div className="bacground-container">
        <div className="background-hidder"></div>
        <div className="img-cont">
          <Image src={IMG} alt="background" className="back-img" />
        </div>
      </div>
      <div className="h2-container">
        <h2 className="h2-moje">Moje práce</h2>
      </div>
      <section className="slider">
        {items.map((it, i) => (
          <SliderItem move={move}  items={items} key={i} />
        ))}
      </section>
    </section>
  );
};
