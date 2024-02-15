import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect, useRef } from "react"

interface TitleSectionProps {
	title?: string,
	subtitle?: string
}

export default function TitleSection({ title = 'Default subtitle', subtitle = 'Default title' }: TitleSectionProps): ReactNode {
	gsap.registerPlugin(ScrollTrigger)

	const titleRef = useRef(null)
	useEffect(() => {
		const title = titleRef.current

		gsap.fromTo(title,
			{ opacity: 0, x: 50 },
			{
				opacity: 1, x: 0, duration: 2, ease: 'power3.out',
				scrollTrigger: {
					trigger: title,
					start: "top-=300 center",
				}
			}
		)
	}, [])

	return (
		<div ref={titleRef} className="space-y-1 mb-8 @desktop:mb-12 font-semibold opacity-0">
			<span className="text-sm @desktop:text-xl text-white opacity-70 ">{subtitle}</span>
			<h2 className="font-poppins text-3xl @desktop:text-5xl/tight">{title}</h2>
		</div>
	)
}