const Store = (eventBus) => {
  const type = "message";

  const subscribe = (cb) => {
    eventBus.on(type, cb);

    return () => {
      eventBus.off(type, cb);
    };
  };

  const emit = (...args) => {
    eventBus.emit(type, ...args);
  };

  return {
    subscribe,
    emit
  };
};

export default Store;
