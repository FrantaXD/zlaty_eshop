"use client"

import Filter from '@/components/Filter/Filter'
import React from 'react'
import { useState } from 'react'
const page = () => {
    const [isModal, setIsModal] = useState<boolean>(false)

    const onClickModal= ()=>{
        setIsModal(!isModal);
    }
    return (
        <>
            <h1 className='text-6xl text-white mt-8 text-center'>Nakupovat</h1>
            <button className="underline bg-[#ECDFCC] w-fit px-4 py-3 text-black sticky top-3 font-bold text-[17px] transition duration-300 hover:bg-[#d9c4a8] hover:scale-105"
            onClick={onClickModal}>
                Filtry
            </button>
            {isModal? <Filter/>:<></>}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default page
