import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

const ClientReview = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      name: "Amit",
      role: "PSRI Hospital, Delhi",
      feedback:
        "PDPL has been our trusted partner for years, consistently providing quality products. Their wide selection of healthcare products meets diverse patient needs. Their efficient distribution network and prompt service exceed expectations. Highly recommended pharmaceutical distributor.",
    },
    {
      name: "Divendra",
      role: "Saroj Hospital, Gurugram",
      feedback:
        "Working with PDPL has been instrumental in streamlining our hospital’s supply chain management. From their proactive communication to the quality of their pharmaceutical and medical supplies, PDPL has exceeded our expectations time and again.",
    },
    {
      name: "Rakesh",
      role: "Park Hospital, Gurugram",
      feedback:
        "PDPL's dependable delivery schedule and vast range of products have transformed our ability to serve customers effectively. Their transparent approach to business, along with the responsiveness of their customer support team, makes them a standout partner in the pharmaceutical supply industry.",
    },
    {
      name: "Anil Kumar",
      role: "Fortis Healthcare, Gurugram",
      feedback:
        "Working with PDPL has been instrumental in streamlining our hospital’s supply chain management. From their proactive communication to the quality of their pharmaceutical and medical supplies, PDPL has exceeded our expectations time and again.",
    },
    {
      name: "Divendra",
      role: "Saroj Hospital, Gurugram",
      feedback:
        "Working with PDPL has been instrumental in streamlining our hospital’s supply chain management. From their proactive communication to the quality of their pharmaceutical and medical supplies, PDPL has exceeded our expectations time and again.",
    },
    {
      name: "Anil Kumar",
      role: "Fortis Healthcare, Gurugram",
      feedback:
        "Working with PDPL has been instrumental in streamlining our hospital’s supply chain management. From their proactive communication to the quality of their pharmaceutical and medical supplies, PDPL has exceeded our expectations time and again.",
    },
    {
      name: "Rakesh",
      role: "Park Hospital, Gurugram",
      feedback:
        "PDPL's dependable delivery schedule and vast range of products have transformed our ability to serve customers effectively. Their transparent approach to business, along with the responsiveness of their customer support team, makes them a standout partner in the pharmaceutical supply industry.",
    },
  ];

  const adjustedReviews =
    reviews.length < 3 ? [...reviews, ...reviews] : reviews;

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
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

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="bg_gray py-5">
      <Container className="my-lg-4">
        <h2
          className="fw-bold fs_8xl mb-2 text-center mb-5 text-black"
          data-aos="fade-down"
        >
          What They Say About Us
        </h2>
        <div data-aos="zoom-in" className="custom_dots">
          <Slider ref={sliderRef} {...settings}>
            {adjustedReviews.map((review, index) => (
              <div
                className={`px-1 ${
                  index === currentSlide ? "center-slide" : ""
                }`}
                key={index}
                onClick={() => handleSlideClick(index)}
              >
                <div className="review-card rounded-4 p-3 hover_active cursor_pointer bg-white h-full">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <img
                      src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/WHmxoGQ4Pa.svg"
                      alt="Client Profile Icon - PDPL Customer Testimonial"
                      height={45}
                      width={45}
                    />
                    <div>
                      <h3 className="fs_6sm text-black fw-bold mb-0">
                        {review.name}
                      </h3>
                      <p className="fs_6sm text-black fw-semibold mb-0">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <p className="font-normal fs_6sm lh-sm text-black mb-0 flex-grow">
                    {review.feedback}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default ClientReview;
