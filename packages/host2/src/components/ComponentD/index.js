/**
 * Демонстрация компонента-подписчика на локальный стор,
 * TODO: Продумать работу с множественным стором/разделить стор на части
 */

// TODO: переделать на новый лад
import { useEffect, useState } from "react";

const ComponentD = () => {
    const [localState, setLocalState] = useState([]);

    useEffect(() => {
        const unsubscribe = window.sdk.data.subscribe((data) => {
            setLocalState(data)
        })
    })

    return <div className="component_x">
        { localState.length > 0 ? localState.map((item, index) => <div key={index}>{item}</div>) : <div>нет данных</div> }
    </div>;
};

export default ComponentD