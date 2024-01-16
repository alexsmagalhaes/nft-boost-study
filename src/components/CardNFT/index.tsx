import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"

//assets
import ImageNFT01 from "@/../public/assets/img-nft/01.jpg"
import IconHeart from "@/../public/assets/icon-heart.svg"
import IconVerify from "@/../public/assets/verify.svg"
import IconETH from "@/../public/assets/icon-eth.svg"
import IconClock from "@/../public/assets/icon-clock.svg"


interface CardNFTProps {
	thumbnail?: StaticImageData,
	name?: string,
	value_btc?: string,
	value_brl?: string
}

export function CardNFT(
	{
		thumbnail = ImageNFT01,
		name = "NFT Default",
		value_btc = '0.00',
		value_brl = '0.00'
	}: CardNFTProps): ReactNode {

	return (
		<div className="@desktop:max-w-card-nft w-full overflow-hidden rounded-2xl border border-nft-card bg-like-numbers">
			<div className="w-full h-card-image-height-nft overflow-hidden relative">
				<Image
					src={thumbnail}
					alt="NFT"
					className="w-full h-full object-cover"
				/>
				<div className="absolute top-2 right-2 z-10 flex items-center gap-2 py-3 px-6 bg-like-numbers rounded-full border border-nft-card">
					<Image
						src={IconHeart}
						alt="NFT"
					/>
					<small>0</small>
				</div>
			</div>

			<div className="w-full p-4">
				<h4 className="flex items-center gap-1 text-xs mb-1">
					Cartoon Collection
					<Image
						src={IconVerify}
						alt="Verified Image"
					/>
				</h4>

				<h3 className="text-lg/none font-semibold mb-4">{name}</h3>

				<div className="flex justify-between items-end mb-4">
					<div className="space-y-1">
						<span className="text-xs text-white text-opacity-70">Preço Atual</span>
						<h3 className="flex items-center gap-1 text-lg font-semibold">
							<Image
								src={IconETH}
								alt="Icon Etherium"
							/>
							{value_btc}
						</h3>
					</div>
					<h5 className="text-xs font-medium relative bottom-1">R$ <span>{value_brl}</span></h5>
				</div>

				<button className="w-full py-4 bg-blue-primary rounded-full text-sm font-semibold hover:bg-blue-700 transition-all ease-linear mb-4"> Buy now</button>
				<div className="flex items-center gap-1">
					<Image
						src={IconClock}
						alt="Icon Clock"
					/>
					<p className="text-xs">Fim em <span>4h 8m 22s</span></p>
				</div>
			</div>
		</div>
	)
}