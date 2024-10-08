import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export const Herosection = () => {
  const slider = React.useRef(null);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <div id="Home">
        <Slider ref={slider} {...settings}>
          <div className="herobg1 position-relative d-flex justify-content-center align-items-center">
            <div className="hero_section_layer position-absolute h-100 w-100"></div>
            <Container className="py-5 position-relative z-1">
              <Row className="text-md-start text-center">
                <Col lg={8} className="py-5">
                  <h1
                    className="fw-bold text-white fs_xxl"
                    data-aos="fade-right"
                  >
                    Delivering Health, Empowering Lives
                  </h1>
                  <p
                    className="fw-normal text-white fs_md py-2 mb-4"
                    data-aos="fade-right"
                  >
                    We deliver healthcare and empower lives through our
                    experienced team and digital platforms. Our services include
                    Pharma distribution, temperature-controlled storage, global
                    distribution, customs clearance, and track-and-trace
                    capabilities. With our commitment to excellence, we are a
                    trusted provider in India, making a positive impact on
                    healthcare.
                  </p>
                  <div data-aos="fade-right ">
                    <Link
                      to="/about" aria-label="Navigate to about page"
                      className="fs_md text-black nav_link transition"
                    >
                      <button className="learn_btn fw-medium fs_md rounded-3 cursor_pointer transition bg-white py-2 px-4">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>{" "}
          <div className="herobg2 position-relative d-flex justify-content-center align-items-center">
            <div className="hero_section_layer position-absolute h-100 w-100"></div>
            <Container className="py-5 position-relative z-1">
              <Row className="text-md-start text-center">
                <Col lg={8} className="py-5">
                  <h1
                    className="fw-bold text-white fs_xxl"
                    data-aos="fade-right "
                  >
                    Partnering for Better Healthcare Access
                  </h1>
                  <p
                    className="fw-normal text-white fs_md py-2 mb-4"
                    data-aos="fade-right "
                  >
                    We deliver healthcare and empower lives through our
                    experienced team and digital platforms. Our services include
                    Pharma distribution, temperature-controlled storage, global
                    distribution, customs clearance, and track-and-trace
                    capabilities. With our commitment to excellence, we are a
                    trusted provider in India, making a positive impact on
                    healthcare.
                  </p>
                  <div data-aos="fade-right ">
                    <Link aria-label="Navigate to About page"
                      to="/about" 
                      className="fs_md text-black nav_link transition"
                    >
                      <button className="learn_btn fw-medium fs_md rounded-3 cursor_pointer transition bg-white py-2 px-4">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>{" "}
          <div className="herobg3 position-relative d-flex justify-content-center align-items-center">
            <div className="hero_section_layer position-absolute h-100 w-100"></div>
            <Container className="py-5 position-relative z-1">
              <Row className="text-md-start text-center">
                <Col lg={8} className="py-5">
                  <h1
                    className="fw-bold text-white fs_xxl"
                    data-aos="fade-right "
                  >
                    Quality Products, Trusted Service
                  </h1>
                  <p
                    className="fw-normal text-white fs_md py-2 mb-4"
                    data-aos="fade-right "
                  >
                    We deliver healthcare and empower lives through our
                    experienced team and digital platforms. Our services include
                    Pharma distribution, temperature-controlled storage, global
                    distribution, customs clearance, and track-and-trace
                    capabilities. With our commitment to excellence, we are a
                    trusted provider in India, making a positive impact on
                    healthcare.
                  </p>
                  <div data-aos="fade-right ">
                    <Link 
                      to="/about" aria-label="Navigate to about page"
                      className="fs_md text-black nav_link transition"
                    >
                      <button className="learn_btn fw-medium fs_md rounded-3 cursor_pointer transition bg-white py-2 px-4">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>{" "}
          <div className="herobg4 position-relative d-flex justify-content-center align-items-center">
            <div className="hero_section_layer position-absolute h-100 w-100"></div>
            <Container className="py-5 position-relative z-1">
              <Row className="text-md-start text-center">
                <Col lg={8} className="py-5">
                  <h1
                    className="fw-bold text-white fs_xxl"
                    data-aos="fade-right "
                  >
                    Health Solutions, Seamless Delivery
                  </h1>
                  <p
                    className="fw-normal text-white fs_md py-2 mb-4"
                    data-aos="fade-right "
                  >
                    We deliver healthcare and empower lives through our
                    experienced team and digital platforms. Our services include
                    Pharma distribution, temperature-controlled storage, global
                    distribution, customs clearance, and track-and-trace
                    capabilities. With our commitment to excellence, we are a
                    trusted provider in India, making a positive impact on
                    healthcare.
                  </p>
                  <div data-aos="fade-right ">
                    <button className="learn_btn fw-medium fs_md rounded-3 cursor_pointer transition bg-white py-2 px-4">
                      Learn More
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>{" "}
        </Slider>
      </div>
    </>
  );
};
