import React from "react";

const Title = ({ title }) => {
  return (
    <>
      <fieldset
        style={{
          borderTop: "1px solid #aaa",
          borderBottom: "none",
          borderLeft: "none",
          borderRight: "none",
          display: "block",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        <legend
          style={{
            padding: "5px 10px",
            fontSize: "20px",
            fontSize: "30px",
            color: "#5F9EA0",
          }}
        >
          {title}
        </legend>
      </fieldset>
    </>
  );
};

export default Title;
