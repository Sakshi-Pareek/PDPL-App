import React, { useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import FrontendIcon from "../components/assets/images/svg/frontend_sign.svg";
import UxUiIcon from "../components/assets/images/svg/ui_desgn.svg";
import HrIcon from "../components/assets/images/svg/hr_sign.svg";
import GraphicIcon from "../components/assets/images/svg/graphic.svg";
import FullStack from "../components/assets/images/svg/full-stack.svg";

const OpenRoles = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleSelect = (key) => {
    setActiveKey(key === activeKey ? null : key);
  };

  const accordionData = [
    {
      title: "Front-end Developer",
      content:
        "Artificial Intelligence refers to the simulation of human intelligence in machines that are programmed to think and learn.",
      image: FrontendIcon,
      restext:
        "Build responsive web applications using HTML, CSS, JavaScript. Work with modern frameworks (React, Angular, or Vue). Ensure cross-browser compatibility and smooth user experiences.",
      reqtext:
        "Proficiency in HTML, CSS, and JavaScript. Experience with JavaScript frameworks (React, Vue, or Angular). Strong attention to detail and problem-solving skills.",
    },
    {
      title: "UX/UI Designer",
      content:
        "AI can enhance business processes by improving efficiency, reducing costs, and providing data-driven insights.",
      image: UxUiIcon,
      restext:
        "Design user-friendly interfaces for web and mobile applications. Conduct user research and usability testing. Create wireframes, prototypes, and mockups.",
      reqtext:
        "Strong portfolio showcasing UI/UX design work. Proficiency in design tools (Figma, Sketch, Adobe XD). Knowledge of user-centered design principles.",
    },
    {
      title: "HR Executive",
      content:
        "Relevant AI technologies include machine learning, natural language processing, and computer vision.",
      image: HrIcon,
      restext:
        "Manage recruitment processes and onboarding of new employees. Administer employee benefits and maintain HR records. Assist in performance management and employee relations. Develop and implement HR policies and procedures.",
      reqtext:
        "Bachelor’s degree in Human Resources or related field. Proven experience in HR roles. Strong communication and interpersonal skills. Knowledge of HR software and labor laws.",
    },
    {
      title: "Graphic Designer",
      content:
        "Relevant AI technologies include machine learning, natural language processing, and computer vision.",
      image: GraphicIcon,
      restext:
        "Create visually appealing designs for print and digital media. Collaborate with marketing teams to develop branding materials. Produce layouts, logos, and illustrations based on project requirements. Ensure consistency in designs across various platforms.",
      reqtext:
        "Proven experience as a Graphic Designer with a strong portfolio. Proficiency in design software (Adobe Creative Suite, CorelDRAW, etc.). Strong creative skills and attention to detail. Excellent communication and teamwork abilities",
    },
    {
      title: "Fullstack Developer",
      content:
        "Relevant AI technologies include machine learning, natural language processing, and computer vision.",
      image: FullStack,
      restext:
        "Develop and maintain both front-end and back-end applications. Collaborate with designers and product managers to implement user-friendly features. Write clean, scalable code using programming languages such as JavaScript, Python, or Java. Manage databases and ensure data security and integrity.",
      reqtext:
        "Proven experience as a Full Stack Developer with a strong portfolio. Proficiency in front-end technologies (HTML, CSS, JavaScript) and frameworks (React, Angular, or Vue). Experience with back-end technologies (Node.js, Express, Django, etc.). Knowledge of database management (SQL, NoSQL). Strong problem-solving skills and ability to work in a team.",
    },
  ];

  return (
    <Container className="pb-5 mb-4" id="hire">
      <h2 className="fw-bold fs_8xl mb-2 text-center mb-5" data-aos="fade-down">
        Careers Await at PDPL
      </h2>
      <Accordion
        activeKey={activeKey}
        className="d-flex flex-column gap-4"
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
            <Accordion.Header>
              <img
                src={item.image}
                alt={`${item.title} Icon`}
                className="me-3"
                width={45}
                height={43}
              />
              {item.title}
            </Accordion.Header>
            <Accordion.Body className="pt-0">
              <div>
                <h5 className="mb-1">Location: Gurugram</h5>
                <p className="mb-1">
                  <span className="fw-bold">Responsibilities:</span>{" "}
                  {item.restext}
                </p>
                <p className="mb-1">
                  <span className="fw-bold">Requirements:</span> {item.reqtext}
                </p>
                <p className="mb-0">
                  <span className="fw-bold">Apply: </span>
                  Send your portfolio or resume to{" "}
                  <a
                    href="mailto:info@plusdistributions.in"
                    target="_blank"
                    rel="noreferrer"
                  >
                    info@plusdistributions.in
                  </a>
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default OpenRoles;
