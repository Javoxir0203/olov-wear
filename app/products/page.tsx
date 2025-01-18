import React from 'react'
import { ProductGrid } from '../_components/product.grid'
import TrendingProducts from '../_components/trendingnow'
import Footer from '../_components/footer'
import CategoryGrid from '../_components/categorygrid'
import Crud from '../_components/crud'

const Products = () => {
	return (
		<div>
            <CategoryGrid/>
			<ProductGrid />
			<TrendingProducts />
			<Crud/>
            <Footer />
		</div>
	)
}

export default Products
