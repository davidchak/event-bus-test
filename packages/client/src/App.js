import "./styles.css";
import withEventBus from "./events"
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import ComponentD from "./components/ComponentD";

const App = () => {
  const arr = new Array(100);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ComponentB />
      <ComponentA id={1} />
      <ComponentA id={2}  />
      <ComponentA id={3}  />
      <ComponentA id={4}  />
      <ComponentA id={5}  />
      <ComponentA id={6}  />
      <ComponentA id={7}  />
      <ComponentA id={8}  />
      <ComponentA id={9}  />
      <ComponentA id={10} />
      {/* <ComponentC /> */}
      {/* <ComponentD /> */}
    </div>
  );
};

export default withEventBus(App);
