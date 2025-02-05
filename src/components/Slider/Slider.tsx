"use client";
import IMG from "../../utils/images/Footer.jpg";
import Image from "next/image";
import "./Slider.css";
import { SliderItem } from "./Item";
import move from "./sliderLogic";
import { MutableRefObject, useRef } from "react";
export const Slider = () => {
  const items: MutableRefObject<HTMLDivElement | null>[] = Array.from(
    { length: 5 },
    () => useRef<HTMLDivElement | null>(null)
  );
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
          <SliderItem move={move} items={items} key={i} />
        ))}
      </section>
    </section>
  );
};
