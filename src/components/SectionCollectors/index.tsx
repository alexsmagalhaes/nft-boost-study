
import { ReactNode, useEffect, useRef } from "react";
import ContainerGrid from "../ContainerGrid";
import TitleSection from "../TitleSection";
import CardCollectors from "../CardCollectors";
import { StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface DataFormat {
   collection: string,
   name: string,
   thumbnail: StaticImageData,
   valueBtc: string,
   valueBrl: string,
   variationDay: number,
   verified: string,
   promotion: string,
   favorite: number,
   dataAdd: string
}

function SectionCollectors({data}: any | null): ReactNode {
   gsap.registerPlugin(ScrollTrigger)

   const areaCollectorsRef = useRef(null)

   useEffect(() => {
      const areaCollectors = areaCollectorsRef.current

      gsap.fromTo(areaCollectors,
         { opacity: 0, y: 50 },
         {
            opacity: 1, y: 0, duration: 2, ease: 'power3.out',
            scrollTrigger: {
               trigger: areaCollectors,
               start: 'top-=300 center'
            }
         }
      )
   }, [])

   return (
      <section className="py-20 @desktop:py-28">
         <ContainerGrid>
            <TitleSection
               subtitle="Colecionadores em Foco"
               title="Principais colecionadores"
            />
            <div ref={areaCollectorsRef} className="grid grid-cols-1 @tablet:grid-cols-2 @desktop:gap-x-8 gap-x-4 gap-y-4">
               {
                  data.slice(0, 8).map(({ name, thumbnail, valueBtc, variationDay }: DataFormat, index: number) => {
                     return (
                        <CardCollectors
                           key={`Collectors-${index}`}
                           index={index + 1}

                           name={name}
                           variationDay={variationDay}
                           valueBtc={valueBtc}
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