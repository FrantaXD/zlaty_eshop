"use client"
import { get_products_cart } from "@/apis_reqests/products";
import { Cart_item } from "@/components/kosik_cart_items/cart_item";
import { Product_cart } from "@/interface/product_cart";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

let counter = false;
export default function Podtvrzeni() {
    const [cartItems, setCarItems] = useState<Product_cart[] | undefined>([]);
    const [fullPrice, setFullPrice] = useState<number>();
    const [continueOrder, setContinueOrder] = useState<boolean>(true);
  
    useEffect(() => {
      async function Get_Data() {
        //await post_product({ productId: 2, quantity: 6}).then(e => alert(e?.message));
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
return (
  <main className="text-white  flex-1 mt-[60px]">
    {!counter ? (
      <div>
        <div className="absolute right-[50%] translate-x-[50%] ">
          <div className="flex gap-10 h-[155px] items-start relative ">
            <Link href={"/kosik"}>
              <div className="w-[110px] flex flex-col justify-center items-center gap-2 max-[660px]:w-[90px]">
                <div className="w-[43px] h-[43px] bg-gray-900 text-[35px] flex justify-center items-center  max-[660px]:w-[34px] max-[660px]:h-[34px] max-[660px]:text-[28px]">
                  1
                </div>
                <p className="text-[24px] max-[660px]:text-[18px]">Košík</p>
              </div>
            </Link>
            <Link href={"/kosik/form"}>
              <div className="w-[110px] flex flex-col justify-center items-center gap-2 max-[660px]:w-[90px]">
                <div className="w-[43px] h-[43px] bg-gray-900 text-[35px] flex justify-center items-center max-[660px]:w-[34px] max-[660px]:h-[34px] max-[660px]:text-[28px]">
                  2
                </div>
                <p className="text-[24px] text-center max-[660px]:text-[18px]">
                  Osobní údaje
                </p>
              </div>
            </Link>
            <Link href={"/kosik/podtverzeni"}>
              <div className="w-[110px] flex flex-col justify-center items-center gap-2 max-[660px]:w-[90px]">
                <div className="w-[43px] h-[43px] bg-gray-200 text-[35px] flex justify-center items-center text-black max-[660px]:w-[34px] max-[660px]:h-[34px] max-[660px]:text-[28px]">
                  3
                </div>
                <p className="text-[24px] max-[660px]:text-[18px]">Potvrzení</p>
              </div>
            </Link>
            <div className="absolute w-[100px] h-[1px] bg-gray-600 top-6 left-20 max-[660px]:left-16 max-[660px]:w-[92px] max-[660px]:top-5"></div>
            <div className="absolute w-[100px] h-[1px] bg-gray-600 top-6 left-[230px] max-[660px]:top-5 max-[660px]:left-[194px] max-[660px]:w-[92px]"></div>
          </div>
        </div>
        <section className="w-[660px] max-[660px]:w-[380px]">
          {cartItems &&
            cartItems.flatMap((e, index) =>
              Array.from({ length: e.quantity }, (_, i) => (
                <div
                  key={`${index}-${i}`}
                  className="flex gap-6 w-[660px] mb-12 max-[660px]:w-[380px]"
                >
                  <div className="relative w-[132px] h-[132px] overflow-hidden max-[660px]:w-[150px] max-[660px]:h-[100px]">
                    <Image
                      src={e.mediaUrls[0]}
                      alt="product"
                      fill
                      objectFit="cover"
                    />
                  </div>

                  <div className="text-start flex flex-col justify-between w-[390px] ">
                    <div className="max-[660px]:flex max-[660px]:flex-col max-[660px]:gap-1 max-[660px]:-translate-y-3">
                      <h2 className="text-[60px] max-[660px]:text-[36px] ">
                        {e.name}
                      </h2>
                      <p className="text-[35px] max-[660px]:text-[30px]">
                        {e.price}
                      </p>
                    </div>
                    <div className="flex justify-end "></div>
                  </div>
                </div>
              ))
            )}
             <button className="py-[10px] px-[25px] w-auto self-start bg-orange-100 text-3xl max-[660px]:text-xl text-black font-bold mt-[20px] ml-[250px]">
                <Link href={{ pathname: "/", query: {} }}>
                  Poslat objednavku
                </Link>
              </button>
        </section>
      </div>
    ) : (
      <div>Loading...</div>
    )}
  </main>
);
}