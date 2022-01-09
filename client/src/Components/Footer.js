import React from "react";

import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="fixed-bottom justify-content-md-center">
          <Col className="text-center py-1">Copyright &copy; Memos Box</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
