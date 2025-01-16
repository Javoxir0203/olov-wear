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
import HomePage from './components/home'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <HomeSection/>
      <HomePage/>
      <ProductHero/>
      <CollectionsGrid/>
      <CategoryGrid/>
      <Section/>
      <LogoShowcase/>
      <TrendingNow/>
      <StreetSection/>
      <Footer/>
    </div>
  )
}

export default Home
