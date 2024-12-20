import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../common/Nav";
import Thrivingcareer from "../Thrivingcareer";
import JoinPDPL from "../JoinPDPL";
import Footer from "../common/Footer";
// import OpenRols from "../OpenRols";

const Career = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Nav />
      <Thrivingcareer />
      <JoinPDPL />
      {/* <OpenRols /> */}
      <Footer />
    </div>
  );
};

export default Career;
