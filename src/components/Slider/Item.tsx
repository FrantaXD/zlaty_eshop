"use client";
import { MutableRefObject, useEffect, useRef} from "react";


export const SliderItem = (props: {move: (item: MutableRefObject<HTMLDivElement | null>, items: MutableRefObject<HTMLDivElement | null>[]) => void, items: MutableRefObject<HTMLDivElement | null>[]} ) => {
  const item = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    props.move(item, props.items)
  }, []);

  return (
    <section className="slider-item" ref={item}>
      <div className="slider-img">{/* <Image scr={} alt="poduct"/> */}</div>
      <div className="text-info-slider-item">
        <h3>Lorem</h3>
        <p>100Kč</p>
      </div>
    </section>
  );
};
