import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const totalbirthdays = people.length;
  return (
    <main>
      <section className="container">
        <h3>{totalbirthdays} Birthdays Today</h3>
        {people.map((person) => {
          return <List key={person.id} {...person} />;
        })}
        <button
          onClick={() => {
            setPeople([]);
          }}
          className="btn"
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
