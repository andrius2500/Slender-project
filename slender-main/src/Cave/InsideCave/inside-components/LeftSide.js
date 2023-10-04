import React from "react";
import { Link } from "react-router-dom";
import Note from "../../../Note/Note";
import TransitionWrapper from "../../../TransitionWrapper";
import "../inside-cave.css";

const LeftSide = () => {
  return (
    <TransitionWrapper>
      <div className="inside-cave-left-side--container">
        <Note
          paragraph="faktai apie mane"
          linkUrl="/inside-cave"
          notePostion={{
            margin: "0 6rem",
          }}
        />
      </div>
    </TransitionWrapper>
  );
};

export default LeftSide;
