import React from "react";
import { Link } from "react-router-dom";
import Note from "../Note/Note";
import "./about.css";

const About = () => {
  return (
    <div className="about--container">
      <Note
        paragraph={
          <>
            Welcome to the nightmare that awaits you:
            <br />
            <br />
            In this Slender man inspired game, your very existence is at stake,
            as you must uncover the sinister truth hidden within three elusive
            pages, each one bearing revelations about my own life. But beware,
            for you've already attracted the attention of a malevolent force,
            lurking ominously in the shadows, patiently biding its time to
            pounce.
            <br />
            <br />
            Can you find all three pages in time or will the Slender man find
            you first?
          </>
        }
        cameFromAbout={true}
      />
      <div className="about--return-btn-container">
        <Link to="/" className="about--btn">
          Return
        </Link>
      </div>
    </div>
  );
};

export default About;
