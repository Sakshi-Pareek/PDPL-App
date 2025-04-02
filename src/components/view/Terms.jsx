import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import TermsAndConditions from "../common/TermsAndConditions";

const Terms = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Nav />
      <div className="overflow-hidden">
        <TermsAndConditions />
        <Footer />
      </div>
    </>
  );
};

export default Terms;
