import React from "react";

import me from "../myPicture/me.jpg";

import { Row, Col } from "react-bootstrap";

const SectionOne = () => {
  return (
    <>
      <div className=" container justify-content-center">
        <Row
          style={{
            margin: "0 auto",
          }}
        >
          <Col style={{}}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={me}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ color: "#4682B4" }}>
                포기하지 않는
                <span
                  style={{
                    color: "#5F9EA0",
                  }}
                >
                  개발자
                </span>
              </h1>
            </div>
            <div>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "22px",
                }}
              >
                포기하지 않고 직면한 문제를 붙들고 있으면 문제를 해결할 수
                있다는 마음가짐으로 지금까지 공부하고 프로젝트를 개발해
                왔습니다.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SectionOne;
