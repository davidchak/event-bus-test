import "./styles.css";
import ComponentA from "./ComponentA";

const App = () => {
  return (
    <div className="App">
      <h1>React app</h1>
      <h2>Remote components</h2>
      <hr />
      <ComponentA />
    </div>
  );
};

export default App;
