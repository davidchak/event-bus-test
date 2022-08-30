import { EventProvider } from "./context";
import { getInstance } from "./eventBus"

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