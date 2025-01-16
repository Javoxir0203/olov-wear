export default function Footer() {
	return (
		<footer className='bg-gray-50 py-16 px-4 md:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12'>
				{/* Newsletter Section */}
				<div className='space-y-6'>
					<h3 className='text-lg font-semibold'>NEWSLETTER</h3>
					<p className='text-gray-600'>Olov-wear has all of the best products from all of the top brands.</p>
					<div className='relative'>
						<input type='email' placeholder='YOUR EMAIL' className='w-full border-b border-gray-300 pb-2 pr-10 focus:outline-none focus:border-gray-900 bg-transparent' />
						<button className='absolute right-0 bottom-2 transform rotate-45' aria-label='Subscribe'>
							→
						</button>
					</div>
				</div>

				{/* New York Section */}
				<div className='space-y-4'>
					<h3 className='text-lg font-semibold'>Toshkent</h3>
					<div className='space-y-2'>
						<p className='text-gray-600'>+998 77 001 59 99</p>
						<div>
							<p className='text-gray-600'>45 GRAND BENTRAL TERIMAN</p>
							<p className='text-gray-600'>Toshkent</p>
						</div>
						<p className='text-gray-600'>MON-SAT: 09:00-19:00</p>
					</div>
				</div>

				{/* Los Angeles Section */}
				<div className='space-y-4'>
					<h3 className='text-lg font-semibold'>Samarqand</h3>
					<div className='space-y-2'>
						<p className='text-gray-600'>+998 90 123 45 67</p>
						<div>
							<p className='text-gray-600'>90A TOLBUHINA LOREM ORIGINAL</p>
							<p className='text-gray-600'>Samarqand</p>
						</div>
						<p className='text-gray-600'>MON-SAT: 09:00-19:00</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
