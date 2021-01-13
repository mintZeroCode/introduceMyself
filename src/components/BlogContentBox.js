import React from "react";

import { Row, Col, Container } from "react-bootstrap";

const BlogContentBox = ({ title, content, date, link }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col
            style={{
              // boxShadow: "1px 1px 2px 2px #ccc",
              border: "1px solid black",
              borderRadius: "10px",
              width: "200px",
              height: "170px",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            <a
              href={link}
              target="_blank"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <div
                style={{
                  borderRadius: "10px",
                  textDecoration: "none",
                  background: "#D3D3D3",
                  width: "100%",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  {title}
                </p>
              </div>

              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  minHeight: "60px",
                }}
              >
                {content}
              </p>

              <div
                style={{
                  borderRadius: "10px",
                  textDecoration: "none",
                  background: "#D3D3D3",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  {date}
                </p>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogContentBox;
