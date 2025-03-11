"use client"
import { useEffect, useState } from "react";
import GalleryProps from "../utils/interfaces/IFetchGallery";
interface Props {
    images: GalleryProps | null;
}
const FetchGallery: React.FC<Props> = ({ images }) => {
    const [show, setShow] = useState(true);
    const [curImg, setCurImg] = useState("");
    const [allUrls, setAllUrls] = useState<string[]>([]);

    //console.log(JSON.stringify(images));
    useEffect(() => {
        const urls = images?.products?.flatMap((product) =>
            product.mediaUrls ? product.mediaUrls.filter((url) => !url.endsWith(".mp4")) : []
        ) || [];
    
        setAllUrls(["/jewelry1.jpg", "/jewelry2.jpg", "/jewelry3.jpg", ...urls]);
    }, [images]);
    

    function HandleClick(input:string) {
        setCurImg(input)
    }
    function Border(url:any){        //zde přidat obrys obrázku na dolní liště

    }
    function HandleLightBox2(input?:any) {
        setShow((prev)=>!prev);
        console.log(show)
        if (input){
            setCurImg(input);
            Border(input);
        } 

        
        const div = document.getElementById("dv-h");
        const body = document.getElementsByTagName("body")[0];
        if (show) {
            div?.classList.remove("hidden");
            body.classList.add("overflow-hidden");
        }
        else {
            div?.classList.add("hidden");
            body.classList.remove("overflow-hidden");
        }
    }

    const HandleArrow = (direction: "next" | "previous")=>{
        const curId = allUrls.indexOf(curImg);
        if (curId === -1) return;

        const newIndex =
            direction === "next"
                ? (curId + 1) % allUrls.length
                : (curId - 1 + allUrls.length) % allUrls.length;

        setCurImg(allUrls[newIndex]);
    }
    
    return (
        <main className="w-screen min-h-screen p-8 grid grid-cols-2 gap-4 relative">
            {/* lightbox */}
            <div className="w-full h-[100vh] bg-black/50 hidden fixed flex-col" id="dv-h">
                {/* close btn*/}
                <div className="w-full h-[10%] self-start flex justify-center">
                    <div className="w-[70%] flex justify-end align-bottom" onClick={() => HandleLightBox2()}>
                        <p className="rounded-full text-4xl w-12 h-12 cursor-pointer">X</p>
                    </div>
                </div>
                {/* big image and arrows*/}
                <div className="w-full h-[70%] flex justify-center">    
                    <div onClick={() => HandleLightBox2()}></div>
                    <button onClick={()=>HandleArrow("previous")} className="w-[5%] bg-[url('../../public/right-arrow.png')] bg-contain bg-no-repeat rotate-180 bg-center"></button>
                    <img src={curImg} alt={curImg} className="max-w-[70%] h-[100%] object-contain" />
                    <button onClick={()=>HandleArrow("next")} className="w-[5%] bg-[url('../../public/right-arrow.png')] bg-contain bg-no-repeat bg-center"></button>
                    <div onClick={() => HandleLightBox2()}></div>
                </div>

                {/* all images */}
                <div className="w-full h-[20%] flex justify-center items-center gap-7 overflow-hidden">
                    {allUrls.map((url,i) => (
                        <img key={i} src={url} onClick={()=>HandleClick(url)} className="max-h-[70%] max-w-[200px]"></img>
                    ))}
                </div>
            </div>

            <img src="/jewelry1.jpg" alt="img#1" className="w-[95%] h-[95%] object-contain" onClick={() => HandleLightBox2("/jewelry1.jpg")}/>
            <img src="/jewelry2.jpg" alt="img#2" className="w-[95%] h-[95%] object-contain" onClick={() => HandleLightBox2("/jewelry2.jpg")}/>
            <img src="/jewelry3.jpg" alt="img#3" className="w-[95%] h-[95%] object-contain" onClick={() => HandleLightBox2("/jewelry3.jpg")}/>

            <img src="/jewelry1.jpg" alt="img#1" className="w-[95%] h-[95%] object-contain" onClick={() => HandleLightBox2("/jewelry1.jpg")}/>
            <img src="/jewelry2.jpg" alt="img#2" className="w-[95%] h-[95%] object-contain" onClick={() => HandleLightBox2("/jewelry2.jpg")}/>
            <img src="/jewelry3.jpg" alt="img#3" className="w-[95%] h-[95%] object-contain" onClick={() => HandleLightBox2("/jewelry3.jpg")}/>

            {/* images */}
            {allUrls.map((url,i) => (
                <img src={url} alt={" NENAČETL SE OBRÁZEK, ZKUSTE OBNOVIT STRÁNKU"} key={i} className="w-[95%] h-[95%] object-contain" onClick={()=> HandleLightBox2(url)}/>
            ))}
        </main>
    )
}
export default FetchGallery;