import React from 'react'
import HeroSection from './components/herosection'
import HomeSection from './components/homesection'
import ProductHero from './components/producthero'
import CollectionsGrid from './components/collectionsgrid'
import CategoryGrid from './components/categorygrid'
import Section from './components/section'
import LogoShowcase from './components/logoshowcase'
import TrendingNow from './components/trendingnow'
import StreetSection from './components/streetsection'
import Footer from './components/footer'
import { ProductGrid } from './components/product.grid'

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
			<TrendingNow />
			<StreetSection />
			<Footer />
		</div>
	)
}

export default Home
