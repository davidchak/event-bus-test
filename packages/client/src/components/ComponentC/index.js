import { useEffect, useRef, useState } from "react";
import useStore from "../../packages/store";


// TODO: переделать на новый лад
const ComponentC = ({id}) => {
    const [value, setValue] = useState("");
    const { setLog } = useStore(); 
    
    const onInputChange = (ev) => {
        setValue(ev.target.value)
    }

    const handleClick = () => {
        setLog(value)
        setValue("")
    };



    return <div className="component_x">
        <input placeholder="..." value={value} onChange={onInputChange} />
        <button onClick={handleClick}>save</button>
    </div>;
};

export default ComponentC