"use client"
import "./domu.css";
import Image from "next/image";
import IMG from "../utils/images/image1.png";
import { Slider } from "@/components/Slider/Slider";
import { ArrayProject } from "@/utils/images/get_poducts_api";
import { useEffect, useState } from "react";
import { get_products } from "@/components/api_reqests/get_producrs";
export default function Home() {
  const [data, setData] = useState<ArrayProject>();
    console.log(data);
    useEffect(() => {
      async function Data() {
        setData(await get_products()
        .then((e) => {return e}));
      }
      Data();
    }, []);
  return (
    <main>
      <div className="first-vi">
        <section className="section-vyroba">
          <h1 className="h1-vyroba">Výroba autorských šperků</h1>
          <p className="h1-p-vyroba">
            Lorem ipsum nevim nevimLorem ipsum nevim nevimLorem ipsum nevim
            nevimLorem ipsum nevim nevim
          </p>
          <button className="button-vice">Více</button>
        </section>
        <section className="img-container">
        <div className="transparent-object"></div>
          <div className="img-ring">
            <Image src={IMG} alt="ring" objectFit="cover" priority/>
          </div>
        </section>
      </div>
      <div>
        <Slider data={data}/>
      </div>
      <div>
        <section className="imgs-container">
          <div className="fir">
          <Image src={typeof data?.products[0] == "string" ? data?.products[0] : IMG} alt="work3" id="work3" width={2000} height={2000}/>
          </div>
          <div className="sco">
            <Image src={data?.products[0].mediaUrls[0] ?? IMG} alt="work" id="work" width={2000} height={2000}/>
            <Image src={data?.products[0].mediaUrls[0]  ?? IMG} alt="work2" id="work2" width={2000} height={2000}/>
          </div>
        </section>
      </div>
    </main>
  );
}
