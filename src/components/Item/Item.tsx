import React from 'react'
import Image from 'next/image'

export interface ItemProps {
    image: string,
    title: string,
    price: number,
}

const Item = (props: ItemProps) => {
    return (
        <div className=' w-fit'>
            <div className="relative overflow-hidden">
                <Image 
                    src={props.image} 
                    width={350} 
                    height={350} 
                    alt="zboží" 
                    className="transition-transform duration-300 transform hover:scale-110 cursor-pointer" // added hover zoom
                />
            </div>
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-[35px] w-[200px]">{props.title}</h2>
                    <h3 className="text-[20px] leading-5 w-[150px]">{props.price} czk</h3>
                </div>
                <button className="px-[25px] py-[7px] bg-[#ECDFCC] text-[#000] text-[18px] transition-colors duration-300 hover:bg-[#d6c4aa]">
                    Koupit
                </button>
            </div>
        </div>
    )
}

export default Item;
