//import React from 'react';
//import { render } from 'react-dom'; 

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Lassy",
      animal: "Cat",
      breed: "Milk",
    }),
    React.createElement(Pet, {
      name: 'Will',
      animal: 'Kichen',
      breed: 'Maiz'
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
