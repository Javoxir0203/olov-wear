import Image from 'next/image'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import product from '@/public/clothes/producthero/h1-video-img-1 copy.jpg'


const ProductHero =() =>{
	return (
		<div className='relative min-h-[600px] w-full bg-[#1A1A1A]'>
			<div className='absolute inset-0'>
				<Image src={product} alt=' product shot' fill className='object-cover' priority />
				<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
			</div>

			<div className='relative z-10 flex min-h-[600px] items-center justify-center'>
				<Button size='icon' variant='outline' className='h-16 w-16 rounded-full border-2 border-white bg-black/20 text-white backdrop-blur-sm transition-transform hover:scale-110'>
					<Play className='h-6 w-6 fill-current' />
					<span className='sr-only'>Play product video</span>
				</Button>
			</div>

	
		</div>
	)
}
export default ProductHero
