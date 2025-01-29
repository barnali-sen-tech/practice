import React, { useMemo, useState } from "react";
const UseMemoUsageCounter = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const incCounter1 = () => {
    setCounter1(counter1 + 1);
  };
  const incCounter2 = () => {
    setCounter2(counter2 + 1);
  };
  I;
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000000) {
      i++;
    }
    return counter1 % i === 0;
  }, [counter1]);

  return (
    <>
      <button onClick={incCounter1}>{counter1}</button>
      {isEven ? "even" : "odd"}
      <button onClick={incCounter2}>{counter2}</button>
    </>
  );
};
export default UseMemoUsageCounter;
