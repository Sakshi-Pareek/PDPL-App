import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import GrowWithUs from "../GrowWithUs";
import FranchiseProgram from "../FranchiseProgram";
import OwnBusiness from "../OwnBusiness";
import Franchise from "../Franchise";

const WareHouse = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Nav />
      <FranchiseProgram />
      <GrowWithUs />
      <Franchise/>
      <OwnBusiness />
      <Footer />
    </>
  );
};

export default WareHouse;
