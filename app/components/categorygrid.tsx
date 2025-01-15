'use client'

import { useState } from 'react'
import Image from 'next/image'
import fashion from '@/public/clothes/categorygrid/fashion.jpg'
import fashion1 from '@/public/clothes/categorygrid/clothes.jpg'
import fashion2 from '@/public/clothes/categorygrid/hoodeis.jpg'
import fashion3 from '@/public/clothes/categorygrid/jacket.png'
import fashion4 from '@/public/clothes/categorygrid/sport.png'
import fashion5 from '@/public/clothes/categorygrid/bags.png'
import fashion6 from '@/public/clothes/categorygrid/footwear.jpg'
import fashion7 from '@/public/clothes/categorygrid/T-shirt.jpg'
import fashion8 from '@/public/clothes/categorygrid/cap.jpg'
import Link from 'next/link'

const categories = [
	{
		name: 'FASHION',
		count: 28,
		images: [fashion],
	},
	{
		name: 'CLOTHES',
		count: 46,
		images: [fashion1],
	},
	{
		name: 'HOODIES',
		count: 6,
		images: [fashion2],
	},
	{
		name: 'JACKET',
		count: 6,
		images: [fashion3],
	},
	{
		name: 'SPORT',
		count: 25,
		images: [fashion4],
	},
	{
		name: 'BAGS',
		count: 15,
		images: [fashion5],
	},
	{
		name: 'FOOTWEAR',
		count: 20,
		images: [fashion6],
	},
	{
		name: 'T-SHIRT',
		count: 1,
		images: [fashion7],
	},
	{
		name: 'CAP',
		count: 3,
		images: [fashion8],
	},
]

export default function CategoryGrid() {
	const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-center text-xl mb-20'>BUY BEST FASHION</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{categories.map(category => (
					<div key={category.name} className='relative group' onMouseEnter={() => setHoveredCategory(category.name)} onMouseLeave={() => setHoveredCategory(null)}>
						<div className='relative'>
							{/* Hover Images */}
							{hoveredCategory === category.name && (
								<div className='absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg  p-20 grid grid-cols-2 gap-10'>
									{category.images.map((image, index) => (
										<div key={index} className='relative w-36 h-36'>
											<Image src={image } alt={`${category.name} preview ${index + 1}`} width={400} height={400} className='object-cover text-center rounded-lg' />
										</div>
									))}
								</div>
							)}

							{/* Category text */}
							<Link href={`/${category.name.toLowerCase()}`} className='block relative z-10'>
								<h2 className='text-4xl font-bold text-center transition-transform duration-300 group-hover:scale-110 py-2'>
									{category.name}
									<span className='text-sm ml-2'>({category.count})</span>
								</h2>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
