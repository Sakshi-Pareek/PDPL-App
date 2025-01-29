import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CommonBtn from "./common/CommonBtn";

function OurPartner() {
  return (
    <>
      <div className="bg_gray py-lg-5 pt-4">
        <Container className="py-lg-0 py-4">
          <Row className="text-lg-start text-center align-items-center">
            <Col lg={7}>
              <h1
                className="fw-bold text-black fs_xxl lh-1"
                data-aos="fade-right "
              >
                Our Partners
              </h1>
              <p
                className="fw-normal text-black fs_md pt-2 mb-3 text_justify"
                data-aos="fade-right "
              >
                Partnerships have been the key driving force behind PDPL’s
                growth story. We collaborate with manufacturers, distributors,
                and suppliers to deliver high-quality medical requirements.
                Together, we cater to diverse needs, ensuring unwavering
                dedication to customers and strive to make a global impact
                through trusted alliances.
              </p>
              <Link
                to="/about"
                aria-label="Navigate to about page"
                className="fs_md text-black nav_link transition"
              >
                <CommonBtn btnname="Learn More"></CommonBtn>
              </Link>
            </Col>
            <Col lg={5}>
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/u3QYY8sjQU.svg"
                alt="Partnering with PDPL to deliver high-quality medical solutions and global impact"
                className="w-100 updown_ani"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default OurPartner;
