import dataEvents from "../eventBus/events/dataEvents"

const eventMiddleware = (config) => (set, get, api) => {
    return config(
    (...args) => {
        set(...args)
        const logs = get().logs
        dataEvents.broadcast(logs)
    },
    get,
    api
    )
}

export default eventMiddleware;