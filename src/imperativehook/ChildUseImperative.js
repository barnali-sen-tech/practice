import React, { useRef, useImperativeHandle } from "react";
const ChildUseImperative = React.forwardRef((props, ref) => {
  //the ref, callback funcs which returns the fuctions you want to send

  useImperativeHandle(ref, () => {
    return {
      sayHi,
    };
  });

  const sayHi = () => {
    console.log("sayHi from child component");
  };

  return (
    <>
      <h1>child component</h1>
    </>
  );
});
export default ChildUseImperative;
