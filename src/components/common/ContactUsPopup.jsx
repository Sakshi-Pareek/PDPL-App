import React, { useState, useEffect } from "react";
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
});

const ContactUsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.plusdistribution.in/pdpl/contact-us",
        values
      );
      alert(response.data.message);
      resetForm();
      setIsOpen(false);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      show={isOpen}
      onHide={handleClose}
      centered
      size="md"
      backdrop="static"
      keyboard={false}
      className="contact-popup p-3"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contactUsModalTitle"
    >
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title id="contactUsModalTitle" className="w-100 text-center">
          <img
            src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/kT12dBWzNV.webp"
            alt="Company Logo"
            style={{ maxWidth: "120px" }}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-muted text-center fs_6sm mb-2">
          We will give you a complete pharmacy setup with inventory, licensing,
          and all other requirements. Write to us at
          <a href="mailto:info@plusdistributions.in" className="text-primary">
            info@plusdistributions.in
          </a>
          to know more about us.
        </p>
        <Formik
          initialValues={{
            name: "",
            phoneNumber: "",
            email: "",
            city: "",
            state: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2" controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Your Name*"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.name && !!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formPhoneNumber">
                <Form.Control
                  type="tel"
                  placeholder="Mobile No*"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.phoneNumber && !!errors.phoneNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email*"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.email && !!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formCity">
                <Form.Control
                  type="text"
                  placeholder="City*"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.city && !!errors.city}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formState">
                <Form.Control
                  type="text"
                  placeholder="State*"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.state && !!errors.state}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                type="submit"
                className="w-100 fw-medium fs_md rounded-3 common_btn py-2 px-4 text-white cursor_pointer transition mb-3"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </Form>
          )}
        </Formik>
        <Row className="text-center">
          <Col>
            <a
              href="https://wa.me/919891069195"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex justify-content-center align-items-center gap-2"
            >
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/kEebY0ifpR.png"
                alt="WhatsApp icon"
                width={30}
                height={30}
              />
              <span>+91-9891069195</span>
            </a>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ContactUsPopup;
