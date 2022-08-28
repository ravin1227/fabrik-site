import React from 'react'
import HeroSection from '../components/ui/HeroSection'
import Trending from '../components/ui/Trending-section/Trending'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Trending />
      <Footer />
    </>
  )
}

export default Home