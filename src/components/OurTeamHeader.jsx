import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CareerHero from "../components/assets/images/svg/careerAtPdpl.svg";
const OurTeamHeader = () => {
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
                Meet Our Teams
              </h1>
              <p
                className="fw-normal text-black fs_md pt-2"
                data-aos="fade-right"
              >
                At PDPL, we’re driven by a team of dedicated professionals who
                bring a wealth of experience, passion, and creativity to the
                table. Our team members are not only experts in their fields but
                also share a common vision to create impactful solutions and
                deliver exceptional service to our clients.
              </p>
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

export default OurTeamHeader;
