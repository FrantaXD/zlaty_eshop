"use client"

import Filter from '@/components/Filter/Filter'
import { ItemProps } from '@/components/Item/Item'
import Item from '@/components/Item/Item'
import React from 'react'
import { useState } from 'react'
let testData = [
    {
        image: 'https://scontent-prg1-1.cdninstagram.com/v/t51.29350-15/290869196_835846600723336_9175605391781867233_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PxHDHUty6c4Q7kNvgG0o9bC&_nc_gid=b9b53a894a5844c791f0f1605db390ed&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjg3MTk5NzQ4OTU0NTYwNzk4MQ%3D%3D.3-ccb7-5&oh=00_AYDj9IanTcetiVPhIRr-lTNVPmaeP2VyD9Tl7XoTZsY4Pg&oe=67B3777B&_nc_sid=7a9f4bhttps://scontent-prg1-1.cdninstagram.com/v/t51.29350-15/290869196_835846600723336_9175605391781867233_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PxHDHUty6c4Q7kNvgG0o9bC&_nc_gid=b9b53a894a5844c791f0f1605db390ed&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjg3MTk5NzQ4OTU0NTYwNzk4MQ%3D%3D.3-ccb7-5&oh=00_AYDj9IanTcetiVPhIRr-lTNVPmaeP2VyD9Tl7XoTZsY4Pg&oe=67B3777B&_nc_sid=7a9f4b',
        title: 'Prsten zlaty',
        price: 10

    },
    {
        image: 'https://scontent-prg1-1.cdninstagram.com/v/t51.29350-15/290869196_835846600723336_9175605391781867233_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PxHDHUty6c4Q7kNvgG0o9bC&_nc_gid=b9b53a894a5844c791f0f1605db390ed&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjg3MTk5NzQ4OTU0NTYwNzk4MQ%3D%3D.3-ccb7-5&oh=00_AYDj9IanTcetiVPhIRr-lTNVPmaeP2VyD9Tl7XoTZsY4Pg&oe=67B3777B&_nc_sid=7a9f4bhttps://scontent-prg1-1.cdninstagram.com/v/t51.29350-15/290869196_835846600723336_9175605391781867233_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PxHDHUty6c4Q7kNvgG0o9bC&_nc_gid=b9b53a894a5844c791f0f1605db390ed&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjg3MTk5NzQ4OTU0NTYwNzk4MQ%3D%3D.3-ccb7-5&oh=00_AYDj9IanTcetiVPhIRr-lTNVPmaeP2VyD9Tl7XoTZsY4Pg&oe=67B3777B&_nc_sid=7a9f4b',
        title: 'Prsten zlaty',
        price: 10

    },
    {
        image: 'https://scontent-prg1-1.cdninstagram.com/v/t51.29350-15/290869196_835846600723336_9175605391781867233_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PxHDHUty6c4Q7kNvgG0o9bC&_nc_gid=b9b53a894a5844c791f0f1605db390ed&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjg3MTk5NzQ4OTU0NTYwNzk4MQ%3D%3D.3-ccb7-5&oh=00_AYDj9IanTcetiVPhIRr-lTNVPmaeP2VyD9Tl7XoTZsY4Pg&oe=67B3777B&_nc_sid=7a9f4bhttps://scontent-prg1-1.cdninstagram.com/v/t51.29350-15/290869196_835846600723336_9175605391781867233_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PxHDHUty6c4Q7kNvgG0o9bC&_nc_gid=b9b53a894a5844c791f0f1605db390ed&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjg3MTk5NzQ4OTU0NTYwNzk4MQ%3D%3D.3-ccb7-5&oh=00_AYDj9IanTcetiVPhIRr-lTNVPmaeP2VyD9Tl7XoTZsY4Pg&oe=67B3777B&_nc_sid=7a9f4b',
        title: 'Prsten zlaty',
        price: 10

    },
    {
        image: 'https://scontent-prg1-1.cdninstagram.com/v/t51.29350-15/290869196_835846600723336_9175605391781867233_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PxHDHUty6c4Q7kNvgG0o9bC&_nc_gid=b9b53a894a5844c791f0f1605db390ed&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjg3MTk5NzQ4OTU0NTYwNzk4MQ%3D%3D.3-ccb7-5&oh=00_AYDj9IanTcetiVPhIRr-lTNVPmaeP2VyD9Tl7XoTZsY4Pg&oe=67B3777B&_nc_sid=7a9f4bhttps://scontent-prg1-1.cdninstagram.com/v/t51.29350-15/290869196_835846600723336_9175605391781867233_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PxHDHUty6c4Q7kNvgG0o9bC&_nc_gid=b9b53a894a5844c791f0f1605db390ed&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjg3MTk5NzQ4OTU0NTYwNzk4MQ%3D%3D.3-ccb7-5&oh=00_AYDj9IanTcetiVPhIRr-lTNVPmaeP2VyD9Tl7XoTZsY4Pg&oe=67B3777B&_nc_sid=7a9f4b',
        title: 'Prsten zlaty',
        price: 10

    },
    {
        image: 'https://scontent-prg1-1.cdninstagram.com/v/t51.29350-15/290869196_835846600723336_9175605391781867233_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PxHDHUty6c4Q7kNvgG0o9bC&_nc_gid=b9b53a894a5844c791f0f1605db390ed&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjg3MTk5NzQ4OTU0NTYwNzk4MQ%3D%3D.3-ccb7-5&oh=00_AYDj9IanTcetiVPhIRr-lTNVPmaeP2VyD9Tl7XoTZsY4Pg&oe=67B3777B&_nc_sid=7a9f4bhttps://scontent-prg1-1.cdninstagram.com/v/t51.29350-15/290869196_835846600723336_9175605391781867233_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PxHDHUty6c4Q7kNvgG0o9bC&_nc_gid=b9b53a894a5844c791f0f1605db390ed&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjg3MTk5NzQ4OTU0NTYwNzk4MQ%3D%3D.3-ccb7-5&oh=00_AYDj9IanTcetiVPhIRr-lTNVPmaeP2VyD9Tl7XoTZsY4Pg&oe=67B3777B&_nc_sid=7a9f4b',
        title: 'Prsten zlaty',
        price: 10

    },
    {
        image: 'https://scontent-prg1-1.cdninstagram.com/v/t51.29350-15/290869196_835846600723336_9175605391781867233_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PxHDHUty6c4Q7kNvgG0o9bC&_nc_gid=b9b53a894a5844c791f0f1605db390ed&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjg3MTk5NzQ4OTU0NTYwNzk4MQ%3D%3D.3-ccb7-5&oh=00_AYDj9IanTcetiVPhIRr-lTNVPmaeP2VyD9Tl7XoTZsY4Pg&oe=67B3777B&_nc_sid=7a9f4bhttps://scontent-prg1-1.cdninstagram.com/v/t51.29350-15/290869196_835846600723336_9175605391781867233_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PxHDHUty6c4Q7kNvgG0o9bC&_nc_gid=b9b53a894a5844c791f0f1605db390ed&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjg3MTk5NzQ4OTU0NTYwNzk4MQ%3D%3D.3-ccb7-5&oh=00_AYDj9IanTcetiVPhIRr-lTNVPmaeP2VyD9Tl7XoTZsY4Pg&oe=67B3777B&_nc_sid=7a9f4b',
        title: 'Prsten zlaty',
        price: 10

    },
    {
        image: 'https://scontent-prg1-1.cdninstagram.com/v/t51.29350-15/290869196_835846600723336_9175605391781867233_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PxHDHUty6c4Q7kNvgG0o9bC&_nc_gid=b9b53a894a5844c791f0f1605db390ed&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjg3MTk5NzQ4OTU0NTYwNzk4MQ%3D%3D.3-ccb7-5&oh=00_AYDj9IanTcetiVPhIRr-lTNVPmaeP2VyD9Tl7XoTZsY4Pg&oe=67B3777B&_nc_sid=7a9f4bhttps://scontent-prg1-1.cdninstagram.com/v/t51.29350-15/290869196_835846600723336_9175605391781867233_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PxHDHUty6c4Q7kNvgG0o9bC&_nc_gid=b9b53a894a5844c791f0f1605db390ed&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjg3MTk5NzQ4OTU0NTYwNzk4MQ%3D%3D.3-ccb7-5&oh=00_AYDj9IanTcetiVPhIRr-lTNVPmaeP2VyD9Tl7XoTZsY4Pg&oe=67B3777B&_nc_sid=7a9f4b',
        title: 'Prsten zlaty',
        price: 10

    },
]
const page = () => {
    const [isModal, setIsModal] = useState<boolean>(false)

    const onClickModal = () => {
        setIsModal(!isModal);
    }
    const chunkArray = (arr: ItemProps[], size: number) => {
        return arr.reduce((chunks, item, i) => {
            if (i % size === 0) chunks.push([]);
            chunks[chunks.length - 1].push(item);
            return chunks;
        }, [] as ItemProps[][]);
    };
    
    const separatedData = chunkArray(testData, 3);
    
    return (
        <>
            <h1 className='text-6xl text-white mt-8 text-center'>Nakupovat</h1>
            <button className="underline bg-[#ECDFCC] w-fit px-4 py-3 text-black sticky top-3 font-bold text-[17px] transition duration-300 hover:bg-[#d9c4a8] hover:scale-105"
                onClick={onClickModal}>
                Filtry
            </button>
            {isModal ? <Filter /> : <></>}
            <div className=' flex flex-col justify-center items-center'>
                <div className=" flex flex-col gap-[30px]">  {/* Velký kontejner */}
                    {separatedData.map((chunk, index) => (
                        <div key={index} className=" flex gap-[70px]">  {/* Každý menší kontejner s třemi položkami */}
                            {chunk.map((item, itemIndex) => (
                                <Item key={itemIndex} image={item.image} price={item.price} title={item.title} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default page
