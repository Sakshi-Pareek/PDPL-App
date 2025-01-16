import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoverStoryImage from "../components/assets/images/webp/anilBhatia.webp";

const CoverStory = () => {
  return (
    <section className="py-lg-3 py-2 bg_sky">
      <Container className="py-5">
        <Row className="align-items-center flex-wrap-reverse justify-content-between">
          <Col
            xl={7}
            lg={6}
            data-aos="fade-left"
            className="text-lg-start text-center"
          >
            <h3 className="fw-bold fs_2xl mx-auto letter_spacing text-white">
              Streamlined Pharmaceutical Distribution
            </h3>
            <p className="fs_md lh-normal text_sky fst-italic text-white">
              “PDPL is one of the very few players in the country who ensure
              comprehensive B2B pharmaceutical management compliance, while
              consistently maintaining a customer-driven approach.”
            </p>

            <p className="fs_md lh-base text_gray mb-4 text-white">
              The pharmaceutical wholesale distribution sector has evolved. PDPL
              ensures timely delivery of quality products through innovation and
              strong customer service while meeting regulatory standards.
            </p>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              data-aos="fade-right"
              class="learn_btn fw-medium fs_md rounded-3 cursor_pointer transition bg-white py-2 px-4"
            >
              Read More
            </a>
          </Col>
          <Col xl={4} lg={6} className="text-center p-4" data-aos="fade-right">
            <img
              src={CoverStoryImage}
              alt="Cover Story"
              className="img-fluid rounded shadow-lg"
            />
            <p className="fs_6sm text-white text-end mt-2 fst-italic mb-0">
              Anil Kumar, <cite title="Source Title">Managing Director</cite>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CoverStory;
