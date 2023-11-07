"use client"

import Image from "next/image";
import { useState } from "react";
import { Ipost } from "../types/typePost";

export default function Stylization(props: Ipost) {
    return (

        <section className="flex justify-center p-6">

            <div className="flex flex-col w-[80%]">

                <div className='flex items-center'>
                    <h1>{props.id}</h1>
                    <h1 className="font-bold text-[20px] place-items-center p-5">
                        {props.title}
                    </h1>
                    <div>

                        <button>
                            <Image className='w-7 h-7 '
                                src="/editar.ico"
                                width={500}
                                height={500}
                                alt="Picture of the author" />
                        </button>
                        
                    </div>
                </div>

                    <span className="flex flex-col gap-4 indent-5 text-justify break-words text-[16px] p-4 max-h-[200px] overflow-scroll">
                        {props.text}
                        <ol className="list-disc list-inside">
                            {props.items.map((item:string) => (
                                <li key={1}>
                                    {item}
                                </li>
                            ))}
{/* Pq o map? Como meus itens são um [], sem o map ficara somente um topico. Como uso ele ele mapea todos os topicos e os organiza em topicos */}
                        </ol>
                    </span>

            </div>

        </section>

    )
}