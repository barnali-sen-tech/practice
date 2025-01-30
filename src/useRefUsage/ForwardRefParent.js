import React, {useRef,useEffect} from "react";
import ForwardRefChild from "./ForwardRefChild";
const ForwardRefParent =()=>{

    const inputRef = useRef(null)

    const clickhandler=()=>{
        inputRef.current.focus()
    }

    return(<>
    <button onClick={()=>clickhandler()}>click me</button>
    <ForwardRefChild ref={inputRef}/>
    </>)

}

export default ForwardRefParent;