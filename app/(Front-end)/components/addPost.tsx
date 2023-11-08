"use client"

import { useState } from "react"
import { Ipost } from "../types/typePost"
import Stylization from "./stylization"

interface propsModal {
    add: (data: Ipost) => void
    newId: number
}
// add:(date: Ipost) => void / Tem a mesma função que a interface de cima

export default function AddPost(props: propsModal) {

    const [modalAdd, setModalAdd] = useState("none")

    const [newPost, setNewPost] = useState({

        id: props.newId,

        title: "",

        text: "",

        items: [],
    })

    return (
        <>

{/* Aqui aonde eu abro e dou o input para o botão "adcionar" */}
            <section className="flex justify-end pr-6">

{/* Meu botão que abre o modal */}
                <button onClick={() => { setModalAdd("flex") }} className="fixed  bg-[#DAC8F7] bg-opacity-50 font-bold bottom-10 text-[18px] border p-3 border-[#070707] border-solid rounded-2xl">
                    adcionar
                </button>

{/* Modal que fica no fundo e ao ser clicado atualiza o estado para "none". Ou seja, ele fecha os modais */}
                <div onClick={() => { setModalAdd("none") }} style={{ display: modalAdd }} className="flex bg-black opacity-50 fixed justify-center outline z-0 top-0 left-0 right-0 h-screen w-full" />

{/* Moda aonde fica minhas caixas de input e botão de adcionar*/}
                <div style={{ display: modalAdd }} className="bg-white fixed flex flex-col items-center p-4 gap-2 rounded-3xl z-20 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] h-[70%] w-[70%]">
                    <input onChange={(e) => { setNewPost({ ...newPost, title: e.target.value }) }} placeholder="  Title" className="flex w-full h-10 outline-none p-1" />
                    <textarea onChange={(e) => { setNewPost({ ...newPost, text: e.target.value }) }} placeholder="  Text" className="flex w-full h-full outline-none p-1" />
                    <textarea onChange={(e) => { setNewPost({ ...newPost, text: e.target.value }) }} placeholder="  Topicos" className="flex w-full h-full outline-none p-1" />
                    <button onClick={() => { props.add(newPost) }} className="p-2 font-bold border border-[#070707] border-solid rounded-lg">
                        adcionar
                    </button>
                </div>

            </section>

        </>
    )
}