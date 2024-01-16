"use client"

import Image, { StaticImageData } from "next/image"
import { ReactNode, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'

import 'swiper/css'

//assets
import ArrowSlide from "@/../public/assets/arrow.svg"
import { CardNFT } from "../CardNFT";

interface DataFormat {
   name: string,
   thumbnail: StaticImageData,
   value_btc: string,
   value_brl: string
}

interface CarrouselCardsProps {
   data: [],
}

function CarrouselCards({ data }: CarrouselCardsProps): ReactNode {

   //Update element swiper to set the new navigation controls
   const [_, setInit] = useState(false);

   const prevRef = useRef(null);
   const nextRef = useRef(null);

   return (
      <div className="w-full relative">
         <button
            ref={prevRef}
            className="border border-white border-opacity-10 hover:bg-btn-slide-color transition ease-linear w-12 h-12 bg-blue-primary rounded-full hidden @laptop:flex items-center justify-center z-10 absolute top-1/2 -mt-6 -left-6">
            <Image
               src={ArrowSlide}
               alt="arrow slide"
            />
         </button>
         <Swiper
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
               data.map(({ name, thumbnail, value_btc, value_brl }: DataFormat, index: number) => {
                  return (
                     <SwiperSlide key={`Swiper-${index}`}>
                        <CardNFT
                           name={name}
                           thumbnail={thumbnail}
                           value_btc={value_btc}
                           value_brl={value_brl}
                        />
                     </SwiperSlide>
                  )
               })
            }
         </Swiper>
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