"use client"

import { useState } from "react";
import Image from "next/image";
import Stylization from "./stylization"
import AddPost from "./addPost";
import { Ipost } from "../types/typePost";
import EditPost from "./editPost";

export default function PostList(   ) {

// Aonde eu armazeno meus post
    const [groupPost, setGroupPost] = useState ([
        {    
            id:0,
            title:"O que é gatificação?",
            text:"A gatificação é um termo utilizado para descrever a adaptação do ambiente doméstico para atender às necessidades naturais e comportamentais dos gatos. Essa prática envolve a criação de um espaço seguro e estimulante para os felinos, que inclui áreas para escalada, esconderijos, brinquedos e outras atividades que ajudam a manter os gatos saudáveis e felizes. Aqui estão algumas dicas sobre como fazer a gatificação em casa",
            items:[
            "Avalie o espaço disponível: Antes de começar a gatificação, avalie o espaço em sua casa. Identifique as áreas onde seu gato costuma passar mais tempo e onde ele pode se beneficiar de atividades como escalada e exploração.",
            "Crie áreas de escalada: Gatos adoram escalar. Instale prateleiras, postes de arranhar, árvores de gato e outros objetos que permitam que eles subam e se exercitem verticalmente. Certifique-se de que essas estruturas sejam seguras e estáveis.",
            "Forneça esconderijos: Gatos também gostam de se esconder e se aconchegar em lugares aconchegantes. Coloque caixas, cestas, tocas e almofadas em locais estratégicos para que seu gato tenha lugares onde se sentir seguro.",
            "Use brinquedos interativos: Brinquedos que estimulam a mente do gato, como bolinhas, varinhas com penas e jogos de tabuleiro para gatos, são ótimos para mantê-los mentalmente ativos. Certifique-se de trocar os brinquedos regularmente para evitar que seu gato se entedie.",
            "Crie áreas de observação: Gatos adoram observar o mundo ao seu redor. Posicione prateleiras perto de janelas para que seu gato possa ver a atividade lá fora. Isso também permite que eles tomem sol, o que é benéfico para sua saúde.",
            "Plante grama de gato: Muitos gatos gostam de mastigar grama, que pode ajudar na digestão. Considere a possibilidade de cultivar grama de gato em vasos dentro de casa para que seu felino tenha acesso a ela."]
        },
        {    
            id:1,
            title:"Como cuidar da alimentação",
            text:"Cuidar da alimentação de um felino é essencial para garantir a saúde e bem-estar do seu animal de estimação. Aqui estão algumas dicas para te ajudar nessa tarefa:",
            items:[
                "Escolha uma ração de qualidade: Opte por uma ração específica para gatos, pois ela contém os nutrientes necessários para a saúde do felino. Consulte um veterinário para escolher a melhor opção de acordo com a idade, porte e condição de saúde do seu gato.",
                "Quantidade e frequência das refeições: Gatos são animais que preferem fazer várias refeições pequenas ao longo do dia. Divida a quantidade diária de ração recomendada pelo veterinário em pelo menos duas ou três refeições.",
                "Água fresca sempre disponível: Certifique-se de que o seu gato tenha acesso a água fresca e limpa o tempo todo. Gatos tendem a beber pouca água, então é importante estimular a ingestão. Alguns felinos preferem fontes de água corrente, então você pode considerar adquirir uma.",
                "Evite alimentos inadequados: Alguns alimentos podem ser tóxicos para os gatos, como chocolate, cebola, alho, uva, entre outros. Evite dar esses alimentos ao seu felino e fique atento a qualquer sinal de intoxicação.",
                "Variar a alimentação: Além da ração, você pode oferecer outros alimentos ao seu gato, como carnes magras cozidas sem tempero, vegetais cozidos e enlatados específicos para gatos. No entanto, é importante consultar um veterinário antes de introduzir qualquer alimento novo na dieta."
            ]
        },
        {    
            id:2,
            title:"Cuidados com a areia do felino",
            text:"Ao escolher a areia para gatos, é importante considerar alguns cuidados. Primeiro, verifique se a areia é adequada para gatos, pois algumas marcas podem causar desconforto nas patas sensíveis dos felinos. Além disso, escolha uma areia que seja fácil de limpar e que controle efetivamente o odor. Também é importante verificar se a areia é livre de poeira, pois a inalação constante de partículas pode ser prejudicial para a saúde dos gatos. Por fim, leve em conta a preferência do seu gato, pois alguns felinos podem ser mais exigentes em relação ao tipo de areia que utilizam.",
            items:[]
        }, 
    ])

// Função que eu atualizo meu groupPost com as info de post
    function addPost(post: Ipost) {
        setGroupPost ([...groupPost, post])
    }

    const [modalData, setModalData] = useState({
        display:false,
        post:{
          id: -1,
    
          title:"",
    
          text:"",
    
          items:[""]
        },
      })

      function openModal(selectedPost:Ipost){
        setModalData({display:true, post:selectedPost})
      }

    return (

        <section className="bg-[#F2C1AE] bg-opacity-70 p-10">

{/* Aonde eu mapeio meu group post e atualizo/crio mais um com base nos meus input de "addPost" */}
            {groupPost.map((post) => (
                <Stylization 
                    key={post.id}
                    data={post}
                    openModal={openModal}
                    modalDisplay={modalData.display}
                />
            ))}
            
{/* Aqui é aonde chamo meu add post e a prop. Para assim o codigo de addPost aparecer no client */}
            <AddPost
                add={addPost}
                newId={groupPost[groupPost.length - 1].id + 1}
            />

            <EditPost
                modalData={modalData}
                closeModal={() => setModalData({...modalData, display:false})}
                />

        </section>

    )
}