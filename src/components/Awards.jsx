import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Awards = () => {
  const awardsData = [
    {
      title: "Dominant player in Institutional Business (2015-2016)",
      organization: "Emcure Pharmaceuticals Limited",
    },
    {
      title: "Highest Revenue Achiever (2023)",
      organization: "Dr. Reddy's",
    },
    {
      title: "Trusted Partner Award (SAHYOG) (2023)",
      organization: "Dr. Reddy's",
    },
    {
      title: "Excellence in Pharmaceuticals Award (2022)",
      organization: "Healthcare Logistics Association",
    },
  ];

  return (
    <div className="bg_gray py-lg-4">
      <Container className="py-5 text-center">
        <h2 className="fw-bold fs_8xl mb-2 text-center" data-aos="fade-down">
          Awards and Recognitions
        </h2>
        <img
          src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/SDWJuEMtO0.webp"
          alt="PDPL Awards and Recognitions - Excellence in Pharmaceutical Logistics"
          className="w-100 max_w_500 mx-auto"
          data-aos="fade-down"
        />
        <p
          className="fw-normal fs_md letter_spacing mb-0 lh-base text-black text-center"
          data-aos="fade-down"
        >
          PDPL has received numerous prestigious awards for its excellence in
          pharmaceutical logistics. These accolades highlight the company's
          commitment to innovation, sustainability, and reliable service. PDPL's
          focus on operational excellence and customer service has solidified
          its position as a trusted leader and valued partner in the healthcare
          supply chain.
        </p>
        <Row className="mt-lg-5 mt-4 justify-content-center">
          {awardsData.map((award, index) => (
            <Col
              key={index}
              sm={5}
              className="text-center d-flex flex-column justify-content-center"
              data-aos="fade-down"
            >
              <div className="award-card d-flex flex-column align-items-center p-3 h-100">
                <img
                  src='https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/MyGqzXQ6Um.webp'
                  alt="Award Trophy Representing PDPL's Achievements in Pharmaceutical Distribution"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
                <h5 className="fw-bold fs_md my-3 text-center px-5">
                  {award.title}
                </h5>
                <p className="text-center mb-0">{award.organization}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Awards;
