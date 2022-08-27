import "./styles.css";
import withEventBus from "./events"
import ComponentB from "./components/ComponentB";
import ComponentLoader from "./components/ComponenLoader";

const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ComponentB />
      <ComponentLoader />
    </div>
  );
};

export default withEventBus(App);
