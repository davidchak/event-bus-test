const subscriptions = {};

const subscribe = (eventName, callback) => {
  if (!subscriptions[eventName]) {
    subscriptions[eventName] = new Set();
  }

  const callbacks = subscriptions[eventName];
  callbacks.add(callback);
  
  console.log(`subscriptions:[${eventName}]`)
  console.log(subscriptions[eventName])

  return () => {
    callbacks.delete(callback);
    if (callbacks.size === 0) {
      delete subscriptions[eventName];
    }
  };
};

const broadcast = (eventName, ...args) => {
  if (!subscriptions[eventName]) {
    return;
  }

  const callbacks = subscriptions[eventName];

  for (const callback of callbacks) {
    callback(...args);
  }
};

export default {
  subscribe,
  broadcast
};

