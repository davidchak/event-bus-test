import { useEffect, useRef, useState } from "react";

const ComponentA = () => {
    const msgBus = useRef(null);
    const [activate, setActivate ] = useState(true)
    const [busEvent, setBusEvent ] = useState(null)

    const handleClick = () => {
        setActivate(!activate);
    };

    useEffect(() => {

        const messageEvent = window.sdk.message;

        if(!messageEvent){
            console.log('error')
        }

        if(activate){
            msgBus.current = messageEvent.subscribe((data) => { 
                setBusEvent(data)
            })
        }

        if(!activate && msgBus.current){
            msgBus.current.unsubscribe()
            setBusEvent(null)
        }
    }, [activate]);

    return <div className="component_x">
        <span>Remote react component</span>
        <div>{busEvent}</div>
        <button onClick={handleClick}>{activate ? 'on' : 'off'}</button>
    </div>;
};

// const ComponentA = () => <div>Remote react component</div>

export default ComponentA