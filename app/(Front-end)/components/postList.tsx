"use client"

import { useState } from "react";
import Image from "next/image";
import Stylization from "./stylization"
import AddPost from "./addPost";
import { Ipost } from "../types/typePost";

export default function PostList() {

// Função que eu atualizo meu groupPost com as info de post
    function addPost(post: Ipost) {
        setGroupPost ([...groupPost, post])
    }

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
        title:"O que é gatificação?",
        text:"A gatificação é um termo utilizado para descrever a adaptação do ambiente doméstico para atender às necessidades naturais e comportamentais dos gatos. Essa prática envolve a criação de um espaço seguro e estimulante para os felinos, que inclui áreas para escalada, esconderijos, brinquedos e outras atividades que ajudam a manter os gatos saudáveis e felizes. Aqui estão algumas dicas sobre como fazer a gatificação em casa",
        items:[ 
        "Avalie o espaço disponível: Antes de começar a gatificação, avalie o espaço em sua casa. Identifique as áreas onde seu gato costuma passar mais tempo e onde ele pode se beneficiar de atividades como escalada e exploração.",
        "Crie áreas de escalada: Gatos adoram escalar. Instale prateleiras, postes de arranhar, árvores de gato e outros objetos que permitam que eles subam e se exercitem verticalmente. Certifique-se de que essas estruturas sejam seguras e estáveis.",
        "Forneça esconderijos: Gatos também gostam de se esconder e se aconchegar em lugares aconchegantes. Coloque caixas, cestas, tocas e almofadas em locais estratégicos para que seu gato tenha lugares onde se sentir seguro.",
        "Use brinquedos interativos: Brinquedos que estimulam a mente do gato, como bolinhas, varinhas com penas e jogos de tabuleiro para gatos, são ótimos para mantê-los mentalmente ativos. Certifique-se de trocar os brinquedos regularmente para evitar que seu gato se entedie.",
        "Crie áreas de observação: Gatos adoram observar o mundo ao seu redor. Posicione prateleiras perto de janelas para que seu gato possa ver a atividade lá fora. Isso também permite que eles tomem sol, o que é benéfico para sua saúde.",
        "Plante grama de gato: Mstringuitos gatos gostam de mastigar grama, que pode ajudar na digestão. Considere a possibilidade de cultivar grama de gato em vasos dentro de casa para que seu felino tenha acesso a ela."]
    },{    
        id:2,
        title:"O que é gatificação?",
        text:"A gatificação é um termo utilizado para descrever a adaptação do ambiente doméstico para atender às necessidades naturais e comportamentais dos gatos. Essa prática envolve a criação de um espaço seguro e estimulante para os felinos, que inclui áreas para escalada, esconderijos, brinquedos e outras atividades que ajudam a manter os gatos saudáveis e felizes. Aqui estão algumas dicas sobre como fazer a gatificação em casa",
        items:[ 
        "Avalie o espaço disponível: Antes de começar a gatificação, avalie o espaço em sua casa. Identifique as áreas onde seu gato costuma passar mais tempo e onde ele pode se beneficiar de atividades como escalada e exploração.",
        "Crie áreas de escalada: Gatos adoram escalar. Instale prateleiras, postes de arranhar, árvores de gato e outros objetos que permitam que eles subam e se exercitem verticalmente. Certifique-se de que essas estruturas sejam seguras e estáveis.",
        "Forneça esconderijos: Gatos também gostam de se esconder e se aconchegar em lugares aconchegantes. Coloque caixas, cestas, tocas e almofadas em locais estratégicos para que seu gato tenha lugares onde se sentir seguro.",
        "Use brinquedos interativos: Brinquedos que estimulam a mente do gato, como bolinhas, varinhas com penas e jogos de tabuleiro para gatos, são ótimos para mantê-los mentalmente ativos. Certifique-se de trocar os brinquedos regularmente para evitar que seu gato se entedie.",
        "Crie áreas de observação: Gatos adoram observar o mundo ao seu redor. Posicione prateleiras perto de janelas para que seu gato possa ver a atividade lá fora. Isso também permite que eles tomem sol, o que é benéfico para sua saúde.",
        "Plante grama de gato: Mstringuitos gatos gostam de mastigar grama, que pode ajudar na digestão. Considere a possibilidade de cultivar grama de gato em vasos dentro de casa para que seu felino tenha acesso a ela."]
    }, 
    ])
    return (

        <section className="bg-[#F2C1AE] bg-opacity-70 p-10">

{/* Aonde eu mapeio meu group post e atualizo/crio mais um com base nos meus input de "addPost" */}
            {groupPost.map((post) => (
                <Stylization 
                    id={post.id}
                    title={post.title}
                    text={post.text}
                    items={post.items}
                />
            ))}
            
{/* Aqui é aonde chamo meu add post e a prop. Para assim o codigo de addPost aparecer no client */}
            <AddPost
                add={addPost}
            />

        </section>

    )
}