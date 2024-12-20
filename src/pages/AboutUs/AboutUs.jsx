import React from 'react'
import DefaultBanner from '../../components/DefaultBanner'
import AboutusLinkPro from './AboutusLinkPro'
import AboutusWhyChoose from './AboutusWhyChoose'
import AboutUsWhatWeDo from './AboutUsWhatWeDo'
import AboutOurValues from './AboutOurValues'
import AboutTestimonials from './AboutTestimonials'
import AboutMeetOurTeam from './AboutMeetOurTeam'


function AboutUs() {
  return (
    <>
    <DefaultBanner componentName="About Us"/>
    <AboutusLinkPro/>
    <AboutusWhyChoose/>
    <AboutUsWhatWeDo/>
    <AboutOurValues/>
    <AboutTestimonials/>
    <AboutMeetOurTeam/>
    
    </>
  )
}

export default AboutUs