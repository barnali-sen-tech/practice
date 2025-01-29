import React, { useState } from "react";
const Counter = ({ title }) => {
    const [counter, setCounter] = useState(0);
    if (counter > 5) {
        throw new Error("I crashed I")
    }
    return (<>
        {title}
        {counter}
        <button onClick={() => setCounter(counter + 1)}>increment</button>
    </>)
}
export default Counter;