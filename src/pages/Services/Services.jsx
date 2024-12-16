import React from "react";
import DefaultBanner from "../../components/defaultBanner";
import ServicesLinkProBest from "./serviceslinkprobest";
import ServicesWhyChooseUs from "./serviceswhychooseus";
import ServicesWhatWeDo from "./serviceswhatwedo";

function Services() {
  return (
    <>
      <DefaultBanner componentName="Services" />
      <ServicesLinkProBest/>
      <ServicesWhyChooseUs/>
      <ServicesWhatWeDo/>
    </>
  );
}

export default Services;
