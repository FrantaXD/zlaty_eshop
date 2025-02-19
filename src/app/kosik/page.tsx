"use client"
import { useEffect, useState } from "react";
import { get_products_cart, post_product } from "@/apis_reqests/products";
import { Product_cart } from "@/interface/product_cart";
import { faUncharted } from "@fortawesome/free-brands-svg-icons";
import { Fira_Code } from "next/font/google";
import { flushAllTraces } from "next/dist/trace";
import Image from "next/image";

export default function Cart() {
    const [cartItems, setCarItems] = useState<Product_cart[] | undefined>([]);
    const [fullPrice, setFullPrice] = useState<number>();

    useEffect(() => {
        async function Get_Data() {
             // await post_product({ productId: 2, quantity: 1}).then(e => alert(e?.message));
            const f = await get_products_cart().then(e => e)
            setCarItems(f);
            if (f) setFullPrice(countPrice(f));
        }
        Get_Data();
    }, [])
    function countPrice(values: Product_cart[]): number {
        let price = 0;
        for (let i = 0; i < values.length; i++) {
            price += values[i].price * values[i].quantity;
        }
        
        return price;
    }
    return (
        <main className=" text-white  flex-1 mt-[60px]">
           <div className="absolute right-[50%] translate-x-[50%]"><h1 className="absoute mx-auto font-bold text-[64px] text-white">Košík</h1></div> 
            <div className="display flex justify-between  w-[1100px] m-auto mt-[160px] ">
                <section className="w-[660px]">{cartItems && cartItems.flatMap((e, index) =>
                    Array.from({ length: e.quantity }, (_, i) => (
                        <div key={`${index}-${i}`} className="flex gap-6 w-[660px]  mb-12" >
                            <div className="relative w-[239px] h-[239px] overflow-hidden">
                                <Image
                                    src={e.mediaUrls[0]}
                                    alt="product"
                                    fill
                                    objectFit="cover" 
                                />
                            </div>

                            <div className="text-start flex flex-col justify-between w-[390px]">
                                <div>
                                <h2 className="text-[60px]">{e.name}</h2>
                                <p className="text-[35px]">{e.price}</p>
                                </div>
                                <div className="flex justify-end">
                                    <button className="text-[30px] text-zinc-100 text-opacity-50"><u>Odebrat</u></button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
                </section>
                <section className="text-end flex flex-col gap-[10px] "><h2 className="text-[44px]"><b>Celkem: {fullPrice}</b></h2><div className="text-[30px]">Celkem bez DPH: {fullPrice && (fullPrice - (fullPrice / 100 * 21)).toString().substring(0, 5)}</div> <button className="py-[10px] px-[25px] w-auto self-start bg-orange-100 text-3xl text-black font-bold mt-[20px] ml-auto">Pokračovat</button></section>
            </div>
        </main>
    );
}