import { useEffect, useRef, useState } from "react";
import axios from "axios";

const ComponentB = () => {
  const timerId = useRef(null);
  const [active, setActivate] = useState(false);
  const messageEvent = window.sdk.message;

  const handleCLick = () => {
    setActivate(!active);
  }

  const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

  useEffect(() => {
    if(active){
      timerId.current = setInterval(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${getRandomInt(1,200)}`)
          .then(res => {
            messageEvent.emit(JSON.stringify(res.data))
          })
          .catch(e => {
            messageEvent.emit(e.message)
          })
        
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