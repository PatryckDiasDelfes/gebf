"use client"

import { useState } from "react"
import { Ipost } from "../types/typePost"
import Post from "./post"

// interface NewPost {
//     add:(date: Ipost) => void
// }

export default function AddPost(add:(date: Ipost) => void) {

    const [modalState, setModalState] = useState("none")

    const [newPost, setNewPost] = useState ({

        id: 0,

        title:"",
  
        text:"",
  
        items:[],
    })

    return (

        <>

{/* Aqui aonde eu abro e dou o input para o botão "adcionar" */}
            <section>

                <button onClick={() => { setModalState("flex") }} className="bg-[#DAC8F7] bg-opacity-50 font-bold bottom-10 text-[18px] border p-3 border-[#070707] border-solid rounded-2xl">
                    adcionar
                </button>

                <div onClick={() => { setModalState("none") }} style={{ display: modalState }} className="flex bg-black opacity-50 fixed justify-center outline z-0 top-0 left-0 right-0 h-screen w-full" />

                <div style={{ display: modalState }} className="bg-white fixed flex flex-col items-center p-4 gap-2 rounded-3xl z-20 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] h-[70%] w-[70%]">
                    <input onChange={(e) => {setNewPost ({...newPost, title: e.target.value})}} placeholder="  Title" className="flex w-full h-10 outline-none p-1" />
                    <textarea onChange={(e) => {setNewPost ({...newPost, title: e.target.value})}} placeholder="  Text" className="flex w-full h-full outline-none p-1" />
                    <button onClick={() => {add(newPost)}} className="p-2 font-bold border border-[#070707] border-solid rounded-lg">
                        adcionar
                    </button>
                </div>

            </section>

            <section>



            </section>

        </>

    )
}