"use client";
import { MutableRefObject, useEffect, useRef} from "react";
interface SliderItemProps {
  clear: (position: MutableRefObject<HTMLDivElement | null>, id: number) => void; // Функція для очищення
  id: number; // Ідентифікатор
}

export const SliderItem = ({ clear, id }: SliderItemProps) => {
  const item = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (item.current) {
        item.current.style.left = `${376 * id + id * 50}px`;
      }
      clear(item, id);
    }, .1);
    setInterval(() => {
      if (item.current) {
        item.current.style.left = `${item.current.getBoundingClientRect().left + .3}px`;
      }
      clear(item, id);
    }, .1);
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
