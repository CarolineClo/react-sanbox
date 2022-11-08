import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [start, setstart] = useState(0);

  return (
    <div className="App">
      <Comp start={start} />
      <button onClick={() => setstart((oldValue) => oldValue + 10)}>See ten more </button>
    </div>
  );
}

function Comp(props) {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products?start=" + props.start)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        console.log(products);
      });
  }, [props.start]);
  return <div></div>;
}
export default App;
