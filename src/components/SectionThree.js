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
  text-align: center;
  font-size: 17px;

  @media (max-width: 484px) {
    list-style-type: square;
  }
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
                사이트 링크:&nbsp;
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
              </ItemContainter>

              <ItemContainter>
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
              </ItemContainter>

              <ItemContainter>
                <List>
                  <li
                    style={{
                      listStyle: "none",
                      fontSize: "25px",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    프로젝트 소개
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                    }}
                  >
                    sns를 지향하고 있으며, 기존 sns 서비스에 구현되어 있는 친구
                    추가, 포스트 관리도구등을 고안하였습니다.
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      fontSize: "25px",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    주요 특징
                  </li>
                  <li> aws의 ec2 우분투 서버와 s3스트리지 사용</li>
                  <li>multer를 사용해 파일 업로드</li>
                  <li>passport를 사용하여 로그인/회원가입 처리</li>
                  <li>
                    next.js의 동적라우팅 사용하여 유저,포스트,검색,해시태그
                    페이지 구현
                  </li>
                  <li>next.js를 사용하여 ssr 구현</li>
                  <li>redux와 redux-saga를 사용하여 데이터 상태 처리</li>
                  <li> chart.js를 사용하여 개인 사용자 차트 구현</li>
                  <li> react-toastfy를 사용하여 사용자 알림 구현</li>
                  <br />
                  <li
                    style={{
                      listStyle: "none",
                    }}
                  >
                    더 상세한 내용은 깃허브 링크에서 보실 수 있습니다.
                  </li>
                </List>
              </ItemContainter>
            </div>
          </ProjectContainter>
        </Col>
      </Row>
    </div>
  );
};

export default SectionThree;
