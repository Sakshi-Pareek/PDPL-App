import React from "react";
import { Container } from "react-bootstrap";

function OurPartner() {
  return (
    <>
      <div className="bg_ourpartner py-5 px-lg-0 px-3">
        <Container className="p-xl-5 p-sm-4 p-3 my-lg-5 my-sm-4 max_w_835 mx-sm-auto rounded text-center position-relative z-2">
          <div className="gray_layer position-absolute top-0 start-0 w-100 h-100 z-n1 rounded"></div>
          <h2
            className="fw-bold fs_8xl mx-auto letter_spacing mb-3"
            data-aos="zoom-in"
          >
            Our Partners
          </h2>
          <p
            className="fs_md letter_spacing fw-medium lh-base text-black ff_roboto mb-3"
            data-aos="zoom-in"
          >
            Partnerships have been the key driving force behind PDPL’s growth
            story. We collaborate with manufacturers, distributors, and
            suppliers to deliver high-quality medical requirements. Together, we
            cater to diverse needs, ensuring unwavering dedication to customers
            and strive to make a global impact through trusted alliances.
          </p>
        </Container>
      </div>
    </>
  );
}

export default OurPartner;
