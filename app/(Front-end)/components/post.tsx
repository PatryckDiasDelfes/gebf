"Use Client"

import Image from "next/image";
import { useState } from "react";
import { Ipost } from "../types/typePost";

interface FormPost {
    date: Ipost
}

export default function StoragePost(props: FormPost) {
    return (

        <section>

            <div className="w-[58%]">

                <div className='flex items-center'>
                    <h1 className="flex font-bold text-[20px] place-items-center p-5">
                        {props.date.title}
                    </h1>

                    <div>


                        <button>
                            <Image className='flex w-7 h-7 '
                                src="/editar.ico"
                                width={500}
                                height={500}
                                alt="Picture of the author" />
                        </button>
                    </div>

                </div>

                <div>
                    <span className="flex flex-col gap-4 indent-5 text-justify break-words text-[16px] p-4 max-h-[200px] overflow-scroll">
                        {props.date.text}

                        <ol className="list-disc list-inside">
                            {props.date.items}
                        </ol>

                    </span>
                </div>

            </div>

        </section>

    )
}