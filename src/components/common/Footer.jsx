import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const d = new Date();
    setYear(d.getFullYear());
  }, []);

  return (
    <>
      <div className="bg_footer pt-md-4 ">
        <Container>
          <Row className="justify-content-between gap-lg-0 gap-3 border-bottom border-black py-5">
            <Col xl={4} lg={3} xs={12}>
              <a href="#" className="ms-auto">
                <img
                  src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/kT12dBWzNV.webp"
                  alt="Plus Distribution Pvt. Ltd. logo"
                  width={150}
                  height={56}
                />
              </a>
              <p className="text-black fs_4md fw-semibold mt-2">
                Delivering Health, <br className="d-xl-block d-none" />
                Empowering Lives
              </p>
              <div className="d-flex gap-2">
                <a
                  href="https://www.facebook.com/"
                  target="_black"
                  rel="noreferrer"
                >
                  <img
                    src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/2pw0JLNPgp.svg"
                    alt="Facebook icon"
                    width={35}
                    height={35}
                    className="social_icon transition"
                  />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_black"
                  rel="noreferrer"
                >
                  <img
                    src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/9LYBFyV7qv.svg"
                    alt="Instagram Icon"
                    width={35}
                    height={35}
                    className="social_icon transition"
                  />
                </a>
                <a
                  href="https://www.whatsapp.com/"
                  target="_black"
                  rel="noreferrer"
                  className="social_icon transition"
                >
                  <img
                    src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/l5XTh9isTH.svg"
                    alt="WhatsApp icon"
                    width={35}
                    height={35}
                  />
                </a>
              </div>
            </Col>
            <Col lg={2} sm={3} xs={5} className="mt-2">
              <ul className="d-flex flex-column gap-2 mb-0 ps-0">
                <li className="fw-semibold fs_md text-black">Our Company</li>
                <li>
                  <Link
                    to="/"
                    aria-label="Go to the home page"
                    className="fw-normal fs_8sm text-black under_line position-relative nav_link transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    aria-label="Learn more about us and our company"
                    className="fw-normal fs_8sm text-black under_line position-relative nav_link transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partner"
                    aria-label="Learn more about our partners and partnership opportunities"
                    className="fw-normal fs_8sm text-black under_line position-relative nav_link transition"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career"
                    aria-label="Explore career opportunities with us"
                    className="fw-normal fs_8sm text-black under_line position-relative nav_link transition"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="fw-normal fs_8sm text-black under_line position-relative nav_link transition text-nowrap"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Col>
            <Col
              lg={3}
              sm={3}
              xs={5}
              className="d-lg-flex justify-content-center mt-2"
            >
              <ul className="d-flex flex-column gap-2 mb-0 ps-0">
                <li className="fw-semibold fs_md text-black">Support</li>
                <li>
                  <a
                    href="https://www.unios.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="fw-normal fs_8sm text-black under_line position-relative nav_link transition"
                  >
                    Unios
                  </a>
                </li>
                <li>
                  <Link
                    to="/infrastructure"
                    className="fw-normal fs_8sm text-black under_line position-relative nav_link transition"
                  >
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    to="/franchise "
                    className="fw-normal fs_8sm text-black under_line position-relative nav_link transition"
                  >
                    Franchise
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:hr.workspace@plusdistributions.in"
                    target="_blank"
                    rel="noreferrer"
                    className="fw-normal fs_8sm text-black under_line position-relative nav_link transition"
                  >
                    Join Us
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} xs={12} className="mt-2">
              <ul className="d-flex flex-column gap-2 mb-0 ps-0">
                <li className="fw-semibold fs_md text-black">Contact Us</li>
                <li>
                  <a
                    href="mailto: info@plusdistributions.in"
                    target="_blank"
                    rel="noreferrer"
                    className="fw-normal fs_8sm text-black mb-1 d-flex align-items-center gap-2 contact_icon nav_link transition"
                  >
                    <img
                      src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/9vPwJkka3P.svg"
                      alt="Email icon"
                      width={30}
                      height={30}
                      className="transition"
                    />{" "}
                    info@plusdistributions.in
                  </a>
                </li>
                <li>
                  <a
                    href="tel:  +91124-4014675"
                    target="_blank"
                    rel="noreferrer"
                    className="fw-normal fs_8sm text-black mb-1 d-flex align-items-center gap-2 contact_icon nav_link transition"
                  >
                    <img
                      src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/dn1jGDjdR9.svg"
                      className="transition"
                      alt="Phone icon"
                      width={30}
                      height={30}
                    />{" "}
                    +91124-4014675
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Plus+Distribution+Pvt.+Ltd/@28.4339692,76.9917312,17z/data=!3m1!4b1!4m6!3m5!1s0x390d17bdf3ddf591:0xbdbb9a6f0115739d!8m2!3d28.4339645!4d76.9943061!16s%2Fg%2F11rn7qzn6k?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="fw-normal fs_8sm text-black mb-1 d-flex gap-2 contact_icon nav_link transition"
                  >
                    <img
                      src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/RrKLuyd86c.svg"
                      alt="Location icon"
                      className="transition"
                      width={35}
                      height={35}
                    />{" "}
                    Plus Distribution Pvt. Ltd
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <p className="fw-normal fs_8sm text-black mb-0 text-black py-3 text-center">
            © <span id="year_change">{year} </span>
            plusdistributions | All Rights Reserved
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
