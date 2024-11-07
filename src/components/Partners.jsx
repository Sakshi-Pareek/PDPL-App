import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Client1 from "./assets/images/webp/partner1.webp";
import Client2 from "./assets/images/webp/partner2.webp";
import Client3 from "./assets/images/webp/partner3.webp";
import Client4 from "./assets/images/webp/partner4.webp";
import Client5 from "./assets/images/webp/partner5.webp";
import Client6 from "./assets/images/webp/partner6.webp";
import Client7 from "./assets/images/webp/partner7.webp";
import Client8 from "./assets/images/webp/partner8.webp";
import Client9 from "./assets/images/webp/partner9.webp";
import Client10 from "./assets/images/webp/partner10.webp";
import Client11 from "./assets/images/webp/partner11.webp";
import Client12 from "./assets/images/webp/partner12.webp";
import Client13 from "./assets/images/webp/partner13.webp";
import Client14 from "./assets/images/webp/partner14.webp";
import Client15 from "./assets/images/webp/partner15.webp";
import Client16 from "./assets/images/webp/partner16.webp";
import Client17 from "./assets/images/webp/partner17.webp";
import Client18 from "./assets/images/webp/partner18.webp";
import Client19 from "./assets/images/webp/partner19.webp";
import Client20 from "./assets/images/webp/partner20.webp";
import Client21 from "./assets/images/webp/partner21.webp";
import Client22 from "./assets/images/webp/partner22.webp";
import Client23 from "./assets/images/webp/partner23.webp";
import Client24 from "./assets/images/webp/partner24.webp";
import Client25 from "./assets/images/webp/partner25.webp";
import Client26 from "./assets/images/webp/partner26.webp";
import Client27 from "./assets/images/webp/partner27.webp";
import Client28 from "./assets/images/webp/partner28.webp";
import Client29 from "./assets/images/webp/partner29.webp";
import Client30 from "./assets/images/webp/partner30.webp";
import Client31 from "./assets/images/webp/partner31.webp";

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
          slidesToShow: 2.2,
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
          slidesToShow: 2.2,
        },
      },
    ],
  };
  return (
    <>
      <Container
        fluid
        className="overflow-hidden d-flex flex-column py-5 max-w-1920 mx-auto"
      >
        <div data-aos="zoom-in">
          <Slider {...settings1}>
            {logos1.map((a, index) => (
              <div key={index} className="logo_bg">
                <div>
                  <img
                    src={a.image}
                    alt="Partners Of PDPL"
                    width={146}
                    height={168}
                    className="object-fit-contain px-2 mx-auto"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings2}>
            {logos2.map((a, index) => (
              <div key={index} className="logo_bg">
                <img
                  src={a.image}
                  alt="Partners Of PDPL"
                  width={146}
                  height={168}
                  className="object-fit-contain px-2 mx-auto"
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
