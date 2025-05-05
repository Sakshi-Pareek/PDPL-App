import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Wearebest = () => {
  const data = [
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/YFxULCIxXW.svg",
      heading: "10+",
      para: "Warehouses Across India",
      rotate:
        "The healthcare and pharmaceutical supply chain manages the flow of materials and information from raw material procurement to final product delivery.",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/PscRDw3smM.webp",
      heading: "1000+",
      para: "Healthcare Clients",
      rotate:
        "Cold storage in pharmaceuticals safeguards the quality and efficacy of temperature-sensitive products, ensuring reliable and safe delivery to hospitals through strict temperature control across the supply chain.",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/gsLt6qe5ZQ.webp",
      heading: "48000+",
      para: "Product Range",
      rotate:
        "We use technology in our warehouses to improve the quality and availability of our product range, ensuring reliable service for customers.",
    },
    {
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/DuXQYwuTJi.webp",
      heading: "25+",
      para: "Hospital Pharmacies",
      rotate:
        "Customers can arrange for returns and claims settlements through our Unios Application",
    },
  ];
  return (
    <>
      <div className="distributor_bg py-5 bg_gray" id="about">
        <Container className="py-md-3">
          <h2
            className="text-center fw-bold fs_8xl mx-auto letter_spacing mb-0"
            data-aos="fade-down"
          >
            We Are The Best Pharmaceutical
            <br className="d-lg-block d-none" /> Distributor In India
          </h2>
          <Row className="mt-xl-4 pt-md-5 pt-4 justify-content-center">
            {data.map((a, index) => (
              <Col
                className="mb-4"
                lg={3}
                md={6}
                sm={6}
                xs={10}
                key={index}
                data-aos="fade-up"
              >
                <div className="flip-card bg-transparent">
                  <div className="flip-card-inner position-relative w-100 h-100 text-center">
                    <div className="cardfrontside position-absolute w-100 h-100">
                      <div className="bg-white rounded-4 shadow cursor_pointer d-flex flex-column gap-2 h-100 transition p-3">
                        <img loading="lazy" 
                          src={a.image}
                          alt="Pharmaceutical company assets representing 10+ Warehouses Across India"
                          width="186px"
                          className="mx-auto h-auto"
                        />
                        <h3 className="fs_4md fw-bold text-center mb-0 ">
                          {a.heading}
                        </h3>
                        <p className="text-center fs_8sm fw-normal lh-base mb-0">
                          {a.para}
                        </p>
                      </div>
                    </div>
                    <div className="cardbackside position-absolute w-100 h-100 bg_gray cursor_pointer rounded-4 shadow p-4 d-flex justify-content-center align-items-center">
                      <h2 className="fs_8sm text-center text-black">
                        {" "}
                        {a.rotate}
                      </h2>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Wearebest;
