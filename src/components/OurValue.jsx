import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import HandIcon from "../components/assets/images/webp/hand_icon.webp";

const purposeData = [
  {
    title: "Reliability",
    description:
      "Trust is the foundation of our relationships. We understand the critical importance of safe and timely delivery of medicines. We ensure hassle-free distribution of healthcare needs to providers and patients.",
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in all that we do. We maintain the highest standards of quality and professionalism, ensuring that our pharmaceutical distribution process is handled with care.",
  },
  {
    title: "Integrity",
    description:
      "We believe in transparency, honesty, and accountability with all stakeholders. We have forged valuable relationships with healthcare providers, suppliers, and manufacturers.",
  },
];

const valuesData = [
  {
    title: "Vision",
    description:
      "Our values are rooted in our vision and mission. We are committed to enhancing human lives by providing genuine and meaningful healthcare products.",
  },
  {
    title: "Mission",
    description:
      "Our mission is to facilitate the seamless flow of medicines and ensure safe delivery, improving healthcare access and patient outcomes. We aim to make a significant impact in healthcare distribution.",
  },
];

const Section = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <Card
          key={index}
          className="mb-3 shadow-sm p-md-4 p-3 cursor_pointer hover-card transition 
          "
          data-aos="fade-down"
          style={{
            background: "linear-gradient(to bottom, rgb(215, 231, 239), white)",
          }}
        >
          <div className="d-flex">
            <img src={HandIcon} alt="HandIcon" width={30} height={25} />
            <h4 className="ms-3">{item.title}</h4>
          </div>
          <p className="mb-0">{item.description}</p>
        </Card>
      ))}
    </>
  );
};
const OurValue = () => {
  return (
    <div className="py-5">
      <Container className="py-lg-4">
        <Row className="mx-1">
          <h2 className="fw-bold fs_8xl mb-4 text-center" data-aos="fade-down">
            Our Purpose & Values
          </h2>
          <Section
            data={purposeData}
            className="fw-bold fs_8xl mb-5"
            data-aos="fade-left"
          />

          <Section
            data={valuesData}
            className="fw-bold fs_8xl mb-2"
            data-aos="fade-left"
          />
        </Row>
      </Container>
    </div>
  );
};

export default OurValue;
