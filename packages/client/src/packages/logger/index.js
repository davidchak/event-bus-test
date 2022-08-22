const logger = () => {
    const _createMsg = (type, msg) => {
        const datetime = new Date().toISOString();
        return `[${type}]::[${datetime}]::[${msg}]`
    }

    const warn = (msg) => {
        console.warn(_createMsg('warn', msg))
    }
    const error = (msg) => {
        console.error(_createMsg('error', msg))
    }
    const info = (msg) => {
        console.info(_createMsg('info', msg))
    }

    return {
        warn, 
        error,
        info
    }
}

export default logger();