import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HealthcareDistribution = () => {
  return (
    <>
      <div className="bg_gray py-lg-4" data-aos="fade-in">
        <Container className="py-5">
          <Row className="align-items-center gap-lg-0 gap-3">
            <Col
              lg={6}
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <h2 className="fw-bold fs_8xl mx-auto letter_spacing mb-3 text-lg-start text-center">
                Transform Your Healthcare Distribution
              </h2>
              <p className="fs_8sm letter_spacing fw-normal lh-base text-black ff_roboto text-lg-start text-center">
                Operating across multiple locations in India, PDPL serves as the
                heart and brain of business operations, ensuring seamless
                processes and efficient execution to drive success.
              </p>
            </Col>
            <Col
              lg={6}
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/u9YhBmGTR3.webp"
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
