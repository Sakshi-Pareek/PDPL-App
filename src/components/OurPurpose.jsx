import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const OurPurpose = () => {
  const detailsData = [
    {
      id: 1,
      count: 2800,
      label: "Deliveries across India",
    },
    {
      id: 2,
      count: 10,
      label: "Warehouses across India",
    },
    {
      id: 3,
      count: 50,
      label: "Trusted partners",
    },
  ];

  const [counters, setCounters] = useState(detailsData.map(() => 0));

  useEffect(() => {
    const incrementCounters = () => {
      setCounters((prevCounters) =>
        prevCounters.map((count, index) => {
          const target = detailsData[index].count;
          if (count < target) {
            const increment = Math.ceil(target / 100);
            return count + increment > target ? target : count + increment;
          }
          return count;
        })
      );
    };

    const interval = setInterval(incrementCounters, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container className="mt_neg_50">
        <div
          className="bg_sky py-md-4 py-3 px-5 pt-5 rounded-3 shadow"
          data-aos="fade-down"
        >
          <Row className="flex flex-wrap align-items-center justify-content-center gap-lg-0 gap-4">
            {detailsData.map((detail, index) => (
              <Col sm={6} md={4} className="cursor_pointer" key={detail.id}>
                <div className="text-center d-flex flex-column gap-1">
                  <p className="fw-semibold fs_8xl text-white mb-0">
                    {counters[index].toLocaleString()}+
                  </p>
                  <p className="fw-medium fs_8sm text-white mb-0">
                    {detail.label}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default OurPurpose;
