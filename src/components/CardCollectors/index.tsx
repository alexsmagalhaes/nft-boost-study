import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image'

//assets
import IconVerify from '@/../public/assets/verify.svg'
import ImageNFT from '@/../public/assets/img-nft/01.jpg'
import IconETH from '@/../public/assets/icon-eth.svg'

interface CardCollectorsProps {
	index?: number | string,
	thumbnail?: StaticImageData,
	name?: string,
	value_btc?: string,
	percent?: string
}

function CardCollectors(
	{
		index = '#Not',
		thumbnail = ImageNFT,
		name = "Default NFT",
		value_btc = '0.000',
		percent = "0"
	}: CardCollectorsProps
): ReactNode {

	return (
		<div className='bg-white bg-opacity-[0.01] py-4 px-6 flex items-center justify-between rounded-full border border-white border-opacity-5 w-full max-w-card-collectors'>
			<div className='flex items-center gap-4 @desktop:gap-6'>
				<strong className='font-semibold text-base'>{index}</strong>
				<div className='flex gap-4 items-start @desktop:items-center'>
					<div className='relative w-10 h-10'>
						<div className='w-full h-full rounded-full overflow-hidden flex items-center justify-center border-2 border-white border-opacity-5'>
							<Image
								src={thumbnail}
								alt="NFT image"
								className='w-full h-full object-cover'
							/>
						</div>
						<Image
							src={IconVerify}
							alt="Icon verify"
							className='absolute -bottom-1 -right-1'
						/>
					</div>
				</div>

				<div>
					<div className='space-y-1'>
						<h4 className='text-white font-semibold text-base'>{name}</h4>
						<p className='flex flex-col items-start @desktop:items-center @desktop:flex-row gap-1 text-sm text-white text-opacity-70'>
							Preço mínimo
							<span className=' font-semibold flex items-center gap-1 text-sm text-white'>
								<Image
									src={IconETH}
									alt="Icon Etherium"
								/>
								{value_btc} BTC
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className='space-y-1 text-right'>
				<strong className='text-green-primary font-bold'>{percent}%</strong>
				<span className=' font-semibold flex items-center gap-1 text-sm text-white'>
					<Image
						src={IconETH}
						alt="Icon Etherium"
					/>
					{value_btc} BTC
				</span>
			</div>
		</div>
	)
}

export default CardCollectors;
