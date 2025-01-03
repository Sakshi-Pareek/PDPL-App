import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "../view/Homepage";
import About from "../view/About";
import Partner from "../view/Partner";
import Career from "../view/Career";
import Contact from "../view/Contact";
import OurTeam from "../view/OurTeam";
import Infrastructure from "../view/Infrastructure";


const MainRoute = () => {
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="infrastructure" element={<Infrastructure />} />
        <Route path="partner" element={<Partner />} />
        <Route path="career" element={<Career />} />
        <Route path="teams" element={<OurTeam />} />
        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
