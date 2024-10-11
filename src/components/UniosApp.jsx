import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Uniosapp from "../components/assets/images/webp/unios.webp";
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
              className="fs_md letter_spacing fw- lh-base text-black ff_roboto"
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
              <CommonBtn btnname="Read More"></CommonBtn>
            </a>
          </Col>
          <Col lg={5} xs={10}>
            <img
              src={Uniosapp}
              alt="App Created By PDPL"
              className="w-100 p-sm-4 pt-5 p-0"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UniosApp;
