'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

interface ContactModalProps {
	isOpen: boolean
	onClose: () => void
	productName: string
}

export function ContactModal({ isOpen, onClose, productName }: ContactModalProps) {
	const [lastName, setLastName] = useState('')
	const [firstName, setFirstName] = useState('')
	const [phone, setPhone] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle form submission here
		console.log({ lastName, firstName, phone, productName })
		onClose() // Close the modal after submitting
	}

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Complete Your Purchase</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit} className='grid gap-4 py-4'>
					<div className='grid gap-2'>
						<Label htmlFor='lastName'>Last Name</Label>
						<Input id='lastName' type='text' value={lastName} onChange={e => setLastName(e.target.value)} required placeholder='Enter your last name' />
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='firstName'>First Name</Label>
						<Input id='firstName' type='text' value={firstName} onChange={e => setFirstName(e.target.value)} required placeholder='Enter your first name' />
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='phone'>Phone Number</Label>
						<Input id='phone' type='tel' value={phone} onChange={e => setPhone(e.target.value)} required placeholder='Enter your phone number' />
					</div>
					<div className='flex justify-end space-x-3'>
						<Button type='button' onClick={onClose} className='bg-gray-300 text-gray-700 hover:bg-gray-400'>
							Cancel
						</Button>
						<Button type='submit' className='bg-blue-600 text-white hover:bg-blue-700'>
							Submit
						</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	)
}
