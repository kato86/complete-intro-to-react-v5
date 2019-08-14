import React from 'react';
import Pet from './components/Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel"
    }),  
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mix"
    })  
  ]);
};

export default App;
