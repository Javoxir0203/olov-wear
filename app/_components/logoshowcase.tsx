import Showcase1 from '@/public/images/showcase/showcase.png'
import Showcase2 from '@/public/images/showcase/showcase1.png'
import Showcase3 from '@/public/images/showcase/showcase2.png'
import Showcase4 from '@/public/images/showcase/showcase3.png'
import Showcase5 from '@/public/images/showcase/showcase4.png'
import Showcase6 from '@/public/images/showcase/showcase5.png'
import Image from 'next/image'
const LogoShowcase = () => {
	return (
		<section className='py-16 px-4 max-w-7xl mx-auto'>
			{/* Logo Grid */}
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8'>
				{/* Logo 1 */}
				<div className='flex items-center justify-center p-4 border border-gray-100 hover:border-gray-200 transition-colors duration-300'>
					<div className='w-16 h-16'>
					<Image src={Showcase1} alt='Logo 1' className='w-full h-full object-cover' />
					</div>
				</div>

				{/* Logo 2 */}
				<div className='flex items-center justify-center p-4 border border-gray-100 hover:border-gray-200 transition-colors duration-300'>
					<div className='w-24'>
                        <Image src={Showcase2} alt='Logo 2' className='w-full h-full object-cover' />
					</div>
				</div>

				{/* Logo 3 */}
				<div className='flex items-center justify-center p-4 border border-gray-100 hover:border-gray-200 transition-colors duration-300'>
					<div className='w-12 h-12'>
                    <Image src={Showcase3} alt='Logo 3' className='w-full h-full object-cover' />
					</div>
				</div>

				{/* Logo 4 */}
				<div className='flex items-center justify-center p-4 border border-gray-100 hover:border-gray-200 transition-colors duration-300'>
					<div className='w-24'>
                        <Image src={Showcase4} alt='Logo 4' className='w-full h-full object-cover' />
					</div>
				</div>

				{/* Logo 5 */}
				<div className='flex items-center justify-center p-4 border border-gray-100 hover:border-gray-200 transition-colors duration-300'>
					<div className='w-12 h-12 bg-black rounded-full flex items-center justify-center text-white'>
                        <Image src={Showcase5} alt='Logo 5' className='w-8 h-8 object-cover' />
					</div>
				</div>

				{/* Logo 6 */}
				<div className='flex items-center justify-center p-4 border border-gray-100 hover:border-gray-200 transition-colors duration-300'>
					<div className='w-24 h-24'>
                        <Image src={Showcase6} alt='Logo 6' className='w-full h-full object-cover' />
					</div>
				</div>
			</div>


		</section>
	)
}

export default LogoShowcase
