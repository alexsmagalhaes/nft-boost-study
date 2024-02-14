"use client"

import { ReactNode, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

//assets
import IconBoost from "@/../public/assets/icon-boost.svg"
import SmallNFT01 from "@/../public/assets/nft-small.png"
import SmallNFT02 from "@/../public/assets/double-nft.png"
import GooglePlay from "@/../public/assets/google.svg"
import AppleStore from "@/../public/assets/apple.svg"

export function AreaText(): ReactNode {
   const areaTextRef = useRef(null)
   const googleRef = useRef(null)
   const appleRef = useRef(null)
   const circleRef = useRef(null)

   useEffect(() => {
      const areaText = areaTextRef.current
      const google = googleRef.current
      const apple = appleRef.current
      const circle = circleRef.current

      const tl = gsap.timeline();

      tl.fromTo(areaText,
         { opacity: 0, y: 20 },
         { opacity: 1, y: 0, duration: 1 },
         "start"
      ).fromTo(google,
         { opacity: 0, x: -30 },
         { opacity: 1, x: 0, duration: 1 },
         ">-0.5"
      ).fromTo(apple,
         { opacity: 0, x: 30 },
         { opacity: 1, x: 0, duration: 1 },
         "<"
      ).fromTo(circle,
         { opacity: 0, xPercent: 90 },
         { opacity: 1, xPercent: 0, duration: 1 },
         "start+=0.7"
      )
   }, [])

   return (
      <>
         <div ref={areaTextRef} className="opacity-0">
            <div className=" flex items-center flex-col">
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
                  <div className="inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full w-24 @desktop:w-32 ">
                     <Image
                        ref={circleRef}
                        src={SmallNFT01}
                        alt="Fotos NFT"
                        quality={85}
                        className="w-11 @desktop:w-auto opacity-0"
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
            </div>
         </div>
         <div className="flex flex-col items-center gap-4 @tablet:flex-row">
            <Image
               ref={googleRef}
               src={GooglePlay}
               alt="Google Play"
               className="opacity-0"
            />
            <Image
               ref={appleRef}
               src={AppleStore}
               alt="App Store"
               className="opacity-0"
            />
         </div>
      </>
   )
}