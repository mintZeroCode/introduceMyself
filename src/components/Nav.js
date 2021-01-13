import React from "react";
import ScrollspyNav from "react-scrollspy-nav";

const Nav = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        background: "#90EE90",
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "cetner",
        alignItems: "center",
      }}
    >
      <ScrollspyNav
        scrollTargetIds={["section_1", "section_2", "section_3"]}
        activeNavClass="is-active"
      >
        <ul>
          <li>
            <a href="/">소개</a>
          </li>
          <li>
            <a href="#section_1">Section 1</a>
          </li>
          <li>
            <a href="#section_2">Section 2</a>
          </li>
          <li>
            <a href="#section_3">Section 3</a>
          </li>
        </ul>
      </ScrollspyNav>
    </div>
  );
};

export default Nav;
