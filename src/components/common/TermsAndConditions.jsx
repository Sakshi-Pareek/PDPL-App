import React from "react";
import { Container } from "react-bootstrap";

const TermsAndConditions = () => {
  return (
    <Container className="bg-white py-5 px-3 px-lg-5">
      <h2 className="fw-bold fs_8xl mx-auto letter_spacing mb-5 text-center">
        Terms & Conditions
      </h2>
      <div className="text-secondary">
        <section className="mb-4">
          <h3 className="fw-semibold fs_xl text-black mb-2">Terms of Use</h3>
          <p>
            These Terms and Conditions outline the rules and regulations for the
            use of{" "}
            <strong className="text-black">Plus Distribution Pvt Ltd</strong>'s
            website, accessible at {" "}
            <a
              href="https://plusdistributions.in"
              target="blank"
              rel="noreferrer"
              className="text-primary text-decoration-underline"
            >
              
              https://plusdistributions.in
            </a>
            . By accessing this website, we assume you accept these terms and
            conditions. Do not continue to use the website if you do not agree
            to all the terms and conditions stated on this page.
          </p>
          <p>
            These terms and conditions ("Terms") apply when you use the website
            of Plus Distribution Private Limited ("PDPL," "we," "us," or "our").
            By accessing or using our website, you agree to comply with these
            Terms. If you do not agree with any part of these Terms, please
            refrain from using our website.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="fw-semibold fs_xl text-black mb-2">Website Content</h3>
          <p>
            PDPL provides this website for general informational purposes only.
            We reserve the right to modify, delete, or supplement any content on
            this website at any time without prior notice.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="fw-semibold fs_xl text-black mb-2">
            Accuracy of Information
          </h3>
          <p>
            While we strive to ensure that the information on this website is
            accurate and helpful, we cannot guarantee its completeness or
            accuracy. We shall not be liable for any reliance you may place on
            the information provided.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="fw-semibold fs_xl text-black mb-2">
            No Offer to Contract
          </h3>
          <p>
            Nothing on this website should be interpreted as an offer to provide
            any service. Any contract or agreement must be formalized in writing
            and signed by an authorized representative of PDPL.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="fw-semibold fs_xl text-black mb-2">
            User Contributions
          </h3>
          <p>
            Any contributions, feedback, or submissions made to this website are
            treated as non-confidential. PDPL has the right to use such
            contributions for any purpose, without compensation or
            acknowledgment to you. Please do not send confidential information,
            as it will not be treated as confidential.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="fw-semibold fs_xl text-black mb-2">
            Warranty and Liability
          </h3>
          <p>
            PDPL makes no warranties regarding the availability, reliability, or
            accuracy of this website or its content. We operate on an "as is"
            basis and are not liable for any direct, indirect, incidental, or
            consequential damages resulting from your use of the website or
            reliance on its information.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="fw-semibold fs_xl text-black mb-2">External Links</h3>
          <p>
            PDPL is not responsible for the content of any websites linked to or
            from our website. We do not endorse any content or services from
            external websites and disclaim any liability arising from such
            content.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="fw-semibold fs_xl text-black mb-2">
            Intellectual Property
          </h3>
          <p className="mb-0">
            All content on this website, including text, graphics, logos, and
            software, is owned by PDPL or its licensors and is protected by
            copyright and trademark laws. You may download content for personal,
            non-commercial use only, without modification or further
            reproduction.
          </p>
        </section>
        <section>
          <h3 className="fw-semibold fs_xl text-black mb-2">Contact Us</h3>
          <p className="mb-0">
            If you have any questions about these terms, please get in touch
            with us at:{" "}
            <a
              href="https://plusdistributions.in"
              target="blank"
              rel="noreferrer"
              className="text-primary text-decoration-underline"
            >
              {" "}
              https://plusdistributions.in
            </a>. {" "}
            By using our website, you acknowledge that you have read,
            understood, and agreed to be bound by these terms and conditions.
            Thank you for choosing Plus Distribution Pvt. Ltd.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default TermsAndConditions;
