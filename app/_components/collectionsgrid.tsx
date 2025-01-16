import Image from 'next/image'
import Link from 'next/link'
import collection from '@/public/clothes/collection/h1-ibanner-02.jpg'
import collection1 from '@/public/clothes/collection/h1-banner-1.jpg'
import collection2 from '@/public/clothes/collection/h1-ibanner-3.jpg'
const collections = [
	{
		brand: 'NORTH FACE',
		name: 'GYM BACKPACK',
		image: collection,
	},
	{
		brand: 'ADIDAS',
		name: 'RUN DIVISION',
		image: collection1,
	},
	{
		brand: 'NIKE',
		name: 'DRI-FIT SPORT BC',
		image: collection2,
	},
]

const CollectionsGrid = () => {
	return (
		<section className='py-16 px-4 md:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-12'>
					<span className='text-sm tracking-wider text-gray-600'>EXPLORE OUR WORLD</span>
					<h2 className='text-4xl font-bold mt-2 tracking-tight'>NEW COLLECTIONS</h2>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					{collections.map(collection => (
						<Link key={collection.name} href='' className='group relative aspect-[4/5] overflow-hidden bg-gray-100'>
							<Image src={collection.image || '/placeholder.svg'} alt={collection.name} fill className='object-cover transition-transform duration-300 group-hover:scale-105' />
							<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
							<div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0'>
								<span className='block text-sm text-black font-medium opacity-80'>{collection.brand}</span>
								<span className='block text-black text-2xl font-bold mt-1'>{collection.name}</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}

export default CollectionsGrid
