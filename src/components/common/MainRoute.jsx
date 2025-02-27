import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "../view/Homepage";
import About from "../view/About";
import Network from "../view/Network";
import Career from "../view/Career";
import Contact from "../view/Contact";
import Infrastructure from "../view/Infrastructure";
import WareHouse from "../view/WareHouse";

const MainRoute = () => {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="infrastructure" element={<Infrastructure />} />
        <Route path="franchise" element={<WareHouse />} />
        <Route path="network" element={<Network />} />
        <Route path="career" element={<Career />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  );
};

export default MainRoute;
