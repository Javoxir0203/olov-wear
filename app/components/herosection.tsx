'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import person from '@/public/images/homesection/main-home-brand-6.jpg'
import Link from 'next/link'
import React, { useState } from 'react'
import { AlignJustify, CircleUserRound, Heart, Search } from 'lucide-react'

const HeroSection = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<section className='relative bg-gray-100 h-screen p-6 md:p-12' role='banner'>
			{/* Background image */}
			<div className='absolute inset-0'>
				<Image src={person} alt='A runner wearing branded clothes in a scenic outdoor setting' fill className='object-cover' />
				<div className='absolute inset-0 bg-black/40'></div>
			</div>

			{/* Content */}
			<div className='relative z-10 flex flex-col justify-center items-center text-center py-12 px-4 sm:py-16 sm:px-8 md:py-20 md:px-12'>
				{/* Navbar */}
				<div className='absolute top-0 left-0 w-full px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center bg-transparent'>
					<div className='flex items-center space-x-4'>
						{/* Icon + Brand Name */}
						<AlignJustify onClick={() => setMenuOpen(!menuOpen)} className='text-white text-2xl cursor-pointer lg:hidden' aria-label='Toggle menu' />
						<h1 className='text-white text-2xl font-bold'>Olov-wear</h1>
					</div>
					<nav className='hidden lg:flex space-x-6 text-white'>
						<Link href='/' className='hover:text-gray-200 text-base md:text-lg'>
							Home
						</Link>
						<Link href='/products' className='hover:text-gray-200 text-base md:text-lg'>
							Products
						</Link>
					</nav>
					<div className='flex space-x-4 text-white'>
						<Search className='text-2xl cursor-pointer' />
						<CircleUserRound className='text-2xl cursor-pointer' />
						<Heart className='text-2xl cursor-pointer' />
					</div>
				</div>

				{/* Dropdown menu for mobile */}
				{menuOpen && (
					<div className='absolute top-16 left-4 right-4 bg-white text-black rounded shadow-lg lg:hidden'>
						<Link href='/' className='block px-4 py-2 hover:bg-gray-200'>
							Home
						</Link>
						<Link href='/products' className='block px-4 py-2 hover:bg-gray-200'>
							Products
						</Link>
						<Link href='/product-detail' className='block px-4 py-2 hover:bg-gray-200'>
							Product Detail
						</Link>
					</div>
				)}

				{/* Hero content */}
				<div className='max-w-4xl p-10 sm:p-12 lg:p-16'>
					<h1 className='text-white text-3xl sm:text-4xl lg:text-6xl font-bold mb-6'>
						RUNNING <br /> CLOTHES BRANDS
					</h1>
					<p className='text-white text-sm sm:text-base lg:text-lg mb-10'>Search Dunker and find the ideal pieces for you</p>
					<Button className='px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'>SHOP NOW</Button>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
