import { Button } from '@/components/ui/button'
import Image from 'next/image'
import sections from '@/public/clothes/section/h1-img-3.jpg'
import sections1 from '@/public/clothes/section/h1-img-4.jpg'

const Section = () => {
	return (
		<div className='flex flex-col md:flex-row w-full '>
			{/* Left Section */}
			<div className='relative w-full md:w-1/2 bg-black'>
				<div className='absolute inset-0 bg-black/40' />
				<Image src={sections} alt='Model wearing hoodie' className='w-full h-full object-cover' />
				<h2 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-8xl md:text-9xl font-bold' style={{ fontFamily: 'system-ui' }}>
					New
				</h2>
			</div>

			{/* Right Section */}
			<div className='relative w-full md:w-1/2 bg-black'>
				{/* Background overlay */}
				<div className='absolute inset-0 bg-black/40' />

				{/* Image */}
				<Image src={sections1} alt='Model wearing hoodie' className='w-full h-full object-cover' />

				{/* Text overlay */}
				<div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white'>
					<h2 className='text-8xl md:text-9xl font-bold' style={{ fontFamily: 'system-ui' }}>Sale</h2>
					<p className='mt-4 text-2xl md:text-3xl font-medium'>Explore the latest styles</p>
					<Button className='mt-6 px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300'>SHOP NOW</Button>
				</div>
			</div>

			{/* Fixed Cart Button */}
			<div className='fixed bottom-8 right-8 z-50'>
				<Button className='bg-red-500 p-4 rounded-full text-white hover:bg-red-600 transition-colors duration-300'>
					<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
						<circle cx='9' cy='21' r='1' />
						<circle cx='20' cy='21' r='1' />
						<path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
					</svg>
				</Button>
			</div>
		</div>
	)
}

export default Section
