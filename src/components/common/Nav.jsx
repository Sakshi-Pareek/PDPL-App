import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import WebLogo from "../assets/images/svg/logo.svg";
import CommonBtn from "./CommonBtn";

const Nav = () => {
  const [show, setShow] = useState(true);
  if (show === false) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div className="bg-white shadow position-sticky top-0 z_4">
      <Container>
        <nav className="d-flex align-items-center justify-content-between py-1 ">
          <div>
            <a href="/" className="text-black d-flex align-items-center">
              <img src={WebLogo} alt="WebLogo" className="w-100 max_w_80" />
            </a>
          </div>
          <ul
            className={`${
              show ? "left_neg_100" : "start-0"
            } d-flex flex-xl-row flex-column list-unstyled gap-4 align-items-center justify-content-xl-between justify-content-center mb-0 pe-0 nav_bar transition`}
          >
            <li
              onClick={() => setShow(true)}
              className="under_line position-relative"
            >
              {" "}
              <Link to="/" className="fs_md text-black nav_link transition">
                Home
              </Link>
            </li>
            <li
              onClick={() => setShow(true)}
              className="under_line position-relative d-md-ta"
            >
              <Link
                to="/about"
                className="fs_md text-black nav_link transition"
              >
                About
              </Link>
            </li>
            <li
              onClick={() => setShow(true)}
              className="under_line position-relative"
            >
              <Link
                to="/partener"
                className="fs_md text-black nav_link transition"
              >
                Partner
              </Link>
            </li>
            <li
              onClick={() => setShow(true)}
              className="under_line position-relative"
            >
              <Link
                to="/career"
                className="fs_md text-black nav_link transition"
              >
                Career
              </Link>
            </li>
            <li onClick={() => setShow(true)}>
              <Link to="/contact">
                <CommonBtn btnname="Contact Us"></CommonBtn>
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
