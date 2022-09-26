import { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import MailchimpForm from "./MailchimpForm";
import contact from "../assets/contact.png"

const Contact = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email &&
      name &&
      lastname &&
      phone &&
      text &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: name,
        MERGE2: lastname,
        MERGE3: phone,
        MERGE4: text,
      });
  };

  const clearFields = () => {
    setEmail("");
    setName("");
    setLastname("");
    setText("");
    setPhone("");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={4}>
          <h2>Get In Touch</h2>
                  <p>
                   Stay updated! Don't get behind! Subscribe to be notified for a new incoming hot sales! 
                  </p>
            <img src={contact} alt="contact-meme"/>
          </Col>
          <Col size={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <Col lg={12} md={6} xl={5}>
                    {status === "sending" && <Alert>Sending...</Alert>}
                    {status === "error" && (
                      <Alert variant="danger">{message}</Alert>
                    )}
                    {status === "success" && (
                      <Alert variant="success">{message}</Alert>
                    )}
                  </Col>

                  <MailchimpForm />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;