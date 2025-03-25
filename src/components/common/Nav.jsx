import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import CommonBtn from "./CommonBtn";

const Nav = () => {
  const [show, setShow] = useState(true);
  const [activeLink, setActiveLink] = useState("");

  const handleNavClick = (path) => {
    setActiveLink(path);
    setShow(true);
  };
  useEffect(() => {
    if (!show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [show]);

  return (
    <>
      {!show && (
        <div
          className="Nav_overlay"
          onClick={() => setShow(true)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 3,
          }}
        />
      )}

      <div className="bg-white shadow position-sticky top-0 z_4 w-100">
        <Container>
          <nav className="d-flex align-items-center justify-content-between py-2">
            <a href="/" className="text-black d-flex align-items-center">
              <img loading="lazy" 
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/kT12dBWzNV.webp"
                alt="Plus Distribution Pvt. Ltd. logo"
                className="w-100 sm:d-flex d-none"
                width={102} height={40}
                
              />
              <img loading="lazy" 
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/kT12dBWzNV.webp"
                alt="Plus Distribution Pvt. Ltd. logo"
                className="w-100 sm:d-none d-flex"
                width={45}
                height={40}
              />
            </a>

            <ul className="d-none d-xl-flex list-unstyled gap-4 align-items-center mb-0 pe-0">
              {[
                "Home",
                "About",
                "Infrastructure",
                "Franchise ",
                "Network",
                "Career",
              ].map((item, index) => (
                <li
                  key={index}
                  aria-label="Learn more about our company"
                  onClick={() =>
                    handleNavClick(`/${item.toLowerCase().trim()}`)
                  }
                  className={`under_line position-relative ${
                    activeLink === `/${item.toLowerCase().trim()}`
                      ? "hover"
                      : ""
                  }`}
                >
                  <Link
                    to={`/${item.toLowerCase().trim()}`}
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
              className={`navline cursor_pointer d-xl-none d-flex bg-transparent flex-column gap-sm-2 gap-1 justify-content-center align-items-center`}
            >
              <span className="crl_1 bg_blue transition rounded"></span>
              <span className="crl_2 bg_blue w-75 transition rounded ms-auto"></span>
              <span className="crl_3 bg_blue transition rounded"></span>
            </div>
          </nav>
        </Container>
      </div>

      <div
        className={`mobile-menu ${show ? "hidden" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "60%",
          height: "100%",
          backgroundColor: "#1d79bb",
          color: "#fff",
          zIndex: 4,
          transition: "transform 0.3s ease",
          transform: show ? "translateX(100%)" : "translateX(0)",
        }}
      >
        <div className="d-flex flex-column py-4">
          <div className="d-flex justify-content-between align-items-center border-bottom px-4 pb-4">
            <h3 className="mb-0 text-whit text-center">Menu</h3>
            <p onClick={() => setShow(!show)} className="mb-0 cursor_pointer fs-5">
              X
            </p>
          </div>
          <ul className="list-unstyled">
            {[
              "Home",
              "About",
              "Infrastructure",
              "Franchise",
              "Network",
              "Career",
            ].map((item, index) => (
              <li key={index} className="py-3 border-bottom">
                <Link
                  to={`/${item.toLowerCase().trim()}`}
                  className="text-white d-flex justify-content-between align-items-center fs-5 px-4"
                  onClick={() =>
                    handleNavClick(`/${item.toLowerCase().trim()}`)
                  }
                >
                  {item}
                </Link>
              </li>
            ))}
            <li
              onClick={() => handleNavClick("/contact")}
              className="border-bottom py-3"
            >
              <Link
                to="/contact"
                className="text-white d-flex justify-content-between align-items-center fs-5 px-4"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
