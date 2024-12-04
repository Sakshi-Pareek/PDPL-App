import React, { useState } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import Team1 from "../components/assets/images/webp/anilBhatia.jpg";

const TeamHead = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState(null);

  const leaders = [
    { name: "Bryan Wiener", designation: "Executive Chairman", image: Team1 },
    {
      name: "Sarah Hofstetter",
      designation: "Chief Executive Officer",
      image: Team1,
    },
    { name: "Jared Belsky", designation: "President", image: Team1 },
    {
      name: "Pierre Lipton",
      designation: "Chief Creative Officer",
      image: Team1,
    },
    { name: "Lee Maicon", designation: "Chief Strategy Officer", image: Team1 },
    {
      name: "Abbey Klaassen",
      designation: "Chief Marketing Officer",
      image: Team1,
    },
    {
      name: "Geline Midouin",
      designation: "Chief Talent Officer",
      image: Team1,
    },
    {
      name: "Thomas Meisner",
      designation: "Chief Financial Officer",
      image: Team1,
    },
  ];

  const handleImageClick = (leader) => {
    setSelectedLeader(leader);
    setShowModal(true);
  };

  return (
    <>
      <Container className="py-5">
        <h2
          className="fw-bold fs_8xl mx-auto letter_spacing mb-3 text-center"
          data-aos="fade-down"
        >
          Leadership Team
        </h2>
        <p
          className="fs_md letter_spacing fw-normal lh-base text-black ff_roboto mb-4 text-center"
          data-aos="fade-down"
        >
          At PDPL, our leadership team combines deep industry expertise with a
          commitment to innovation and excellence. Each leader plays a vital
          role in shaping our vision and driving our success, ensuring we
          consistently deliver value to our clients and partners. Get to know
          the people guiding PDPL’s growth and impact.
        </p>
        {/* <Row className="justify-content-center">
          {leaders.map((leader, index) => (
            <Col
              xs={12}
              sm={6}
              lg={3}
              className="mb-4"
              key={index}
              data-aos="zoom-in"
            >
              <div
                className={`leader-card rounded-4 py-4 mx-lg-3 mx-2 ${
                  hoveredIndex === index ? "bg-hover" : ""
                }`}
              >
                <div className="position-relative leader-img-card mx-auto">
                  <div
                    className="leader-image cursor_pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleImageClick(leader)}
                    style={{
                      backgroundImage: `url(${leader.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="overlay d-flex align-items-center justify-content-center bottom-0 end-0 cursor_pointer">
                      <span className="arrow-icon text-white fs-5">→</span>
                    </div>
                  </div>
                </div>
                <p className="text-center fw-bold mt-3 mb-1">{leader.name}</p>
                <p className="text-center text-muted mb-0">
                  {leader.designation}
                </p>
              </div>
            </Col>
          ))}
        </Row> */}
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedLeader?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="gap-md-0 gap-4">
            <Col
              md={5}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                src={selectedLeader?.image}
                alt={selectedLeader?.name}
                className="img-fluid rounded w-100"
              />
            </Col>
            <Col
              md={7}
              className="overflow-hidden"
              style={{ maxWidth: "460px", maxHeight: "300px" }}
            >
              <div className="overflow-y-scroll" style={{ maxHeight: "300px" }}>
                <p className="mb-1">
                  <strong className="fs-5">Designation:</strong>{" "}
                  {selectedLeader?.designation}
                </p>
                <p className="mb-0">
                  At PDPL, our leadership team combines deep industry expertise
                  with a commitment to innovation and excellence. Each leader
                  plays a vital role in shaping our vision and driving our
                  success, ensuring we consistently deliver value to our clients
                  and partners. Get to know the people guiding PDPL’s growth and
                  impact. At PDPL, our leadership team combines deep industry
                  expertise with a commitment to innovation and excellence. Each
                  leader plays a vital role in shaping our vision and driving
                  our success, ensuring we consistently deliver value to our
                  clients and partners. Get to know the people guiding PDPL’s
                  growth and impact. expertise with a commitment to innovation
                  and excellence. Each leader plays a vital role in shaping our
                  vision and driving our success, ensuring we consistently
                  deliver value to our clients and partners. Get to know the
                  people guiding PDPL’s growth and impact.
                </p>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setShowModal(false)}
            className="fw-medium fs_md rounded-3 common_btn py-2 px-4 text-white cursor_pointer transition"
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TeamHead;
