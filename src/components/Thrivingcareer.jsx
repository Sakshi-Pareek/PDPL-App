import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CareerHero from "../components/assets/images/svg/careerAtPdpl.svg";
import CommonBtn from "./common/CommonBtn";
const Thrivingcareer = () => {
  return (
    <>
      <div className="bg_gray py-lg-5 pt-4">
        <Container className="py-5">
          <Row className="text-lg-start text-center align-items-center">
            <Col lg={7}>
              <h1
                className="fw-bold text-black fs_xxl lh-1"
                data-aos="fade-right "
              >
                Discover a Flourishing Career at PDPL!
              </h1>
              <p
                className="fw-normal text-black fs_md py-2 mb-4"
                data-aos="fade-right"
              >
                PDPL offers exciting career opportunities for you! Join our
                dynamic team, committed to innovation, growth, and making a
                meaningful impact in the community.
              </p>
              <a href="#hire" data-aos="fade-right ">
                <CommonBtn btnname="Explore Career Opportunities"></CommonBtn>
              </a>
            </Col>
            <Col lg={5}>
              <img
                src={CareerHero}
                alt="Career at PDPL"
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
