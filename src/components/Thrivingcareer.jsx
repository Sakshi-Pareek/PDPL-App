import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommonBtn from "./common/CommonBtn";
const Thrivingcareer = () => {
  return (
    <>
      <div className="bg_gray py-lg-5 pt-4">
        <Container className="py-5">
          <Row className="text-lg-start text-center align-items-center">
            <Col lg={7}>
              <h2
                className="fw-bold text-black fs_xxl lh-1"
                data-aos="fade-right "
              >
                Discover a Flourishing Career at PDPL!
              </h2>
              <p
                className="fw-normal text-black fs_md py-2 mb-4"
                data-aos="fade-right"
              >
                PDPL offers exciting career opportunities for you! Join our
                dynamic team, committed to innovation, growth, and making a
                meaningful impact in the community.
              </p>
              <a
                href="mailto:hr.workspace@plusdistributions.in"
                data-aos="fade-right "
              >
                <CommonBtn btnname="Join Our Team!"></CommonBtn>
              </a>
            </Col>
            <Col lg={5}>
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/edEBT8n6TZ.svg"
                alt="Career Opportunities at PDPL - Join our dynamic and innovative team"
                className="w-100 updown_ani"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Thrivingcareer;
