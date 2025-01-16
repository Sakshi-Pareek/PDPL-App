import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Nav from "../common/Nav";
import Abouthero from "../Abouthero";
// import OurPurpose from "../OurPurpose";
import OurValue from "../OurValue";
import Awards from "../Awards";
import Footer from "../common/Footer";
import CoverStory from "../CoverStory";
import AsiaBusiness from "../AsiaBusiness";

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Nav />
      <Abouthero />
      {/* <OurPurpose /> */}
      <OurValue />
      <CoverStory />
      <AsiaBusiness />
      <Awards />
      <Footer />
    </>
  );
};

export default About;
