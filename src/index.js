import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const title = "";
const showBackground = true;
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);
const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role="button"
      onClick={displayFact}
    />
  );
}
function displayFact(e) {
  const animalName = e.target.alt;
  const info = animals[animalName];
  const randFactIndex = Math.floor(Math.random() * info.facts.length);
  const randFact = info.facts[randFactIndex];
  document.getElementById("fact").innerHTML = randFact;
}
const animalFacts = (
  <div>
    <h1>{title === "" ? "Click on animal for a fun fact" : title}</h1>
    {showBackground && background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
