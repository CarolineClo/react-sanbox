import { useState } from "react";
import React from "react";

function Burger() {
  const [HiDropdown, dropdownOpen] = useState(false);
  const toggleBurger = () => {
    dropdownOpen((oldState) => !oldState);
  };
  return (
    <div>
      <button onClick={toggleBurger}>click</button>
      <nav className={HiDropdown ? "" : "hidden"}>
        <ul>
          <li>Home</li>
          <li>Buy shit</li>
          <li>Call me</li>
        </ul>
      </nav>
    </div>
  );
}

export default Burger;
