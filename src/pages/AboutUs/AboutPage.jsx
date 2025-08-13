import React from "react";
import AboutusLinkPro from "./AboutusLinkPro.jsx";
import AboutusWhyChoose from "./AboutusWhyChoose.jsx";
import AboutUsWhatWeDo from "./AboutUsWhatWeDo.jsx";
import AboutOurValues from "./AboutOurValues.jsx";
import AboutTestimonials from "./AboutTestimonials.jsx";
import DefBanner from "../../components/DefBanner.jsx";
// import AboutMeetOurTeam from './AboutMeetOurTeam'

function AboutPage() {
  return (
    <>
      <DefBanner componentName="About Us" />
      <AboutusLinkPro />
      <AboutusWhyChoose />
      <AboutUsWhatWeDo />
      <AboutOurValues />
      <AboutTestimonials />
      {/* <AboutMeetOurTeam/> */}
    </>
  );
}

export default AboutPage;
