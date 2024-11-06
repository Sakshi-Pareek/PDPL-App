import React, { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Leaders1 from "../components/assets/images/webp/RaghavBhatia.jpg";
import Leaders2 from "../components/assets/images/webp/anilBhatia.jpg";
import Leaders3 from "../components/assets/images/webp/Himanshu.jpg";

const MeetLeaders = () => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const leaders = [
    { name: "Anil Kumar", designation: "Managing Director", images: Leaders1 },
    {
      name: "Himanshu Chawla",
      designation: "Chief Procurement Officer",
      images: Leaders2,
    },
    {
      name: "Raghav Bhatia",
      designation: "Chief Operating Officer",
      images: Leaders3,
    },
  ];

  const settings1 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: slider2.current,
    ref: slider1,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const settings2 = {
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: slider1.current,
    ref: slider2,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bg_gray py-5">
      <Container className="py-lg-4">
        <h2
          className="fw-bold fs_8xl mb-lg-5 mb-4 text-center"
          data-aos="fade-down"
        >
          Meet the Leaders
        </h2>
        <Row data-aos="fade-down">
          <Slider
            {...settings1}
            ref={slider1}
            className="d-flex align-items-center"
          >
            {leaders.map((leader, index) => (
              <div className="d-flex justify-content-center pb-3" key={index}>
                <img
                  src={leader.images}
                  alt={`${leader.name} Profile`}
                  className="testimg position-relative z-1 cursor_pointer shadow rounded-circle object-fit-cover"
                  width={120}
                  height={120}
                />
              </div>
            ))}
          </Slider>
          <Slider {...settings2} ref={slider2} className="slider-for">
            {leaders.map((leader, index) => (
              <div className="d-flex justify-content-center" key={index}>
                <div className="w-100">
                  <p className="text-black fw-semibold fs_8sm text-center text-nowrap mb-0 pb-1">
                    {leader.name}
                  </p>
                  <p className="fs_6sm fw-light text-center mb-0">
                    {leader.designation}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </Row>
      </Container>
    </div>
  );
};

export default MeetLeaders;
