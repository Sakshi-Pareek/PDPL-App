import React, { useState } from "react";
import { Accordion, Container } from "react-bootstrap";

const Faqs = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleSelect = (key) => {
    setActiveKey(key === activeKey ? null : key);
  };

  const accordionData = [
    {
      title: "What does Plus Distributions Pvt. Ltd. do?",
      content:
        "Plus Distributions Pvt. Ltd. is a pharmaceutical distribution company that supplies a wide range of high-quality medicines across India. We ensure timely delivery, proper storage, and a reliable supply chain for all our clients.",
    },
    {
      title: "Do you manufacture your own products?",
      content:
        "No, we do not manufacture our own products. We distribute pharma products from trusted and certified manufacturers to ensure quality and compliance.",
    },
    {
      title: "Are your products certified?",
      content:
        <>Yes, all the products we distribute are certified with <strong>WHO-GMP</strong> and other relevant authorities, ensuring safety and quality.</>,
    },
    {
      title: "Which locations do you serve?",
      content:
        "We provide pharmaceutical distribution services across multiple regions in India. For specific location inquiries, feel free to contact our support team.",
    },
    {
      title: "Do you provide cold chain logistics?",
      content:
        "Yes, we offer cold chain logistics for temperature-sensitive medicines to maintain their efficacy and quality during transit.",
    },
    {
      title: "Are you open to new business partnerships?",
      content:
        "Absolutely! We welcome partnerships with pharma manufacturers and medical institutions. Get in touch with us to explore collaboration opportunities.",
    },
    {
      title: "How do you ensure the quality of distributed medicines?",
      content:
        "We source only from certified manufacturers, follow strict storage protocols, and maintain regular quality checks throughout the supply chain.",
    },
  ];

  return (
    <Container className="py-5 my-4" id="hire">
      <div className="px-lg-5 mx-lg-5">
        <h2
          className="fw-bold fs_8xl mb-2 text-center mb-lg-5"
          data-aos="fade-down"
        >
          Frequently Asked Questions
        </h2>
        <Accordion
          activeKey={activeKey}
          className="d-flex flex-column gap-4 mx-lg-5"
          data-aos="fade-down"
        >
          {accordionData.map((item, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={index}
              onClick={() => handleSelect(index.toString())}
              className={`custom-accordion-item ${
                activeKey === index.toString() ? "active" : ""
              }`}
            >
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body className="pt-0">
                <div>
                  <p className="mb-1">{item.content}</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default Faqs;
