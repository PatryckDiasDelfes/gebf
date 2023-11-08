"use client"

import Image from "next/image"
import { Ipost } from "../types/typePost"
import { useState } from "react"

interface editPost {
    modalData: {
        display: boolean
        post:Ipost
    }
    closeModal: () => void
}

export default function PostModal (props:editPost) {

// A exclamação serve para pedir o oposto, então se for true ele retorna false e vice versa
    if(!props.modalData.display) return
    
    return (
    <>

        <section onClick={() => {props.closeModal()}} className="bg-black bg-opacity-50 flex fixed z-10 top-0 left-0 right-0 h-screen w-screen"/>

        <div className="bg-white fixed flex flex-col items-center overflow-y-scroll p-4 gap-2 rounded-3xl z-20 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] h-[90%] w-[80%]">
            <input type="text" defaultValue={props.modalData.post.title} className="flex w-full h-10 outline-none p-1"/>
            <textarea name="" defaultValue={props.modalData.post.text} className="flex w-full h-full outline-none p-1"/>
            <ol className="grid grid-cols-2 w-full list-inside gap-8">
               {props.modalData.post.items.map((item:string) => (
                    <li>
                        <textarea name="" defaultValue={item} className="outline-none w-full"/>
                    </li>
               ))}
            </ol>
        </div>
    
    </>
    )
  }
