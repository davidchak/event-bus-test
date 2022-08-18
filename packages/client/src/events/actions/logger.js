const loggerTypes = {
  info: "INFO",
  warn: "WARN",
  error: "ERROR"
};

const Logger = (eventBus) => {
  const type = "logger";

  const subscribe = (cb) => {
    eventBus.on(type, cb);
    return () => eventBus.off(type, cb);
  };

  const emit = (loggerType = loggerTypes["info"], text) => {
    const currentDateTime = new Date().toUTCString();
    const message = `[${loggerType}]::[${currentDateTime}]::[${text}]`;
    eventBus.emit(type, message);
  };

  return {
    subscribe,
    emit
  };
};

export default Logger;
