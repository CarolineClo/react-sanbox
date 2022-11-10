import ReactFlipCard from "@holbech/react-flip-card";
import Blogpost from "./components/Blogpost";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { Collapse } from "antd";
import "antd/dist/antd.css";

function App() {
  const { Panel } = Collapse;
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  return (
    <div className="App">
      <div style={{ "--width": "500px", "--height": "500px" }}>
        <ReactFlipCard>
          <p>Front</p>
          <p>Back</p>
        </ReactFlipCard>
      </div>
      <Blogpost title="hello" body="this is the body" />
      <h1>nope nope nope</h1>
      <Skeleton />
      <Skeleton count={5} />
      <Collapse accordion>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default App;
