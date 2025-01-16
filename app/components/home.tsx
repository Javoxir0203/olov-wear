'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import productsData from '@/types' // Replace with your actual data import
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'

const HomePage = () => {
	// State for managing product likes and selected category
	const [products, setProducts] = useState(
		productsData.map(product => ({ ...product, liked: false })) // Add 'liked' property to each product
	)
	const [selectedCategory, setSelectedCategory] = useState('show-all')
	const [selectedProduct, setSelectedProduct] = useState(null) // For modal
	const [isModalOpen, setIsModalOpen] = useState(false)

	// Filter products based on selected category
	const filteredProducts = selectedCategory === 'show-all' ? products : products.filter(product => product.category.toLowerCase() === selectedCategory)

	// Toggle the like status of a product
	const handleLikeToggle = productId => {
		setProducts(prev => prev.map(product => (product.id === productId ? { ...product, liked: !product.liked } : product)))
	}

	// Open modal for product details
	const handleBuyClick = product => {
		setSelectedProduct(product)
		setIsModalOpen(true)
	}

	// Handle modal form submission
	const handleSubmit = e => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const email = formData.get('email')
		const phone = formData.get('phone')

		console.log('Form submitted:', { email, phone, product: selectedProduct })
		alert(`Thank you! Your details have been submitted for ${selectedProduct.name}.`)
		setIsModalOpen(false) // Close modal
	}

	return (
		<section className='px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto'>
			{/* Header */}
			<div className='text-center mb-8'>
				<span className='text-sm text-gray-600'>Olov-Wear COLLECTION</span>
				<h2 className='text-2xl lg:text-3xl font-bold mt-2'>FEATURED PRODUCTS</h2>
			</div>

			{/* Tabs for filtering */}
			<Tabs
				defaultValue='show-all'
				className='mb-8'
				onValueChange={value => setSelectedCategory(value)} // Update selected category
			>
				<TabsList className='justify-center overflow-x-auto whitespace-nowrap'>
					<TabsTrigger value='show-all'>SHOW ALL</TabsTrigger>
					<TabsTrigger value='fitness'>FITNESS</TabsTrigger>
					<TabsTrigger value='cycling'>CYCLING</TabsTrigger>
					<TabsTrigger value='winter'>WINTER</TabsTrigger>
				</TabsList>
			</Tabs>

			{/* Products Grid */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
				{filteredProducts.map(product => (
					<div key={product.id} className='border rounded-lg shadow-md p-4 relative'>
						{/* Label */}
						{product.label && <span className='absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md'>{product.label}</span>}

						{/* Image Section */}
						<div className='relative aspect-square mb-4'>
							<Image src={product.image} alt={product.name} fill className='object-cover rounded-md' />
							<Button
								type='button'
								onClick={() => handleLikeToggle(product.id)} // Like toggle handler
								className={`absolute top-2 right-2 p-2 bg-white rounded-full shadow ${product.liked ? 'text-red-500' : 'text-gray-500'}`}
							>
								<Heart className='h-4 w-4' />
							</Button>
						</div>

						{/* Product Details */}
						<div className='space-y-2'>
							<span className='text-sm text-gray-600'>{product.brand}</span>
							<h3 className='font-bold'>{product.name}</h3>
							<p className='text-sm text-gray-600'>{product.category}</p>
							<div className='flex justify-between items-center'>
								<div className='flex items-center gap-2'>
									<span className='font-bold'>${product.price}</span>
									{product.originalPrice && <span className='text-sm text-gray-400 line-through'>${product.originalPrice}</span>}
								</div>
								<Button type='button' className='p-2 bg-gray-100 text-b rounded-full hover:bg-gray-200' onClick={() => handleBuyClick(product)}>
									Buy
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Modal */}
			{isModalOpen && selectedProduct && (
				<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Buy {selectedProduct.name}</DialogTitle>
						</DialogHeader>
						<form onSubmit={handleSubmit}>
							<div className='mb-4'>
								<label className='block text-sm font-medium text-gray-700'>Email</label>
								<input type='email' name='email' required className='w-full mt-1 p-2 border rounded-md' />
							</div>
							<div className='mb-4'>
								<label className='block text-sm font-medium text-gray-700'>Phone Number</label>
								<input type='tel' name='phone' required className='w-full mt-1 p-2 border rounded-md' />
							</div>
							<DialogFooter>
								<Button type='submit'>Submit</Button>
								<Button variant='secondary' onClick={() => setIsModalOpen(false)}>
									Cancel
								</Button>
							</DialogFooter>
						</form>
					</DialogContent>
				</Dialog>
			)}
		</section>
	)
}

export default HomePage
