import React from "react";

import { Row, Col, Container, Image } from "react-bootstrap";

const LogoBox = ({ imgSrc, title }) => {
  return (
    <Container>
      <Row>
        <Col
          style={{
            background: "#B0E0E6",
            padding: "5px",
            margin: "5px",
            borderRadius: "10px",
            width: "120px",
            height: "120px",
          }}
        >
          <Image
            src={imgSrc}
            style={{
              width: "80px",
              height: "80px",
            }}
          />
          <p
            style={{
              fontSize: "13px",
              fontWeight: "600",
              margin: "0px",
            }}
          >
            {title}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LogoBox;
