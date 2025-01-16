import { Product } from '@/types/product'
import vision from '@/public/images/herosection/vision.png'
import vision1 from '@/public/images/herosection/Street_.png'
import vision2 from '@/public/images/herosection/Street_.png'
import vision3 from '@/public/images/herosection/vision.png'
import vision4 from '@/public/images/herosection/Street_.png'
import vision5 from '@/public/images/herosection/samurai.png'
import vision6 from '@/public/images/herosection/Street_.png'
import vision7 from '@/public/images/herosection/smilw c.png'

export const products: Product[] = [
	{
		id: '1',
		name: 'BLACK NIKE',
		brand: 'NEW BALANCE',
		category: 'Fitness',
		price: 30,
		originalPrice:75,
		image: vision,
		isNew: true,
	},
	{
		id: '2',
		name: 'WHITE SHIRT',
		brand: 'KICKZ',
		category: 'Fitness',
		price: 30,
		originalPrice:80,
		image: vision1,
		isNew: true,
	},
	{
		id: '3',
		name: 'YELLOW COAT',
		brand: 'RANG',
		category: 'Winter',
		price: 30,
		originalPrice:85,
		image: vision2,
		isNew: true,
	},
	{
		id: '4',
		name: 'SPORT BAG',
		brand: 'ADIDAS',
		category: 'Cycling',
		price: 30,
		originalPrice: 90,
		image: vision3,
		isNew: true,
	},
	{
		id: '5',
		name: 'RUNNING JACKET',
		brand: 'NIKE',
		category: 'Winter',
		price: 35,
		originalPrice: 100,
		image: vision4,
		isNew: true,
	},
	{
		id: '6',
		name: 'TRAINING SHIRT',
		brand: 'ADIDAS',
		category: 'Fitness',
		price: 35,
		originalPrice: 109,
		image: vision5,
		isNew:true,
	},
	{
		id: '7',
		name: 'COOL HAT',
		brand: 'KICKZ',
		category: 'Fitness',
		price: 35,
		originalPrice: 110,
		image: vision6,
		isNew: true,
	},
	{
		id: '8',
		name: 'HOODIE',
		brand: 'PUMA',
		category: 'Winter',
		price: 35,
		originalPrice: 120,
		image: vision7,
		isNew: true,
	},
]
