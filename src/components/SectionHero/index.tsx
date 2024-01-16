import Image from "next/image";
import ContainerGrid from "../ContainerGrid";
import CardHero from "./CardsHero";

//assets
import IconBoost from "@/../public/assets/icon-boost.svg"
import SmallNFT01 from "@/../public/assets/nft-small.png"
import SmallNFT02 from "@/../public/assets/double-nft.png"
import GooglePlay from "@/../public/assets/google.svg"
import AppleStore from "@/../public/assets/apple.svg"


export default function SectionHero() {
   return (
      <header className="pt-36 @desktop:pt-48 bg-hero-pattern bg-no-repeat bg-cover bg-center overflow-hidden">
         <ContainerGrid className="flex flex-col items-center">
            <h3 className="flex items-center gap-2 text-sm mb-3 @tablet:text-base @laptop:text-xl">
               <Image
                  src={IconBoost}
                  alt="Icon Boost"
               />
               <span>
                  Adentre um reino de possibilidades infinitas
               </span>
            </h3>
            <h1 className="text-5xl/tight text-center font-poppins mb-4 @desktop:text-7xl/tight">
               Explore um Universo
               <div className="inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full w-24 @desktop:w-32">
                  <Image
                     src={SmallNFT01}
                     alt="Fotos NFT"
                     quality={85}
                     className="w-11 @desktop:w-auto"
                  />
               </div>
               Digital de
               <Image
                  src={SmallNFT02}
                  alt="Fotos NFT"
                  quality={85}
                  className="inline-block w-16 mx-2 @desktop:w-auto"
               />
               Colecionáveis Únicos!
            </h1>
            <p className="w-full text-center mb-6 @tablet:text-base @desktop:text-xl/normal @desktop:max-w-home-hero-description text-white text-opacity-80 @desktop:mb-9">
               Adentre um reino de possibilidades infinitas e mergulhe nas coleções de NFT, onde a arte, a cultura e a inovação se unem para criar experiências verdadeiramente exclusivas.
            </p>
            <div className="flex flex-col items-center gap-4 @tablet:flex-row">
               <Image
                  src={GooglePlay}
                  alt="Google Play"
               />
               <Image
                  src={AppleStore}
                  alt="App Store"
               />
            </div>

            <CardHero />

            <div className="w-full border-t border-white border-opacity-10 mt-10 @desktop:mt-36"></div>
         </ContainerGrid>
      </header>
   )
}