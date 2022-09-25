import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/A.svg";

function Footer() {
  return (
    <footer className="footer bg-light">
      <Container>
        <Row className="align-items-center">
        <Col size={12} sm={6}>
            <img src={logo} alt="Logo" width="80px"/>LMA BRAUN <br></br>aungonalna58@gmail.com || +1 7757425989
          </Col>
          <Col size={12} sm={6} className="text-center text-lg-end">
            <div className="social-icon">
              <a href="mailto:aungonalna58@gmail.com"><i className="fa fa-envelope"></i></a>
              <a href="https://www.linkedin.com/in/alma-braun-1b11731aa/"><i className=" fa fa-linkedin"></i></a>
              <a href="https://github.com/ALMA-DEV914"><i className="fa fa-github"></i></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;
