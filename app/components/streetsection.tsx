import Image from 'next/image'
import React from 'react'
import shoeImage from '@/public/images/streetsection/person.jpg'

const StreetSection = () => {
	return (
		<div className='flex flex-col md:flex-row items-center justify-between bg-zinc-200 py-16 px-8 md:px-16'>
			{/* Chapdagi rasm */}
			<div className='relative w-full md:w-1/2'>
				<Image src={shoeImage} alt='Shoe Model' layout='intrinsic' className='w-full h-full rounded-lg'  />
			</div>

			{/* O'ngdagi matn */}
			<div className='w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 text-center md:text-left'>
				<p className='text-sm uppercase text-gray-500 tracking-widest'>Going Out on the Street</p>
				<h1 className='text-5xl md:text-6xl font-bold mt-4'>
					The Ultimate <br /> Street Vibe
				</h1>
				<p className='text-gray-600 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ellent, esque eget masa ac urna finibus fringilla nonpon mauris sit amet nisl in nunc pharetra.</p>
				<button className='mt-6 px-8 py-3 text-sm font-semibold border border-black hover:bg-black hover:text-white transition-colors duration-300'>Shop Now</button>
			</div>
		</div>
	)
}

export default StreetSection
