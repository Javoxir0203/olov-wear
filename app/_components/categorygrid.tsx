'use client'

import { useState } from 'react'
import Link from 'next/link'

const categories = [
	{
		name: 'FASHION',
		count: 28,
	},
	{
		name: 'CLOTHES',
		count: 46,
	},
	{
		name: 'HOODIES',
		count: 6,
	},
	{
		name: 'JACKET',
		count: 6,
	},
	{
		name: 'SPORT',
		count: 25,
	},
	{
		name: 'BAGS',
		count: 15,
	},
	{
		name: 'FOOTWEAR',
		count: 20,
	},
	{
		name: 'T-SHIRT',
		count: 1,
	},
	{
		name: 'CAP',
		count: 3,
	},
]

export default function CategoryGrid() {
	const [, setHoveredCategory] = useState<string | null>(null)

	return (
		<div className='container mx-auto px-4 py-8 mb-10'>
			<h1 className='text-center text-3xl font-bold mb-20'>BUY BEST FASHION</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{categories.map(category => (
					<div key={category.name} className='relative group' onMouseEnter={() => setHoveredCategory(category.name)} onMouseLeave={() => setHoveredCategory(null)}>
						{/* Category text */}
						<Link href={`/${category.name.toLowerCase()}`} className='block relative z-10'>
							<h2 className='text-4xl font-bold text-center transition-transform duration-300 group-hover:scale-110 py-2'>
								{category.name}
								<span className='text-sm ml-2'>({category.count})</span>
							</h2>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}
