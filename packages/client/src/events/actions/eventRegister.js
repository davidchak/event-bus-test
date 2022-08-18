const EventRegister = (eventBus) => {
  let _type = null;
  let _setupComplete = false;

  const setup = ({ name }) => {
    if (_setupComplete) {
      return;
    }

    _type = name;
    _setupComplete = true;
  };

  const subscribe = (cb) => {
    if (!_type) {
      return;
    }

    eventBus.on(_type, cb);
    return () => eventBus.off(_type, cb);
  };

  const emit = (type, ...args) => {
    if (!type) {
      return;
    }
    eventBus.emit(type, ...args);
  };

  return {
    setup,
    subscribe,
    emit
  };
};

export default EventRegister;
