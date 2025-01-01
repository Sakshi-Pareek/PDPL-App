import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UniosSaleDashbord from "../components/assets/images/webp/UniosSaleDashBoard.png";
import CommonBtn from "./common/CommonBtn";

const HealthcareDistribution = () => {
  return (
    <>
      <div className="bg_gray py-lg-4">
        <Container className="py-5">
          <Row className="align-items-center gap-lg-0 gap-3">
            <Col lg={6}>
              <h2
                className="fw-bold fs_8xl mx-auto letter_spacing mb-3 text-lg-start text-center"
                data-aos="fade-down"
              >
                Transform Your Healthcare Distribution
              </h2>
              <p className="fs_8sm letter_spacing fw-normal lh-base text-black ff_roboto mb-0 text-lg-start text-center">
                Unios is an innovative platform that streamlines healthcare
                distribution for pharmaceutical and life sciences partners. With
                real-time insights, seamless logistics, and advanced analytics,
                Unios ensures efficiency, compliance, and excellence in the
                delivery of critical healthcare products.
              </p>
            </Col>
            <Col lg={6}>
              <img
                src={UniosSaleDashbord}
                alt="Unios Sale Dashboard Image"
                className="w-100"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HealthcareDistribution;
