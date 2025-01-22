import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Franchise = () => {
  const awardsData = [
    {
      title: "Inventory Management",
      organization:
        "Maintaining an organized inventory of pharmaceutical and healthcare products.",
    },
    {
      title: "Order Fulfillment",
      organization:
        "Efficiently processing and dispatching orders to clients and distributors.",
    },
    {
      title: "Compliance",
      organization:
        "Ensuring all operations meet regulatory and safety standards, including proper storage conditions for sensitive products.",
    },
    {
      title: "Technology Integration",
      organization:
        "Utilizing PDPL’s advanced software and systems for real-time tracking, inventory control, and reporting.",
    },
  ];
  return (
    <>
      <div className="bg_gray py-lg-4">
        <Container className="py-5 text-center">
          <h2 className="fw-bold fs_8xl mb-2 text-center" data-aos="fade-down">
        Warehouse Franchise Program
          </h2>
          <img
            src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/yrdo4WuHC1.webp"
            alt="WareHouse Franchise Rules"
            className="w-75 d-lg-flex d-none mx-auto py-5"
            data-aos="fade-down"
          />
          <p
            className="fw-normal fs_md letter_spacing mb-0 lh-base text-black text-center"
            data-aos="fade-down"
          >
            A PDPL warehouse franchise involves partnering with the company to
            operate a storage and distribution facility under the PDPL brand.
            Franchisees manage the warehousing and distribution of
            pharmaceutical and healthcare products while adhering to the
            company's high-quality standards and operational guidelines.
          </p>
          <Row className="mt-lg-5 mt-4 justify-content-center">
            {awardsData.map((award, index) => (
              <Col
                key={index}
                lg={5} sm={6} xs={10}
                className="text-center d-flex flex-column justify-content-center"
                data-aos="fade-down"
              >
                <div className="award-card d-flex flex-column align-items-center p-3 h-100">
                  <img
                    src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/iBYIZCNIH1.webp"
                    alt="Warehouse Icon"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                  <h5 className="fw-bold fs_md my-3 text-center px-5 text-nowrap">
                    {award.title}
                  </h5>
                  <p className="text-center mb-0">{award.organization}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Franchise;
