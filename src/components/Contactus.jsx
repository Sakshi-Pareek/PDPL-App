import React, { useState, useEffect } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import CommonBtn from "./common/CommonBtn";
import ReCAPTCHA from "react-google-recaptcha";

const Contactus = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const validationSchema = Yup.object({
    user_name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    user_contact: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    user_mail: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_contact: "",
      user_mail: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      if (!captchaValue) {
        alert("Please complete the reCAPTCHA verification.");
        return;
      }

      const contactus = { ...values, code: "pdpl" };
      console.log(contactus);

      await fetch("https://api.plusdistribution.in/pdpl/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactus),
      });

      setIsSubmitted(true);
      resetForm();
      setCaptchaValue(null);
      window.grecaptcha.reset();
    },
  });

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <>
      <Container className="py-5 my-lg-4">
        <h2
          className="fw-bold text-black fs_xxl lh-1 text-center lg:mb-5 mb-4 pb-lg-3"
          data-aos="fade-down"
        >
          Contact Us
        </h2>

        {isSubmitted && (
          <Alert variant="success" className="text-center">
            Thank you for contacting us! We will get back to you shortly.
          </Alert>
        )}

        <Row className="d-flex flex-wrap flex-row justify-content-between gap-lg-0 gap-3">
          <Col lg={5}>
            <h3 className="fs_2lg" data-aos="fade-right">
              Inquiries
            </h3>
            <p className="fs_8sm" data-aos="fade-right">
              Looking to collaborate or need assistance? Connect with us for
              partnership opportunities or dedicated support.
            </p>
            <p className="fs_md" data-aos="fade-right">
              <strong>Contact us at : </strong>
              <a
                href="tel:+91124-4014675"
                className="text-black nav_link transition fs_6sm"
              >
                +91124-4014675
              </a>
            </p>
            <p data-aos="fade-right">
              <strong>Mail us at : </strong>
              <a
                href="mailto:info@plusdistributions.in"
                className="text-black nav_link transition"
              >
                info@plusdistributions.in
              </a>
            </p>
            <p data-aos="fade-right">
              <strong>Corporate Office : </strong>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/SAS+Tower/@28.4409488,77.0367062,17z/data=!3m1!4b1!4m6!3m5!1s0x390d18695c471015:0xa44b7b144935cae4!8m2!3d28.4409488!4d77.0392811!16s%2Fg%2F11byp844cp?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                className="text-black nav_link transition"
              >
                Plus Distribution Pvt. Ltd, 315, 3rd Floor, SAS Towers,
                Medicity, Sector-38, Gurugram, Haryana- 122001
              </a>
            </p>
            <p data-aos="fade-right">
              <strong>Warehouse : </strong>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/Plus+Distribution+Pvt.+Ltd/@28.4336586,76.9916927,17z/data=!3m1!4b1!4m6!3m5!1s0x390d17bdf3ddf591:0xbdbb9a6f0115739d!8m2!3d28.4336539!4d76.994273!16s%2Fg%2F11rn7qzn6k?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
                className="text-black nav_link transition"
              >
                Plot no. 581, Pace city 2, Sector-37, Gurugram, Haryana 122004
              </a>
            </p>
            <p data-aos="fade-right">
              <a
                href="https://www.linkedin.com/company/plus-distribution-private-limited"
                className="text-black nav_link transition"
                target="_blank"
                rel="noreferrer"
              >
                <img loading="lazy" 
                  src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Ju1PpXvAGD.svg"
                  alt="Follow Plus Distribution Private Limited on LinkedIn"
                  width={30}
                  height={30}
                  className="transition"
                />
                <span className="ms-2">Plus Distribution Private Limited</span>
              </a>
            </p>
          </Col>

          <Col lg={6}>
            <form
              onSubmit={formik.handleSubmit}
              className="d-flex flex-column gap-3"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="contact_input w-100 bg-white text-black lh-1 fw-medium rounded-2"
                value={formik.values.user_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.user_name && formik.errors.user_name && (
                <div className="text-danger">{formik.errors.user_name}</div>
              )}

              <input
                type="tel"
                name="user_contact"
                placeholder="Phone Number"
                className="contact_input w-100 bg-white text-black lh-1 fw-medium rounded-2"
                value={formik.values.user_contact}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.user_contact && formik.errors.user_contact && (
                <div className="text-danger">{formik.errors.user_contact}</div>
              )}

              <input
                type="email"
                name="user_mail"
                placeholder="E-Mail"
                className="contact_input w-100 bg-white text-black lh-1 fw-medium rounded-2"
                value={formik.values.user_mail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.user_mail && formik.errors.user_mail && (
                <div className="text-danger">{formik.errors.user_mail}</div>
              )}

              <textarea
                name="message"
                rows={5}
                placeholder="Message"
                className="contact_input w-100 bg-white text-black lh-1 fw-medium rounded-2"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message && (
                <div className="text-danger">{formik.errors.message}</div>
              )}

              <div className="mt-3">
                <ReCAPTCHA
                  sitekey="6Ld0pngqAAAAABeeMbSya_ErNScFMKDk2HRPWBtZ"
                  onChange={handleCaptchaChange}
                />
              </div>

              <div>
                <CommonBtn btnname="Send" type="submit"></CommonBtn>
              </div>
            </form>
          </Col>
        </Row>
      </Container>

      <div data-aos="fade-d own">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.5124600147733!2d76.9943061!3d28.4339645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17bdf3ddf591%3A0xbdbb9a6f0115739d!2sPlus%20Distribution%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1685521082009!5m2!1sen!2sin"
          width="100%"
          height="340px"
          loading="lazy"
          className="mb_neg_7"
          title="Plus Distribution Pvt. Ltd Location"
        ></iframe>
      </div>
    </>
  );
};

export default Contactus;
