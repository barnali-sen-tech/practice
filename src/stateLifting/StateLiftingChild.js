import React from "react";
const StateLiftingChild = ({ counter, handleclick }) => {
  return (
    <>
      counter - {counter}
      <button onClick={handleclick}>statelifting</button>
    </>
  );
};
export default StateLiftingChild;
