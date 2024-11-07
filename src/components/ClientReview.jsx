import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Profile from "./assets/images/svg/profile.svg";

const ClientReview = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: false,
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

  const reviews = [
    {
      name: "Brendan Buchholz",
      role: "Director, Apollo Hospital, Delhi",
      feedback:
        "PDPL has been our trusted partner for years, consistently providing quality products. Their wide selection of healthcare products meets diverse patient needs. Their efficient distribution network and prompt service exceed expectations. Highly recommended pharmaceutical distributor.",
    },
    {
      name: "Anita Sharma",
      role: "Manager, Fortis Healthcare, Mumbai",
      feedback:
        "Working with PDPL has been instrumental in streamlining our hospital’s supply chain management. From their proactive communication to the quality of their pharmaceutical and medical supplies, PDPL has exceeded our expectations time and again.",
    },
    {
      name: "Rakesh Verma",
      role: "Pharmacist, MedPlus Pharmacies, Pune",
      feedback:
        "PDPL's dependable delivery schedule and vast range of products have transformed our ability to serve customers effectively. Their transparent approach to business, along with the responsiveness of their customer support team, makes them a standout partner in the pharmaceutical supply industry.",
    },
    {
      name: "Dr. Meera Gupta",
      role: "Officer, Max Healthcare, Bangalore",
      feedback:
        "PDPL has become an essential partner in our mission to deliver top-tier patient care. Their consistent delivery of high-quality products reassures us of their dedication to the healthcare industry. PDPL’s rigorous standards for regulatory compliance and commitment to patient safety align with our own, creating a seamless partnership.",
    },
  ];

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
            {reviews.map((review, index) => (
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
                      src={Profile}
                      alt="Clients Profile"
                      height={45}
                      width={45}
                    />
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
  );
};

export default ClientReview;
