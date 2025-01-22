import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

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
  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    alert(`Form submitted successfully!`);
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
              <a href="mailto:info@plusdistributions.in">
                info@plusdistributions.in
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
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values);
                resetForm();
              }}
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
                    className="w-100 fw-bold text-white"
                    style={{
                      backgroundColor: "#000",
                      border: "none",
                    }}
                  >
                    Contact me
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
