import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Nav from "../common/Nav";
import Abouthero from "../Abouthero";
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
      <div className="overflow-hidden">
        <Abouthero />
        <OurValue />
        <CoverStory />
        <AsiaBusiness />
        <Awards />
        <Footer />
      </div>
    </>
  );
};

export default About;
