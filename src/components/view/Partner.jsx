import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import OurPartner from "../OurPartner";
import Partners from "../Partners";
import SpecialPaetner from "../SpecialPaetner";
import { PartnerShip } from "../PartnerShip";

const Partner = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Nav />
      <OurPartner />
      <Partners />
      <SpecialPaetner />
      <PartnerShip />
      <Footer />
    </>
  );
};

export default Partner;
