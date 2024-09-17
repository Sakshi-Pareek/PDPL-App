import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Profile from "./assets/images/png/profile.png";

const ClientReview = () => {
  var settings = {
    dots: false,
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
  return (
    <>
      <div className="bg_gray py-5">
        <Container className="my-lg-4">
          <h2 className="fw-bold fs_8xl mb-2 text-center mb-5 text-black">
            What They Say About Us
          </h2>
          <Slider {...settings}>
            <div className="px-1">
              <div className="rounded-4 p-3 hover_active cursor_pointer bg-white">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img src={Profile} alt="Profile" height={45} width={45} />
                  <div>
                    <h3 className="ff_roboto fs_6sm text-black fw-bold mb-0">
                      Brendan Buchholz
                    </h3>
                    <p className="ff_roboto fs_6sm text-black fw-semibold mb-0">
                      Director, Appolo Hospital, Delhi
                    </p>
                  </div>
                </div>
                <p className="font-normal fs_6sm lh-sm text-black ff_roboto mb-0">
                  "PDPL has been our trusted partner for years, consistently
                  providing quality products. Their wide selection of healthcare
                  products meets diverse patient needs. Their efficient
                  distribution network and prompt service exceed expectations.
                  Highly recommended pharmaceutical distributor."
                </p>
              </div>
            </div>
            <div className="px-1">
              <div className="rounded-4 p-3 hover_active cursor_pointer bg-white">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img src={Profile} alt="Profile" height={45} width={45} />
                  <div>
                    <h3 className="ff_roboto fs_6sm text-black fw-bold mb-0">
                      Brendan Buchholz
                    </h3>
                    <p className="ff_roboto fs_6sm text-black fw-semibold mb-0">
                      Director, Appolo Hospital, Delhi
                    </p>
                  </div>
                </div>
                <p className="font-normal fs_6sm lh-sm text-black ff_roboto mb-0">
                  "PDPL has been our trusted partner for years, consistently
                  providing quality products. Their wide selection of healthcare
                  products meets diverse patient needs. Their efficient
                  distribution network and prompt service exceed expectations.
                  Highly recommended pharmaceutical distributor."
                </p>
              </div>
            </div>
            <div className="px-1">
              <div className="rounded-4 p-3 hover_active cursor_pointer bg-white">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img src={Profile} alt="Profile" height={45} width={45} />
                  <div>
                    <h3 className="ff_roboto fs_6sm text-black fw-bold mb-0">
                      Brendan Buchholz
                    </h3>
                    <p className="ff_roboto fs_6sm text-black fw-semibold mb-0">
                      Director, Appolo Hospital, Delhi
                    </p>
                  </div>
                </div>
                <p className="font-normal fs_6sm lh-sm text-black ff_roboto mb-0">
                  "PDPL has been our trusted partner for years, consistently
                  providing quality products. Their wide selection of healthcare
                  products meets diverse patient needs. Their efficient
                  distribution network and prompt service exceed expectations.
                  Highly recommended pharmaceutical distributor."
                </p>
              </div>
            </div>
            <div className="px-1">
              <div className="rounded-4 p-3 hover_active cursor_pointer bg-white">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img src={Profile} alt="Profile" height={45} width={45} />
                  <div>
                    <h3 className="ff_roboto fs_6sm text-black fw-bold mb-0">
                      Brendan Buchholz
                    </h3>
                    <p className="ff_roboto fs_6sm text-black fw-semibold mb-0">
                      Director, Appolo Hospital, Delhi
                    </p>
                  </div>
                </div>
                <p className="font-normal fs_6sm lh-sm text-black ff_roboto mb-0">
                  "PDPL has been our trusted partner for years, consistently
                  providing quality products. Their wide selection of healthcare
                  products meets diverse patient needs. Their efficient
                  distribution network and prompt service exceed expectations.
                  Highly recommended pharmaceutical distributor."
                </p>
              </div>
            </div>
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default ClientReview;
