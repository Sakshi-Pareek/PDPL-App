import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import OurInfrastructure from "../OurInfrastructure";
import HowWeGet from "../HowWeGet";
import UniosDashBoard from "../UniosDashBoard";
import HealthcareDistribution from "../HealthcareDistribution";
import UniosApp from "../UniosApp";

const Infrastructure = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Nav />
      <OurInfrastructure />
      <HowWeGet />
      <UniosApp />
      <UniosDashBoard />
      <HealthcareDistribution />
      <Footer />
    </>
  );
};

export default Infrastructure;
