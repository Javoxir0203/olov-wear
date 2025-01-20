'use client'

import { useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useRef } from 'react'

interface ContactPageProps {
	productName: string
	onClose: () => void
}

const ContactPages: React.FC<ContactPageProps> = ({ productName, onClose }) => {
	const router = useRouter()

	// Inputlarni boshqarish uchun ref
	const fullNameRef = useRef<HTMLInputElement>(null)
	const phoneNumberRef = useRef<HTMLInputElement>(null)

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		try {
			// Input ma'lumotlarini olish
			const userFullName = fullNameRef.current?.value.trim() || ''
			const userPhoneNumber = phoneNumberRef.current?.value.trim() || ''

			// Ma'lumotlarni tekshirish
			if (!userFullName || !userPhoneNumber) {
				alert('Please fill in all the fields.')
				return
			}

			// Ma'lumotlarni API'ga yuborish
			console.log('Submitting order with:', { userFullName, userPhoneNumber, productName })
			const response = await fetch('http://45.92.173.46:5050/api/Orders/CreateOrder', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					UserFullName: userFullName,
					UserPhoneNumber: userPhoneNumber,
					ProductKey: productName,
				}),
			})

			if (!response.ok) {
				throw new Error('Failed to submit the order.')
			}

			// Inputlarni tozalash
			console.log('Order submitted successfully.')
			if (fullNameRef.current) fullNameRef.current.value = ''
			if (phoneNumberRef.current) phoneNumberRef.current.value = ''

			// Modalni yopish
			onClose()

			// Router orqali ma'lum sahifaga yo'naltirish
			console.log('Redirecting to homepage...')
			router.push('/')
		} catch (error) {
			console.error('Error submitting order:', error)
			alert('Failed to submit order. Please try again.')
		}
	}

	return (
		<Dialog open onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<h2 className='text-xl font-bold'>Order for {productName}</h2>
				</DialogHeader>
				<form onSubmit={handleSubmit} className='space-y-4'>
					<div className='space-y-2'>
						<Label htmlFor='userFullName'>Full Name</Label>
						<Input id='userFullName' name='userFullName' type='text' placeholder='Your Full Name' required ref={fullNameRef} />
					</div>
					<div className='space-y-2'>
						<Label htmlFor='userPhoneNumber'>Phone Number</Label>
						<Input id='userPhoneNumber' name='userPhoneNumber' type='text' placeholder='Your Phone Number' required ref={phoneNumberRef} />
					</div>
					<Button type='submit'>Submit Order</Button>
				</form>
			</DialogContent>
		</Dialog>
	)
}

export default ContactPages
