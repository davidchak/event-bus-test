import eventBusCore from "../core";

const MessageEvent = (eventBus) => {
  const name = "message";

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

export default MessageEvent(eventBusCore);
