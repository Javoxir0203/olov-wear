'use client'
import Image from 'next/image'
import { Heart, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import nikmi from '@/public/images/herosection/main-home-product-1.jpg'
import nikmi1 from '@/public/images/herosection/main-home-product-2.jpg'

const HomeSection = () => {


	return (
		<main className='min-h-screen mt-10'>
			{/* Hero Section */}
			<section className='grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-screen'>
				{/* Featured Image */}
				<div className='relative bg-gray-100 h-[50vh] lg:h-auto'>
					<h2 className='absolute top-8 left-8 text-3xl lg:text-4xl font-bold'>Featured</h2>
					<Image src={nikmi} alt='Featured fashion' fill className='object-cover' />
					<Button size='icon' variant='secondary' className='absolute bottom-8 right-8 rounded-full'>
						<ShoppingBag className='h-4 w-4' />
					</Button>
				</div>

				{/* New Collection */}
				<div className='relative bg-zinc-900 text-white h-[50vh] lg:h-auto'>
					<div>
						<Image src={nikmi1} alt='New Collection' fill className='object-cover' />
						<h2 className='absolute top-8 left-8 text-3xl lg:text-4xl font-bold'>New Collection</h2>
					</div>
					<Card className='absolute bottom-8 left-4 right-4 lg:bottom-32 lg:left-8 lg:right-8 bg-white text-black'>
						<CardContent className='p-6'>
							<div className='flex justify-between items-start mb-4'>
								<div>
									<div className='space-x-2 mb-2'>
										<span className='text-sm text-gray-600'>ADIDAS</span>
										<span className='text-sm text-gray-600'>|</span>
										<span className='text-sm text-gray-600'>NIKE</span>
									</div>
									<h3 className='text-lg lg:text-xl font-bold'>ADDIDAS SNEAKERS</h3>
									<p className='text-sm text-gray-600'>Fashion</p>
								</div>
								<Button size='icon' variant='ghost'>
									<Heart className='h-4 w-4' />
								</Button>
							</div>
							<div className='flex justify-between items-center'>
								<span className='text-xl lg:text-2xl font-bold'>$95</span>
								<Button size='icon' variant='ghost'>
									<ShoppingBag className='h-4 w-4' />
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Featured Products Section */}

		</main>
	)
}

export default HomeSection
