import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommonBtn from "./common/CommonBtn";
import CountUp from "react-countup"; 
import { useInView } from "react-intersection-observer"; 
import { Link } from "react-router-dom";

const PartnerWithus = () => {
  const [hasAnimated, setHasAnimated] = useState(false); 
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const card = [
    {
      heading: 350,
      para: "Retail Customers",
    },
    {
      heading: 800,
      para: "Hospital Customers",
    },
    {
      heading: 450,
      para: "Employees",
    },
  ];

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <>
      <Container className="py-lg-5 py-5 my-4 text-center" ref={ref}>
        <h2 className="fw-bold fs_8xl letter_spacing mb-3" data-aos="fade-up">
          Why Partner With Us
        </h2>
        <p
          className="fs_md letter_spacing fw-normal lh-base text-black ff_roboto mb-3"
          data-aos="fade-up"
        >
          As a leading pharmaceutical distributor, PDPL offers unparalleled
          expertise to its partners. With a solid reputation for trust and
          reliability, we are the preferred partner for hospitals, medical
          stores, and healthcare facilities nationwide. Our vast network,
          powered by state-of-the-art technology, guarantees a seamless process
          for collecting, warehousing, and delivering medicines with the utmost
          precision and quality control.
        </p>
        <Row className="mt-5 mb-lg-2" data-aos="fade-up">
          {card.map((a, index) => (
            <Col className="mb-4" md={4} xs={12} key={index}>
              <div className="h-100">
                <h3 className="fs_2lg fw-bold letter_spacing ff_roboto text_sky mb-0">
                  {hasAnimated ? (
                    <CountUp start={0} end={a.heading} duration={4} />
                  ) : (
                    0
                  )}
                  +
                </h3>
                <p className=" fs_6md text_sky fw-semibold text-center lh-sn letter_spacing ff_roboto mb-0">
                  {a.para}
                </p>
              </div>
            </Col>
          ))}
        </Row>
        <Link
         to="/contact" data-aos="fade-up">
          <CommonBtn btnname="Contact Us"></CommonBtn>
        </Link>
      </Container>
    </>
  );
};

export default PartnerWithus;
