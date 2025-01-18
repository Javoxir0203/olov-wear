'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

interface Product {
	firstNmae: string
	lastName: string
	email: string
	phoneNumber: string
}

const Crud = () => {
	const [firstName, setFirstName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [phoneNumber, setPhoneNumber] = useState<string>('')
	const [, setProducts] = useState<Product[]>([])

	const createProduct = async () => {
		await fetch('http://45.92.173.46:5050/api/Contacts/CreateContact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstName, lastName, email, phoneNumber }),
		})
		setFirstName('')
		setLastName('')
		setEmail('')
		setPhoneNumber('')
		setProducts([]) // Clear products after creation
	}

	return (
		<div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 mb-10'>
			<h1 className='text-3xl font-semibold text-center text-gray-800 mb-8'>Biz bilan bog`lanishingiz uchun</h1>

			<div className='space-y-4'>
				<Input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} placeholder='First Name' className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none' />
				<Input type='text' value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Last Name' className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none' />
				<Input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none' />
				<Input type='tel' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder='Phone Number' className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none' />

				<Button onClick={createProduct} className='w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition'>
					Create
				</Button>
			</div>

			<div className='mt-10'>
				<div className='space-y-3'>{/* No products displayed after creation */}</div>
			</div>
		</div>
	)
}

export default Crud
