import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export const PartnerShip = () => {
  return (
    <>
      <Container className="py-5 mt-lg-4">
        <Row className="d-flex justify-content-md-between justify-content-center">
          <h2
            className="fw-bold fs_8xl mx-auto letter_spacing mb-3 text-center"
            data-aos="fade-down"
          >
            Partnership
          </h2>
          <p
            className="fs_md letter_spacing fw-normal lh-base text-black ff_roboto mb-5 text-center"
            data-aos="fade-down"
          >
            At PDPL, our philosophy, embodies our commitment to enhancing health
            and well-being. We achieve this through core principles of
            integrity, innovation, and quality. By fostering partnerships and
            utilizing advanced technology, we ensure our pharmaceutical products
            meet the highest safety and efficacy standards, making a positive
            impact on diverse communities everywhere.
          </p>
          <Col xl={3} md={5} xs={10} data-aos="fade-down">
            <div className="text-center d-flex flex-column gap-2 cursor_pointer partner_ani">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/qsb96NKuvM.svg"
                alt="Product Quality"
                width={50}
                height={50}
                className="mx-auto transition"
              />
              <h3 className="fs_md fw-bold text_sky mb-0">Quality</h3>
              <p className="fs_6sm fs-normal">
                We upholds the highest standards, delivering reliable and safe
                pharmaceutical products with a focus on excellence.
              </p>
            </div>
          </Col>
          <Col xl={3} md={5} xs={10} data-aos="fade-up">
            <div className="text-center d-flex flex-column gap-2 cursor_pointer partner_ani">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/hOqrzPKpM8.svg"
                alt="Affordable Product"
                width={50}
                height={50}
                className="mx-auto transition"
              />
              <h3 className="fs_md fw-bold text_sky mb-0">Affordability</h3>
              <p className="fs_6sm fs-normal">
                We provides high-quality pharmaceutical products at affordable
                prices, making healthcare accessible to all.
              </p>
            </div>
          </Col>
          <Col xl={3} md={5} xs={10} data-aos="fade-down">
            <div className="text-center d-flex flex-column gap-2 cursor_pointer partner_ani">
              {" "}
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/ngl5nIoLor.svg"
                alt="Nature Friendly"
                className="mx-auto transition"
                width={50}
                height={50}
              />
              <h3 className="fs_md fw-bold text_sky mb-0">24/7 Support</h3>
              <p className="fs_6sm fs-normal">
                We provides round-the-clock support with a dedicated team,
                prompt and friendly assistance whenever needed.
              </p>
            </div>
          </Col>
          <Col xl={3} md={5} xs={10} data-aos="fade-up">
            <div className="text-center d-flex flex-column gap-2 cursor_pointer partner_ani">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/0JKiRsGGMe.svg"
                alt="Easily Accessibility"
                width={50}
                height={50}
                className="mx-auto transition"
              />
              <h3 className="fs_md fw-bold text_sky mb-0">Accessibility</h3>
              <p className="fs_6sm fs-normal">
                We ensures seamless access to essential healthcare products,
                making quality solutions readily available to all.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
