import Image from "next/image"
import AddPost from "./addPost"

export default function Header() {
  return (

    <>
      <section className="flex justify-between items-center bg-[#F6D3C6] px-8 py-4">

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

          </button>

          <button className="font-bold text-[18px] border p-3 border-[#070707] border-solid rounded-2xl hover:scale-125">
            Login
          </button>

        </div>

      </section>

      <section className="bg-[#F6D3C6] p-10 text-black">

        <h1 className="flex font-bold text-[40px] justify-center">
          Quem somos
        </h1>
        <span className="flex indent-5 text-[18px] justify-center px-36">
          Somos estudantes da Unisociesc-SC e da UNIFACS-BA e estamos cursando 0 2° semestre de medicina veterinária. Nosso intuito é poder ensinar as maneiras mais adequadas de não so poder cuidar e tratar do seu felino como também poder dar uma melhor qualidade de vida para ele. Esperamos que possamos te ajudar com nosso blog a ensinar ou melhorar seu conhecimento sobre os cuidados para com os felinos.
        </span>

      </section>
    </>

  )
}