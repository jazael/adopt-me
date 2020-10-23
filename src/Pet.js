import React from "react";

export default function Pet({ name, animal, breed }) {
  return (
    <div>
      <h1>{name.toUpperCase()}</h1>
      <h1>{animal}</h1>
      <h1>{breed}</h1>
    </div>
  );
}
