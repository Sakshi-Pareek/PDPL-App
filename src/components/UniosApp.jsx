import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommonBtn from "./common/CommonBtn";

const UniosApp = () => {
  return (
    <div className="bg_gray">
      <Container className="py-5">
        <Row className="justify-content-lg-between justify-content-center align-items-center">
          <Col lg={7} className="text-lg-start text-center">
            <h2
              className="fw-bold fs_8xl mx-auto letter_spacing mb-2"
              data-aos="fade-right"
            >
              Unios App
            </h2>
            <p
              className="fs_md letter_spacing fw- lh-base text-black text_justify"
              data-aos="fade-right"
            >
              Unios is an advanced digital platform developed by PDPL to
              revolutionize the healthcare distribution process. Designed to be
              efficient and user-friendly, Unios seamlessly connects healthcare
              providers, hospitals, and distributors across India, ensuring a
              streamlined, reliable, and responsive supply chain for medical
              products and services.
            </p>
            <a
              href="https://www.unios.in/"
              target="_blank"
              rel="noreferrer"
              data-aos="fade-right"
            >
              {" "}
              <CommonBtn btnname="Explore"></CommonBtn>
            </a>
          </Col>
          <Col lg={5} xs={10}>
            <img loading="lazy" 
              src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/nDAkqDHyMd.webp"
              alt="Unios app by Plus Distribution Pvt. Ltd. (PDPL) – Transforming healthcare distribution across India with innovative technology for seamless operations and improved supply chain management"
              className="w-100 p-sm-4 pt-5 p-0"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UniosApp;
