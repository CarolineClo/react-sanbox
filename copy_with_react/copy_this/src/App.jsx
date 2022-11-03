import { useState } from "react";
import Header from "./components/Header.jsx";
import "./App.scss";
import Services from "./components/Services.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header className="header" />
      <Services></Services>
    </div>
  );
}

export default App;
