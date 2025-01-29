import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

const ClientsLogo = () => {
  const logo = [
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/5kcInQenKt.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/ddwVXpB1Sb.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/9WAegAXw9y.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/TaHjIJhAGn.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/OLuUDqvjo1.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/WuOQJE3wxV.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/fDkxqNd8ph.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/oRi235QMGm.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/5kcInQenKt.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/ddwVXpB1Sb.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/9WAegAXw9y.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/TaHjIJhAGn.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/OLuUDqvjo1.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/WuOQJE3wxV.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/fDkxqNd8ph.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/oRi235QMGm.webp",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
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
          slidesToShow: 3,
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
    <Container
      fluid
      className="my-5 py-md-4 overflow-hidden max-w-1920 mx-auto"
    >
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
                alt={`Logo of trusted partner ${index + 1}`}
                width={190}
                height={70}
                className="object-fit-contain p-lg-0 p-1"
                style={{ margin: "0 auto" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default ClientsLogo;
