import React from "react";
import { Container } from "react-bootstrap";

const Abouthero = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfService = currentYear - 1993;
  return (
    <>
      <div className="bg_abouthero py-5 px-lg-0 px-3">
        <div className="pb-lg-5">
          <Container className="p-xl-5 p-sm-4 p-3 my-lg-5 my-sm-4 max_w_835 mx-sm-auto rounded text-center position-relative z-2">
            <div className="gray_layer position-absolute top-0 start-0 w-100 h-100 z-n1 rounded"></div>
            <h2
              className="fw-bold fs_8xl mx-auto letter_spacing mb-3"
              data-aos="zoom-in"
            >
              We are PDPL
            </h2>
            <p
              className="fs_md letter_spacing fw-medium lh-base text-black ff_roboto mb-3"
              data-aos="zoom-in"
            >
              For over {yearsOfService} years, PDPL has been delivering health
              and empowering lives. Established in 1993 by Mr. Anil Kumar and
              Mr. Ashwani Kumar Bhatia, we are a trusted pharmaceutical
              distributor in India. Operating as Plus Distribution Pvt. Ltd., we
              are committed to providing genuine healthcare products under a
              robust regulatory framework, ensuring reliability and customer
              satisfaction.
            </p>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Abouthero;
