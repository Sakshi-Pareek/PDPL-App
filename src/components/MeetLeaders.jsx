import React, { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Profile from "../components/assets/images/svg/profile.svg";

const MeetLeaders = () => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const leaders = [
    { name: "Anil Kumar", designation: "Managing Director" },
    { name: "Ashwani Kumar Bhatia", designation: "Managing Director" },
    { name: "Himanshu Chawla", designation: "Chief Procurement Officer" },
    { name: "Raghav Bhatia", designation: "Chief Operating Officer" },
  ];

  const settings1 = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: slider2.current,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const settings2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: slider1.current,
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
                  src={Profile}
                  alt={`customerslide-${index}`}
                  className="testimg position-relative z-1 cursor_pointer shadow rounded-circle"
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
