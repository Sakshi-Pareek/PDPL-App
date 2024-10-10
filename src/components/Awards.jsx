import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Award from "../components/assets/images/webp/awards.webp";

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
    <Container className="py-5 my-lg-4">
      <h2 className="fw-bold fs_8xl mb-2 text-center" data-aos="fade-down">
        Awards and Recognitions
      </h2>
      <p
        className="ff_roboto fw-normal fs_md letter_spacing mb-0 lh-base text-black text-center"
        data-aos="fade-down"
      >
        PDPL has received numerous prestigious awards for its excellence in
        pharmaceutical logistics. These accolades highlight the company's
        commitment to innovation, sustainability, and reliable service. PDPL's
        focus on operational excellence and customer service has solidified its
        position as a trusted leader and valued partner in the healthcare supply
        chain.
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
                src={Award}
                alt="Awards of company"
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
  );
};

export default Awards;
