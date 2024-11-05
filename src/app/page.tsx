import "./domu.css";
import Image from "next/image";
import IMG from "../utils/images/image1.png";
import { Slider } from "@/components/Slider/Slider";
export default function Home() {
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
            <Image src={IMG} alt="ring" layout="fill" objectFit="cover" />
          </div>
        </section>
      </div>
      <div>
        <Slider/>
      </div>
    </main>
  );
}
