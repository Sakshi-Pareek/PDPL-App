import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SpecialPartner from "../components/assets/images/png/specialpartner.png";
import CommonBtn from "./common/CommonBtn";

const SpecialPaetner = () => {
  return (
    <>
      <div className="bg_gray">
        <Container className="py-5">
          <Row className=" justify-content-lg-between justify-content-center align-items-center">
            <Col lg={7} className="text-lg-start text-center">
              <h2
                className="fw-bold fs_8xl mx-auto letter_spacing mb-2"
                data-aos="fade-right"
              >
                Our Special Partner
              </h2>
              <p
                className="fs_md letter_spacing fw- lh-base text-black ff_roboto"
                data-aos="fade-right"
              >
                As the exclusive C&F partner for GUFIC Bioscience Ltd in
                Northern-Central India, PDPL ensures quick and smoother delivery
                of high-quality medical products and guarantees reliable access
                to essential medications for better healthcare outcomes.
              </p>
              <a
                href="https://plusdistributions.in/Assets/partners.pdf"
                target="_blank"
                rel="noreferrer"
                data-aos="fade-right"
              >
                {" "}
                <CommonBtn btnname="Learn More"></CommonBtn>
              </a>
            </Col>
            <Col lg={5} xs={10}>
              <img
                src={SpecialPartner}
                alt="SpecialPartner"
                className="w-100 p-sm-5 pt-5 p-0"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SpecialPaetner;
