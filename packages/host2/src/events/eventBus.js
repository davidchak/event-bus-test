const EventBus = () => {
  let _instance = null;
  let _store = null;

  const _on = (type, cb) => {
    _store.has(type) ? _store.get(type).push(cb) : _store.set(type, [cb]);
  };

  const _off = (type, cb) => {
    const cbs = _store.get(type);

    // ключа нет
    if (!cbs) return;

    // ключик есть, удаляем колбэк
    const index = cbs.findIndex((i) => i === cb);
    if (index >= 0) {
      cbs.splice(index, 1);
    }

    if (cbs.length === 0) {
      _store.delete(type);
    }
  };

  const _emit = (type, ...args) => {
    const cbs = _store.get(type) || [];

    for (let cb of cbs) {
      cb(...args);
    }
  };

  const _info = (type = null) => {
    let result = null;

    if (!type) {
      result = Object.fromEntries(_store);
    } else {
      result = { [type]: _store.get(type) };
    }
    return result;
  };

  // Создание единственного экземпляра
  const createInstance = () => {
    _store = new Map();

    return {
      on: _on,
      off: _off,
      emit: _emit,
      info: _info
    };
  };

  const getInstance = () => {
    if (!_instance) {
      _instance = createInstance();
    }

    return _instance;
  };

  return {
    getInstance
  };
};

export const { getInstance } = EventBus();
