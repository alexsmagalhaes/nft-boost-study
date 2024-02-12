import ContainerGrid from "./ContainerGrid";
import Image from "next/image"

//assets
import Logo from '@/../public/assets/logo.svg'
import Button from "./Button";
import Link from "next/link";

const footerNav = [
   {
      titleMenu: 'NFT Boost®',
      items: ['Download', 'NFTs', 'Rank', 'FAQ']
   }, {
      titleMenu: 'Links importantes',
      items: ['About us', 'Questions', 'Press', 'Contact us', 'Legal']
   }
]

export default function Footer() {

   return (
      <footer className="py-20 @laptop:pt-32 @laptop:pb-14 bg-footer-pattern bg-cover bg-center">
         <ContainerGrid className="flex flex-col @laptop:flex-row justify-between gap-10">
            <div className="text-left max-w-full @laptop:max-w-footer-about">
               <Image
                  src={Logo}
                  alt="Logo NFT Boost"
                  width={174}
                  height={79}
                  className="w-auto"
               />
               <p className="mt-4 mb-6 text-lg text-white text-opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
               <Button className="w-full @tablet:w-auto"/>
            </div>
            <div className="gap-10 @laptop:gap-20 flex flex-col @laptop:flex-row">
               {
                  footerNav.map(({ titleMenu, items }, index) => {
                     return (
                        <div key={`Menu-${index}`}>
                           <strong className="block text-xl mb-4">{titleMenu}</strong>
                           <ul className="space-y-4">
                              {
                                 items.map((item, index) => {
                                    return (
                                       <li 
                                       className="text-lg text-white text-opacity-70 hover:text-blue-primary transition-colors ease-linear"
                                       key={`Menu-item-${index}`}>
                                          <Link href="#">
                                             {item}
                                          </Link>
                                       </li>
                                    )
                                 })
                              }
                           </ul>
                        </div>
                     )
                  })
               }
            </div>
         </ContainerGrid>
      </footer>
   )
}