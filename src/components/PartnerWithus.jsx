import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommonBtn from "./common/CommonBtn";

const PartnerWithus = () => {
  const card = [
    {
      heading: "400+",
      para: "Clients across India",
    },
    {
      heading: "400+",
      para: "Clients across India",
    },
    {
      heading: "400+",
      para: "Clients across India",
    },
  ];
  return (
    <>
      <Container className="py-lg-5 py-5 my-4 text-center">
        <h2 className="fw-bold fs_8xl letter_spacing mb-3">
          Why Partner With Us
        </h2>
        <p className="fs_4md letter_spacing fw-normal lh-base text-black ff_roboto mb-3">
          As a leading pharmaceutical distributor, PDPL offers unparalleled
          expertise in to its partners. With a solid reputation for trust and
          reliability, we are the preferred partner for hospitals, medical
          stores, and healthcare facilities nationwide. Our vast network,
          powered by state-of-the-art technology, guarantees a seamless process
          for collecting, warehousing, and delivering medicines with the utmost
          precision and quality control.
        </p>
        <Row className="mt-5 mb-lg-2">
          {card.map((a, index) => (
            <Col className="mb-4" md={4} xs={12} key={index}>
              <div className="h-100">
                <h3 className="fs_8xl fw-bold letter_spacing ff_roboto text_sky mb-0">
                  {a.heading}
                </h3>
                <p className="fs_2lg text_sky fw-semibold text-center lh-sn letter_spacing ff_roboto mb-0">
                  {a.para}
                </p>
              </div>
            </Col>
          ))}
        </Row>
        <CommonBtn btnname="Contact Us"></CommonBtn>
      </Container>
    </>
  );
};

export default PartnerWithus;
