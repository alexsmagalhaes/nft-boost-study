"use client"

import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//assets
import CardsRight from '@/../public/assets/cards-right.png'
import CardsLeft from '@/../public/assets/cards-left.png'
import { useEffect, useRef } from 'react'

export default function CardHero() {
   gsap.registerPlugin(ScrollTrigger)

   const areaCardsRef = useRef(null)
   const cardsLeftRef = useRef(null)
   const cardsRightRef = useRef(null)

   useEffect(() => {

      const areaCards = areaCardsRef.current
      const cardsLeft = cardsLeftRef.current
      const cardsRight = cardsRightRef.current

      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: areaCards,
            start: '-=50% center',
            scrub: true,
         }
      })

      tl.to(cardsLeft,
         { left: 0 },
         0
      ).to(cardsRight,
         { right: 0 },
         0
      )
   }, [])

   return (
      <div ref={areaCardsRef} className='relative w-home-hero-cards-mb h-home-hero-cards-mb mt-12 @desktop:mt-20 @desktop:w-full @desktop:h-home-hero-cards-dt'>
         <Image
            ref={cardsLeftRef}
            src={CardsLeft}
            alt='Cards NFT'
            quality={90}
            className='w-1/2 top-0 left-6 absolute @laptop:left-[25%] z-10 @desktop:w-auto'
         />
         <Image
            ref={cardsRightRef}
            src={CardsRight}
            alt='Cards NFT'
            quality={90}
            className='w-1/2 top-0 right-6 absolute @laptop:right-[25%] @desktop:w-auto'
         />
      </div>
   )
}