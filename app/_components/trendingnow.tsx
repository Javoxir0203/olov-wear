'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ProductDetailsModal } from './product.detalis.modal'
import ContactPage from './contactmodals'

// Mahsulot turlari
interface Product {
	id: string
	name: string
	brand: string
	category: string
	price: number
	image: string
	isLiked: boolean
}

// Mahsulotlar ro‘yxati
const initialProducts: Product[] = [
	{
		id: '1',
		name: 'BLACK NIKE',
		brand: 'NEW BALANCE',
		category: 'Fitness',
		price: 30,
		image: '/clothes/trendingnow/shop-list-sidebar-23.jpg',
		isLiked: false,
	},
	{
		id: '2',
		name: 'WHITE SHIRT',
		brand: 'KICKZ',
		category: 'Fitness',
		price: 30,
		image: '/clothes/trendingnow/main-home-product-24.jpg',
		isLiked: false,
	},
	{
		id: '3',
		name: 'YELLOW COAT',
		brand: 'RANG',
		category: 'Winter',
		price: 30,
		image: '/clothes/trendingnow/main-home-product-23.jpg',
		isLiked: false,
	},
	{
		id: '4',
		name: 'YELLOW COAT',
		brand: 'RANG',
		category: 'Winter',
		price: 30,
		image: '/clothes/trendingnow/shop-list-sidebar-48.jpg',
		isLiked: false,
	},
	{
		id: '5',
		name: 'YELLOW COAT',
		brand: 'RANG',
		category: 'Winter',
		price: 30,
		image: '/clothes/trendingnow/shop-list-sidebar-29.jpg',
		isLiked: false,
	},
	{
		id: '6',
		name: 'YELLOW COAT',
		brand: 'RANG',
		category: 'Winter',
		price: 30,
		image: '/clothes/trendingnow/shop-list-sidebar-54.jpg',
		isLiked: false,
	},
]

const TrendingProducts = () => {
	const [products, setProducts] = useState(initialProducts)
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
	const [isDetailsOpen, setIsDetailsOpen] = useState(false)
	const [isContactOpen, setIsContactOpen] = useState(false)

	// Like tugmasi uchun funksiya
	const handleLike = (productId: string) => {
		setProducts(products.map(product => (product.id === productId ? { ...product, isLiked: !product.isLiked } : product)))
	}

	// Mahsulot tanlash funksiyasi
	const handleProductClick = (product: Product) => {
		setSelectedProduct(product)
		setIsDetailsOpen(true)
	}

	// Tafsilotlardan sotib olish funksiyasi
	const handleBuyFromDetails = () => {
		setIsDetailsOpen(false)
		setIsContactOpen(true) // Aloqa oynasini ochish
	}

	// Aloqa oynasini yopish
	const closeContactModal = () => {
		setIsContactOpen(false)
	}

	return (
		<div className='py-8'>
			<h2 className='text-center text-2xl font-bold mb-8'>TRENDING NOW</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4'>
				{products.map(product => (
					<div key={product.id} className='group relative border'>
						<div className='aspect-square overflow-hidden rounded-lg bg-gray-100'>
							<Image src={product.image} alt={product.name} width={200} height={200} className='object-cover w-full h-full cursor-pointer' onClick={() => handleProductClick(product)} />
						</div>
						<button onClick={() => handleLike(product.id)} className='absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white'>
							<Heart className={`w-5 h-5 ${product.isLiked ? 'fill-red-500 stroke-red-500' : ''}`} />
						</button>
						<div className='mt-2 space-y-1 ml-3 mb-5'>
							<p className='text-sm text-gray-500'>{product.brand}</p>
							<h3 className='font-medium'>{product.name}</h3>
							<div className='flex items-center gap-44 md:gap-40'>
								<p className='font-bold'>${product.price}</p>
								<Button variant='secondary' className='w-20 bg-[#EF600D] hover:bg-[#EF600D]' onClick={() => handleProductClick(product)}>
									Buy
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Tafsilotlar modali */}
			<ProductDetailsModal product={selectedProduct} isOpen={isDetailsOpen} onClose={() => setIsDetailsOpen(false)} onBuy={handleBuyFromDetails} />

			{/* Aloqa modali */}
			{isContactOpen && selectedProduct && <ContactPage productName={selectedProduct.name} onClose={closeContactModal} />}
		</div>
	)
}

export default TrendingProducts
