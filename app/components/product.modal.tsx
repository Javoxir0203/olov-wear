'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Product } from '@/types/product'
import Image from 'next/image'

interface ProductModalProps {
	product: Product | null
	isOpen: boolean
	onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
	if (!product) return null

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>{product.name}</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4'>
					<div className='relative aspect-square'>
						<Image src={product.image || '/placeholder.svg'} alt={product.name} fill className='object-cover rounded-lg' />
					</div>
					<div className='grid gap-2'>
						<div className='flex items-center justify-between'>
							<span className='font-semibold'>{product.brand}</span>
							<span className='text-lg font-bold'>${product.price}</span>
						</div>
						<p className='text-sm text-muted-foreground'>{product.category}</p>
						<p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
