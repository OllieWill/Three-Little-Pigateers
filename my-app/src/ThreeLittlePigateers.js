import React, { useState } from 'react';

// Define HouseType to combine materials and results
class HouseType {
  constructor(material, attackResponse) {
    this.material = material;
    this.attackResponse = attackResponse;
  }
}

// Create instances of HouseType for each material
const STRAW_HOUSE = new HouseType("straw", "is blown down!");
const STICKS_HOUSE = new HouseType("sticks", "is shaken but still stands!");
const BRICKS_HOUSE = new HouseType(
  "bricks",
  "withstands the attack without damage!"
);

// House class now uses HouseType
class House {
  constructor(houseType) {
    this.houseType = houseType;
  }

  respondsToAttack() {
    return `The house made of ${this.houseType.material} ${this.houseType.attackResponse}`;
  }
}

// Pig class now uses HouseType directly
class Pig {
  constructor(name, houseType) {
    this.name = name;
    this.house = new House(houseType);
  }

  buildHouse() {
    return `${this.name} is building a house with ${this.house.houseType.material}.`;
  }

  defendHouse() {
    return this.house.respondsToAttack();
  }
}

// Wolf class attacks the Pig's house
class Wolf {
  attack(pig) {
    return `The wolf is attacking the house built by ${pig.name}! ${pig.defendHouse()}`;
  }
}

const ThreeLittlePigateers = () => {
  // Create pig instances with HouseType
  const athos = new Pig("Athos", STRAW_HOUSE);
  const porthos = new Pig("Porthos", STICKS_HOUSE);
  const aramis = new Pig("Aramis", BRICKS_HOUSE);

  // Create a wolf instance
  const wolf = new Wolf();

  // Capture the output for builds and attacks
  const buildsOutput = [athos, porthos, aramis].map((pig) => pig.buildHouse());
  const attacksOutput = [athos, porthos, aramis].map((pig) => wolf.attack(pig));

  return (
    <div>
      <h1>Three Little Pigateers and the Big Bad Wolf</h1>
      <h2>Building Houses</h2>
      <ul>
        {buildsOutput.map((output, index) => <li key={index}>{output}</li>)}
      </ul>

      <h2>Wolf Attacks</h2>
      <ul>
        {attacksOutput.map((output, index) => <li key={index}>{output}</li>)}
      </ul>
    </div>
  );
};

export default ThreeLittlePigateers;