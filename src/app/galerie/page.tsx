"use client"
async function fetchImages(){ //získání obráků z API
    const Incomingdata = await fetch('https://example.com/api/images');
    if(!Incomingdata.ok){
        throw new Error('Failed to fetch images');
    }
    return Incomingdata.json();//předání obrázků do Page()
  }

export default function Page({/*images:string[]*/}) {
    const images = fetchImages();
    return(
        <main className="w-screen min-h-screen p-8 grid grid-cols-2 gap-2">
            {/*images.map((image, index) => (
                <div key={index} className={index % 2 === 0 ? 'w-[60%]' : 'w-[30%]' + "h-28"}>
                    <img src={image.url} alt={"product image:"+image.id} className="max-w-full"/>
                </div>
            ))*/}
            
            <img src="/jewelry1.jpg" alt="img#1" className="w-[95%] h-[95%] object-contain"/>
            <img src="/jewelry2.jpg" alt="img#2" className="w-[95%] h-[95%] object-contain"/>
            <img src="/jewelry3.jpg" alt="img#3" className="w-[95%] h-[95%] object-contain"/>

            <img src="/jewelry1.jpg" alt="img#1" className="w-[95%] h-[95%] object-contain"/>
            <img src="/jewelry2.jpg" alt="img#2" className="w-[95%] h-[95%] object-contain"/>
            <img src="/jewelry3.jpg" alt="img#3" className="w-[95%] h-[95%] object-contain"/>
        </main>
    );
}