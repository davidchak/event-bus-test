import logger from "../logger"

const eventMiddleware = (config) => (set, get, api) => {
    return config(
    (...args) => {
        const oldLogs = get().logs
        set(...args)
        const logs = get().logs
        // dataEvents.broadcast(logs)
        logger.info(`Обновление stor, было: ${oldLogs}, стало: ${logs}`)
    },
    get,
    api
    )
}

export default eventMiddleware;