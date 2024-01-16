import { ReactNode } from "react"

interface TitleSectionProps {
	title?: string,
	subtitle?: string
}

export default function TitleSection(
	{
		title = 'Default subtitle',
		subtitle = 'Default title'
	}: TitleSectionProps): ReactNode {

	return (
		<div className="space-y-1 mb-8 @desktop:mb-12 font-semibold">
			<span className="text-sm @desktop:text-xl text-white opacity-70 ">{subtitle}</span>
			<h2 className="font-poppins text-3xl @desktop:text-5xl/tight">{title}</h2>
		</div>
	)
}