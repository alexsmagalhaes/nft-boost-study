import ContainerGrid from "../ContainerGrid";
import Image from 'next/image'
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

//assets
import GooglePlay from '@/../public/assets/google.svg'
import AppStore from '@/../public/assets/apple.svg'

function SectionBanner() {
   gsap.registerPlugin(ScrollTrigger)

   const areaBannerRef = useRef(null)

   useEffect(() => {
      const areaBanner = areaBannerRef.current

      gsap.fromTo(areaBanner,
         { opacity: 0, scale: 0.7 },
         {
            opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out',
            scrollTrigger: {
               trigger: areaBanner,
               start: 'top-=100% center'
            }
         }
      )
   }, [])

   return (
      <section>
         <ContainerGrid>
            <div ref={areaBannerRef} className="w-full @laptop:pt-20 px-3 @laptop:pb-24 py-10 bg-banner-bg bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-center rounded-xl">
               <h2 className="text-4xl @laptop:text-6xl/tight font-poppins mb-4 max-w-4xl">Abra as Portas para a Próxima Revolução Digital!</h2>
               <p className="@laptop:text-xl text-base mb-6 max-w-xl text-white opacity-85">Descubra, Adquira e Possua os NFTs Mais Valiosos do Universo Digital. Sua Oportunidade, Sua História</p>
               <div className="flex flex-col @laptop:flex-row items-center @laptop:gap-6 gap-4">
                  <Image
                     src={GooglePlay}
                     alt="Google play"
                  />
                  <Image
                     src={AppStore}
                     alt="Apple store"
                  />
               </div>
            </div>
         </ContainerGrid>
      </section>
   )
}

export default SectionBanner;