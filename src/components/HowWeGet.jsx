import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ColdStore from "../components/assets/images/webp/ColdStore.webp";
import { TemperatureIcon, MonitoringIcon, DigitalAudit } from "./Icon";

const logisticsData = [
  {
    id: 1,
    icon: <TemperatureIcon />,
    title: "Temperature-Controlled Storage",
    description:
      "Multiple temperature zones from 2-8°C, 9-15°C, and 16-25°C for different pharmaceutical needs.",
    aos: "fade-up", // Add specific AOS animations
    aosDelay: "200", // Add delays for staggered effects
  },
  {
    id: 2,
    icon: <MonitoringIcon />,
    title: "24/7 Monitoring",
    description:
      "Continuous temperature monitoring at every location with real-time alerts and notifications.",
    aos: "fade-up",
    aosDelay: "400",
  },
  {
    id: 3,
    icon: <DigitalAudit />,
    title: "Digital Audit Trail",
    description:
      "Complete temperature history with digital logging for every delivery and storage period.",
    aos: "fade-up",
    aosDelay: "600",
  },
];

const HowWeGet = () => {
  return (
    <>
      <Container className="py-5 my-xl-5 my-4">
        <h2
          className="fw-bold fs_8xl mx-auto letter_spacing mb-2 text-xl-start text-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          How We Get It Done
        </h2>
        <h3
          className="fs_4md text-xl-start text-center text_sky"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Cold chain logistics
        </h3>
        <p
          className="fs_sm max_w_500 mb-xl-5 mb-4 text-xl-start text-center mx-xl-0 mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Our fulfillment centers are equipped with state-of-the-art cold
          storage and transportation solutions that meet WHO compliance
          standards, ensuring your products are handled safely and effectively.
        </p>
        <Row className="justify-content-xl-between justify-content-center align-items-center gap-xl-0 gap-4">
          <Col
            xl={3}
            sm={10}
            className="d-lg-flex d-none"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img
              src={ColdStore}
              alt="Cold Store"
              className="rounded-4 w-100 cursor_pointer h-100"
            />
          </Col>
          {logisticsData.map((item) => (
            <Col
              xl={3}
              sm={5}
              className="text-center"
              key={item.id}
              data-aos={item.aos}
              data-aos-delay={item.aosDelay}
            >
              {item.icon}
              <h4 className="fs_6sm my-2 fw-bold text_sky">{item.title}</h4>
              <p className="fs_6sm mb-0 px-md-1">{item.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HowWeGet;