import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view ">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary-header">Yasna Adhikari</span> Kathmandu, Nepal. I am a computer science graduate and a passionate Software QA Engineer.
            <br />
            <br />
            In addition to testing softwares, here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Travelling
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Dance/Music
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Running a show
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing Games
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Volunteering
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
