export interface Product {
	id: string
	name: string
	brand: string
	category: string
	price: number
	originalPrice?: number
	image: string
	isNew?: boolean
	isSale?: boolean
	isSoldOut?: boolean
}

export type Category = 'SHOW ALL' | 'FITNESS' | 'CYCLING' | 'WINTER'
