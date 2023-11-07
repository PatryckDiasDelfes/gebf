"use client"

import Image from "next/image"
import { Ipost } from "../types/typePost"
import { useState } from "react"

export default function EditPost() {

    const [modalEdit, setModalEdit] = useState("none")

    return (

        <>

            <button onClick={() => {setModalEdit("flex")}}>
                <Image className='w-7 h-7 cursor-pointer '
                    src="/editar.ico"
                    width={500}
                    height={500}
                    alt="Picture of the author" />
            </button>

            <div onClick={() => setModalEdit("none")} style={{ display: modalEdit }} className="flex bg-black opacity-50 fixed justify-center outline z-0 top-0 left-0 right-0 h-screen w-full"/>

            <div style={{display:modalEdit}} className="bg-white fixed flex flex-col items-center p-4 gap-2 rounded-3xl z-20 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] h-[70%] w-[70%]">
            
            </div>

        </>

    )
}
