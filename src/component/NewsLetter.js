import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const NewsLetter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      name &&
      lastname &&
      phone &&
      text &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE2: name,
        MERGE1: lastname,
        MERGE4: phone,
        MERGE3: text,
      });
  };
 
  const clearFields = () => {
    setEmail("");
    setName("");
    setLastname("");
    setPhone("");
    setText("");
  };

  return (
    <div className="newsletter">
      <Row>
        <Col lg={12} md={8} xl={10}>
          {status === "sending" && <Alert>Sending...</Alert>}
          {status === "error" && <Alert variant="danger">{message}</Alert>}
          {status === "success" && <Alert variant="success">{message}</Alert>}
        </Col>
        <Col lg={12} md={6} xl={10}>
          <form onSubmit={(e) => handleSubmit(e)}>
           
              <input
                type="text"
                value={name}
                placeholder="First Name"
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                value={lastname}
                placeholder="Last Name"
                onChange={(e) => setLastname(e.target.value)}
              />

              <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />

              <input
                value={phone}
                type="phone"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Contact number"
              />
              <textarea
                rows="6"
                type="text"
                value={text}
                placeholder="Message"
                onChange={(e) => setText(e.target.value)}
              ></textarea>

              <button type="submit" >Submit</button>
           
          </form>
        </Col>
      </Row>
    </div>
  );
};
