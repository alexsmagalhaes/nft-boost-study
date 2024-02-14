import ContainerGrid from "../ContainerGrid";
import { AreaText } from "./AreaTExt";
import CardHero from "./CardsHero";

export default function SectionHero() {
   return (
      <header className="pt-36 @desktop:pt-48 bg-hero-pattern bg-no-repeat bg-cover bg-center overflow-hidden">
         <ContainerGrid className="flex flex-col items-center">
            <AreaText />
            <CardHero />
            <div className="w-full border-t border-white border-opacity-10 mt-10 @desktop:mt-36"></div>
         </ContainerGrid>
      </header>
   )
}