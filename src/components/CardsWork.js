import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function CardsWork() {
  return (
    <div className="cards">
      <h1>Previous Roles</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/coronet.jpg"
              altText="NZSki Limited"
              text="Group Guest Services Head of Department"
              label="NZSki Limited, Queenstown"
              path="/work"
            />

            <CardItem
              src="images/chairlift.jpg"
              altText="NZSki Limited"
              text="Lift Operations Head of Department"
              label="The Remarkables, NZSki Limited, Queenstown"
              path="/work"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/niseko.jpg"
              altText="Niseko"
              text="International Lift Operations Team Leader"
              label="Niseko Village, Hokkaido, Japan"
              path="/work"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsWork;
