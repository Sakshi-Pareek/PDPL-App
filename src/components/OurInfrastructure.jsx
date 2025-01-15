import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Map from "./assets/images/webp/map.png";
import Pointer from "../components/assets/images/webp/pointer.png";
import { ProductIcon, WareHouseIcon, CityIcon, WareHouseSpace } from "./Icon";

const locations = [
  { name: "Hisar", top: "26%", left: "30%" },
  { name: "Delhi", top: "28%", left: "37%" },
  { name: "Gurugram", top: "26%", left: "35%" },
  { name: "Noida", top: "37%", left: "50%" },
  { name: "Jaipur", top: "35%", left: "30%" },
  { name: "Bhopal", top: "45%", left: "42%" },
  { name: "Ludhiana", top: "22%", left: "31%" },
  { name: "Dehradun", top: "24%", left: "43%" },
  { name: "Panipat", top: "29%", left: "33%" },
];

const metrics = [
  { label: "Products", value: "4500+", img: <ProductIcon /> },
  { label: "Warehouses", value: "10+", img: <WareHouseIcon /> },
  { label: "Cities Delivered", value: "100+", img: <CityIcon /> },
  { label: "Warehousing Space", value: "25000+sqft", img: <WareHouseSpace /> },
];

const OurInfrastructure = () => {
  return (
    <div className="py-lg-5 py-4 bg_gray">
      <Container className="py-4">
        <Row className="justify-content-between">
          <Col lg={7} xs={12} className="mt-lg-5 my-5" data-aos="fade-left">
            <h2
              className="fw-bold fs_8xl mx-auto letter_spacing mb-3 text-lg-start text-center"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Our Infrastructure
            </h2>
            <p
              className="fs_md letter_spacing fw-normal lh-base text-black ff_roboto mb-lg-5 mb-4 pb-lg-5 pb-0 text-lg-start text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              20 warehouses, 500 people, and an internal order management system
              that handles over 15,000 orders per day.
            </p>
            <Row
              className="d-flex flex-wrap justify-content-between gap-md-0 gap-4 mt-lg-5 pt-lg-5 pt-0 mt-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {metrics.map((metric, index) => (
                <Col
                  key={index}
                  xs={5}
                  md={3}
                  className="text-center"
                  data-aos="zoom-in"
                  data-aos-delay={`${300 + index * 100}`}
                >
                  <div className="bg_skyblue w-100 p-xl-5 p-4 rounded-4 d-flex justify-content-center align-items-center mx-auto p-3">
                    <span
                      style={{
                        width: "40px",
                        height: "40px",
                        margin: "0 auto",
                      }}
                    >
                      {metric.img}
                    </span>
                  </div>
                  <h3 className="fs_6sm fw-bold mt-2 mb-0 text-center">
                    {metric.value}
                  </h3>
                  <p className="fs_6sm lh_normal mb-0 text-center">
                    {metric.label}
                  </p>
                </Col>
              ))}
            </Row>
          </Col>
          <Col
            lg={5}
            md={5}
            className="d-lg-flex d-none justify-content-center"
          >
            <div
              className="position-relative"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <img
                src={Map}
                alt="Map showing warehouse locations in India"
                className="w-100 max_w_500 position-relative"
              />
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="position-absolute location-wrapper"
                  style={{ top: location.top, left: location.left }}
                  data-aos="zoom-in"
                  data-aos-delay={`${500 + index * 100}`}
                >
                  <img
                    src={Pointer}
                    width={20}
                    height={20}
                    alt={`Pointer indicating ${location.name}`}
                    className="animation"
                  />
                  <span 
                    className="location-name"
                    data-aos="fade-up"
                    data-aos-delay={`${600 + index * 100}`}
                  >
                    {location.name}
                  </span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurInfrastructure;
