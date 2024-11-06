import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Map from "./assets/images/webp/map.png";
import Location from "../components/assets/images/svg/location.svg";
import Pointer from "../components/assets/images/webp/pointer.png";
import Ludhiana from "../components/assets/images/webp/ludhiana.png";
import Hisar from "../components/assets/images/webp/Hisar.png";
import Dehradun from "../components/assets/images/webp/Dehradun.png";
import Jaipur from "../components/assets/images/webp/jaipur.png";
import Bhopal from "../components/assets/images/webp/Bhoopal.png";
import Noida from "../components/assets/images/webp/Noida.png";
import Gurugram from "../components/assets/images/webp/gurugram.png";
import Delhi from "../components/assets/images/webp/delhi.png";
import Panipat from "../components/assets/images/webp/Panipat.png";

const OurPresence = () => {
  return (
    <>
      <div className="py-lg-5 py-4 bg_gray">
        <Container className="py-4">
          <h2
            className="fw-bold fs_8xl mx-auto letter_spacing mb-3 text-center"
            data-aos="fade-down"
          >
            Our Presence
          </h2>
          <p
            className="fs_md letter_spacing fw-normal lh-base text-black ff_roboto mb-4 text-center"
            data-aos="fade-down"
          >
            We’re proud of our wide-spread distribution network, spread across
            various states and cities of India. We firmly believe in making
            healthcare accessible to everyone and slowly, we’re moving towards
            our aim of establishing our presence in more regions, to reach as
            many people as we can. Currently, we’re operating in districts of
            Haryana, Punjab, Rajasthan, U.P and Delhi/NCR where we partner with
            hospitals, distributors and retailers to ensure the efficient and
            secure delivery of life-saving medications and healthcare products.
          </p>
          <Row>
            <Col lg={8} md={7} className="d-flex justify-content-center">
              <div className="position-relative ">
                <img
                  src={Map}
                  alt="Map of India"
                  className="w-100 max_w_500 position-relative"
                />
                <div
                  className="translate-middle position-absolute transition z-2 location-hover"
                  style={{ top: "26%", left: "39%" }}
                >
                  <img
                    src={Hisar}
                    alt="Hisar"
                    className="transtion location position-relative"
                    style={{
                      width: "45px",
                      left: "-20%",
                    }}
                  />
                  <br />
                  <img
                    src={Pointer}
                    className="animation"
                    width={25}
                    height={25}
                    alt="Panipat Location"
                  />
                </div>
                <div
                  className="translate-middle position-absolute transition z-2 location-hover"
                  style={{ top: "33%", left: "44%" }}
                >
                  <img
                    src={Delhi}
                    alt="Delhi"
                    className="transtion location position-relative"
                    style={{
                      width: "45px",
                      left: "-20%",
                    }}
                  />
                  <br />
                  <img
                    src={Pointer}
                    className="animation"
                    width={25}
                    height={25}
                    alt="Delhi Location"
                  />
                </div>
                <div
                  className="translate-middle position-absolute transition z-2 location-hover"
                  style={{ top: "36%", left: "47%" }}
                >
                  <img
                    src={Gurugram}
                    alt="Gurugram"
                    className="transtion location position-relative"
                    style={{
                      width: "45px",
                      left: "-20%",
                    }}
                  />
                  <br />
                  <img
                    src={Pointer}
                    className="animation"
                    width={25}
                    height={25}
                    alt="Gurugram Location"
                  />
                </div>
                <div
                  className="translate-middle position-absolute transition z-2 location-hover"
                  style={{ top: "37%", left: "50%" }}
                >
                  <img
                    src={Noida}
                    alt="Noida"
                    className="transtion location position-relative"
                    style={{
                      width: "45px",
                      left: "-20%",
                    }}
                  />
                  <br />
                  <img
                    src={Pointer}
                    className="animation"
                    width={25}
                    height={25}
                    alt="Noida Location"
                  />
                </div>
                <div
                  className="translate-middle position-absolute transition z-2 location-hover"
                  style={{ top: "35%", left: "30%" }}
                >
                  <img
                    src={Jaipur}
                    alt="Jaipur"
                    className="transtion location position-relative"
                    style={{
                      width: "45px",
                      left: "-20%",
                    }}
                  />
                  <br />
                  <img
                    src={Pointer}
                    className="animation"
                    width={25}
                    height={25}
                    alt="Hisar Location"
                  />
                </div>
                <div
                  className="translate-middle position-absolute transition z-2 location-hover"
                  style={{ top: "45%", left: "42%" }}
                >
                  <img
                    src={Bhopal}
                    alt="Bhopal"
                    className="transtion location position-relative"
                    style={{
                      width: "55px",
                      left: "-20%",
                    }}
                  />
                  <br />
                  <img
                    src={Pointer}
                    className="animation"
                    width={25}
                    height={25}
                    alt="Jaipur Location"
                  />
                </div>
                <div
                  className="translate-middle position-absolute transition z-2 location-hover"
                  style={{ top: "23%", left: "37%" }}
                >
                  <img
                    src={Ludhiana}
                    alt="Ludhiana"
                    className="transtion location position-relative"
                    style={{
                      width: "70px",
                      left: "-30%",
                      margin: "-10px 0 0 0",
                    }}
                  />
                  <br />
                  <img
                    src={Pointer}
                    className="animation"
                    width={25}
                    height={25}
                    alt="Bhopal Location cursor_pointer"
                  />
                </div>
                <div
                  className="translate-middle position-absolute transition z-2 location-hover"
                  style={{ top: "25%", left: "48%" }}
                >
                  <img
                    src={Dehradun}
                    alt="Dehradun"
                    className="transtion location position-relative"
                    style={{
                      width: "70px",
                      left: "-20%",
                    }}
                  />
                  <br />
                  <img
                    src={Pointer}
                    className="animation"
                    width={25}
                    height={25}
                    alt="Dehradun Location"
                  />
                </div>
                <div
                  className="translate-middle position-absolute transition z-2 location-hover"
                  style={{ top: "30%", left: "55%" }}
                >
                  <img
                    src={Panipat}
                    alt="Panipat"
                    className="transtion location position-relative"
                    style={{
                      width: "70px",
                      left: "-20%",
                    }}
                  />
                  <br />
                  <img
                    src={Pointer}
                    className="animation"
                    width={25}
                    height={25}
                    alt="Ludhiana Location"
                  />
                </div>
              </div>
            </Col>
            <Col lg={4} md={5} xs={8} className="mt-5" data-aos="fade-left">
              <h3 className="fs_md text-black ">
                <img
                  src={Location}
                  alt="Location Icon to define Location"
                  width={30}
                  height={30}
                  className="animation"
                />
                Company Warehouses
              </h3>
              <ul className="mb-0 d-flex flex-column gap-2 list_dots">
                <li className="text-black fs_md mb-0 cursor_pointer position-relative">
                  Panipat
                </li>
                <li className="text-black fs_md mb-0 cursor_pointer position-relative">
                  Delhi
                </li>
                <li className="text-black fs_md mb-0 cursor_pointer position-relative">
                  Gurugram
                </li>
                <li className="text-black fs_md mb-0 cursor_pointer position-relative">
                  Noida
                </li>
                <li className="text-black fs_md mb-0 cursor_pointer position-relative">
                  Hisar
                </li>
                <li className="text-black fs_md mb-0 cursor_pointer position-relative">
                  Jaipur
                </li>
                <li className="text-black fs_md mb-0 cursor_pointer position-relative">
                  Dehradun
                </li>
                <li className="text-black fs_md mb-0 cursor_pointer position-relative">
                  Bhopal
                </li>
                <li className="text-black fs_md mb-0 cursor_pointer position-relative">
                  Ludhiana
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurPresence;
