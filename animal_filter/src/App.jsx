import { useState } from "react";
import { getCleanData } from "./assets/data";
import Animal from "./assets/components/Animal";
const animals = getCleanData();

function App() {
  const [filter, setFilter] = useState("");
  const [sort, setsort] = useState("name");
  function sayHi(msg) {
    console.log(msg);
  }
  let filteredList = animals;
  filteredList.sort((a, b) => {
    if (a[sort] > b[sort]) {
      return 1;
    }
    if (a[sort] < b[sort]) {
      return -1;
    }
    return 0;
  });
  if (filter) {
    filteredList = animals.filter((ani) => ani.type === filter);
  }
  return (
    <div className="App">
      <fieldset>
        <legend>SORT BY</legend>
        <button onClick={() => setsort("name")}>NAME</button>
        <button onClick={() => setsort("type")}>TYPE</button>
        <button onClick={() => setsort("age")}>AGE</button>
        <button onClick={() => setsort("description")}>DESCRIPTION</button>
      </fieldset>
      <fieldset>
        <legend>FILTER BY</legend>
        <button className={filter === "dog" ? "active" : null} onClick={() => setFilter("dog")}>
          DOG
        </button>
        <button className={filter === "cat" ? "active" : null} onClick={() => setFilter("cat")}>
          CAT
        </button>
        <button className={filter === "dragon" ? "active" : null} onClick={() => setFilter("dragon")}>
          DRAGON
        </button>
        <button className={filter === "horse" ? "active" : null} onClick={() => setFilter("horse")}>
          HORSE
        </button>
      </fieldset>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Age</th>
            <th>Description</th>
            <th>Greet</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((ani) => {
            return <Animal {...ani} sayHi={sayHi} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
