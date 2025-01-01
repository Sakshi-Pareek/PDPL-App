import React from "react";
import { Container } from "react-bootstrap";
import UniosDashboard from "../components/assets/images/webp/UniosDashbord.jpg";

const UniosDashBoard = () => {
  return (
    <>
      <div className="py-4">
        <Container className="py-lg-5 py-2 text-center">
          <h3 className="fw-bold fs_8xl mx-auto letter_spacing mb-2 text-center">
            Unios
          </h3>
          <h3 className="fs_2lg mx-auto letter_spacing mb-2 text-center text_sky">
            The Intelligence Behind PDPL
          </h3>
          <p className="fs_8sm letter_spacing fw-normal lh-base text-black ff_roboto text-center px-lg-5 mx-lg-5">
            Introducing Unios, an innovative digital platform by PDPL that
            transforms healthcare distribution in India. Designed for efficiency
            and ease of use, Unios connects healthcare providers, hospitals, and
            distributors, ensuring a reliable supply chain for medical products
            and services. Join us in shaping the future of healthcare
            distribution!
          </p>
          <img src={UniosDashboard} alt="UniosDashboard" className="w-100" />
        </Container>
      </div>
    </>
  );
};

export default UniosDashBoard;
