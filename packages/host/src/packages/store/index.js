import create from "zustand"
import { devtools } from "zustand/middleware"
import eventMiddleware from "./eventMiddleware";

const useStore = create(
    devtools(eventMiddleware((set, get) => {
        return {
            logs: [],

            setLog: (payload) => {
                console.log('обнолвение хранилища');
                const { logs } = get();
                const newLogsArr = [...logs, payload]

                set({
                    logs: newLogsArr
                });
            }
        };
    }))
);

export default useStore;
