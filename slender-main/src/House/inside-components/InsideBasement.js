import React from "react";
import "./inside-house.css";
import Note from "../../Note/Note";

const InsideBasement = () => {
  return (
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
  );
};

export default InsideBasement;
