import React from "react";
import Note from "../Note/Note";
import "./congratulations.css";

const Congratulations = () => {
  return (
    <Note
      paragraph={
        <>
          <h2 className="congratulations-header">Congratulations!</h2>
          <br />
          <p className="congratulations-paragraph">
            You found all the pages! Did you like what you saw? Let's talk! Here
            are my social links:
            <br />
            <a href="https://www.linkedin.com/in/andrius-lesevicius/">
              Linkedin
            </a>
            <br />
            <a href="https://github.com/andrius2500/Slender-project">Github</a>
          </p>
        </>
      }
      cameFromAbout={true}
    />
  );
};

export default Congratulations;
