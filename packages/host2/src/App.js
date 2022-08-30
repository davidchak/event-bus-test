import React from "react";
import "./styles.css";
import withEventBus from "./events"
import ComponentB from "./components/ComponentB";
// import ComponentLoader from "./components/ComponenLoader";

const ComponentA = React.lazy(() => import('remote_react/ComponentA'));

const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ComponentB />
      {/* <ComponentLoader /> */}
      <React.Suspense fallback="Loading Button">
        <ComponentA />
      </React.Suspense>
    </div>
  );
};

export default withEventBus(App);
