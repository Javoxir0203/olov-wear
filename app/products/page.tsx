import React from 'react'
import { ProductGrid } from '../_components/product.grid'
import TrendingProducts from '../_components/trendingnow'
import Footer from '../_components/footer'
import CategoryGrid from '../_components/categorygrid'

const Products = () => {
	return (
		<div>
            <CategoryGrid/>
			<ProductGrid />
			<TrendingProducts />
            <Footer />
		</div>
	)
}

export default Products
