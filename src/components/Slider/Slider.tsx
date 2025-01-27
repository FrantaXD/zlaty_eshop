"use client";
import IMG from "../../utils/images/Footer.jpg";
import Image from "next/image";
import "./Slider.css";
import { SliderItem } from "./Item";
import move from "./sliderLogic";
import { MutableRefObject,useRef} from "react";
import { ArrayProject } from "@/utils/images/get_poducts_api";

export const Slider = (props: {data: ArrayProject | undefined}) => {

  const items: MutableRefObject<HTMLDivElement | null>[] = [];
  items.push(useRef<HTMLDivElement | null>(null));
  items.push(useRef<HTMLDivElement | null>(null));
  items.push(useRef<HTMLDivElement | null>(null));
  items.push(useRef<HTMLDivElement | null>(null));
  items.push(useRef<HTMLDivElement | null>(null));

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
        {items.map((itt, i) => (
          <SliderItem move={move} items={items} key={i} data={props.data?.products[i > props.data?.products.length - 1 ? props.data?.products.length - 1 : i]}  />
        ))}
      </section>
    </section>
  );
};
