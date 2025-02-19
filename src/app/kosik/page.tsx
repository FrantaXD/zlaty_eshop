"use client";
import { useEffect, useState } from "react";
import { get_products_cart, post_product, put_products_cart } from "@/apis_reqests/products";
import { Product_cart } from "@/interface/product_cart";
import { faUncharted } from "@fortawesome/free-brands-svg-icons";
import { Fira_Code } from "next/font/google";
import { flushAllTraces } from "next/dist/trace";
import Image from "next/image";
import { product_curt_post_Interface } from "@/interface/product_response";
import { Cart_item } from "@/components/kosik_cart_item/cart_item";

export default function Cart() {
  const [cartItems, setCarItems] = useState<Product_cart[] | undefined>([]);
  const [fullPrice, setFullPrice] = useState<number>();

  useEffect(() => {
    async function Get_Data() {
      // await post_product({ productId: 2, quantity: 1}).then(e => alert(e?.message));
      const f = await get_products_cart().then((e) => e);
      setCarItems(f);
      if (f) setFullPrice(getPrice(f));
    }
    Get_Data();
  }, []);
  function getPrice(values: Product_cart[]): number {
    let price = 0;
    for (let i = 0; i < values.length; i++) {
      price += values[i].price * values[i].quantity;
    }
    return price;
  }
  async function RemoveItemFromCart(value: product_curt_post_Interface){
    console.log("sdfghj");
   
   if(value.quantity == 0){
     
   }
   else if( value.quantity >= 1 ){
    await put_products_cart(value).then(e=>e);
   }
  }
  return (
    <main className=" text-white  flex-1 mt-[60px]">
      <div className="absolute right-[50%] translate-x-[50%]">
        <h1 className="absoute mx-auto font-bold text-[64px] text-white">
          Košík
        </h1>
      </div>
      <div className="display flex justify-between  w-[1130px] m-auto mt-[160px] ">
        <section className="w-[660px]">
          {cartItems &&
            cartItems.flatMap((e, index) =>
              Array.from({ length: e.quantity }, (_, i) => (
                <div
                  key={`${index}-${i}`}
                  className="flex gap-6 w-[660px] mb-12"
                >
                  <Cart_item value={{name : e.name, imagePath: e.mediaUrls[0], price: e.price, forRemove: { quantity: e.quantity, productId: parseInt(e.id) } }} RemoveItemFromCart={RemoveItemFromCart}/>
                </div>
              ))
            )}
        </section>
        <section className="text-end flex flex-col gap-[10px] ">
          <h2 className="text-[44px]">
            <b>Celkem: {fullPrice}</b>
          </h2>
          <div className="text-[30px]">
            Celkem bez DPH:{" "}
            {fullPrice &&
              (fullPrice - (fullPrice / 100) * 21).toString().substring(0, 5)}
          </div>{" "}
          <button className="py-[10px] px-[25px] w-auto self-start bg-orange-100 text-3xl text-black font-bold mt-[20px] ml-auto ">
            Pokračovat
          </button>
        </section>
      </div>
    </main>
  );
}
