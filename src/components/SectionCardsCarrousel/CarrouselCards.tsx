"use client"

import Image, { StaticImageData } from "next/image"
import { ReactNode, useEffect, useRef, useState } from "react";
import { CardNFT } from "../CardNFT";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import 'swiper/css'

//assets
import ArrowSlide from "@/../public/assets/arrow.svg"

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

interface CarrouselCardsProps {
   data: any | null,
}

function CarrouselCards({ data }: CarrouselCardsProps): ReactNode {
   gsap.registerPlugin(ScrollTrigger)

   //Update element swiper to set the new navigation controls
   const [_, setInit] = useState(false);

   const prevRef = useRef(null);
   const nextRef = useRef(null);

   const areaSlideRef = useRef(null)

   useEffect(() => {
      const areaSlide = areaSlideRef.current

      gsap.fromTo(areaSlide,
         { opacity: 0, y: 50 },
         { opacity: 1, y: 0, duration: 2, ease: 'power3.out' , 
         scrollTrigger:{
            trigger: areaSlide,
            start: 'top-=300 center'
         }}
      )
   }, [])

   return (
      <div ref={areaSlideRef} className="w-full relative">
         <button
            ref={prevRef}
            className="border border-white border-opacity-10 hover:bg-btn-slide-color transition ease-linear w-12 h-12 bg-blue-primary rounded-full hidden @laptop:flex items-center justify-center z-10 absolute top-1/2 -mt-6 -left-6">
            <Image
               src={ArrowSlide}
               alt="arrow slide"
            />
         </button>
         {
            data && <Swiper
               className="!px-page-padding-mb @laptop:!px-0"
               slidesPerView={4}
               spaceBetween={"33"}
               speed={800}
               loop={true}
               modules={[Navigation]}
               navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current
               }}

               breakpoints={
                  {
                     320: {
                        slidesPerView: 1.2,
                        spaceBetween: 24,
                     },
                     640: {
                        slidesPerView: 2.5,
                     },
                     1024: {
                        slidesPerView: 3.3,
                     },
                     1250: {
                        slidesPerView: 4,
                        spaceBetween: 32,
                     },
                  }
               }

               onBeforeInit={() => { setInit(true) }}
            >
               {
                  data.map(({ name, thumbnail, valueBtc, valueBrl, favorite }: DataFormat, index: number) => {
                     return (
                        <SwiperSlide key={`Swiper-${index}`}>
                           <CardNFT
                              name={name}
                              thumbnail={thumbnail}
                              value_btc={valueBtc}
                              value_brl={valueBrl}
                              favorite={favorite}
                           />
                        </SwiperSlide>
                     )
                  })
               }
            </Swiper>
         }
         <button
            ref={nextRef}
            className="border border-white border-opacity-10 hover:bg-btn-slide-color transition ease-linear w-12 h-12 rotate-180 bg-blue-primary rounded-full hidden @laptop:flex items-center justify-center z-10 absolute top-1/2 -mt-6 -right-6">
            <Image
               src={ArrowSlide}
               alt="arrow slide"
            />
         </button>
      </div>
   )
}

export default CarrouselCards;