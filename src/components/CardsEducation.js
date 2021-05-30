import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function CardsEducation() {
  return (
    <div className="cards">
      <h1>Education</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/lincoln.jpg"
              altText="Lincoln University"
              text="Bachelor of Software and Information Technology (1st Class Honours)"
              label="Lincoln University, NZ"
              path="/education"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/lincoln.jpg"
              altText="Lincoln University"
              text="Bachelor of Commerce and Management (Economics)"
              label="Lincoln University, NZ"
              path="/education"
            />

            <CardItem
              src="images/whanganui.jpg"
              altText="Whanganui High School"
              text="NCEA Level 3"
              label="Whanganui High School"
              path="/education"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsEducation;
