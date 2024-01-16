import SectionCardsCarrousel from "@/components/SectionCardsCarrousel"
import SectionHero from "@/components/SectionHero"
import SectionCollectors from "@/components/SectionCollectors"
import SectionBanner from "@/components/SectionBanner"
import SectionQuestions from "@/components/SectionQuestions"

//assets
import ImageNFT01 from "@/../public/assets/img-nft/01.jpg"
import ImageNFT02 from "@/../public/assets/img-nft/02.jpg"
import ImageNFT03 from "@/../public/assets/img-nft/03.jpg"
import ImageNFT04 from "@/../public/assets/img-nft/04.jpg"

export default function Home() {

  const listNFT = [{
    name: "Cat #221",
    thumbnail: ImageNFT01,
    value_btc: "0.0721",
    value_brl: "602,02",
  },
  {
    name: "Snike #2331",
    thumbnail: ImageNFT02,
    value_btc: "0.0721",
    value_brl: "602,02",
  },
  {
    name: "Skull Hatter #2311",
    thumbnail: ImageNFT03,
    value_btc: "0.0721",
    value_brl: "602,02",
  },
  {
    name: "Nox #2611",
    thumbnail: ImageNFT04,
    value_btc: "0.0721",
    value_brl: "602,02",
  },
  {
    name: "Nox #2611",
    thumbnail: ImageNFT04,
    value_btc: "0.0721",
    value_brl: "602,02",
  },
  ]

  return (
    <>
      <SectionHero />
      <SectionCardsCarrousel
        subtitle="Destaque em Coleções"
        title="Coleções notáveis"
        data={listNFT}
      />
      <hr className="border-t max-w-grid mx-auto border-white border-opacity-10" />
      <SectionCollectors />
      <hr className="border-t max-w-grid mx-auto border-white border-opacity-10" />
      <SectionCardsCarrousel
        subtitle="Seleção Mensal"
        title="Destaque do Mês"
        data={listNFT}
      />
      <hr className="border-t max-w-grid mx-auto border-white border-opacity-10" />
      <SectionCardsCarrousel
        subtitle="Em Tendência"
        title="Tendências"
        data={listNFT}
      />
      <SectionBanner />
      <SectionQuestions />
    </>
  )
}
