'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Product } from '@/types/products'

interface ProductDetailsProps {
	product: Product | null
	isOpen: boolean
	onClose: () => void
	onBuy: () => void
}

export function ProductDetails({ product, isOpen, onClose, onBuy }: ProductDetailsProps) {
	if (!product) return null

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className='sm:max-w-[400px]'>
				<div className='grid gap-4'>
					<div className='aspect-square overflow-hidden rounded-lg'>
						<Image src={product.image } width={200} height={200} alt={product.name} className='object-cover w-full h-full' />
					</div>
					<div className='space-y-2'>
						<h2 className='text-2xl font-bold'>{product.name}</h2>
						<p className='text-muted-foreground'>{product.brand}</p>
						<p className='text-xl font-bold'>${product.price}</p>
						<p className='text-sm text-muted-foreground'>Category: {product.category}</p>
					</div>
					<Button onClick={onBuy} className='w-full'>
						Buy Now
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}
