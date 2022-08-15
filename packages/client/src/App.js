import "./styles.css";
import withEventBus from "./packages/eventBus"
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import ComponentD from "./components/ComponentD";

const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ComponentA id={1} />
      <ComponentA id={2} />
      <ComponentC />
      <ComponentD />
      <ComponentB />
    </div>
  );
};

export default withEventBus(App);