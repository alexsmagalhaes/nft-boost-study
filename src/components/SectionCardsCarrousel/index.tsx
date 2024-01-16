import { ReactNode } from "react";
import ContainerGrid from "../ContainerGrid";
import TitleSection from "../TitleSection";
import CarrouselCards from "./CarrouselCards";

interface SectionCardsCarrouselProps {
   subtitle?: string,
   title?: string,
   data?: any,
}

function SectionCardsCarrousel({ subtitle, title, data}: SectionCardsCarrouselProps): ReactNode {
   return (
      <section className="py-20 @desktop:py-28">
         <ContainerGrid className="!px-0 @laptop:!px-page-padding-lp">
            <div className="px-page-padding-mb @laptop:px-0">
               <TitleSection
                  subtitle={subtitle}
                  title={title}
               />
            </div>
            <CarrouselCards data={data}/>
         </ContainerGrid>
      </section>
   )
}

export default SectionCardsCarrousel;