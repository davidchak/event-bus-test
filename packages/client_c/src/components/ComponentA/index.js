import { useEffect, useRef, useState } from "react";

const ComponentA = ({id}) => {
    const msgBus = useRef(null);
    const [activate, setActivate ] = useState(true)
    const [busEvent, setBusEvent ] = useState(null)
    const messageEvent = window.sdk.message;

    const handleClick = () => {
        setActivate(!activate);
    };

    const activateListenner = () => {
        if(activate){
            msgBus.current = messageEvent.subscribe((data) => { 
                setBusEvent(data)
            })
        }

        if(!activate && msgBus.current){
            msgBus.current.unsubscribe()
            setBusEvent(null)
        }
    }

    useEffect(() => {
        activateListenner()
    }, [activate]);

    return <div className="component_x">
        <span>Component {id}</span>
        <div>{busEvent}</div>
        <button onClick={handleClick}>{activate ? 'on' : 'off'}</button>
    </div>;
};

export default ComponentA