import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Nav from "../common/Nav";
import { Herosection } from "../Herosection";
import Footer from "../common/Footer";
import Wearebest from "../Wearebest";
import Whatwedo from "../Whatwedo";
import OurPresence from "../OurPresence";
import PartnerWithus from "../PartnerWithus";
import OurClients from "../OurClients";
import ClientsLogo from "../ClientsLogo";
import ClientReview from "../ClientReview";
import Banner from "../Banner";

const Homepage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Nav />
      <Herosection />
      <Banner />
      <Wearebest />
      <Whatwedo />
      <OurPresence />
      <PartnerWithus />
      <OurClients />
      <ClientsLogo />
      <ClientReview />
      <Footer />
    </>
  );
};

export default Homepage;
