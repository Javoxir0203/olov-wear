'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

interface ProductModalProps {
	isOpen: boolean
	onClose: () => void
	onSubmit: (data: FormData) => void
}

export function ContactModals({ isOpen, onClose, onSubmit }: ProductModalProps) {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Complete Your Purchase</DialogTitle>
				</DialogHeader>
				<form action={onSubmit} className='space-y-4'>
					<div className='space-y-2'>
						<Label htmlFor='firstName'>First Name</Label>
						<Input id='firstName' name='firstName' required />
					</div>
					<div className='space-y-2'>
						<Label htmlFor='lastName'>Last Name</Label>
						<Input id='lastName' name='lastName' required />
					</div>
					<div className='space-y-2'>
						<Label htmlFor='phone'>Phone Number</Label>
						<Input id='phone' name='phone' type='tel' required />
					</div>
					<Button type='submit' className='w-full'>
						Submit Order
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	)
}
