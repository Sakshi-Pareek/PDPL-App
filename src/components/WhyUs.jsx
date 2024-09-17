import React, { useState } from "react";
import { Container } from "react-bootstrap";

const WhyUs = () => {
  return (
    <>
      <div className="bg_gray py-4">
        <Container className="py-5">
          <h5 className="text-center fs_md text_blue fw-medium mb-1">
            Why Choose Us
          </h5>
          <h4 className="text-center fs_8lg text_blue fw-bold mb-2">
            Best Multispecialty Hospital
          </h4>
          <p className="lg-mt-3 mt-3 fs_6sm fw-normal text-black text-center px-lg-5 mx-lg-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
            convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet.
          </p>
          <div className="text-center">
            <video
              className="modal_view"
              src="https://media.istockphoto.com/id/1271157692/video/time-lapse-of-people-walking-in-a-hospital-corridor-and-reception-desk.mp4?s=mp4-640x640-is&k=20&c=GI6LG3JJCyL5s2rf_dtM6ks0mVHji27KchhUSVc8ClA="
              autoPlay
              loop
              muted
              controls
              width="100%"
            ></video>
          </div>
        </Container>
      </div>
    </>
  );
};

export default WhyUs;
