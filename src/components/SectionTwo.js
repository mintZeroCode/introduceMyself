import React from "react";

import LogoBox from "./LogoBox";

import html from "../langLogo/html5.svg";
import css3 from "../langLogo/css3.svg";
import javaScript from "../langLogo/js.png";
import react from "../langLogo/react.svg";
import next from "../langLogo/next.jpeg";
import redux from "../langLogo/redux.png";
import styledComponents from "../langLogo/styledComponents.png";
import bootstrap from "../langLogo/bootstrap.svg";

import node from "../langLogo/node.svg";
import express from "../langLogo/express.svg";
import sequelize from "../langLogo/sequelize.svg";
import mysql from "../langLogo/mysql.svg";

import { Row, Col } from "react-bootstrap";

import styled from "styled-components";

const TitleContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const SectionTwo = () => {
  return (
    <div>
      <Row
        style={{
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Col>
          <TitleContainter>
            <h1> 프론트엔드 </h1>
          </TitleContainter>

          <LogoContainter>
            <LogoBox imgSrc={html} title={" HTML5"} />
            <LogoBox imgSrc={css3} title={"CSS3"} />
            <LogoBox imgSrc={javaScript} title={"JS"} />
            <LogoBox imgSrc={react} title={"REACT"} />
            <LogoBox imgSrc={next} title={"NEXT"} />
            <LogoBox imgSrc={redux} title={"REDUX"} />
            <LogoBox imgSrc={styledComponents} title={"SC"} />
            <LogoBox imgSrc={bootstrap} title={"BOOTSRAP"} />
          </LogoContainter>

          <TitleContainter>
            <h1> 백엔드 </h1>
          </TitleContainter>

          <LogoContainter>
            <LogoBox imgSrc={node} title={"NODE"} />
            <LogoBox imgSrc={express} title={"EXPRESS"} />
            <LogoBox imgSrc={mysql} title={"MYSQL"} />
            <LogoBox imgSrc={sequelize} title={"SEQUELIZE"} />
          </LogoContainter>
        </Col>
      </Row>
    </div>
  );
};

export default SectionTwo;
