'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { products } from '@/Data/product'
import { Product } from '@/types/product'
import { ProductDetailsModal } from './product.detalis.modal'
import ContactPages from './contact.modal'

export function ProductGrid() {
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
	const [showContactModal, setShowContactModal] = useState(false)
	const [activeFilter, setActiveFilter] = useState('SHOW ALL')
	const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set())

	const filteredProducts = products.filter(product => activeFilter === 'SHOW ALL' || product.category.toUpperCase() === activeFilter)

	const toggleLike = (productId: string) => {
		setLikedProducts(prev => {
			const newSet = new Set(prev)
			if (newSet.has(productId)) {
				newSet.delete(productId)
			} else {
				newSet.add(productId)
			}
			return newSet
		})
	}

	return (
		<div className='max-w-7xl mx-auto mt-20 mb-10 px-4 sm:px-6 lg:px-20'>
			<h1 className='text-3xl font-bold text-center mb-8'>FEATURED PRODUCTS</h1>

			{/* Filter Section */}
			<div className='flex flex-wrap gap-2 mb-8'>
				{['SHOW ALL', 'FITNESS', 'CYCLING', 'WINTER'].map(filter => (
					<Button key={filter} variant={activeFilter === filter ? 'default' : 'ghost'} onClick={() => setActiveFilter(filter)} className='text-sm md:text-base px-4 py-2'>
						{filter}
					</Button>
				))}
			</div>

			{/* Product Grid */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
				{filteredProducts.map((product, index) => (
					<div key={index} className='group relative border rounded-lg overflow-hidden'>
						<div className='relative aspect-square mb-3'>
							<Image src={product.image} alt={product.name} fill className='object-cover rounded-lg' />
							<Button variant='ghost' size='icon' className={`absolute top-2 right-2 transition-opacity ${likedProducts.has(product.id) ? 'text-red-500' : ''}`} onClick={() => toggleLike(product.id)}>
								<Heart className='h-5 w-5' fill={likedProducts.has(product.id) ? 'currentColor' : 'none'} />
							</Button>
							{product.isNew && <span className='absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded'>NEW</span>}
						</div>
						<div className='space-y-1 ml-3 mb-3'>
							<p className='text-sm text-gray-500'>{product.brand}</p>
							<h3 className='font-semibold'>{product.name}</h3>
							<p className='text-sm text-gray-500'>{product.category}</p>
							<div className='flex items-center gap-24 md:gap-20'>
								<div className='flex items-center gap-2'>
									<span className='font-bold'>${product.price}</span>
									{product.originalPrice && <span className='text-sm text-gray-400 line-through'>${product.originalPrice}</span>}
								</div>
								<Button variant='outline' className='w-20 bg-[#EF600D] hover:bg-[#EF600D]' size='sm' onClick={() => setSelectedProduct(product)} disabled={product.isSoldOut}>
									Buy
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Modals */}
			<ProductDetailsModal product={selectedProduct} isOpen={!!selectedProduct && !showContactModal} onClose={() => setSelectedProduct(null)} onBuy={() => setShowContactModal(true)} />
			{showContactModal && selectedProduct && <ContactPages productName={selectedProduct.name} onClose={() => setShowContactModal(false)} />}
		</div>
	)
}
