import React from "react";

import BlogContentBox from "./BlogContentBox";

import { Row, Col } from "react-bootstrap";

const Blogcontent = () => {
  return (
    <div>
      <Row
        style={{
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Col style={{}}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <BlogContentBox
              title={"js 비동기 이론"}
              content={
                "js의 비동기적 작업을 컴퓨터 프로그램과 비유하여 설명하는 글 입니다."
              }
              date={"2020.10.14"}
              link={"https://blog.naver.com/objconsolelog/222115623985"}
            />

            <BlogContentBox
              title={"var와 let 무엇이 다른가?"}
              content={"var와 let의 다른점 3가지를 코드와 곁들어 설명합니다."}
              date={"2020.10.6"}
              link={"https://blog.naver.com/objconsolelog/222107769050"}
            />

            <BlogContentBox
              title={"정보처리산업기사 실기 합격"}
              content={"각 과목별 공부 후기를 설명합니다."}
              date={"2020.08.28"}
              link={"https://blog.naver.com/objconsolelog/222073444479"}
            />

            <BlogContentBox
              title={"일급 함수"}
              content={"일급 함수를 코드와 곁들어 설명합니다."}
              date={"2020.08.25"}
              link={"https://blog.naver.com/objconsolelog/222070263548"}
            />

            <BlogContentBox
              title={"this 바인딩"}
              content={"this의 3가지 유형에 대하여 설명합니다."}
              date={"2020.08.05"}
              link={"https://blog.naver.com/objconsolelog/222052219295"}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <p>더 많은 블로그글을 보고 싶다면</p>
            <p>
              <a href="https://blog.naver.com/objconsolelog">여기</a>를 클릭하여
              블로그로 이동하세요.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Blogcontent;
