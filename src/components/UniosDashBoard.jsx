import React from "react";
import { Container } from "react-bootstrap";

const UniosDashBoard = () => {
  return (
    <>
      <div className="py-4" data-aos="fade-in">
        <Container className="py-lg-5 py-4 text-center">
          <h3
            className="fw-bold fs_8xl mx-auto letter_spacing mb-2 text-center"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            The Intelligence Behind PDPL
          </h3>
          <p
            className="fs_8sm letter_spacing fw-normal lh-base text-black text-center px-lg-5 mx-lg-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Unios is a comprehensive ERP software designed to streamline sales
            processes, manage sales orders, and ensure effective tracking of
            these orders. With a strong focus on customer-centric solutions,
            Unios provides a complete dispatch system, inventory management, and
            a seamless delivery process, all integrated with a robust tracking
            system. This empowers businesses to operate efficiently and
            effectively, offering end-to-end visibility and control over their
            supply chain.
          </p>
          <div data-aos="zoom-in" data-aos-delay="500">
            <img
              src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/M2HFz5qJH8.webp"
              alt="UniosDashboard"
              className="w-100 px-5"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default UniosDashBoard;
