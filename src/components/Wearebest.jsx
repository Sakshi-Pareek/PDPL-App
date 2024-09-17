import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Business1 from "./assets/images/svg/distributre1.svg";
import Business2 from "./assets/images/svg/distributre2.svg";
import Business3 from "./assets/images/svg/distributre3.svg";
import Business4 from "./assets/images/svg/distributre1.svg";

const Wearebest = () => {
  const data = [
    {
      image: Business1,
    },
    {
      image: Business2,
    },
    {
      image: Business3,
    },
    {
      image: Business4,
    },
  ];
  return (
    <>
      <div className="distributor_bg py-5 bg_gray">
        <Container className="py-md-3">
          <h2 className="text-center fw-bold fs_8xl mx-auto letter_spacing mb-0">
            We Are The Best Pharmaceutical<br className=" d-lg-block d-none"/> Distributor In India
          </h2>
          <Row className="mt-xl-4 pt-md-5 pt-4 justify-content-center">
            {data.map((a, index) => (
              <Col className="mb-4" lg={3} md={6} sm={6} xs={10} key={index}>
                <div className="distributor_card bg-white rounded-4 cursor_pointer d-flex flex-column gap-2 h-100 transition p-4">
                  <img
                    src={a.image}
                    alt="image"
                    width="186px"
                    height="131px"
                    className="mx-auto"
                  />
                  <h3 className="ff_roboto fs_2lg fw-bold text-center mb-0">30+</h3>
                  <p className="text-center fs_md fw-normal ff_roboto mb-0">Warehouses Across India</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Wearebest;
