import React, { useRef } from "react";
import ChildUseImperative from "./ChildUseImperative";
const ParentUseImperative = () => {
  const ref = useRef(); //it creates a linking btw two components
  return (
    <>
      <h1>Parent component</h1>
      <ChildUseImperative ref={ref} />
      <button onClick={() => ref.current.sayHi()}>click me</button>
    </>
  );
};
export default ParentUseImperative;
