import React from "react";
import "../index.css";

const Landing = () => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "300px",
        height: "300px",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="survey19">
        <a href="/">
          <h1>SURVEY-19</h1>
        </a>
      </div>
      <div className="survey19desc">
        Collect feedback from recovering COVID-19 patients.
      </div>
      <div className="survey19desc">
        Visit my <a href="https://github.com/nhussain2">Github</a> for
        customization.
      </div>
    </div>
  );
};

export default Landing;
