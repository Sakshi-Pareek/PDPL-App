import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CommonBtn from "./common/CommonBtn";

function FranchiseProgram() {
  return (
    <>
      <div className="bg_gray py-lg-5 py-4">
        <Container className="my-lg-5 my-4">
          <Row className="text-lg-start text-center align-items-center justify-content-between gap-lg-0 gap-3">
            <Col lg={7}>
              <h2
                className="fw-bold text-black fs_xxl lh-1"
                data-aos="fade-right"
              >
                Build A Small Business
              </h2>
              <p
                className="fw-normal text-black fs_md pt-2 mb-3 text_justify"
                data-aos="fade-right"
              >
                Are you a passionate entrepreneur looking for an exciting
                opportunity? <br />
                PDPL introduces a Partner Path Branding Opportunity for aspiring
                entrepreneurs, empowering small businesses to grow even in
                untapped cities across India. This initiative establishes a
                wholesale and retail franchise program, creating opportunities
                for small players in underdeveloped areas to thrive and
                contribute to the healthcare distribution network.
              </p>
              <Link
                to="/"
                aria-label="Navigate to about page"
                className="fs_md text-black nav_link transition"
              >
                <CommonBtn btnname="Learn More"></CommonBtn>
              </Link>
            </Col>
            <Col lg={5} data-aos="fade-left">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/wr4KyfncFu.jpg"
                alt="Partner with PDPL"
                className="w-100 updown_ani"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FranchiseProgram;
