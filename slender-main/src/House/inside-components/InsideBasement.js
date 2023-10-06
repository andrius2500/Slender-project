import React from "react";
import "./inside-house.css";
import TransitionWrapper from "../../TransitionWrapper";
import { hallwayWalkingEffect } from "../../utils/walking-sound-effects";

import Note from "../../Note/Note";

const InsideBasement = () => {
  return (
    <TransitionWrapper>
      <div className="inside-basement--container">
        <Note
          paragraph="trumpas aprasymas apie karjera"
          linkUrl="/house/inside-house/stairway"
          notePostion={{
            top: "40%",
            left: "20rem",
          }}
        />
      </div>
    </TransitionWrapper>
  );
};

export default InsideBasement;
