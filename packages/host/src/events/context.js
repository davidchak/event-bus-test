import { createContext } from "react";
import { getInstance } from "./eventBus";
import Logger from "./actions/logger";
import Message from "./actions/message";
import Store from "./actions/message";
import EventRegister from "./actions/eventRegister";

const eventBus = getInstance();

const EventContext = createContext();

const EventProvider = ({ children }) => {
  const values = {
    logger: Logger(eventBus),
    message: Message(eventBus),
    store: Store(eventBus),
    customEvent: EventRegister(eventBus)
  }

  window.sdk = values;

  return (
    <EventContext.Provider value={values}>{children}</EventContext.Provider>
  );
};

export {
    EventContext,
    EventProvider
}