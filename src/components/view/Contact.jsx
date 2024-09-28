import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../common/Nav";
import Contactus from "../Contactus";
import Footer from "../common/Footer";
import Help from "../Help";

const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Nav />
      <Help />
      <Contactus />
      <Footer />
    </>
  );
};

export default Contact;
