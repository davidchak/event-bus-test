import { useEffect, useRef, useState } from "react";

const ComponentB = () => {
  const timerId = useRef(null);
  const [active, setActivate] = useState(false);
  const messageEvent = window.sdk.message;

  const handleCLick = () => {
    setActivate(!active);
  }

  useEffect(() => {
    if(active){
      timerId.current = setInterval(() => {
        const dtStr = new Date().toLocaleTimeString();
        messageEvent.emit(dtStr)
      }, 1000)
      
    }
      return () => { 
      clearInterval(timerId.current);
    }
  }, [active])

  return <div className="component_x">
    <button onClick={handleCLick}>{!active ? 'Start eventing' : 'Stop eventing'}</button>
  </div> 
};

export default ComponentB