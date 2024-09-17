import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Clients from "./assets/images/svg/our_clients.svg";

const OurClients = () => {
  return (
    <>
      <div className="bg_sky py-lg-5 pb-md-3">
        <Container className="py-lg-5 pb-5 text-lg-start text-center">
          <Row className="justify-content-center align-items-center flex-column-reverse flex-lg-row">
            <Col lg={7}>
              <h2 className="fw-bold fs_2xl letter_spacing mb-3 text-white lh-1">
                We provide the best service to our clients and the vendors
              </h2>
              <p className="fs_6sm letter_spacing fw-normal lh-base text-white ff_roboto mb-3">
                With our extensive network and cutting-edge technology, we
                seamlessly collect, warehouse, and deliver medicines to
                hospitals and medical stores across India. We have exclusive
                partnerships with renowned hospitals like Park Group, Jaipur
                Golden Hospital, and Medeor Group, managing their pharmaceutical
                distribution. Our large warehousing setup in multiple locations
                enables us to cater to wholesale and retail requirements. As an
                exclusive distributor, we hold distribution rights for reputed
                pharmaceutical companies, ensuring access to high-quality
                products for healthcare institutions.
              </p>
              <button className="learn_btn fw-medium fs_md rounded-5 cursor_pointer transition bg-white py-2 px-4">
                Learn More
              </button>
            </Col>
            <Col lg={5}>
              <img src={Clients} alt="Clients" className="w-100" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurClients;