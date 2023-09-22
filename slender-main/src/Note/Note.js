import React from "react";
import { Link } from "react-router-dom";
import "./note.css";

const Note = () => {
  return (
    <div class="content-main">
      <div class="content-box">
        <h2>About me</h2>
        <p>
          Enthusiastically leverage other's effective users via client-centric
          portals. Energistically promote principle-centered portals vis-a-vis
          virtual strategic theme areas. Assertively streamline premium
          alignments through focused total linkage.
        </p>
        <Link to="/start" className="">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default Note;
