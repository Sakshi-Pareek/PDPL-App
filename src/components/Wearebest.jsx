import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Business1 from "./assets/images/svg/distributre1.svg";
import Business2 from "./assets/images/svg/distributre2.svg";
import Business3 from "./assets/images/svg/distributre3.svg";
import Business4 from "./assets/images/svg/distributre1.svg";

const Wearebest = () => {
  const data = [
    {
      image: Business1,
      heading: "10+",
      para: "Warehouses Across India",
      rotate:
        "The healthcare and pharmaceutical supply chain manages the flow of materials and information from raw material procurement to final product delivery.",
    },
    {
      image: Business2,
      heading: "4+",
      para: "Cold Storage Management System",
      rotate:
        "Cold storage in pharmaceuticals preserves the quality and efficacy of temperature-sensitive products by maintaining strict temperature control throughout the supply chain",
    },
    {
      image: Business3,
      heading: "14+",
      para: "Supply Chain & Distribution",
      rotate:
        "We invest in technology at all of our distribution warehouses to enhance fulfilment rates, reliability and product availability",
    },
    {
      image: Business4,
      heading: "21+",
      para: "Retail Pharmacies",
      rotate:
        "Customers can arrange for returns and claims settlements through our Entero Direct (ED) Application",
    },
  ];
  return (
    <>
      <div className="distributor_bg py-5 bg_gray">
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
                      <div className="bg-white rounded-4 shadow cursor_pointer d-flex flex-column gap-2 h-100 transition p-4">
                        <img
                          src={a.image}
                          alt="image"
                          width="186px"
                          height="131px"
                          className="mx-auto"
                        />
                        <h3 className="ff_roboto fs_2lg fw-bold text-center mb-0 ">
                          {a.heading}
                        </h3>
                        <p className="text-center fs_md fw-normal lh-base ff_roboto mb-0">
                          {a.para}
                        </p>
                      </div>
                    </div>
                    <div className="cardbackside position-absolute w-100 h-100 bg_gray cursor_pointer rounded-4 shadow p-4 d-flex justify-content-center align-items-center">
                      <h2 className="fs_8sm text-center text-black ff_roboto">
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
