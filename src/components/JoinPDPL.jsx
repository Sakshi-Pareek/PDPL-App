import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EqualOpp2 from "../components/assets/images/webp/office5.webp";
import EqualOpp3 from "../components/assets/images/webp/office1.webp";
import EqualOpp4 from "../components/assets/images/webp/officeimg3.webp";
import EqualOpp5 from "../components/assets/images/webp/hrimg.webp";

const JoinPDPL = () => {
  return (
    <>
      <Container className="py-5 my-4 d-flex flex-column gap-lg-5 gap-4 ">
        <Row className="justify-content-center align-items-center flex-lg-row flex-column-reverse gap-lg-0 gap-4">
          <Col lg={6}>
            <div className="pe-lg-5 ps-0">
              <h3 className="text_sky fs_4md fw-semibold" data-aos="fade-right">
                Long Lasting Collaborations
              </h3>
              <p className="fw-normal text-black fs_6sm" data-aos="fade-right">
                We prioritize building long-lasting collaborations with our
                partners, clients, and stakeholders. These enduring
                relationships are rooted in mutual trust, shared values, and a
                commitment to excellence. By fostering open communication and
                consistently delivering on our promises, we ensure that our
                partnerships thrive over time, benefiting both our business and
                the communities we serve.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="rounded-4 w-100 overflow-hidden contact_icon transition cursor_pointer">
              <img
                src={EqualOpp2}
                alt="Equal Opp at PDPL"
                className="transition w-100 min-h-290 object-fit-cover"
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center gap-lg-0 gap-4">
          <Col lg={6}>
            <div className="rounded-4 w-100 overflow-hidden contact_icon transition cursor_pointer">
              <img
                src={EqualOpp3}
                alt="Equal Opp at PDPL"
                className="transition w-100 min-h-290 object-fit-cover"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="ps-lg-5 ps-0">
              <h3 className="text_sky fs_4md fw-semibold" data-aos="fade-left">
                Driving Positive Change
              </h3>
              <p className="fw-normal text-black fs_6sm" data-aos="fade-left">
                Driving positive change is core to our mission. Through
                innovation, sustainability, and ethical practices, we aim to
                improve healthcare and enhance lives. Our focus goes beyond
                business, fostering a culture of responsibility, inclusivity,
                and growth for the benefit of society and the environment.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center flex-lg-row flex-column-reverse gap-lg-0 gap-4">
          <Col lg={6}>
            <div className="pe-lg-5 ps-0">
              <h3 className="text_sky fs_4md fw-semibold" data-aos="fade-right">
                Empowering Teams
              </h3>
              <p className="fw-normal text-black fs_6sm" data-aos="fade-right">
                Empowering teams is key to our success. We foster a supportive
                environment that encourages collaboration, innovation, and
                ownership. By equipping our workforce with the tools and
                opportunities they need, we unlock individual potential and
                drive collective excellence.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="rounded-4 w-100 overflow-hidden contact_icon transition cursor_pointer">
              <img
                src={EqualOpp4}
                alt="Equal Opp at PDPL"
                className="transition w-100 min-h-290 object-fit-cover"
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center gap-lg-0 gap-4">
          <Col lg={6}>
            <div className="rounded-4 w-100 overflow-hidden contact_icon transition cursor_pointer">
              <img
                src={EqualOpp5}
                alt="Equal Opp at PDPL"
                className="transition w-100 min-h-290 object-fit-cover"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="ps-lg-5 ps-0">
              <h3 className="text_sky fs_4md fw-semibold" data-aos="fade-left">
                Expertise in Competence
              </h3>
              <p className="fw-normal text-black fs_6sm" data-aos="fade-left">
                We prioritize expertise by fostering continuous learning and
                excellence. Our commitment to competence ensures our team
                excels, delivering exceptional results and setting industry
                benchmarks.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JoinPDPL;
