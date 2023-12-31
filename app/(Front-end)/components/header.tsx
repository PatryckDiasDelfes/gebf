import Image from "next/image"
import AddPost from "./addPost"

export default function Header() {
  return (

    <section className="flex justify-between items-center bg-[#F2CEAE] px-8 py-4">

      <div className="flex items-center">

        <Image className="w-[30vh] h-[30wh]"
          src={"/logo.svg"}
          width={200}
          height={200}
          alt=""
        />

        <div className="p-8">

          <h1 className="font-bold text-[3em]">
            GEBF
          </h1>
          <p className="break-inside-auto">
            Grupo de Estudos do Bem Estar Felino
          </p>

        </div>

      </div>

      <div className="justify-end flex gap-14 pr-24">

        <button className="font-bold text-[18px] border p-3 border-[#070707] border-solid rounded-2xl hover:scale-125">
          Cadestre-se

          {/* <Image 
            className='flex w-12 h-12 '
            src="/instagram.icon"
            width={500}
            height={500}
            alt="Picture of the author"
          /> */}

        </button>

        <button className="font-bold text-[18px] border p-3 border-[#070707] border-solid rounded-2xl hover:scale-125">
          Login
        </button>

      </div>

    </section>

  )
}