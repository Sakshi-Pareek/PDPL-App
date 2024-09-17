import React from "react";
import { Container } from "react-bootstrap";
import Commonbtn from "./common/CommonBtn";

const Abouthero = () => {
  return (
    <>
      <div className="bg_abouthero position-relative">
        <video
          className="modal_view"
          src="https://videos.pexels.com/video-files/4291725/4291725-uhd_2560_1440_25fps.mp4"
          autoPlay
          loop
          muted
          controls
          width="100%"

        ></video>
        <Container className="py-5 position-absolute top-50 start-50 translate-middle">
          <div className="bg_gray mx-auto p-md-5 p-4 rounded w-50">
            <h2 className="text-center text_blue fs_8lg fw-bold">
              We are PDPL
            </h2>
            <p className="text-black fw-medium fs_2md text-center">
              At PDPL,we've been Delivering Health and Empowering Lives for over
              25 years. A trusted pharmaceutical distributor in India, PDPL was
              founded in 1993 by Mr. Anil Kumar and Mr. Ashwani Kumar Bhatia. We
              prioritize genuine healthcare products and operate under a strong
              regulatory framework as Plus Distribution Pvt. Ltd. With
              unwavering reliability and a commitment to customer satisfaction,
              we have established ourselves as a leading pharma distributor in
              India.
            </p>
            <div className="text-center">
              <Commonbtn btnname="Get In Touch"></Commonbtn>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Abouthero;
