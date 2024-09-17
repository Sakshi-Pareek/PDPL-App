import React from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import Homepage from "../view/Homepage";
import About from "../view/About";
import Partner from "../view/Partner";
import Career from "../view/Career";
import Contact from "../view/Contact";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="partener" element={<Partner />} />
      <Route path="career" element={<Career />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default MainRoute;
