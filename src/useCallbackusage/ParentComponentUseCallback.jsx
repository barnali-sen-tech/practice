import React, { useCallback, useState } from "react";
import Button from "./Button";
const ParentComponentUseCallback = () => {
  const [salary, setSalary] = useState(0);
  const [age, setAge] = useState(0);
  const incrementSal = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);
  const incrementAge = useCallback(() => {
    I;
    setAge(age + 1);
  }, [age]);
  return (
    <>
      sal: {salary}
      age:{age}
      <Button handleClick={incrementSal}>inc Sal</Button>
      <Button handleClick={incrementAge}>inc Sal</Button>
    </>
  );
};

export default ParentComponentUseCallback;
