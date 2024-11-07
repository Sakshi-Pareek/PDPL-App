import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Client1 from "./assets/images/webp/client1.webp";
import Client2 from "./assets/images/webp/client2.webp";
import Client3 from "./assets/images/webp/client3.webp";
import Client4 from "./assets/images/webp/client4.webp";
import Client5 from "./assets/images/webp/client5.webp";
import Client6 from "./assets/images/webp/client6.webp";
import Client7 from "./assets/images/webp/client7.webp";
import Client8 from "./assets/images/webp/client8.webp";

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
      <Container fluid className="my-5 py-md-4 overflow-hidden max-w-1920 mx-auto">
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
                  alt="Clients Logo"
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
