import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Paul Agbogun </span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <br />
            I am a 2nd year student at the  University of Lagos, studying Computer Science.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving Puzzles
            </li>
            <li className="about-activity">
              <ImPointRight /> Speaking in Public
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Agbogun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
