import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

const Partners = () => {
  const logos1 = [
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/MQG86iwpSm.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/eKxUNdIxYz.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/s641n36Q0J.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/mdti5j8wYA.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/BCmmWq75ap.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/soVolPifap.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/LSkpyVjrvN.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/XTmi7OSm2A.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/xpX5wa2ZXi.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/GVc8mxsMTT.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/uAe9EOf4D8.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/XyOxd1YYPo.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/xlKCiAMmsH.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/oduQ0GYh7n.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/YY1mdsuObC.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/dJJFChrMzj.webp",
    },
  ];
  const logos2 = [
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/2qSmYnVNtT.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/kmYNKsvART.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/FYxy0scSdN.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/g9FCZJBvDa.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Ou4Nt2eevr.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/pUSvyfJDAv.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/JuRjZdwwIt.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/jEMMf3Iy3g.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/RgRP0LSaEm.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/013kqchTR9.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/kf9w50roMo.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/hZjIkqLDlA.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/HzhfQyey6m.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/5IoANbNAhN.webp",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/KAKGbcBpPW.webp",
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
