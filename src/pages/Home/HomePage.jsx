import React from 'react'
// import Footer from '../../components/Footer'
import AboutLinkPro from './AboutLinkPro'
import WhatWeOffer from './WhatWeOffer'
import HowItWorks from './HowItWorks'
import WhyChooseLink from './WhyChooseLink'
import UncoverLatestBlog from './UncoverLatestBlog'
import defaultBanner from '../../components/defaultBanner'

function HomePage() {
  return (
    <>
    <AboutLinkPro/>
    <WhatWeOffer/>
    <HowItWorks/>
    <WhyChooseLink/>
    <UncoverLatestBlog/>
    <defaultBanner componentName="Home Page"/>
    {/* <Footer/> */}
    </>
  )
}

export default HomePage