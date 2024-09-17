import React from "react";
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

const Homepage = () => {
  return (
    <>
      <Nav />
      <Herosection />
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
