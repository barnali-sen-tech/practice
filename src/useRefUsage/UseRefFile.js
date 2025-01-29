import Recat ,{useRef, useEffect} from "react";

const UseRefFile=()=>{

    const inputref = useRef(null);

    useEffect(()=>{
        inputref.current.focus();
    },[])
    return(<>
    <input type="text" ref={inputref}></input>
    </>)
}

export default UseRefFile;