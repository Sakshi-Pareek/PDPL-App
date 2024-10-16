import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import WebLogo from "../assets/images/svg/logo.svg";
import CommonBtn from "./CommonBtn";

const Nav = () => {
  const [show, setShow] = useState(true);
  const [activeLink, setActiveLink] = useState("");

  if (show === false) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  const handleNavClick = (path) => {
    setActiveLink(path);
    setShow(true);
  };

  return (
    <div className="bg-white shadow position-sticky top-0 z_4">
      <Container>
        <nav className="d-flex align-items-center justify-content-between py-1">
          <div>
            <a href="/" className="text-black d-flex align-items-center">
              <img
                src={WebLogo}
                alt="WebLogo"
                className="w-100"
                width={70}
                height={60}
              />
            </a>
          </div>
          <ul
            className={`${
              show ? "left_neg_100" : "start-0"
            } d-flex flex-xl-row flex-column list-unstyled gap-4 align-items-center justify-content-xl-between justify-content-center mb-0 pe-0 nav_bar transition`}
          >
            {["Home", "About", "Partner", "Career"].map((item, index) => (
              <li
                key={index}
                aria-label="Learn more about our company"
                onClick={() => handleNavClick(`/${item.toLowerCase()}`)}
                className={`under_line position-relative ${
                  activeLink === `/${item.toLowerCase()}` ? "hover" : ""
                }`}
              >
                <Link
                  aria-label="Learn more about our company"
                  to={`/${item.toLowerCase()}`}
                  className="fs_md text-black nav_link transition"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li onClick={() => handleNavClick("/contact")}>
              <Link
                to="/contact"
                aria-label="Contact us for more information or support"
              >
                <CommonBtn btnname="Contact Us" />
              </Link>
            </li>
          </ul>

          <div
            onClick={() => setShow(!show)}
            className={`${
              show ? "" : "cross transition"
            } navline cursor_pointer d-xl-none d-flex bg-transparent flex-column gap-2 justify-content-center align-items-center position-relative px-xl-0 px-4 top-0 z_4`}
          >
            <span className="crl_1 bg_blue transition rounded"></span>
            <span className="crl_2 bg_blue transition rounded"></span>
            <span className="crl_3 bg_blue transition rounded"></span>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Nav;
