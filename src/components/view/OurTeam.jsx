import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import Nav from "../common/Nav";
// import Footer from "../common/Footer";
// import OurTeamHeader from "../OurTeamHeader";
// import TeamHead from "../TeamHead";

const OurTeam = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      {/* <Nav /> */}
      {/* <OurTeamHeader /> */}
      {/* <TeamHead /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default OurTeam;
