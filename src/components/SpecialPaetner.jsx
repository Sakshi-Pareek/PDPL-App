import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import CommonBtn from "./common/CommonBtn";

const SpecialPaetner = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
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
    ],
  };

  const sliderImages = [
    { src: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/SrhFee9rOT.webp", alt: "EuroLife Logo" },
    { src: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/IndKuDTWFG.webp", alt: "Special Partner" },
    { src: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/seN0NVEEmX.webp", alt: "GleeBioTech Logo" },
    { src: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/8FC8ZRxQ0X.png", alt: "PlusGen Logo" },
  ];
  return (
    <>
      <div className="bg_gray">
        <Container className="py-5">
          <Row className=" justify-content-lg-between justify-content-center align-items-center gap-lg-0 gap-3">
            <Col lg={7} className="text-lg-start text-center">
              <h2
                className="fw-bold fs_8xl mx-auto letter_spacing mb-2"
                data-aos="fade-right"
              >
                Our Special Partner
              </h2>
              <p
                className="fs_md letter_spacing fw- lh-base text-black text_justify"
                data-aos="fade-right"
              >
                As the exclusive C&F partner for GUFIC Bioscience Ltd in
                Northern-Central India, PDPL ensures quick and smoother delivery
                of high-quality medical products and guarantees reliable access
                to essential medications for better healthcare outcomes.
              </p>
              <a
                href="https://plusdistributions.in/Assets/partners.pdf"
                target="_blank"
                rel="noreferrer"
                data-aos="fade-right"
              >
                {" "}
                <CommonBtn btnname="Product List"></CommonBtn>
              </a>
            </Col>
            <Col lg={5} xs={12}>
              <Slider {...sliderSettings}>
                {sliderImages.map((image, index) => (
                  <div key={index} className="slider-image-container">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-100 p-lg-4 pt-5 px-5"
                    />
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SpecialPaetner;
