import React from "react";

import projectImg from "../projectImg/project.jpg";

import { Row, Col } from "react-bootstrap";

import styled from "styled-components";

const ProjectContainter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const ItemContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0px 30px;
  font-size: 17px;

  @media (max-width: 484px) {
    list-style-type: square;
  }
`;

const Logo = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&family=Open+Sans&display=swap");
  color: #4169e1;
  font-size: 40px;
  font-weight: 600;
  margin: 0px;
  @media (max-width: 768px) {
    font-size: 35px;
  }
  @media (max-width: 430px) {
    font-size: 30px;
  }
  @media (max-width: 290px) {
    font-size: 25px;
  }
`;
const TextItem = styled.p`
  margin: 0px;
`;

const SectionThree = () => {
  return (
    <div>
      <Row
        style={{
          margin: "0 auto",
        }}
      >
        <Col>
          <ProjectContainter>
            <div
              style={{ width: "300px", height: "600px", marginBottom: "20px" }}
            >
              {/* <TitleContainter>interfree</TitleContainter> */}
              <img src={projectImg} style={{ width: "100%", height: "100%" }} />
            </div>
            <div>
              <ItemContainter>
                <Logo> interfree</Logo>
              </ItemContainter>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "25px",
                  marginBottom: "0px",
                }}
              >
                프로젝트 소개
              </p>
              <p
                style={{
                  margin: "0px",
                }}
              >
                sns를 지향하고 있으며, 기존 sns 서비스에 구현되어 있는 친구
                추가, 포스트 관리도구등을 고안하였습니다.
              </p>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "25px",
                  margin: "0px",
                }}
              >
                링크
              </p>
              사이트:&nbsp;
              <a
                href="https://interfree.co.kr/"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                target="_blank"
              >
                interfree.co.kr
              </a>
              <br />
              <div>
                깃허브:&nbsp;
                <a
                  href="https://github.com/mintZeroCode/portfolio_interfree"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  target="_blank"
                >
                  portfolio_interfree
                </a>
              </div>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "25px",
                  margin: "0px",
                }}
              >
                주요 사용 기술
              </p>
              <TextItem>
                next.js의 동적라우팅 사용하여 유저,포스트,검색,해시태그 페이지
                구현
              </TextItem>
              <TextItem>next.js를 사용하여 ssr 구현</TextItem>
              <TextItem>
                redux와 redux-saga를 사용하여 데이터 상태 처리
              </TextItem>
              <TextItem> chart.js를 사용하여 개인 사용자 차트 구현</TextItem>
              <TextItem> react-toastfy를 사용하여 사용자 알림 구현</TextItem>
              <TextItem> aws의 ec2 우분투 서버와 s3스트리지 사용</TextItem>
              <TextItem>multer를 사용해 파일 업로드</TextItem>
              <TextItem>passport를 사용하여 로그인/회원가입 처리</TextItem>
              <br />
              <TextItem>
                더 상세한 내용은 깃허브 링크에서 보실 수 있습니다.
              </TextItem>
            </div>
          </ProjectContainter>
        </Col>
      </Row>
    </div>
  );
};

export default SectionThree;
