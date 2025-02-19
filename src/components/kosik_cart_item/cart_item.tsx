"use client";
import { Item_cart, product_curt_post_Interface } from "@/interface/product_response";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Cart_item(props: { value: Item_cart, RemoveItemFromCart:  (value: product_curt_post_Interface) => Promise<void> }) {
  const [data, setData] = useState<Item_cart | undefined>(undefined);
  const [removeItem, setRemoveItem] = useState<product_curt_post_Interface>();
  useEffect(() => {
    setData(props.value)
    setRemoveItem(props.value.forRemove)
  }, []);
  if (data && removeItem) {
    return (
        <>
          <div className="relative w-[239px] h-[239px] overflow-hidden">
            <Image
              src={data.imagePath}
              alt="product"
              fill
              objectFit="cover"
            />
          </div>
    
          <div className="text-start flex flex-col justify-between w-[390px]">
            <div>
              <h2 className="text-[60px]">{data.name}</h2>
              <p className="text-[35px]">{data.price}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => props.RemoveItemFromCart(removeItem)}
                className="text-[30px] text-zinc-100 text-opacity-50"
              >
                <u>Odebrat</u>
              </button>
            </div>
          </div>
        </>

  
 
  );
}
else{
    return <></>
}
}
