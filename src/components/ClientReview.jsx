import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Profile from "./assets/images/svg/profile.svg";

const ClientReview = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };

  const reviews = [
    {
      name: "Brendan Buchholz",
      role: "Director, Apollo Hospital, Delhi",
      feedback:
        "PDPL has been our trusted partner for years, consistently providing quality products. Their wide selection of healthcare products meets diverse patient needs. Their efficient distribution network and prompt service exceed expectations. Highly recommended pharmaceutical distributor.",
    },
    {
      name: "Brendan Buchholz",
      role: "Director, Apollo Hospital, Delhi",
      feedback:
        "PDPL has been our trusted partner for years, consistently providing quality products. Their wide selection of healthcare products meets diverse patient needs. Their efficient distribution network and prompt service exceed expectations. Highly recommended pharmaceutical distributor.",
    },
    {
      name: "Brendan Buchholz",
      role: "Director, Apollo Hospital, Delhi",
      feedback:
        "PDPL has been our trusted partner for years, consistently providing quality products. Their wide selection of healthcare products meets diverse patient needs. Their efficient distribution network and prompt service exceed expectations. Highly recommended pharmaceutical distributor.",
    },
    {
      name: "Brendan Buchholz",
      role: "Director, Apollo Hospital, Delhi",
      feedback:
        "PDPL has been our trusted partner for years, consistently providing quality products. Their wide selection of healthcare products meets diverse patient needs. Their efficient distribution network and prompt service exceed expectations. Highly recommended pharmaceutical distributor.",
    },
  ];

  return (
    <>
      <div className="bg_gray py-5">
        <Container className="my-lg-4">
          <h2
            className="fw-bold fs_8xl mb-2 text-center mb-5 text-black"
            data-aos="fade-down"
          >
            What They Say About Us
          </h2>
          <div data-aos="zoom-in" className="custom_dots">
            <Slider {...settings}>
              {reviews.map((review, index) => (
                <div className="px-1" key={index}>
                  <div className="rounded-4 p-3 hover_active cursor_pointer bg-white h-full flex flex-col justify-between">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <img src={Profile} alt="Clients Profile" height={45} width={45} />
                      <div>
                        <h3 className="ff_roboto fs_6sm text-black fw-bold mb-0">
                          {review.name}
                        </h3>
                        <p className="ff_roboto fs_6sm text-black fw-semibold mb-0">
                          {review.role}
                        </p>
                      </div>
                    </div>
                    <p className="font-normal fs_6sm lh-sm text-black ff_roboto mb-0 flex-grow">
                      {review.feedback}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ClientReview;
