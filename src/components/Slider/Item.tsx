"use client";
import { Products } from "@/utils/images/get_poducts_api";
import { MutableRefObject, useEffect, useRef } from "react";
import Image from "next/image";
import Img from "../../utils/images/Footer.jpg";

export const SliderItem = (props: {
  move: (
    item: MutableRefObject<HTMLDivElement | null>,
    items: MutableRefObject<HTMLDivElement | null>[]
  ) => void;
  items: MutableRefObject<HTMLDivElement | null>[];
  data: Products | undefined;
}) => {
  const item = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    props.move(item, props.items);
  }, [props]);
  return (
    <section className="slider-item" ref={item}>
      <div className="slider-img">
        <Image
          src={props.data?.mediaUrls[0] ?? Img}
          alt="product"
          width={376}
          height={518}
          style={{
            objectFit: "cover", // Замість objectFit в пропсах
            width: "100%", // Розтягнути на всю ширину
            height: "100%", // Розтягнути на всю висоту
          }}
          priority
        />
      </div>
      <div className="text-info-slider-item">
        <h3>{props.data?.name}</h3>
        <p>{props.data?.price}</p>
      </div>
    </section>
  );
};
