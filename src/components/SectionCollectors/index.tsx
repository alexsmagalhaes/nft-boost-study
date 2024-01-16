import { ReactNode } from "react";
import ContainerGrid from "../ContainerGrid";
import TitleSection from "../TitleSection";
import CardCollectors from "../CardCollectors";
import { StaticImageData } from "next/image";

//assets
import ImageNFT01 from '@/../public/assets/img-nft/01.jpg'
import ImageNFT02 from '@/../public/assets/img-nft/02.jpg'
import ImageNFT03 from '@/../public/assets/img-nft/03.jpg'
import ImageNFT04 from '@/../public/assets/img-nft/04.jpg'
import ImageNFT05 from '@/../public/assets/img-nft/05.jpg'
import ImageNFT06 from '@/../public/assets/img-nft/06.jpg'
import ImageNFT07 from '@/../public/assets/img-nft/07.jpg'
import ImageNFT08 from '@/../public/assets/img-nft/08.jpg'


interface DataFormat {
   name: string,
   percent: string,
   value_btc: string,
   thumbnail: StaticImageData
}

const collectors: DataFormat[] = [
   {
      name: "Lorem Ipsum",
      percent: "+20",
      value_btc: "0.721",
      thumbnail: ImageNFT01,
   },
   {
      name: "Lorem Ipsum",
      percent: "+20",
      value_btc: "0.721",
      thumbnail: ImageNFT02,
   },
   {
      name: "Lorem Ipsum",
      percent: "+20",
      value_btc: "0.721",
      thumbnail: ImageNFT03,
   },
   {
      name: "Lorem Ipsum",
      percent: "+20",
      value_btc: "0.721",
      thumbnail: ImageNFT04,
   },
   {
      name: "Lorem Ipsum",
      percent: "+20",
      value_btc: "0.721",
      thumbnail: ImageNFT05,
   },
   {
      name: "Lorem Ipsum",
      percent: "+20",
      value_btc: "0.721",
      thumbnail: ImageNFT06,
   },
   {
      name: "Lorem Ipsum",
      percent: "+20",
      value_btc: "0.721",
      thumbnail: ImageNFT07,
   },
   {
      name: "Lorem Ipsum",
      percent: "+20",
      value_btc: "0.721",
      thumbnail: ImageNFT08,
   }
]

function SectionCollectors(): ReactNode {
   return (
      <section className="py-20 @desktop:py-28">
         <ContainerGrid>
            <TitleSection
               subtitle="Colecionadores em Foco"
               title="Principais colecionadores"
            />
            <div className="grid grid-cols-1 @tablet:grid-cols-2 @desktop:gap-x-8 gap-x-4 gap-y-4">
               {
                  collectors.map(({name, percent, value_btc, thumbnail}: DataFormat, index: number) => {
                     return (
                        <CardCollectors
                           key={`Collectors-${index}`}
                           index={index + 1}

                           name={name}
                           percent={percent}
                           value_btc={value_btc}
                           thumbnail={thumbnail}
                        />
                     )
                  })
               }
            </div>
         </ContainerGrid>
      </section>
   )
}

export default SectionCollectors;