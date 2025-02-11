import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Abouthero = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfService = currentYear - 1993;
  return (
    <>
      <div className="bg_gray lg:py-5 pt-5">
        <Container className="py-lg-5 mt-lg-5">
          <Row className="d-flex justify-content-lg-between justify-content-center align-items-center pb-5">
            <Col lg={7} className="text-lg-start text-center">
              <h2
                className="fw-bold text-black fs_xxl lh-1"
                data-aos="fade-right "
              >
                We are PDPL
              </h2>
              <p
                className="fw-normal text-black fs_md py-2 mb-4 text_justify"
                data-aos="fade-right "
              >
                For over {yearsOfService} years, PDPL has been delivering health
                and empowering lives. Established in 1993 by Mr. Anil Kumar and
                Mr. Ashwani Kumar Bhatia, we are a trusted pharmaceutical
                distributor in India. Operating as Plus Distribution Pvt. Ltd.,
                we are committed to providing genuine healthcare products under
                a robust regulatory framework, ensuring reliability and customer
                satisfaction.
              </p>
            </Col>
            <Col lg={4} xs={7}>
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/kT12dBWzNV.webp"
                alt="Plus Distribution Pvt. Ltd. (PDPL) Logo - Trusted Pharmaceutical Distributor in India"
                className="w-100 updown_ani h-auto"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Abouthero;
