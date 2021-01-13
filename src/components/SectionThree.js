import React from "react";

import projectImg from "../projectImg/project.jpg";

import { Row, Col } from "react-bootstrap";

import styled from "styled-components";

const ProjectContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ItemContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const SectionThree = () => {
  return (
    <div>
      <Row
        style={{
          margin: "0 auto",
        }}
      >
        <Col style={{}}>
          <ProjectContainter>
            <div
              style={{ width: "700px", height: "400px", marginBottom: "20px" }}
            >
              <img src={projectImg} style={{ width: "100%", height: "100%" }} />
            </div>
            <div>
              <ItemContainter>
                사이트 링크:
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
                깃허브:
                <a
                  href="https://github.com/mintZeroCode/portfolio_interfree"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  target="_blank"
                >
                  mintZeroCode/portfolio_interfree
                </a>
              </ItemContainter>

              <ItemContainter>
                위에 나열된 기술스택들을 모두 사용하여 개발하였습니다. 기본적인
                crud게시판과 함께 친구추가, 포스트 관리 도구들을 고안하였습니다.
                <br />
                사용한 기능들은 다음과 같습니다.
                <br />
                <br />
                aws의 ec2 우분투 서버와 s3스트리지 사용
                <br /> multer를 사용해 파일 업로드
                <br /> passport를 사용하여 로그인/회원가입 처리
                <br /> next.js의 동적라우팅 사용하여 유저,포스트,검색,해시태그
                페이지 구현
                <br /> next.js를 사용하여 ssr 구현
                <br />
                redux와 redux-saga를 사용하여 데이터 상태 처리
                <br />
                chart.js를 사용하여 개인 사용자 차트 구현
                <br />
                react-toastfy를 사용하여 사용자 알림 구현
                <br />
                <br />더 상세한 내용은 깃허브 링크에서 보실 수 있습니다.
              </ItemContainter>
            </div>
          </ProjectContainter>
        </Col>
      </Row>
    </div>
  );
};

export default SectionThree;
