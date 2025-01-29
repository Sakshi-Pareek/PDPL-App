import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import OurPartner from "../OurPartner";
import Partners from "../Partners";
import SpecialPaetner from "../SpecialPaetner";
import { PartnerShip } from "../PartnerShip";

const Network = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Nav />
      <div className="overflow-hidden">
        <OurPartner />
        <Partners />
        <SpecialPaetner />
        <PartnerShip />
        <Footer />
      </div>
    </>
  );
};

export default Network;
