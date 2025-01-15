import React from 'react'
import HeroSection from './components/herosection'
import HomeSection from './components/homesection'
import ProductHero from './components/producthero'
import CollectionsGrid from './components/collectionsgrid'
import CategoryGrid from './components/categorygrid'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <HomeSection/>
      <ProductHero/>
      <CollectionsGrid/>
      <CategoryGrid/>
      <div>
      </div>
    </div>
  )
}

export default Home
