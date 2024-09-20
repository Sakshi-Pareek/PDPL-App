import React from "react";
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import OurPartner from "../OurPartner";
import Partners from "../Partners";
import SpecialPaetner from "../SpecialPaetner";
import { PartnerShip } from "../PartnerShip";

const Partner = () => {
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
