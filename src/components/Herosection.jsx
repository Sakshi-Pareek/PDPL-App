import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

export const Herosection = () => {
  const slider = React.useRef(null);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <div>
        <Slider ref={slider} {...settings}>
          <div className="herobg1 position-relative d-flex justify-content-center align-items-center">
            <div className="hero_section_layer position-absolute h-100 w-100"></div>
            <Container className="py-5 position-relative z-1">
              <Row className="text-md-start text-center">
                <Col lg={8} className="py-5">
                  <h1 className="fw-bold text-white fs_xxl">
                    Delivering Health, Empowering Lives
                  </h1>
                  <p className="fw-normal text-white fs_md py-2 mb-4">
                    We deliver healthcare and empower lives through our
                    experienced team and digital platforms. Our services include
                    Pharma distribution, temperature-controlled storage, global
                    distribution, customs clearance, and track-and-trace
                    capabilities. With our commitment to excellence, we are a
                    trusted provider in India, making a positive impact on
                    healthcare.
                  </p>
                  <button className="learn_btn fw-medium fs_md rounded-5 cursor_pointer transition bg-white py-2 px-4">
                    Learn More
                  </button>
                </Col>
              </Row>
            </Container>
          </div>{" "}
          <div className="herobg2 position-relative d-flex justify-content-center align-items-center">
            <div className="hero_section_layer position-absolute h-100 w-100"></div>
            <Container className="py-5 position-relative z-1">
              <Row className="text-md-start text-center">
                <Col lg={8} className="py-5">
                  <h1 className="fw-bold text-white fs_xxl">
                    Partnering for Better Healthcare Access
                  </h1>
                  <p className="fw-normal text-white fs_md py-2 mb-4">
                    We deliver healthcare and empower lives through our
                    experienced team and digital platforms. Our services include
                    Pharma distribution, temperature-controlled storage, global
                    distribution, customs clearance, and track-and-trace
                    capabilities. With our commitment to excellence, we are a
                    trusted provider in India, making a positive impact on
                    healthcare.
                  </p>
                  <button className="learn_btn fw-medium fs_md rounded-5 cursor_pointer transition bg-white py-2 px-4">
                    Learn More
                  </button>
                </Col>
              </Row>
            </Container>
          </div>{" "}
          <div className="herobg3 position-relative d-flex justify-content-center align-items-center">
            <div className="hero_section_layer position-absolute h-100 w-100"></div>
            <Container className="py-5 position-relative z-1">
              <Row className="text-md-start text-center">
                <Col lg={8} className="py-5">
                  <h1 className="fw-bold text-white fs_xxl">
                    Quality Products, Trusted Service
                  </h1>
                  <p className="fw-normal text-white fs_md py-2 mb-4">
                    We deliver healthcare and empower lives through our
                    experienced team and digital platforms. Our services include
                    Pharma distribution, temperature-controlled storage, global
                    distribution, customs clearance, and track-and-trace
                    capabilities. With our commitment to excellence, we are a
                    trusted provider in India, making a positive impact on
                    healthcare.
                  </p>
                  <button className="learn_btn fw-medium fs_md rounded-5 cursor_pointer transition bg-white py-2 px-4">
                    Learn More
                  </button>
                </Col>
              </Row>
            </Container>
          </div>{" "}
          <div className="herobg4 position-relative d-flex justify-content-center align-items-center">
            <div className="hero_section_layer position-absolute h-100 w-100"></div>
            <Container className="py-5 position-relative z-1">
              <Row className="text-md-start text-center">
                <Col lg={8} className="py-5">
                  <h1 className="fw-bold text-white fs_xxl">
                    Health Solutions, Seamless Delivery
                  </h1>
                  <p className="fw-normal text-white fs_md py-2 mb-4">
                    We deliver healthcare and empower lives through our
                    experienced team and digital platforms. Our services include
                    Pharma distribution, temperature-controlled storage, global
                    distribution, customs clearance, and track-and-trace
                    capabilities. With our commitment to excellence, we are a
                    trusted provider in India, making a positive impact on
                    healthcare.
                  </p>
                  <button className="learn_btn fw-medium fs_md rounded-5 cursor_pointer transition bg-white py-2 px-4">
                    Learn More
                  </button>
                </Col>
              </Row>
            </Container>
          </div>{" "}
        </Slider>
      </div>
    </>
  );
};
