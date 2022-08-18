import { useEffect, useRef, useState, useContext } from "react";

const ComponentA = ({id}) => {
    const unsubscribe = useRef(null);
    const [activate, setActivate ] = useState(false)
    const [busEvent, setBusEvent ] = useState(null)
    const messageEvent = window.sdk.message;

    const handleClick = () => {
        setActivate(!activate);
    };

    const activateListenner = () => {
        if(activate){
            unsubscribe.current = messageEvent.subscribe((data) => { 
                setBusEvent(data)
            })
        }

        if(!activate && unsubscribe.current){
            unsubscribe.current()
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