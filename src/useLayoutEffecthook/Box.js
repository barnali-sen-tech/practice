import React, {use, useLayoutEffect, useRef, useState} from 'react';

const Box = () => {

    const boxRef = useRef(null);
    const [width, setWidth] = useState(null)

    useLayoutEffect(()=>{
        const boxwidth = boxRef.current.offsetWidth;
        setWidth(boxwidth);
        console.log("Box width:", boxwidth);
    },[])


    return(<>
        <div className='container' ref ={boxRef} style={{width: '50%', height: '200px', 
            backgroundColor: 'lightblue', margin: '20px'}}>
            <h1>useLayoutEffect Hook Example</h1>
            <p>This component demonstrates the use of useLayoutEffect to measure the size of a box after it has been rendered.</p>
          
        </div>
    </>)
}