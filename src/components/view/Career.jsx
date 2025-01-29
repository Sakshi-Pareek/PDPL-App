import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../common/Nav";
import Thrivingcareer from "../Thrivingcareer";
import JoinPDPL from "../JoinPDPL";
import Footer from "../common/Footer";

const Career = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Nav />
      <div className="overflow-hidden">
        <Thrivingcareer />
        <JoinPDPL />
        <Footer />
      </div>
    </div>
  );
};

export default Career;
