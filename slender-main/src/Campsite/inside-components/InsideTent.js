import React from "react";
import Note from "../../Note/Note";
import "./inside-tent.css";

const InsideTent = () => {
  return (
    <div className="inside-tent--container">
      <Note paragraph="karjeros faktai su datom" linkUrl="/campsite" />
    </div>
  );
};

export default InsideTent;
