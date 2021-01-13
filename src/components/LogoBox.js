import React from "react";
import styled from "styled-components";

import { Row, Col, Container, Image } from "react-bootstrap";

const Div = styled(Col)`
  background: #b0e0e6;
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
  width: 120px;
  height: 120px;
  @media (max-width: 624px) {
    width: 90px;
    height: 80px;
  }
`;

const Img = styled(Image)`
  background: #b0e0e6;
  width: 80px;
  height: 80px;
  @media (max-width: 624px) {
    width: 50px;
    height: 43px;
  }
`;

const P = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0px;
  @media (max-width: 624px) {
    font-size: 17px;
  }
`;

const LogoBox = ({ imgSrc, title }) => {
  return (
    <Container>
      <Row>
        <Div>
          <Img src={imgSrc} />
          <P>{title}</P>
        </Div>
      </Row>
    </Container>
  );
};

export default LogoBox;
