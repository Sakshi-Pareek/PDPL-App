import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nurse from "./assets/images/svg/whatwedo.svg";
const Whatwedo = () => {
  return (
    <>
      <Container className="py-4 my-4">
        <Row className="justify-content-center flex-column-reverse flex-lg-row align-items-center gap-lg-0 gap-4">
          <Col lg={6} xs={10}>
            <img
              src={Nurse}
              alt="Nurse"
              className="w-100 pe-xl-5 pe-lg-4 pe-0 updown_ani h-auto"
            />
          </Col>
          <Col lg={6} className="text-lg-start text-center">
            <h2 className="fw-bold fs_8xl mb-2" data-aos="fade-left">
              What We Do
            </h2>
            <p
              className="ff_roboto fw-normal fs_md letter_spacing mb-0 lh-base text-black"
              data-aos="fade-left"
            >
              At our core, we are a trusted pharmaceutical distribution provider
              in India, delivering only genuine healthcare products, medicines,
              drugs, consumables, implants, masks, PPE kits, and more. Our
              experienced team adeptly leverages digital platforms to ensure
              efficient delivery through proper shipping channels. With an
              unwavering commitment to excellence and end-to-end technological
              solutions, we proudly stand as a leading name in pharmaceutical
              distribution.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Whatwedo;
