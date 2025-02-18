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
        <main className=" text-white  flex-1 mt-[100px]">
            <h1></h1>
            <div className="display flex justify-center gap-[400px]">
                <section className="w-[660px]">{cartItems && cartItems.flatMap((e, index) =>
                    Array.from({ length: e.quantity }, (_, i) => (
                        <div key={`${index}-${i}`} className="flex gap-6 w-[660px]  mt-5 mb-5" >
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
                                    <button ><u>Odebrat</u></button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
                </section>
                <section><h2 className="text-[44px]"><b>Celkem: {fullPrice}</b></h2><div className="text-[30px]">Celkem bez DPH: {fullPrice && (fullPrice - (fullPrice / 100 * 21)).toString().substring(0, 5)}</div></section>
            </div>
        </main>
    );
}