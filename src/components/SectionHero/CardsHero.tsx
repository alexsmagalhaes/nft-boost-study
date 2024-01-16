import Image from 'next/image'

//assets
import CardsRight from '@/../public/assets/cards-right.png'
import CardsLeft from '@/../public/assets/cards-left.png'

export default function CardHero() {

   return (
      <div className='relative w-home-hero-cards-mb h-home-hero-cards-mb mt-12 @desktop:mt-20 @desktop:w-full @desktop:h-home-hero-cards-dt'>
         <Image
            src={CardsLeft}
            alt='Cards NFT'
            quality={90}
            className='w-1/2 top-0 left-6 absolute @laptop:-left-8 z-10 @desktop:w-auto'
         />
         <Image
            src={CardsRight}
            alt='Cards NFT'
            quality={90}
            className='w-1/2 top-0 right-6 absolute @laptop:-right-8 @desktop:w-auto'
         />
      </div>
   )
}