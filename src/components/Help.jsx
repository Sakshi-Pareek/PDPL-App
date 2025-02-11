import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Help = () => {
  return (
    <>
      <div className="bg_gray lg:py-5 pt-5">
        <Container className="py-4">
          <Row className="d-flex justify-content-lg-between justify-content-center align-items-center">
            <Col lg={6} className="text-lg-start text-center">
              <h2
                className="fw-bold text-black fs_xxl lh-1"
                data-aos="fade-right "
              >
                We’re Here to Help!
              </h2>
              <p
                className="fw-normal text-black fs_md py-2 mb-4 text_justify"
                data-aos="fade-right "
              >
                For any questions or inquiries, please reach out to us using the
                contact options below. Whether you need assistance with our
                products, customer support, or partnership opportunities, our
                team is ready to assist you. We value your feedback and look
                forward to connecting with you!
              </p>
            </Col>
            <Col lg={6}>
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Z8dDxyk87S.webp"
                alt="Image showing customer support and connection with PDPL team"
                className="w-100 updown_ani"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Help;
