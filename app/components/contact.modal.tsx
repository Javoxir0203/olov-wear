'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

interface ContactModalProps {
	isOpen: boolean
	onClose: () => void
	productName: string
}

export function ContactModal({ isOpen, onClose, productName }: ContactModalProps) {
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle form submission here
		console.log({ email, phone, productName })
		onClose()
	}

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Complete Your Purchase</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit} className='grid gap-4 py-4'>
					<div className='grid gap-2'>
						<Label htmlFor='email'>Email</Label>
						<Input id='email' type='email' value={email} onChange={e => setEmail(e.target.value)} required placeholder='Enter your email' />
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='phone'>Phone Number</Label>
						<Input id='phone' type='tel' value={phone} onChange={e => setPhone(e.target.value)} required placeholder='Enter your phone number' />
					</div>
					<Button type='submit' className='w-full mt-4'>
						Submit
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	)
}
