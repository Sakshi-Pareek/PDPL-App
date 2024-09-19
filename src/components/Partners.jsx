import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Client1 from "./assets/images/png/partner1.png";
import Client2 from "./assets/images/png/partner2.png";
import Client3 from "./assets/images/png/partner3.png";
import Client4 from "./assets/images/png/partner4.png";
import Client5 from "./assets/images/png/partner5.png";
import Client6 from "./assets/images/png/partner6.png";
import Client7 from "./assets/images/png/partner7.png";
import Client8 from "./assets/images/png/partner8.png";
import Client9 from "./assets/images/png/partner9.png";
import Client10 from "./assets/images/png/partner10.png";
import Client11 from "./assets/images/png/partner11.png";
import Client12 from "./assets/images/png/partner12.png";
import Client13 from "./assets/images/png/partner13.png";
import Client14 from "./assets/images/png/partner14.png";
import Client15 from "./assets/images/png/partner15.png";
import Client16 from "./assets/images/png/partner16.png";
import Client17 from "./assets/images/png/partner17.png";
import Client18 from "./assets/images/png/partner18.png";
import Client19 from "./assets/images/png/partner19.png";
import Client20 from "./assets/images/png/partner20.png";
import Client21 from "./assets/images/png/partner21.png";
import Client22 from "./assets/images/png/partner22.png";
import Client23 from "./assets/images/png/partner23.png";
import Client24 from "./assets/images/png/partner24.png";
import Client25 from "./assets/images/png/partner25.png";
import Client26 from "./assets/images/png/partner26.png";
import Client27 from "./assets/images/png/partner27.png";
import Client28 from "./assets/images/png/partner28.png";
import Client29 from "./assets/images/png/partner29.png";
import Client30 from "./assets/images/png/partner30.png";
import Client31 from "./assets/images/png/partner31.png";

const Partners = () => {
  const logos1 = [
    {
      image: Client1,
    },
    {
      image: Client2,
    },
    {
      image: Client3,
    },
    {
      image: Client4,
    },
    {
      image: Client5,
    },
    {
      image: Client6,
    },
    {
      image: Client7,
    },
    {
      image: Client8,
    },
    {
      image: Client9,
    },
    {
      image: Client10,
    },
    {
      image: Client11,
    },
    {
      image: Client12,
    },
    {
      image: Client13,
    },
    {
      image: Client14,
    },
    {
      image: Client15,
    },
    {
      image: Client16,
    },
  ];
  const logos2 = [
    {
      image: Client17,
    },
    {
      image: Client18,
    },
    {
      image: Client19,
    },
    {
      image: Client20,
    },
    {
      image: Client21,
    },
    {
      image: Client22,
    },
    {
      image: Client23,
    },
    {
      image: Client24,
    },
    {
      image: Client25,
    },
    {
      image: Client26,
    },
    {
      image: Client27,
    },
    {
      image: Client28,
    },
    {
      image: Client29,
    },
    {
      image: Client30,
    },
    {
      image: Client31,
    },
  ];
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: false,
    autoplaySpeed: 1,
    speed: 6000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3.01,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1.67,
        },
      },
    ],
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1,
    speed: 6000,
    rtl: true,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1.67,
        },
      },
    ],
  };
  return (
    <>
      <Container fluid className="mt-5 overflow-hidden d-flex flex-column">
        <div data-aos="zoom-in">
          <Slider {...settings1}>
            {logos1.map((a, index) => (
              <div key={index}>
                <img
                  src={a.image}
                  alt="cardimg"
                  width={190}
                  height={120}
                  className="object-fit-contain p-lg-0 p-1"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings2}>
            {logos2.map((a, index) => (
              <div key={index}>
                <img
                  src={a.image}
                  alt="cardimg"
                  width={190}
                  height={190}
                  className="object-fit-contain p-lg-0 p-1"
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default Partners;
