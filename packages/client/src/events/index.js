import { EventProvider } from "./context";

const withEventBus = (Component) => {
  return (...args) => {
    return (
      <EventProvider>
        <Component { ...args }></Component>
      </EventProvider>
    )
  }
};

export default withEventBus;