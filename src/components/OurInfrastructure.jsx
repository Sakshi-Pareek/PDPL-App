import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
  { label: "Products", value: "48000+", icon: <ProductIcon /> },
  { label: "Warehouses", value: "10+", icon: <WareHouseIcon /> },
  { label: "Cities Reach", value: "80+", icon: <CityIcon /> },
  {
    label: "Warehousing Space",
    value: "75000+sqft",
    icon: <WareHouseSpace />,
  },
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
              className="fs_md letter_spacing fw-normal lh-base text-black mb-lg-5 mb-4 pb-lg-5 pb-0 text-lg-start text-center pe-lg-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We’re excited to have 11 strategically located warehouses that
            streamline storage and distribution! Our team processes over 8,000
              orders daily with real-time tracking, ensuring we efficiently meet
              our customers’ needs with a smile!
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
                  <div className="bg_skyblue w-100 p-xl-5 p-4 rounded-4 d-flex justify-content-center align-items-center mx-auto p-3 cursor_pointer">
                    <span
                      style={{
                        width: "40px",
                        height: "40px",
                        margin: "0 auto",
                      }}
                    >
                      {metric.icon}
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
              <img loading="lazy" 
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/cDn4XZNnjT.webp"
                alt="Map showing warehouse locations across India for pharmaceutical distribution"
                className="w-100 max_w_500 position-relative h-auto"
              />
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="position-absolute location-wrapper text-center cursor_pointer"
                  style={{ top: location.top, left: location.left }}
                  data-aos="zoom-in"
                  data-aos-delay={`${500 + index * 100}`}
                >
                  <img loading="lazy" 
                    src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/AxulE2jwl2.webp"
                    width={20}
                    height={20}
                    alt={`Pointer indicating ${location.name} warehouse location`}
                    className="animation"
                  />
                  <span
                    className="location-name text-black position-absolute text-nowrap z-1"
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
