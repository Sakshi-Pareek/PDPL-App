import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommonBtn from "./common/CommonBtn";

const AsiaBusiness = () => {
  return (
    <>
      <Container className="py-5 my-lg-5">
        <Row
          data-aos="fade-up"
          className="justify-content-between align-items-center gap-lg-0 gap-4"
        >
          <Col xl={7} lg={7} className="text-lg-start text-center">
            <h2 className="fw-bold fs_2xl mx-auto letter_spacing">
              A Top Pharmaceutical Distributor in India for 2023
            </h2>
            <h3 className="fw-bold fs_4md mx-auto letter_spacing text_sky text_justify"></h3>
            <p className="fs_md lh-base text_gray">
              Plus Distributions is honored to be named one of Asia Business
              Outlook's Top 10 Most Promising Pharmaceutical Distributors in
              India for 2023. This recognition reflects our dedication to
              innovation, compliance, and excellent customer service as we
              strive to meet the needs of the healthcare community.
            </p>
            <a
              href="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/2ECKtO7rqA.pdf"
              target="_blank"
              rel="noreferrer"
              data-aos="fade-right"
            >
              <CommonBtn btnname="Read More"></CommonBtn>
            </a>
          </Col>
          <Col lg={4}>
            <img
              src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/IqIZtvFH4P.webp"
              alt="Plus Distribution Pvt. Ltd. has been honored as one of the Top 10 Pharmaceutical Distributors in India for 2023, as recognized by Asia Business Outlook, highlighting the company's excellence and leadership in the pharmaceutical distribution industry"
              className="img-fluid shadow-lg w-100"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AsiaBusiness;
