import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Clients from "./assets/images/svg/our_clients.svg";
import Arrow from "./assets/images/webp/arrow.png";
import { Link } from "react-router-dom";

const OurClients = () => {
  return (
    <>
      <div className="bg_sky py-lg-5 pb-md-3">
        <Container className="py-lg-5 pb-5 text-lg-start text-center">
          <Row className="justify-content-center align-items-center flex-column-reverse flex-lg-row">
            <Col lg={7}>
              <h2
                className="fw-bold fs_2xl letter_spacing mb-3 text-white lh-sm"
                data-aos="fade-right"
              >
                We Provide The Best Service To Our Clients And The Vendors
              </h2>
              <p
                className="fs_6sm letter_spacing fw-normal lh-base text-white ff_roboto mb-3"
                data-aos="fade-right"
              >
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
              <div data-aos="fade-right">
                <Link
                  to="/about"
                  aria-label="Navigate to About page"
                  className="fs_md text-black nav_link transition position-relative"
                >
                  <img
                    src={Arrow}
                    alt="arrow"
                    width="80"
                    height="50"
                    class="position-absolute arrow"
                  ></img>
                  <button className="learn_btn fw-medium fs_md rounded-3 cursor_pointer transition bg-white py-2 px-4">
                    Learn More
                  </button>
                </Link>
              </div>
            </Col>
            <Col lg={5}>
              <img
                src={Clients}
                alt="Company Clients"
                className="w-100 updown_ani"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurClients;
