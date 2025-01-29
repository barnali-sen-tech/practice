import React from "react";

const ForwardRefChild = React.forwardRef((props,ref)=>{
    return(<>
    <input ref={ref} type="text"/>
    </>)
})

export default ForwardRefChild;