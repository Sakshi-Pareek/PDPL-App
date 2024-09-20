import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EqualOpp from "../components/assets/images/png/equaly_opp.png";

const JoinPDPL = () => {
  return (
    <>
      <Container className="py-5 my-4">
        <Row className="justify-content-center align-items-center gap-lg-0 gap-4">
          <Col lg={6}>
            <div className="rounded-4 w-100 overflow-hidden contact_icon transition cursor_pointer">
              <img src={EqualOpp} alt="EqualOpp" className="transition w-100" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="ps-lg-5 ps-0">
              <h3 className="text_sky fs_4md fw-semibold">
                Equal Opportunities
              </h3>
              <p>
                At PDPL, we are committed to fostering a workplace that promotes
                equal opportunities for all. We believe in creating an inclusive
                environment where talent is recognized and diversity is
                celebrated, ensuring that every individual has the chance to
                grow and succeed.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JoinPDPL;
