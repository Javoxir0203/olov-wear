'use client'

import { useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useState, useRef } from 'react'

interface ContactPageProps {
	productName: string
	onClose: () => void
}

const ContactPage: React.FC<ContactPageProps> = ({ productName, onClose }) => {
	const router = useRouter()
	const [isSubmitting, setIsSubmitting] = useState(false)

	// Inputlarni boshqarish uchun ref
	const fullNameRef = useRef<HTMLInputElement>(null)
	const phoneNumberRef = useRef<HTMLInputElement>(null)

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setIsSubmitting(true)

		try {
			// Input ma'lumotlarini olish
			const userFullName = fullNameRef.current?.value || ''
			const userPhoneNumber = phoneNumberRef.current?.value || ''

			// Ma'lumotlarni konsolga chiqarish
			console.log({
				UserFullName: userFullName,
				UserPhoneNumber: userPhoneNumber,
				ProductKey: productName,
			})

			// API'ga ma'lumotlarni yuborish
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
			if (fullNameRef.current) fullNameRef.current.value = ''
			if (phoneNumberRef.current) phoneNumberRef.current.value = ''

			// Router orqali bosh sahifaga yo'naltirish
			router.push('/')
		} catch (error) {
			console.error('Error submitting order:', error)
			alert('Failed to submit order. Please try again.')
		} finally {
			setIsSubmitting(false)
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
					<Button type='submit' disabled={isSubmitting}>
						{isSubmitting ? 'Submitting...' : 'Submit Order'}
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	)
}

export default ContactPage
