import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Client1 from "./assets/images/png/client1.png";
import Client2 from "./assets/images/png/client2.png";
import Client3 from "./assets/images/png/client3.png";
import Client4 from "./assets/images/png/client4.png";
import Client5 from "./assets/images/png/client5.png";
import Client6 from "./assets/images/png/client6.png";
import Client7 from "./assets/images/png/client7.png";
import Client8 from "./assets/images/png/client8.png";

const ClientsLogo = () => {
  const logo = [
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
  ];
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <Container fluid className=" my-5 py-md-4 overflow-hidden">
        <h2
          className="fw-bold fs_8xl mb-2 text-center mb-5 text-black"
          data-aos="fade-down"
        >
          Our Trusted Partners
        </h2>
        <div data-aos="fade-down">
          <Slider {...settings}>
            {logo.map((a, index) => (
              <div key={index}>
                <img
                  src={a.image}
                  alt="cardimg"
                  width={190}
                  height={70}
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

export default ClientsLogo;
