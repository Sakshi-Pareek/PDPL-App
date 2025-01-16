import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Arrow from "./assets/images/webp/arrow.webp";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import CareerHero1 from "../components/assets/images/webp/hero2.webp";
import CareerHero2 from "../components/assets/images/webp/hero1.webp";
import CareerHero3 from "../components/assets/images/webp/hero3.webp";
import CareerHero4 from "../components/assets/images/webp/hero4.webp";

const slidesData = [
  {
    title: "Delivering Health, Empowering Lives",
    image: CareerHero1,
    description:
      "We deliver healthcare and empower lives through our experienced team and digital platforms. Our services include Pharma distribution, temperature-controlled storage, global distribution, customs clearance, and track-and-trace capabilities. With our commitment to excellence, we are a trusted provider in India, making a positive impact on healthcare.",
  },
  {
    title: "Partnering for Better Healthcare Access",
    image: CareerHero2,
    description:
      "We deliver healthcare and empower lives through our experienced team and digital platforms. Our services include Pharma distribution, temperature-controlled storage, global distribution, customs clearance, and track-and-trace capabilities. With our commitment to excellence, we are a trusted provider in India, making a positive impact on healthcare.",
  },
  {
    title: "Quality Products, Trusted Service",
    image: CareerHero3,
    description:
      "We deliver healthcare and empower lives through our experienced team and digital platforms. Our services include Pharma distribution, temperature-controlled storage, global distribution, customs clearance, and track-and-trace capabilities. With our commitment to excellence, we are a trusted provider in India, making a positive impact on healthcare.",
  },
  {
    title: "Health Solutions, Seamless Delivery",
    image: CareerHero4,
    description:
      "We deliver healthcare and empower lives through our experienced team and digital platforms. Our services include Pharma distribution, temperature-controlled storage, global distribution, customs clearance, and track-and-trace capabilities. With our commitment to excellence, we are a trusted provider in India, making a positive impact on healthcare.",
  },
];

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
    <div id="Home" className="bg_sky bg_hero pt-lg-5 pt-4">
      <Slider ref={slider} {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index}>
            <Container>
              <Row className="text-lg-start text-center align-items-center gap-lg-0 gap-5 py-5">
                <Col lg={7}>
                  <h1
                    className="fw-bold text-white fs_xxl"
                    data-aos="fade-right"
                  >
                    {slide.title}
                  </h1>
                  <p
                    className="fw-normal text-white fs_md py-2 mb-4"
                    data-aos="fade-right"
                  >
                    {slide.description}
                  </p>

                  <Link
                    to="/about"
                    aria-label="Navigate to about page"
                    className="fs_md text-black nav_link transition position-relative"
                  >
                    {" "}
                    <img
                      src={Arrow}
                      alt="arrow"
                      width="80"
                      height="50"
                      className="position-absolute arrow"
                    />
                    <button className="learn_btn fw-medium fs_md rounded-3 cursor_pointer transition bg-white py-2 px-4">
                      Get Started
                    </button>{" "}
                  </Link>
                </Col>
                <Col lg={5}>
                  <img
                    src={slide.image}
                    alt="Career at PDPL"
                    className="w-100 updown_ani"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        ))}
      </Slider>
    </div>
  );
};
