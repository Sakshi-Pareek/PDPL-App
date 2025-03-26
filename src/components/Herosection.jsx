import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

const slidesData = [
  {
    title: "Delivering Health, Empowering Lives",
    image:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/ICdBPzRxeb.webp",
    description:
      "We deliver healthcare and empower lives through our experienced team and digital platforms. Our services include Pharma distribution, temperature-controlled storage, global distribution, customs clearance, and track-and-trace capabilities. With our commitment to excellence, we are a trusted provider in India, making a positive impact on healthcare.",
  },
  {
    title: "Partnering for Better Healthcare Access",
    image:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/BTotAwhESm.webp",
    description:
      "We deliver healthcare and empower lives through our experienced team and digital platforms. Our services include Pharma distribution, temperature-controlled storage, global distribution, customs clearance, and track-and-trace capabilities. With our commitment to excellence, we are a trusted provider in India, making a positive impact on healthcare.",
  },
  {
    title: "Quality Products, Trusted Service",
    image:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/gxs7yxyLhf.webp",
    description:
      "We deliver healthcare and empower lives through our experienced team and digital platforms. Our services include Pharma distribution, temperature-controlled storage, global distribution, customs clearance, and track-and-trace capabilities. With our commitment to excellence, we are a trusted provider in India, making a positive impact on healthcare.",
  },
  {
    title: "Health Solutions, Seamless Delivery",
    image:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/W2BvwN1wYo.webp",
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
                  <h2 className="fw-bold text-white fs_xxl">{slide.title}</h2>
                  <p className="fw-normal text-white fs_md py-2 mb-4 text_justify">
                    {slide.description}
                  </p>
                  <a
                    href="#about"
                    aria-label="Navigate to about page"
                    className="fs_md text-black nav_link transition position-relative"
                  >
                    {" "}
                    <img loading="lazy" 
                      src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/1OyH6QBHD6.webp"
                      alt="Arrow icon for navigation"
                      width="80"
                      height="50"
                      className="position-absolute arrow"
                    />
                    <button className="learn_btn fw-medium fs_md rounded-3 cursor_pointer transition bg-white py-2 px-4">
                      Get Started
                    </button>{" "}
                  </a>
                </Col>
                <Col lg={5}>
                  <img loading="lazy" 
                    src={slide.image}
                    alt={`Healthcare solution: ${slide.title}`}
                    className="w-100 updown_ani h-auto"
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
