import React, { useState } from "react";
import StateLiftingChild from "./StateLiftingChild";
// Lifting state up is a pattern in React where state is moved up to the closest common ansestor
// of components that need to share the Data
// By managing tha state in the parent component, ensures that the state is cosnsistent accross
// multiple child component.
const StateLiftingParent = () => {
  const [counter, setCounter] = useState(0);
  const incCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <StateLiftingChild counter={counter} handleclick={incCounter} />
    </>
  );
};
export default StateLiftingParent;
