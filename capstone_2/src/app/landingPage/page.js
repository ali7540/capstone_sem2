import React from 'react'
import Hero from './section/hero'
import Features from "./section/feature"
import Pricing from "./section/pricing";
import Testimonials from "./section/testimonials";

const landingPage = () => {
  return (
    <div className='w-full'>
      <Hero/>
      <Features/>
      <Pricing/>
      <Testimonials/>
    </div>
  )
}

export default landingPage
