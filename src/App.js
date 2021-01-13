import React from "react";

import Title from "./components/Title";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import ContractDiv from "./components/ContractDiv";

const App = () => {
  return (
    <div>
      <Title title={"About"} />

      <SectionOne />

      <Title title={"Skills"} />

      <SectionTwo />

      <Title title={"Project"} />

      <SectionThree />

      <Title title={"Contact"} />

      <ContractDiv />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Hind+Vadodara:wght@500&display=swap");

        body {
          width: 90%;
          margin: 0 auto;
          font-family: "Hind Vadodara", sans-serif;
          font-size: 16px;
          font-weight: 500;
          background-color: white;
        }
      `}</style>
    </div>
  );
};

export default App;
