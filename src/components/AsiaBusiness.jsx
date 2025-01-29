import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AsiaBusiness = () => {
  return (
    <>
      <Container className="py-5 my-lg-5">
        <Row
          data-aos="fade-up"
          className="justify-content-between align-items-center"
        >
          <Col xl={7} lg={7}>
            <h2 className="fw-bold fs_2xl mx-auto letter_spacing">
              A Top Pharmaceutical Distributor in India for 2023
            </h2>
            <h3 className="fw-bold fs_4md mx-auto letter_spacing text_sky text_justify"></h3>
            <p className="fs_md lh-base text_gray mb-0">
              Plus Distributions is honored to be named one of Asia Business
              Outlook's Top 10 Most Promising Pharmaceutical Distributors in
              India for 2023. This recognition reflects our dedication to
              innovation, compliance, and excellent customer service as we
              strive to meet the needs of the healthcare community.
            </p>
          </Col>
          <Col lg={4}>
            {" "}
            <img
              src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/IqIZtvFH4P.webp"
              alt="Plus Distribution Pvt. Ltd. recognized as a Top 10 Pharmaceutical Distributor in India by Asia Business Outlook 2023"
              className="img-fluid shadow-lg w-100"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AsiaBusiness;
