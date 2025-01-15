import Image from 'next/image'
import React from 'react'
import short from '@/public/clothes/trendingnow/main-home-product-23.jpg'
import short1 from '@/public/clothes/trendingnow/main-home-product-24.jpg'
import short2 from '@/public/clothes/trendingnow/shop-list-sidebar-23.jpg'
import short3 from '@/public/clothes/trendingnow/shop-list-sidebar-29.jpg'
import short4 from '@/public/clothes/trendingnow/shop-list-sidebar-48.jpg'
import short5 from '@/public/clothes/trendingnow/shop-list-sidebar-54.jpg'
import { Heart } from 'lucide-react'

const TrendingNow = () => {
	const products = [
		{
			id: 1,
			name: 'Short Trousers',
			brand: 'KICKZ',
			category: 'Clothes',
			price: '$45',
			image: short,
		},
		{
			id: 2,
			name: 'Training Bag',
			brand: 'REEBOK',
			category: 'Bags | Sport',
			price: '$75',
			image: short1,
		},
		{
			id: 3,
			name: 'Run Fast Shoes',
			brand: 'SALOMON',
			category: 'Bags | Sport',
			price: '$250',
			image: short2,
		},
		{
			id: 4,
			name: 'Jordan Shoes',
			brand: '',
			category: 'Bags | Sport',
			price: '$165',
			image: short3,
		},
		{
			id: 5,
			name: 'Money Bag',
			brand: 'SALOMON',
			category: 'Bags | Sport',
			price: '$50',
			image: short4,
		},
		{
			id: 6,
			name: 'City Sunglasses',
			brand: 'KICKZ',
			category: 'Glasses',
			price: '$45',
			image: short5,
		},
	]

	return (
		<div className='py-16 px-16'>
			<h1 className='text-4xl font-bold text-center mb-6'>TRENDING NOW</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{products.map(product => (
					<div key={product.id} className='relative p-4 border rounded-md'>
						<div className='relative w-full aspect-video mb-3'>
							<Image src={product.image} alt={product.name} className='w-full h-full object-cover rounded-md' layout='fill' />
						</div>
						<div>
							<h3 className='text-sm uppercase text-gray-600'>{product.brand}</h3>
							<h2 className='text-lg font-bold'>{product.name}</h2>
							<p className='text-sm text-gray-500'>{product.category}</p>
							<p className='text-lg font-semibold mt-2'>{product.price}</p>
						</div>
						<div className='absolute top-4 right-4 flex space-x-2'>
							<button className='p-2 bg-gray-100 rounded hover:bg-gray-200'>
								<Heart size={18} />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default TrendingNow
