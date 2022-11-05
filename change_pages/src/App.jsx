import { useState } from "react";
import "./App.css";

function App() {
  const [page, changePage] = useState("front");

  let component = <Front />;
  if (page === "shop") {
    component = <Shop />;
  } else if (page === "contact") {
    component = <Contact />;
  }
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            {""}
            <a href="" onClick={() => changePage("front")}>
              Front
            </a>
          </li>
          <li>
            {" "}
            <a href="#" onClick={() => changePage("shop")}>
              Shop
            </a>
          </li>
          <li>
            {" "}
            <a href="#" onClick={() => changePage("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {component}
    </div>
  );
}

function Front() {
  return <h1>FRONT</h1>;
}

function Shop() {
  return <h1>SHOP</h1>;
}
function Contact() {
  return <h1>CONTACT</h1>;
}

export default App;
