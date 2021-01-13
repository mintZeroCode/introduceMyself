import React from "react";

import styled from "styled-components";

const ContactContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;

const Link = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: black;
`;

const P = styled.p`
  font-size: 20px;
  margin: 0px;
`;

const ContractDiv = () => {
  return (
    <>
      <ContactContainter>
        <div style={{ margin: "0px 15px 40px 0px" }}>
          <P>Github</P>
          <Link href="https://github.com/mintZeroCode" target="_blank">
            https:/github.com/mintZeroCode
          </Link>
        </div>

        <div style={{ margin: "0px 15px 40px 0px" }}>
          <P>Email</P>
          <P>mintZeroCode@gmail.com</P>
        </div>

        <div style={{ margin: "0px 15px 40px 0px" }}>
          <P>Blog</P>
          <P>
            <Link href="https://blog.naver.com/objconsolelog" target="_blank">
              https://blog.naver.com/objconsolelog
            </Link>
          </P>
        </div>
      </ContactContainter>
    </>
  );
};

export default ContractDiv;
