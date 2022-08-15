import eventBusCore from "../core";

const DataEvent = (eventBus) => {
  const name = "data";

  const subscribe = (callback) => {
    return eventBus.subscribe(name, callback);
  };

  const broadcast = (data) => {
    eventBus.broadcast(name, data);
  };

  return {
    subscribe,
    broadcast
  };
};

export default DataEvent(eventBusCore);
