'use client'
import Image from 'next/image'
import { Heart, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import nikmi from '@/public/images/herosection/main-home-product-1.jpg'
import nikmi1 from '@/public/images/herosection/main-home-product-2.jpg'
import products from '@/types'

const HomeSection = () => {
	return (
		<main className='min-h-screen mt-10'>
			{/* Hero Section */}
			<section className='grid grid-cols-1 md:grid-cols-2 h-screen'>
				{/* Featured Image */}
				<div className='relative bg-gray-100 min-h-[600px]'>
					<h2 className='absolute top-8 left-8 text-4xl font-bold'>Featured</h2>
					<Image src={nikmi} alt='Featured fashion' fill className='object-cover' />
					<Button size='icon' variant='secondary' className='absolute bottom-8 right-8 rounded-full'>
						<ShoppingBag className='h-4 w-4' />
					</Button>
				</div>

				{/* New Collection */}
				<div className='relative bg-zinc-900 min-h-[600px] text-white'>
					<div>
						<Image src={nikmi1} alt='Featured fashion' fill className='object-cover' />
						<h2 className='absolute top-8 left-8 text-4xl font-bold'>New Collection</h2>
					</div>
					<Card className='absolute bottom-32 left-8 right-8 bg-white text-black'>
						<CardContent className='p-6'>
							<div className='flex justify-between items-start mb-4'>
								<div>
									<div className='space-x-2 mb-2'>
										<span className='text-sm text-gray-600'>ADIDAS</span>
										<span className='text-sm text-gray-600'>|</span>
										<span className='text-sm text-gray-600'>NIKE</span>
									</div>
									<h3 className='text-xl font-bold'>ADDIDAS SNEAKERS</h3>
									<p className='text-sm text-gray-600'>Fashion</p>
								</div>
								<Button size='icon' variant='ghost'>
									<Heart className='h-4 w-4' />
								</Button>
							</div>
							<div className='flex justify-between items-center'>
								<span className='text-2xl font-bold'>$95</span>
								<Button size='icon' variant='ghost'>
									<ShoppingBag className='h-4 w-4' />
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Featured Products Section */}
			<section className='px-8 py-16 max-w-7xl mx-auto'>
				<div className='text-center mb-8'>
					<span className='text-sm text-gray-600'>DUNKER COLLECTION</span>
					<h2 className='text-3xl font-bold mt-2'>FEATURED PRODUCTS</h2>
				</div>

				<Tabs defaultValue='show-all' className='mb-8'>
					<TabsList className='justify-center'>
						<TabsTrigger value='show-all'>SHOW ALL</TabsTrigger>
						<TabsTrigger value='fitness'>FITNESS</TabsTrigger>
						<TabsTrigger value='cycling'>CYCLING</TabsTrigger>
						<TabsTrigger value='winter'>WINTER</TabsTrigger>
					</TabsList>
				</Tabs>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{products.map(product => (
						<div key={product.id} className='border rounded-lg shadow-md p-4 relative'>
							{/* Label */}
							{product.label && <span className='absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md'>{product.label}</span>}

							{/* Image Section */}
							<div className='relative aspect-square mb-4'>
								<Image src={product.image} alt={product.name} fill className='object-cover rounded-md' />
								<button type='button' className='absolute top-2 right-2 p-2 bg-white rounded-full shadow'>
									<Heart className='h-4 w-4 text-gray-500' />
								</button>
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
									<button type='button' className='p-2 bg-gray-100 rounded-full hover:bg-gray-200'>
										<ShoppingBag className='h-4 w-4 text-gray-500' />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	)
}
export default HomeSection
