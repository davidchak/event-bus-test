const EventRegister = (eventBus) => {
  let _type = null;
  let _setupComplete = false;

  const register = ({name, prefix}) => {
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

    return {
      unsubscribe: () => {
        eventBus.off(_type, cb)
      }
    }
  };

  const emit = (...args) => {
    eventBus.emit(_type, ...args);
  };

  return {
    register,
    subscribe,
    emit
  };
};

export default EventRegister;
