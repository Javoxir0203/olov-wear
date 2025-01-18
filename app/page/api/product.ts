// import { NextApiRequest, NextApiResponse } from 'next'

// // Product interfeysi
// interface Product {
// 	firstName: string
// 	lastName: string
// 	phoneNumber: string
// 	email: string
// }

// // In-memory storage for simplicity
// let products: Product[] = []

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
// 	switch (req.method) {
// 		case 'GET':
// 			// Read operation: Return all products
// 			res.status(200).json(products)
// 			break

// 		case 'POST':
// 			// Create operation: Add a new product
// 			const { firstName, lastName, phoneNumber, email }: Product = req.body
// 			if (!firstName || !lastName || !phoneNumber || !email) {
// 				return res.status(400).json({ message: 'Missing required fields' })
// 			}

// 			const newProduct: Product = { firstName, lastName, phoneNumber, email }
// 			products.push(newProduct)
// 			res.status(201).json(newProduct)
// 			break

// 		case 'PUT':
// 			// Update operation: Update a product by firstname
// 			const {
// 				firstNameToUpdate,
// 				newlastName,
// 				newphoneNumber,
// 				newemail,
// 			}: {
// 				firstNameToUpdate: string
// 				newlastName?: string
// 				newphoneNumber?: string
// 				newemail?: string
// 			} = req.body

// 			const productIndex = products.findIndex(product => product.firstName === firstNameToUpdate)

// 			if (productIndex === -1) {
// 				return res.status(404).json({ message: 'Product not found' })
// 			}

// 			products[productIndex] = {
// 				...products[productIndex],
// 				lastName: newlastName || products[productIndex].lastName,
// 				phoneNumber: newphoneNumber || products[productIndex].phoneNumber,
// 				email: newemail || products[productIndex].email,
// 			}

// 			res.status(200).json(products[productIndex])
// 			break

// 		case 'DELETE':
// 			// Delete operation: Delete a product by firstname
// 			const { firstNameToDelete }: { firstNameToDelete: string } = req.body
// 			products = products.filter(product => product.firstName !== firstNameToDelete)

// 			res.status(200).json({ message: 'Product deleted successfully' })
// 			break

// 		default:
// 			res.status(405).json({ message: 'Method Not Allowed' })
// 			break
// 	}
// }
