import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const opportunities = [
  {
    title: "Partner Store",
    description:
      "A Partner Store by PDPL is a mini warehouse for local pharmaceutical distribution. It offers low investment, PDPL support, and a chance to contribute to the growing healthcare sector while managing inventory and deliveries.",
    animation: "fade-up",
  },
  {
    title: "Rent Your Property",
    description:
      "Rent Your Property to PDPL and turn it into a Partner Store, earning steady rental income while supporting pharmaceutical distribution for a trusted healthcare brand.",
    animation: "fade-right",
  },
  {
    title: "Seller",
    description:
      "As a Seller, list your pharmaceutical products with PDPL to reach a vast customer base quickly. PDPL ensures seamless product visibility, efficient order management, and timely deliveries. Connect with your customers within hours and grow your business effortlessly!",
    animation: "fade-left",
  },
  {
    title: "Deliver",
    description:
      "Join PDPL as a Delivery Partner to transport pharmaceutical products from Partner Stores directly to customers. Ensure timely and secure deliveries while contributing to a reliable healthcare supply chain. Be a vital link in connecting customers to essential medicines.",
    animation: "fade-up",
  },
];

const GrowWithUs = () => {
  return (
    <Container className="py-lg-5 pt-4 my-4">
      <h5
        className="fw-bold fs_8xl mx-auto letter_spacing mb-4 text-center"
        data-aos="zoom-in"
      >
        Opportunities To Grow With Us
      </h5>
      <Row className="w-md-75 mx-auto d-flex align-items-stretch">
        {opportunities.map((opportunity, index) => (
          <Col
            lg={6}
            key={index}
            data-aos={opportunity.animation}
            className="mb-4"
          >
            <div
              className="p-4 rounded border h-100 cursor_pointer"
              style={{
                background: "linear-gradient(rgb(215, 231, 239), white)",
              }}
            >
              <h4>{opportunity.title}</h4>
              <p className="mb-0">{opportunity.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GrowWithUs;
