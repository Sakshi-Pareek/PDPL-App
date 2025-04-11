import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Spinner } from "react-bootstrap";
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

const OwnBusiness = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.plusdistribution.in/pdpl/sakshi/franchise",
        values
      );
      alert(response.data.message);
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <Container className="py-lg-4 my-5">
      <Row className="align-items-center">
        <Col lg={6}>
          <h5 className="fw-bold fs_8xl mx-auto letter_spacing mb-1 text-lg-start text-center">
            Build your own Business?
          </h5>
          <p
            className="fw-normal text-black fs_md pt-2 mb-3 text-lg-start text-center"
            data-aos="fade-right"
          >
            We will give you a complete pharmacy setup with inventory,
            licensing, and all other requirements.
            <br /> Write to us at{" "}
            <a href="mailto:franchise@plusdistributions.in">
              franchise@plusdistributions.in
            </a>{" "}
            to know more about us.
          </p>
        </Col>
        <Col lg={6}>
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
              <Form
                onSubmit={handleSubmit}
                className="p-4 shadow rounded bg-white"
                style={{ maxWidth: "600px", margin: "0 auto" }}
              >
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="name*"
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

                <Form.Group className="mb-3" controlId="formPhoneNumber">
                  <Form.Control
                    type="tel"
                    placeholder="phone number*"
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

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="email id*"
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

                <Form.Group className="mb-3" controlId="formCity">
                  <Form.Control
                    type="text"
                    placeholder="city*"
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
                    placeholder="state*"
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
                  className="w-100 fw-bold text-white d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "#000",
                    border: "none",
                    height: "45px",
                  }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default OwnBusiness;
