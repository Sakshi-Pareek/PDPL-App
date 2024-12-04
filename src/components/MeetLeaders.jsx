import React, { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import anilBhatiaImage from "../components/assets/images/webp/anilBhatia.jpg";

const MeetLeaders = () => {
  return (
    <div className="bg_gray py-5">
      <Container className="py-lg-4">
        <h2
          className="fw-bold fs_8xl mb-lg-5 mb-4 text-center"
          data-aos="fade-down"
        >
          Meet the Leaders
        </h2>
        <Row data-aos="fade-down">
          <div className="d-flex flex-column justify-content-center pb-3">
            <div
              className="bg-image-container mx-auto mb-2 shadow rounded-circle cursor_pointer"
              style={{
                backgroundImage: `url(${anilBhatiaImage})`,
                backgroundSize: "cover",
                width: "120px",
                height: "120px",

                backgroundPosition: " center center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="w-100">
              <p className="text-black fw-semibold fs_8sm text-center text-nowrap mb-0 pb-1">
                Anil Kumar
              </p>
              <p className="fs_6sm fw-light text-center mb-0">
                Managing Director
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MeetLeaders;
