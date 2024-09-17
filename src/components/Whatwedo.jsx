import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nurse from "./assets/images/svg/whatwedo.svg";
const Whatwedo = () => {
  return (
    <>
      <Container className="py-4 my-4">
        <Row className="justify-content-center flex-column-reverse flex-lg-row align-items-center gap-lg-0 gap-4">
          <Col lg={6} xs={10}>
            <img src={Nurse} alt="Nurse" className="w-100 pe-xl-5 pe-lg-4 pe-0" />
          </Col>
          <Col lg={6} className="text-lg-start text-center">
            <h2 className="fw-bold fs_8xl mb-2">What we do</h2>
            <p className="ff_roboto fw-normal fs_md letter_spacing mb-0 lh-base text-black">
              We are a trusted pharmaceutical distribution provider in India,
              delivering genuine healthcare products, medicines, drugs,
              consumables, implants, masks, PPE kits, and more. Our experienced
              team leverages digital platforms, and ensures effective delivery
              through proper shipping channels. With a commitment to excellence
              and end-to-end technological solutions, we have become a leading
              name in pharmaceutical distribution.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Whatwedo;
