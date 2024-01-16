import ContainerGrid from "./ContainerGrid";
import Image from "next/image"
import Link from "next/link";

//assets
import Logo from '@/../public/assets/logo.svg'
import IconHamburger from '@/../public/assets/icon-hamburger.svg'
import Button from "./Button";

const itemsNav: string[] = [
   'Download',
   'NFTs',
   'Rank',
   'FAQ'
]

export default function Header() {

   return (
      <nav className="w-full absolute top-0 left-0 right-0 py-6 @laptop:py-5">
         <ContainerGrid className="flex items-center justify-between">
            <Link 
            href="/"
            className="hover:opacity-90 transition-opacity ease-linear">
               <Image
                  src={Logo}
                  alt="Logo NFT Boost"
                  className="max-w-logo-size-mb @laptop:max-w-logo-size-lp"
               />
            </Link>
            <div className="hidden @laptop:flex flex-1 max-w-nav-navbar items-center justify-between">
               <div className="flex gap-12 ">
                  {
                     itemsNav.map((item, index) => {
                        return (<Link
                           href="#"
                           key={index}
                           className="font-medium hover:text-blue-primary transition-colors ease-linear"
                        >{item}</Link>)
                     })
                  }
               </div>
               <Button />
            </div>
            <button className="w-10 h-10 flex items-center justify-center border border-white border-opacity-5 rounded bg-white bg-opacity-5 @laptop:hidden">
               <Image
                  src={IconHamburger}
                  alt="Button menu"
               />
            </button>

         </ContainerGrid>
      </nav>
   )
}