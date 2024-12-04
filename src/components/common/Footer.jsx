import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WebLogo from "../assets/images/webp/webLogo.png";
import MailIcon from "../assets/images/svg/mail_icon.svg";
import PhoneIcon from "../assets/images/svg/call_icon.svg";
import LocationIcon from "../assets/images/svg/location_icon.svg";
import FbIcon from "../assets/images/svg/fbicon.svg";
import InstaIcon from "../assets/images/svg/instaicon.svg";
import WhatsappIcon from "../assets/images/svg/whatsappicon.svg";
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
                <img src={WebLogo} alt="WebLogo" width={150} height={56} />
              </a>
              <p className="text-black fs_4md fw-semibold ff_roboto mt-2">
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
                    src={FbIcon}
                    alt="FbIcon"
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
                    src={InstaIcon}
                    alt="InstaIcon"
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
                    src={WhatsappIcon}
                    alt="WhatsappIcon"
                    width={35}
                    height={35}
                  />
                </a>
              </div>
            </Col>
            <Col lg={2} sm={3} xs={12} className="mt-2">
              <ul className="d-flex flex-column gap-2 mb-0 ps-0">
                <li className="fw-semibold fs_md text-black ff_roboto">
                  Our Company
                </li>
                <li>
                  <Link
                    to="/"
                    aria-label="Go to the home page"
                    className="fw-normal fs_8sm text-black ff_roboto under_line position-relative nav_link transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    aria-label="Learn more about us and our company"
                    className="fw-normal fs_8sm text-black ff_roboto under_line position-relative nav_link transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partner"
                    aria-label="Learn more about our partners and partnership opportunities"
                    className="fw-normal fs_8sm text-black ff_roboto under_line position-relative nav_link transition"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career"
                    aria-label="Explore career opportunities with us"
                    className="fw-normal fs_8sm text-black ff_roboto under_line position-relative nav_link transition"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="fw-normal fs_8sm text-black ff_roboto under_line position-relative nav_link transition text-nowrap"
                  >
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </Col>
            <Col
              lg={3}
              sm={3}
              xs={12}
              className="d-lg-flex justify-content-center mt-2"
            >
              <ul className="d-flex flex-column gap-2 mb-0 ps-0">
                <li className="fw-semibold fs_md text-black ff_roboto">
                  Support
                </li>
                <li>
                  <a
                    href="#"
                    className="fw-normal fs_8sm text-black ff_roboto under_line position-relative nav_link transition"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fw-normal fs_8sm text-black ff_roboto under_line position-relative nav_link transition"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fw-normal fs_8sm text-black ff_roboto under_line position-relative nav_link transition"
                  >
                    Sustainability
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fw-normal fs_8sm text-black ff_roboto under_line position-relative nav_link transition"
                  >
                    News
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} xs={12} className="mt-2">
              <ul className="d-flex flex-column gap-2 mb-0 ps-0">
                <li className="fw-semibold fs_md text-black ff_roboto">
                  Contact Us
                </li>
                <li>
                  <a
                    href="mailto: info@plusdistributions.in"
                    target="_blank"
                    rel="noreferrer"
                    className="fw-normal fs_8sm text-black ff_roboto mb-1 d-flex align-items-center gap-2 contact_icon nav_link transition"
                  >
                    <img
                      src={MailIcon}
                      alt="MailIcon"
                      width={30}
                      height={30}
                      className="transition"
                    />{" "}
                    info@plusdistributions.in
                  </a>
                </li>
                <li>
                  <a
                    href="tel: 9671480888"
                    target="_blank"
                    rel="noreferrer"
                    className="fw-normal fs_8sm text-black ff_roboto mb-1 d-flex align-items-center gap-2 contact_icon nav_link transition"
                  >
                    <img
                      src={PhoneIcon}
                      className="transition"
                      alt="PhoneIcon"
                      width={30}
                      height={30}
                    />{" "}
                    9671480888 ,+91124-4014675
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Plus+Distribution+Pvt.+Ltd/@28.4339692,76.9917312,17z/data=!3m1!4b1!4m6!3m5!1s0x390d17bdf3ddf591:0xbdbb9a6f0115739d!8m2!3d28.4339645!4d76.9943061!16s%2Fg%2F11rn7qzn6k?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="fw-normal fs_8sm text-black ff_roboto mb-1 d-flex gap-2 contact_icon nav_link transition"
                  >
                    <img
                      src={LocationIcon}
                      alt="LocationIcon"
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
          <p className="fw-normal fs_8sm text-black ff_roboto mb-0 text-black py-3 text-center">
            ©{" "}
            <span id="year_change " className="ff_roboto">
              {year}{" "}
            </span>
            plusdistributions | All Rights Reserved
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
