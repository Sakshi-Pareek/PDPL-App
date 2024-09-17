import React from "react";
import { Container } from "react-bootstrap";
import Map from "./assets/images/svg/indiamap.svg";

const OurPresence = () => {
  return (
    <>
      <div className="py-lg-5 py-4 bg_ourpresence">
        <Container className="py-4 text-center">
          <h2 className="fw-bold fs_8xl mx-auto letter_spacing mb-3">
            Our Presence
          </h2>
          <p className="fs_4md letter_spacing fw-normal lh-base text-black ff_roboto mb-3">
            We’re proud of our wide-spread distribution network, spread across
            various states and cities of India. We firmly believe in making
            healthcare accessible to everyone and slowly, we’re moving towards
            our aim of establishing our presence in more regions, to reach as
            many people as we can. Currently, we’re operating in districts of
            Haryana, Punjab, Rajasthan, U.P and Delhi/NCR where we partner with
            hospitals, distributors and retailers to ensure the efficient and
            secure delivery of life-saving medications and healthcare products.
          </p>
          <img src={Map} alt="Map" className="w-100 max_w_800" />
        </Container>
      </div>
    </>
  );
};

export default OurPresence;
