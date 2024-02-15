"use client"

import { ReactNode } from "react"
import SectionCardsCarrousel from "@/components/SectionCardsCarrousel"
import SectionHero from "@/components/SectionHero"
import SectionCollectors from "@/components/SectionCollectors"
import SectionBanner from "@/components/SectionBanner"
import SectionQuestions from "@/components/SectionQuestions"

//hooks
import useFetch from "@/hooks/useFetch"

export default function Home(): ReactNode {

  const { data } = useFetch('http://localhost:3000/nft');

  // Verifica se data está definido antes de acessar seu primeiro elemento
  // if (data && data.length > 0) {
  //   console.log(data[0]);
  // } else {
  //   console.log('Não há dados disponíveis');
  // }

  return (
    <>
      <SectionHero />
      {data &&
        <div>
          <SectionCardsCarrousel
            subtitle="Destaque em Coleções"
            title="Coleções notáveis"
            data={data}
          />
          <hr className="border-t max-w-grid mx-auto border-white border-opacity-10" />
          <SectionCollectors />
          <hr className="border-t max-w-grid mx-auto border-white border-opacity-10" />
          <SectionCardsCarrousel
            subtitle="Seleção Mensal"
            title="Destaque do Mês"
            data={data}
          />
          <hr className="border-t max-w-grid mx-auto border-white border-opacity-10" />
          <SectionCardsCarrousel
            subtitle="Em Tendência"
            title="Tendências"
            data={data}
          />
          <SectionBanner />
        </div>
      }
      <SectionQuestions />
    </>
  )
}
