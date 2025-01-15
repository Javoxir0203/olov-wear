"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import person from '@/public/images/homesection/main-home-brand-6.jpg'
import Link from 'next/link'
import React, { useState } from 'react'
import { AlignJustify, CircleUserRound, Heart, Search } from 'lucide-react'

const HeroSection = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<section className='relative bg-gray-100 h-screen p-12' role='banner'>
			{/* Background image */}
			<div className='absolute inset-0'>
				<Image src={person} alt='A runner wearing branded clothes in a scenic outdoor setting' fill className='object-cover' />
				<div className='absolute inset-0 bg-black/40'></div>
			</div>

			{/* Content */}
			<div className='relative z-10 flex flex-col justify-center items-center text-center py-16 px-4 md:py-20 md:px-10'>
				{/* Navbar */}
				<div className='absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-transparent'>
					<div className='flex items-center space-x-4'>
						{/* Icon + Brand Name */}
						<AlignJustify onClick={() => setMenuOpen(!menuOpen)}  className='text-white'/>
						<h1 className='text-white text-2xl font-bold'>Olov-wear</h1>
					</div>
					<nav className='flex space-x-4 text-white '>
						<Link href='/' className='hover:text-gray-200 text-2xl md:text-xl'>
							Home
						</Link>
						<Link href='/products' className='hover:text-gray-200 text-2xl md:text-xl'>
							Products
						</Link>
						<Link href='/product detail' className='hover:text-gray-200 text-2xl md:text-xl'>
							Product detail
						</Link>
					</nav>
					<div className='flex space-x-4'>
						{/* Search Button */}
						<Search  className='text-white'/>
						{/* Login Button */}
						<CircleUserRound  className='text-white'/>
						{/* Like Button */}
						<Heart  className='text-white'/>
					</div>
				</div>

				{/* Dropdown menu */}
				{menuOpen && (
					<div className='absolute top-16 left-4 bg-white text-black rounded shadow-lg'>
						<Link href='/' className='block px-4 py-2 hover:bg-gray-200'>
							Home
						</Link>
						<Link href='/products' className='block px-4 py-2 hover:bg-gray-200'>
							Products
						</Link>
						<Link href='/product detail' className='block px-4 py-2 hover:bg-gray-200'>
							Product detail
						</Link>
					</div>
				)}

				{/* Hero content */}
				<div className='max-w-4xl p-20'>
					<h1 className='text-white text-3xl sm:text-4xl lg:text-6xl font-bold mb-4'>
						RUNNING <br /> CLOTHES BRANDS
					</h1>
					<p className='text-white text-sm sm:text-lg mb-8'>Search the Dunker and find the ideal pieces for you</p>
					<Button className='px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'>SHOP NOW</Button>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
