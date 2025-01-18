import React from 'react'
import HeroSection from './_components/herosection'
import HomeSection from './_components/homesection'
import ProductHero from './_components/producthero'
import CollectionsGrid from './_components/collectionsgrid'
import CategoryGrid from './_components/categorygrid'
import Section from './_components/section'
import LogoShowcase from './_components/logoshowcase'
import StreetSection from './_components/streetsection'
import Footer from './_components/footer'
import TrendingProducts from './_components/trendingnow'
import { ProductGrid } from './_components/product.grid'
import Crud from './_components/crud'

const Home = () => {
	return (
		<div>
			<HeroSection />
			<HomeSection />
			<ProductGrid />
			<ProductHero />
			<CollectionsGrid />
			<CategoryGrid />
			<Section />
			<LogoShowcase />
			<TrendingProducts />
			<StreetSection />

			<Crud />

			<Footer />
		</div>
	)
}

export default Home
